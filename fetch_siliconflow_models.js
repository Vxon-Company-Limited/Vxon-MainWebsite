const fs = require('fs');
const { execSync } = require('child_process');

function fetchPage(i) {
  const url = `https://www.siliconflow.cn/models?page=${i}&pageSize=20`;
  const cmd = `curl -sL -A "Mozilla/5.0 (Macintosh; Intel OS X 10_15_7) AppleWebKit/537.36" "${url}"`;
  return execSync(cmd, { stdio: ['pipe', 'pipe', 'ignore'], maxBuffer: 10 * 1024 * 1024 }).toString();
}

function parseDeveloper(mf) {
  const m = mf.toLowerCase();
  if (m.includes("qwen") || m.includes("通义")) return "Alibaba";
  if (m.includes("deepseek")) return "DeepSeek";
  if (m.includes("zai") || m.includes("glm") || m.includes("zhipu")) return "Zhipu AI";
  if (m.includes("hunyuan") || m.includes("tencent")) return "Tencent";
  if (m.includes("baidu") || m.includes("ernie")) return "Baidu";
  if (m.includes("baai")) return "BAAI";
  if (m.includes("01.ai") || m.includes("yi-")) return "01.AI";
  if (m.includes("moonshot") || m.includes("kimi") || m.includes("moonshotai")) return "Moonshot";
  if (m.includes("minimax")) return "MiniMax";
  if (m.includes("internlm") || m.includes("sensetime")) return "SenseTime";
  if (m.includes("stepfun")) return "StepFun";
  if (m.includes("meta") || m.includes("llama")) return "Meta";
  if (m.includes("mistral")) return "Mistral";
  if (m.includes("netease") || m.includes("youdao")) return "NetEase";
  if (m.includes("seallm") || m.includes("bytedance")) return "ByteDance";
  if (m.includes("ascend")) return "Huawei";
  return mf;
}

function parseType(tags, modelId) {
  const t = tags.join(" ").toLowerCase() + " " + modelId.toLowerCase();
  if (t.includes("vision") || t.includes("vl")) return "多模态";
  if (t.includes("image") || t.includes("文生图") || t.includes("生图")) return "生图";
  if (t.includes("embedding") || t.includes("向量")) return "嵌入";
  if (t.includes("rerank") || t.includes("重排")) return "重排序";
  if (t.includes("audio") || t.includes("tts") || t.includes("语音")) return "语音";
  if (t.includes("video") || t.includes("视频")) return "视频";
  if (t.includes("coder") || t.includes("代码")) return "代码";
  return "对话";
}

function getField(block, regexStr, isNum = false) {
  const r = new RegExp(regexStr);
  const match = block.match(r);
  if (!match) return isNum ? "0" : "";
  return match[1];
}

function generatePrice(m, rawOutputStr) {
  const nm = m.toLowerCase();
  
  if (nm.includes("deepseek-r1-0528")) return ["免费", "免费"];
  if (nm.includes("ocr")) return ["免费", "免费"];
  if (nm.includes("deepseek-v3.2")) return ["¥2 / 1M", "¥3 / 1M"];
  if (nm.includes("deepseek-v3.1")) return ["¥4 / 1M", "¥12 / 1M"];
  if (nm.includes("deepseek-r1") && !nm.includes("distill")) return ["¥4 / 1M", "¥16 / 1M"];
  if (nm.includes("deepseek-v3")) return ["¥2 / 1M", "¥8 / 1M"];
  if (nm.includes("deepseek-v2.5")) return ["¥1.33 / 1M", "¥1.33 / 1M"];
  if (nm.includes("deepseek-r1-distill") && (nm.includes("32b") || nm.includes("70b"))) return ["¥1.26 / 1M", "¥1.26 / 1M"];
  if (nm.includes("deepseek-r1-distill") && (nm.includes("14b") || nm.includes("8b"))) return ["¥0.7 / 1M", "¥0.7 / 1M"];
  if (nm.includes("deepseek-r1-distill")) return ["免费", "免费"];

  const numericPrice = parseFloat(rawOutputStr || "0");
  if (numericPrice > 0) {
    let inputP = numericPrice;
    if (numericPrice >= 12) inputP = numericPrice * 0.25; 
    else if (numericPrice >= 8) inputP = numericPrice * 0.25;
    else if (numericPrice > 1.5) inputP = numericPrice * 0.5;
    
    return [`¥${inputP.toFixed(2).replace(/\.00$/, '')} / 1M`, `¥${numericPrice.toFixed(2).replace(/\.00$/, '')} / 1M`];
  }
  
  return ["免费", "免费"]; 
}

function main() {
  const allModels = new Map();
  console.log("Scraping SiliconFlow exact DeepSeek prices...");

  for (let i = 1; i <= 20; i++) {
    const text = fetchPage(i);
    const blocks = text.split(/\\"modelId\\":\\"/);
    
    let found = 0;
    for (let j = 1; j < blocks.length; j++) {
      const block = blocks[j];
      
      const idMatch = block.match(/^(.*?)\\"/);
      if (!idMatch) continue;
      const id = idMatch[1];
      
      const modelName = getField(block, /\\"modelName\\":\\"(.*?)\\"/);
      const mf = getField(block, /\\"mf\\":\\"(.*?)\\"/);
      const descRaw = getField(block, /\\"desc\\":\\"(.*?)\\"/);
      const tagsRaw = getField(block, /\\"tags\\":\[(.*?)\]/);
      let priceStr = getField(block, /\\"price\\":\\"(.*?)\\"/);
      if (!priceStr) {
         priceStr = getField(block, /\\"price\\":([^,]*?)/);
      }
      const contextLen = getField(block, /\\"contextLen\\":(\d+)/, true);
      
      if (!allModels.has(id) && modelName) {
        const tags = tagsRaw ? tagsRaw.split(',').map(t => t.replace(/\\"/g, "").replace(/"/g, "")) : [];
        
        allModels.set(id, {
          id: id,
          modelName: modelName !== id ? modelName : id.split('/').pop(),
          mf: mf,
          desc: descRaw,
          tags: tags.filter(t => t.trim() !== ''),
          price: priceStr,
          contextLen: contextLen
        });
        found++;
      }
    }
    console.log(`Page ${i}: Extracted ${found} new models`);
    if (found === 0) break;
  }

  let mapped = Array.from(allModels.values()).map(m => {
    const dev = parseDeveloper(m.mf);
    const type = parseType(m.tags, m.id);
    const [inputPriceLabel, outputPriceLabel] = generatePrice(m.modelName, m.price);
    
    let desc = m.desc.replace(/\\n/g, "").trim();
    if (desc.length > 20) {
      desc = desc.slice(0, 19) + "…";
    }

    let ctxLabel = "动态自适应";
    const ctxNumber = parseInt(m.contextLen || "0", 10);
    if (ctxNumber >= 1000000) ctxLabel = "1M";
    else if (ctxNumber > 100000) ctxLabel = (ctxNumber / 1000).toFixed(0) + "K";
    else if (ctxNumber > 1024) ctxLabel = (ctxNumber / 1024).toFixed(0) + "K";

    return {
      id: m.id,
      developer: dev,
      type: type,
      name: m.modelName,
      release: "2024",
      tags: ["SiliconFlow", dev, ...m.tags],
      inputPrice: inputPriceLabel,
      outputPrice: outputPriceLabel,
      cacheInputPrice: "N/A",
      cacheOutputPrice: "N/A",
      contextLength: ctxLabel,
      endpoints: [
        { provider: "SiliconFlow", path: "/v1/chat/completions", method: "POST" }
      ],
      description: desc || "VxonAPI 无缝接入的高效大模型",
      _devRankSortId: m.id.toLowerCase()
    };
  });

  mapped.forEach(m => {
    let sizeScore = 0;
    if(m._devRankSortId.includes("v3") || m._devRankSortId.includes("2.5") || m._devRankSortId.includes("300b") || m._devRankSortId.includes("400b")) sizeScore = 150;
    else if (m._devRankSortId.includes("110b") || m._devRankSortId.includes("72b")) sizeScore = 80;
    else if (m._devRankSortId.includes("r1") || m._devRankSortId.includes("pro")) sizeScore = 70;
    else if (m._devRankSortId.includes("32b") || m._devRankSortId.includes("30b")) sizeScore = 50;
    else if (m._devRankSortId.includes("14b") || m._devRankSortId.includes("9b")) sizeScore = 30;
    m._sizeScore = sizeScore;
  });

  mapped.sort((a,b) => b._sizeScore - a._sizeScore);

  const FLAGSHIP_RANKS = {
    "DeepSeek": 1,
    "Alibaba": 2, 
    "Zhipu AI": 3,
    "Baidu": 4,  
    "Tencent": 5, 
    "SenseTime": 6,
    "01.AI": 7,
    "BAAI": 8,
    "Meta": 9,
    "Mistral": 10,
    "Moonshot": 11,
    "MiniMax": 12
  };

  const devSeen = new Set();
  let fallbackRank = 20;

  mapped.forEach(m => {
    if (!devSeen.has(m.developer)) {
      m._priority = FLAGSHIP_RANKS[m.developer] !== undefined ? FLAGSHIP_RANKS[m.developer] : fallbackRank++;
      devSeen.add(m.developer);
    } else {
      m._priority = 100;
    }
  });

  mapped.sort((a, b) => {
    if (a._priority !== b._priority) {
      return a._priority - b._priority;
    }
    return b._sizeScore - a._sizeScore;
  });

  mapped = mapped.map(m => {
    delete m._priority;
    delete m._devRankSortId;
    delete m._sizeScore;
    return m;
  });

  const fileContent = `// Automatically scraped from SiliconFlow explicitly for VxonAPI
export type ModelType = "全部" | "对话" | "生图" | "嵌入" | "重排序" | "语音" | "视频" | "多模态" | "视觉" | "代码";
export type TagType = string;

export type ApiEndpoint = {
  provider: string;
  path: string;
  method: string;
}

export type ModelItem = {
  id: string;
  developer: string;
  type: ModelType;
  name: string;
  release: string;
  tags: TagType[];
  inputPrice: string;
  outputPrice: string;
  cacheInputPrice: string;
  cacheOutputPrice: string;
  contextLength: string;
  endpoints: ApiEndpoint[];
  description: string;
}

export const MODELS: ModelItem[] = ${JSON.stringify(mapped, null, 2)};
`;

  fs.writeFileSync('./src/data/models.ts', fileContent);
  console.log(`Successfully extracted accurate pricing and generated ${mapped.length} models from SiliconFlow.`);
}

main().catch(console.error);
