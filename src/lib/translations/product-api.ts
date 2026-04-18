import type { Locale } from './site';

export const apiPage = {
  zh: {
    hero: {
      badge: 'VxonAPI — 大模型聚合平台',
      title: '一个平台，接入所有主流大模型',
      subtitle:
        'VxonAPI 已适配 7+ 主流大模型，兼容 OpenAI 标准接口，对标官网 7 折起，量大管饱，技术团队 5 分钟即可完成接入。',
      buttons: ['免费试用', '查看定价'] as const,
    },
    featureGrid: {
      badge: 'Features',
      title: '为什么选择 VxonAPI',
      description: '一个接口搞定所有主流大模型，省时省力省钱。',
    },
    features: [
      { title: '多模型聚合', description: '一站式接入 Google Gemini、OpenAI GPT、Claude、DeepSeek、Qwen、GLM、Kimi 等，无需逐一对接。' },
      { title: '价格优势', description: '对标官网 7 折起，按量计费，用多少付多少，没有月费套路。' },
      { title: '极速接入', description: '兼容 OpenAI 标准接口格式，现有代码无需改动，5 分钟完成迁移。' },
      { title: '稳定可靠', description: '99.9% 服务可用性保障，高并发承载，7×24 小时稳定运行。' },
      { title: '灵活切换', description: '一个 API Key 可自由切换不同模型，实时查询各模型余额。' },
      { title: '技术文档', description: '完善的 API 文档，代码示例覆盖 Python/Go/Java/Node.js，开箱即用。' },
    ],
    pricingPreview: {
      badge: 'Pricing',
      title: '灵活的定价方案',
      description: '从免费体验到企业定制，满足不同阶段需求。',
    },
    pricingPlans: [
      { name: '体验版', price: '免费', description: '适合个人体验', features: ['送 100 元额度', 'ChatGPT 3.5', '1000 次调用/天'], cta: '立即注册' },
      { name: '专业版', price: '7折起', description: '适合个人开发者和小团队', features: ['全模型覆盖', '无日调用限制', 'API 优先响应', '余额实时查询'], cta: '免费试用', badge: '推荐' },
      { name: '企业版', price: '联系报价', description: '适合企业团队', features: ['统一账户管理', '额度灵活分配', '专属技术支持', 'SLA保障', '私有化部署可选'], cta: '联系我们' },
    ],
    productCTA: {
      title: '开始使用 VxonAPI',
      subtitle: '立即注册，免费获得 100 元额度',
      primaryLabel: '免费试用',
    },
  },
  en: {
    hero: {
      badge: 'VxonAPI — LLM Aggregation Platform',
      title: 'One Platform, All Major LLMs',
      subtitle:
        'VxonAPI supports 7+ major LLMs with an OpenAI-compatible interface, starting at 30% off official pricing. Your engineering team can integrate in just 5 minutes.',
      buttons: ['Free Trial', 'View Pricing'] as const,
    },
    featureGrid: {
      badge: 'Features',
      title: 'Why VxonAPI',
      description: 'One interface for all major LLMs — save time, effort, and money.',
    },
    features: [
      { title: 'Multi-Model Aggregation', description: 'Access Google Gemini, OpenAI GPT, Claude, DeepSeek, Qwen, GLM, Kimi and more from a single integration.' },
      { title: 'Cost Advantage', description: 'Starting at 30% off official pricing, pay-as-you-go with no monthly fees.' },
      { title: 'Rapid Integration', description: 'OpenAI-compatible interface — no code changes needed, migrate in 5 minutes.' },
      { title: 'Stable & Reliable', description: '99.9% uptime SLA, high-concurrency support, running 24/7.' },
      { title: 'Flexible Switching', description: 'One API Key to freely switch between models with real-time balance queries.' },
      { title: 'Documentation', description: 'Comprehensive API docs with ready-to-use code samples for Python/Go/Java/Node.js.' },
    ],
    pricingPreview: {
      badge: 'Pricing',
      title: 'Flexible Pricing Plans',
      description: 'From free trial to enterprise custom plans, meeting needs at every stage.',
    },
    pricingPlans: [
      { name: 'Starter', price: 'Free', description: 'For personal exploration', features: ['¥100 free credits', 'ChatGPT 3.5', '1,000 calls/day'], cta: 'Sign Up' },
      { name: 'Pro', price: 'From 30% off', description: 'For individual developers and small teams', features: ['All models included', 'No daily call limit', 'Priority API response', 'Real-time balance query'], cta: 'Free Trial', badge: 'Recommended' },
      { name: 'Enterprise', price: 'Contact Us', description: 'For enterprise teams', features: ['Unified account management', 'Flexible quota allocation', 'Dedicated technical support', 'SLA guarantee', 'Optional private deployment'], cta: 'Contact Us' },
    ],
    productCTA: {
      title: 'Get Started with VxonAPI',
      subtitle: 'Sign up now and get ¥100 in free credits',
      primaryLabel: 'Free Trial',
    },
  },
  'zh-Hant': {
    hero: {
      badge: 'VxonAPI — 大模型聚合平台',
      title: '一個平台，接入所有主流大模型',
      subtitle:
        'VxonAPI 已適配 7+ 主流大模型，相容 OpenAI 標準介面，對標官網 7 折起，量大管飽，技術團隊 5 分鐘即可完成接入。',
      buttons: ['免費試用', '查看定價'] as const,
    },
    featureGrid: {
      badge: 'Features',
      title: '為什麼選擇 VxonAPI',
      description: '一個介面搞定所有主流大模型，省時省力省錢。',
    },
    features: [
      { title: '多模型聚合', description: '一站式接入 Google Gemini、OpenAI GPT、Claude、DeepSeek、Qwen、GLM、Kimi 等，無需逐一對接。' },
      { title: '價格優勢', description: '對標官網 7 折起，按量計費，用多少付多少，沒有月費套路。' },
      { title: '極速接入', description: '相容 OpenAI 標準介面格式，現有程式碼無需改動，5 分鐘完成遷移。' },
      { title: '穩定可靠', description: '99.9% 服務可用性保障，高併發承載，7×24 小時穩定運行。' },
      { title: '靈活切換', description: '一個 API Key 可自由切換不同模型，即時查詢各模型餘額。' },
      { title: '技術文檔', description: '完善的 API 文檔，程式碼範例覆蓋 Python/Go/Java/Node.js，開箱即用。' },
    ],
    pricingPreview: {
      badge: 'Pricing',
      title: '靈活的定價方案',
      description: '從免費體驗到企業定制，滿足不同階段需求。',
    },
    pricingPlans: [
      { name: '體驗版', price: '免費', description: '適合個人體驗', features: ['贈送 100 元額度', 'ChatGPT 3.5', '1000 次呼叫/天'], cta: '立即註冊' },
      { name: '專業版', price: '7折起', description: '適合個人開發者和小團隊', features: ['全模型覆蓋', '無日呼叫限制', 'API 優先回應', '餘額即時查詢'], cta: '免費試用', badge: '推薦' },
      { name: '企業版', price: '聯繫報價', description: '適合企業團隊', features: ['統一帳戶管理', '額度靈活分配', '專屬技術支援', 'SLA保障', '私有化部署可選'], cta: '聯繫我們' },
    ],
    productCTA: {
      title: '開始使用 VxonAPI',
      subtitle: '立即註冊，免費獲得 100 元額度',
      primaryLabel: '免費試用',
    },
  },
  ja: {
    hero: {
      badge: 'VxonAPI — LLM統合プラットフォーム',
      title: 'ひとつのプラットフォームで、すべての主要LLMに接続',
      subtitle:
        'VxonAPI は 7 以上の主要LLMに対応し、OpenAI 互換インターフェースを提供。公式価格の3割引から利用可能、技術チームはわずか5分で統合完了。',
      buttons: ['無料トライアル', '料金を見る'] as const,
    },
    featureGrid: {
      badge: 'Features',
      title: 'VxonAPI が選ばれる理由',
      description: 'ひとつのインターフェースですべての主要LLMに対応。時間もコストも節約。',
    },
    features: [
      { title: 'マルチモデル統合', description: 'Google Gemini、OpenAI GPT、Claude、DeepSeek、Qwen、GLM、Kimi などにワンストップで接続。個別対応は不要です。' },
      { title: '価格優位性', description: '公式価格の3割引から、従量課金で月額費用なし。使った分だけお支払い。' },
      { title: '高速統合', description: 'OpenAI 互換インターフェースで既存コードの変更不要。5分で移行完了。' },
      { title: '安定・信頼', description: '99.9% のサービス稼働率保証、高い同時接続処理能力、24時間365日安定稼働。' },
      { title: '柔軟な切替', description: 'ひとつの API Key で異なるモデルを自由に切替、各モデルの残高をリアルタイムで確認。' },
      { title: '技術ドキュメント', description: '充実した API ドキュメント。Python/Go/Java/Node.js のコードサンプルですぐに利用開始。' },
    ],
    pricingPreview: {
      badge: 'Pricing',
      title: '柔軟な料金プラン',
      description: '無料体験からエンタープライズまで、あらゆるステージのニーズに対応。',
    },
    pricingPlans: [
      { name: 'スターター', price: '無料', description: '個人での体験に最適', features: ['100元分の無料クレジット', 'ChatGPT 3.5', '1日1,000回コール'], cta: '今すぐ登録' },
      { name: 'プロ', price: '3割引から', description: '個人開発者・小規模チーム向け', features: ['全モデル対応', '日次コール制限なし', 'API 優先レスポンス', '残高リアルタイム照会'], cta: '無料トライアル', badge: 'おすすめ' },
      { name: 'エンタープライズ', price: 'お問い合わせ', description: '企業チーム向け', features: ['統合アカウント管理', '柔軟なクォータ配分', '専任テクニカルサポート', 'SLA保証', 'プライベートデプロイ対応可'], cta: 'お問い合わせ' },
    ],
    productCTA: {
      title: 'VxonAPI を始めよう',
      subtitle: '今すぐ登録して100元分の無料クレジットを獲得',
      primaryLabel: '無料トライアル',
    },
  },
  es: {
    hero: {
      badge: 'VxonAPI — Plataforma de Agregación de LLMs',
      title: 'Una plataforma, todos los LLMs principales',
      subtitle:
        'VxonAPI es compatible con más de 7 LLMs principales con una interfaz compatible con OpenAI, desde un 30% de descuento sobre el precio oficial. Tu equipo técnico puede integrarlo en solo 5 minutos.',
      buttons: ['Prueba Gratis', 'Ver Precios'] as const,
    },
    featureGrid: {
      badge: 'Features',
      title: 'Por qué elegir VxonAPI',
      description: 'Una sola interfaz para todos los LLMs principales: ahorra tiempo, esfuerzo y dinero.',
    },
    features: [
      { title: 'Agregación Multi-Modelo', description: 'Accede a Google Gemini, OpenAI GPT, Claude, DeepSeek, Qwen, GLM, Kimi y más desde una sola integración.' },
      { title: 'Ventaja en Precio', description: 'Desde un 30% de descuento sobre el precio oficial, pago por uso sin cuotas mensuales.' },
      { title: 'Integración Rápida', description: 'Interfaz compatible con OpenAI, sin cambios en el código existente. Migración en 5 minutos.' },
      { title: 'Estable y Confiable', description: '99.9% de disponibilidad garantizada, soporte de alta concurrencia, operación 24/7.' },
      { title: 'Cambio Flexible', description: 'Una API Key para cambiar libremente entre modelos con consulta de saldo en tiempo real.' },
      { title: 'Documentación', description: 'Documentación API completa con ejemplos de código para Python/Go/Java/Node.js, listos para usar.' },
    ],
    pricingPreview: {
      badge: 'Pricing',
      title: 'Planes de Precios Flexibles',
      description: 'Desde prueba gratuita hasta planes empresariales, cubriendo cada etapa.',
    },
    pricingPlans: [
      { name: 'Inicial', price: 'Gratis', description: 'Para exploración personal', features: ['¥100 en créditos gratis', 'ChatGPT 3.5', '1.000 llamadas/día'], cta: 'Registrarse' },
      { name: 'Pro', price: 'Desde 30% dto.', description: 'Para desarrolladores y equipos pequeños', features: ['Todos los modelos incluidos', 'Sin límite diario de llamadas', 'Respuesta API prioritaria', 'Consulta de saldo en tiempo real'], cta: 'Prueba Gratis', badge: 'Recomendado' },
      { name: 'Empresa', price: 'Contáctenos', description: 'Para equipos empresariales', features: ['Gestión unificada de cuentas', 'Asignación flexible de cuotas', 'Soporte técnico dedicado', 'Garantía SLA', 'Despliegue privado opcional'], cta: 'Contáctenos' },
    ],
    productCTA: {
      title: 'Comienza con VxonAPI',
      subtitle: 'Regístrate ahora y obtén ¥100 en créditos gratis',
      primaryLabel: 'Prueba Gratis',
    },
  },
} as const satisfies Record<Locale, unknown>;
export const gettingStarted = {
  zh: {
    title: '5 分钟快速接入',
    steps: [
      '注册账号，获取 API Key',
      '安装 SDK 或直接调用 REST API',
      '选择模型，开始调用',
      '查看用量，实时管理余额',
    ],
    copied: '已复制',
    copyCode: '复制代码',
  },
  en: {
    title: 'Get Started in 5 Minutes',
    steps: [
      'Sign up and get your API Key',
      'Install the SDK or call the REST API directly',
      'Choose a model and start calling',
      'Monitor usage and manage your balance in real time',
    ],
    copied: 'Copied',
    copyCode: 'Copy Code',
  },
  'zh-Hant': {
    title: '5 分鐘快速接入',
    steps: [
      '註冊帳號，取得 API Key',
      '安裝 SDK 或直接呼叫 REST API',
      '選擇模型，開始呼叫',
      '查看用量，即時管理餘額',
    ],
    copied: '已複製',
    copyCode: '複製程式碼',
  },
  ja: {
    title: '5分でクイックスタート',
    steps: [
      'アカウント登録して API Key を取得',
      'SDK をインストール、または REST API を直接呼び出し',
      'モデルを選択してコール開始',
      '使用量を確認し、残高をリアルタイム管理',
    ],
    copied: 'コピー済み',
    copyCode: 'コードをコピー',
  },
  es: {
    title: 'Comienza en 5 Minutos',
    steps: [
      'Regístrate y obtén tu API Key',
      'Instala el SDK o llama a la REST API directamente',
      'Elige un modelo y comienza a llamar',
      'Consulta el uso y gestiona tu saldo en tiempo real',
    ],
    copied: 'Copiado',
    copyCode: 'Copiar Código',
  },
} as const satisfies Record<Locale, unknown>;
export const supportedModels = {
  zh: {
    title: '支持的模型',
    subtitle: '一个 API Key，接入所有主流大模型',
    providerNames: {
      alibabaCloud: '阿里云',
      zhipuAI: '智谱AI',
      moonshot: '月之暗面',
    },
    moreModels: '支持更多开源模型',
  },
  en: {
    title: 'Supported Models',
    subtitle: 'One API Key, access all major LLMs',
    providerNames: {
      alibabaCloud: 'Alibaba Cloud',
      zhipuAI: 'Zhipu AI',
      moonshot: 'Moonshot',
    },
    moreModels: 'More open-source models supported',
  },
  'zh-Hant': {
    title: '支援的模型',
    subtitle: '一個 API Key，接入所有主流大模型',
    providerNames: {
      alibabaCloud: '阿里雲',
      zhipuAI: '智譜AI',
      moonshot: '月之暗面',
    },
    moreModels: '支援更多開源模型',
  },
  ja: {
    title: '対応モデル',
    subtitle: 'ひとつの API Key ですべての主要LLMに接続',
    providerNames: {
      alibabaCloud: 'Alibaba Cloud',
      zhipuAI: 'Zhipu AI',
      moonshot: 'Moonshot',
    },
    moreModels: 'その他のオープンソースモデルにも対応',
  },
  es: {
    title: 'Modelos Compatibles',
    subtitle: 'Una API Key, acceso a todos los LLMs principales',
    providerNames: {
      alibabaCloud: 'Alibaba Cloud',
      zhipuAI: 'Zhipu AI',
      moonshot: 'Moonshot',
    },
    moreModels: 'Compatible con más modelos de código abierto',
  },
} as const satisfies Record<Locale, unknown>;
