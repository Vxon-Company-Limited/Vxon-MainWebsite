import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

function createSegmenterTokenizer(locale: string) {
  const segmenter = new Intl.Segmenter(locale, { granularity: 'word' });
  return {
    language: locale,
    normalizationCache: new Map<string, string>(),
    tokenize(raw: string): string[] {
      const tokens: string[] = [];
      for (const { segment, isWordLike } of segmenter.segment(
        raw.toLowerCase(),
      )) {
        if (isWordLike && segment.trim()) {
          tokens.push(segment);
        }
      }
      return tokens;
    },
  };
}

const chineseTokenizer = createSegmenterTokenizer('zh-CN');
const japaneseTokenizer = createSegmenterTokenizer('ja');

export const { GET } = createFromSource(source, {
  localeMap: {
    zh: { tokenizer: chineseTokenizer },
    'zh-Hant': { tokenizer: chineseTokenizer },
    en: 'english',
    ja: { tokenizer: japaneseTokenizer },
    es: 'spanish',
  },
});
