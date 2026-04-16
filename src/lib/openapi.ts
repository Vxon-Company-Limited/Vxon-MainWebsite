import { createOpenAPI } from 'fumadocs-openapi/server';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

async function walkJsonFiles(dir: string): Promise<string[]> {
  const out: string[] = [];
  async function walk(current: string) {
    let entries: Array<{ name: string; isDirectory(): boolean; isFile(): boolean }>;
    try {
      entries = await readdir(current, { withFileTypes: true }) as any;
    } catch {
      return;
    }
    for (const e of entries) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) {
        await walk(full);
      } else if (e.isFile() && e.name.toLowerCase().endsWith('.json')) {
        const rel = path.relative(process.cwd(), full);
        out.push(rel.split(path.sep).join('/'));
      }
    }
  }
  await walk(dir);
  return out;
}

function inferServer(spec: Record<string, unknown>) {
  const paths = Object.keys((spec.paths as Record<string, unknown>) ?? {});
  if (paths.some((p) => p.startsWith('/v1/messages'))) {
    return { url: 'https://open.vxon.ai/api/anthropic', description: 'Anthropic 兼容接口' };
  }
  if (paths.some((p) => p.startsWith('/v1beta/'))) {
    return { url: 'https://open.vxon.ai/api/gemini', description: 'Gemini 兼容接口' };
  }
  if (paths.some((p) => p.startsWith('/v1/') || p.startsWith('/kling/') || p.startsWith('/jimeng'))) {
    return { url: 'https://open.vxon.ai/api/coding/paas/v4', description: 'OpenAI 兼容接口' };
  }
  return { url: 'https://open.vxon.ai', description: 'Vxon 管理接口' };
}

export const openapi = createOpenAPI({
  async input() {
    const files = await walkJsonFiles('./openapi/generated');
    if (files.length === 0) {
      throw new Error(
        'No generated OpenAPI files found in ./openapi/generated.'
      );
    }
    const entries = await Promise.all(
      files.map(async (p) => {
        const raw = await readFile(p, 'utf8');
        const spec = JSON.parse(raw);
        if (!spec.servers || spec.servers.length === 0) {
          spec.servers = [inferServer(spec)];
        }
        return [p, spec] as const;
      })
    );
    return Object.fromEntries(entries);
  },
});
