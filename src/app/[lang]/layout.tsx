import { defineI18nUI } from 'fumadocs-ui/i18n';
import { i18n } from '@/lib/i18n';
import { Provider } from '@/components/provider';
import { notFound } from 'next/navigation';

const { provider } = defineI18nUI(i18n, {
  translations: {
    zh: {
      displayName: '简体中文',
      search: '搜索文档',
      searchNoResult: '没有结果',
      toc: '目录',
      lastUpdate: '最后更新于',
      chooseTheme: '选择主题',
      chooseLanguage: '选择语言',
      nextPage: '下一页',
      previousPage: '上一页',
      tocNoHeadings: '目录为空',
      editOnGithub: '在 GitHub 上编辑',
    },
    en: {
      displayName: 'English',
      search: 'Search',
      searchNoResult: 'No results found',
      toc: 'On this page',
      lastUpdate: 'Last updated on',
      chooseTheme: 'Theme',
      chooseLanguage: 'Choose a language',
      nextPage: 'Next',
      previousPage: 'Previous',
      tocNoHeadings: 'No Headings',
      editOnGithub: 'Edit on GitHub',
    },
    'zh-Hant': {
      displayName: '繁體中文',
      search: '搜尋文件',
      searchNoResult: '沒有結果',
      toc: '目錄',
      lastUpdate: '最後更新於',
      chooseTheme: '選擇主題',
      chooseLanguage: '選擇語言',
      nextPage: '下一頁',
      previousPage: '上一頁',
      tocNoHeadings: '目錄為空',
      editOnGithub: '在 GitHub 上編輯',
    },
    ja: {
      displayName: '日本語',
      search: '検索',
      searchNoResult: '結果が見つかりません',
      toc: '目次',
      lastUpdate: '最終更新日',
      chooseTheme: 'テーマ',
      chooseLanguage: '言語を選択',
      nextPage: '次へ',
      previousPage: '前へ',
      tocNoHeadings: '見出しなし',
      editOnGithub: 'GitHub で編集',
    },
    es: {
      displayName: 'Español',
      search: 'Buscar',
      searchNoResult: 'Sin resultados',
      toc: 'En esta página',
      lastUpdate: 'Última actualización',
      chooseTheme: 'Tema',
      chooseLanguage: 'Elegir idioma',
      nextPage: 'Siguiente',
      previousPage: 'Anterior',
      tocNoHeadings: 'Sin encabezados',
      editOnGithub: 'Editar en GitHub',
    },
  },
});

export default async function LangLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const { lang } = await params;

  if (!i18n.languages.includes(lang as (typeof i18n.languages)[number])) {
    notFound();
  }

  return (
    <Provider i18n={provider(lang)}>
      {children}
    </Provider>
  );
}
