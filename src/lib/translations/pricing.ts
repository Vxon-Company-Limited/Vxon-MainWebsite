export const pricingPage = {
  zh: {
    hero: {
      badge: '定价',
      title: '简单透明的定价',
      subtitle: '从免费体验到企业定制，选择最适合你的方案。',
      buttons: ['免费试用', '联系销售'] as const,
    },
    apiSection: {
      badge: 'VxonAPI',
      title: '大模型聚合平台',
      description: '一个接口接入所有主流大模型，对标官网 7 折起。',
    },
    apiPlans: [
      { name: '体验版', price: '免费', description: '适合个人体验', features: ['送 100 元额度', 'ChatGPT 3.5', '1000 次调用/天'], cta: '立即注册' },
      { name: '专业版', price: '7折起', description: '适合个人开发者和小团队', features: ['全模型覆盖', '无日调用限制', 'API 优先响应', '余额实时查询'], cta: '免费试用', badge: '推荐' },
      { name: '企业版', price: '联系报价', description: '适合企业团队', features: ['统一账户管理', '额度灵活分配', '专属技术支持', 'SLA 保障', '私有化部署可选'], cta: '联系我们' },
    ],
    aiSection: {
      badge: 'VxonAI',
      title: '企业级 AI 私有化部署',
      description: '本地部署大模型，数据不出内网，按需定制方案。',
      features: ['私有化部署，数据完全自主', '支持主流开源 & 商用模型', '统一账户与权限管理', '专属技术团队支持', '灵活的硬件适配方案'],
      cta: '联系销售获取报价',
    },
    comingSoonSection: {
      badge: '即将上线',
      title: '更多产品即将推出',
      products: [
        { name: 'VxonClaw', subtitle: '企业智能体平台', description: '替代 BI/CRM/OA，AI 实时赋能业务流程。' },
        { name: 'VxonFort ZT', subtitle: '零信任 AI 编码安全堡垒机', description: 'Claude Code 零信任管控，满足等保合规。' },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: '常见问题',
      items: [
        { q: 'VxonAPI 如何计费？', a: '按实际调用量计费，用多少付多少，没有月费套路。不同模型价格不同，详见文档。' },
        { q: '免费额度用完后怎么办？', a: '可随时充值继续使用，充值后自动升级为专业版，享受全模型覆盖和无日调用限制。' },
        { q: 'VxonAI 私有化部署如何定价？', a: '根据部署规模、模型选择和服务需求定制报价，请联系销售团队获取详细方案。' },
        { q: '是否支持发票？', a: '支持，企业用户可申请增值税专用发票。' },
      ],
    },
    cta: {
      title: '准备好开始了吗？',
      subtitle: '立即注册，免费获得 100 元额度体验所有模型。',
      primaryLabel: '免费试用',
    },
    trustIndicators: [
      { value: '5000+', label: '企业客户信赖' },
      { value: '99.9%', label: '服务可用性' },
      { value: '7+', label: '主流模型覆盖' },
      { value: '5分钟', label: '快速接入' },
    ],
    perMonth: '/月起',
    guarantee: '安全支付 · 7天内无条件退款 · 企业可开增值税发票',
  },
  en: {
    hero: {
      badge: 'Pricing',
      title: 'Simple, Transparent Pricing',
      subtitle: 'From free trial to enterprise custom plans. Pick what works for you.',
      buttons: ['Free Trial', 'Contact Sales'] as const,
    },
    apiSection: {
      badge: 'VxonAPI',
      title: 'LLM Aggregation Platform',
      description: 'One interface for all major LLMs, starting at 30% off official pricing.',
    },
    apiPlans: [
      { name: 'Starter', price: 'Free', description: 'For personal exploration', features: ['¥100 free credits', 'ChatGPT 3.5', '1,000 calls/day'], cta: 'Sign Up' },
      { name: 'Pro', price: 'From 30% off', description: 'For developers and small teams', features: ['All models included', 'No daily call limit', 'Priority API response', 'Real-time balance query'], cta: 'Free Trial', badge: 'Recommended' },
      { name: 'Enterprise', price: 'Contact Us', description: 'For enterprise teams', features: ['Unified account management', 'Flexible quota allocation', 'Dedicated technical support', 'SLA guarantee', 'Optional private deployment'], cta: 'Contact Us' },
    ],
    aiSection: {
      badge: 'VxonAI',
      title: 'Enterprise AI Private Deployment',
      description: 'Deploy LLMs locally. Your data stays in your network. Custom solutions.',
      features: ['Private deployment, full data sovereignty', 'Supports major open-source & commercial models', 'Unified account & permission management', 'Dedicated technical team support', 'Flexible hardware adaptation'],
      cta: 'Contact Sales for a Quote',
    },
    comingSoonSection: {
      badge: 'Coming Soon',
      title: 'More Products Coming',
      products: [
        { name: 'VxonClaw', subtitle: 'Enterprise Agent Platform', description: 'Replace BI/CRM/OA with real-time AI-powered business processes.' },
        { name: 'VxonFort ZT', subtitle: 'Zero-Trust AI Coding Bastion', description: 'Zero-trust control for Claude Code, compliance-ready.' },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How does VxonAPI billing work?', a: 'Pay-as-you-go based on actual usage. No monthly fees. Pricing varies by model — see our docs for details.' },
        { q: 'What happens when free credits run out?', a: 'Top up anytime to continue. After recharging you automatically upgrade to Pro with full model access and no daily limits.' },
        { q: 'How is VxonAI private deployment priced?', a: 'Custom quotes based on deployment scale, model selection, and service requirements. Contact our sales team for details.' },
        { q: 'Do you support invoicing?', a: 'Yes. Enterprise customers can request VAT invoices.' },
      ],
    },
    cta: {
      title: 'Ready to Get Started?',
      subtitle: 'Sign up now and get ¥100 in free credits to try all models.',
      primaryLabel: 'Free Trial',
    },
    trustIndicators: [
      { value: '5,000+', label: 'Enterprise Clients' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '7+', label: 'Major LLMs' },
      { value: '5 min', label: 'Quick Integration' },
    ],
    perMonth: '/mo',
    guarantee: 'Secure payment · 7-day unconditional refund · Enterprise invoicing available',
  },
  'zh-Hant': {
    hero: {
      badge: '定價',
      title: '簡單透明的定價',
      subtitle: '從免費體驗到企業定制，選擇最適合你的方案。',
      buttons: ['免費試用', '聯繫銷售'] as const,
    },
    apiSection: {
      badge: 'VxonAPI',
      title: '大模型聚合平台',
      description: '一個介面接入所有主流大模型，對標官網 7 折起。',
    },
    apiPlans: [
      { name: '體驗版', price: '免費', description: '適合個人體驗', features: ['送 100 元額度', 'ChatGPT 3.5', '1000 次調用/天'], cta: '立即註冊' },
      { name: '專業版', price: '7折起', description: '適合個人開發者和小團隊', features: ['全模型覆蓋', '無日調用限制', 'API 優先回應', '餘額即時查詢'], cta: '免費試用', badge: '推薦' },
      { name: '企業版', price: '聯繫報價', description: '適合企業團隊', features: ['統一帳戶管理', '額度靈活分配', '專屬技術支援', 'SLA 保障', '私有化部署可選'], cta: '聯繫我們' },
    ],
    aiSection: {
      badge: 'VxonAI',
      title: '企業級 AI 私有化部署',
      description: '本地部署大模型，資料不出內網，按需定制方案。',
      features: ['私有化部署，資料完全自主', '支援主流開源 & 商用模型', '統一帳戶與權限管理', '專屬技術團隊支援', '靈活的硬體適配方案'],
      cta: '聯繫銷售獲取報價',
    },
    comingSoonSection: {
      badge: '即將上線',
      title: '更多產品即將推出',
      products: [
        { name: 'VxonClaw', subtitle: '企業智能體平台', description: '替代 BI/CRM/OA，AI 即時賦能業務流程。' },
        { name: 'VxonFort ZT', subtitle: '零信任 AI 編碼安全堡壘機', description: 'Claude Code 零信任管控，滿足等保合規。' },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: '常見問題',
      items: [
        { q: 'VxonAPI 如何計費？', a: '按實際調用量計費，用多少付多少，沒有月費套路。不同模型價格不同，詳見文檔。' },
        { q: '免費額度用完後怎麼辦？', a: '可隨時充值繼續使用，充值後自動升級為專業版，享受全模型覆蓋和無日調用限制。' },
        { q: 'VxonAI 私有化部署如何定價？', a: '根據部署規模、模型選擇和服務需求定制報價，請聯繫銷售團隊獲取詳細方案。' },
        { q: '是否支援發票？', a: '支援，企業用戶可申請增值稅專用發票。' },
      ],
    },
    cta: {
      title: '準備好開始了嗎？',
      subtitle: '立即註冊，免費獲得 100 元額度體驗所有模型。',
      primaryLabel: '免費試用',
    },
    trustIndicators: [
      { value: '5000+', label: '企業客戶信賴' },
      { value: '99.9%', label: '服務可用性' },
      { value: '7+', label: '主流模型覆蓋' },
      { value: '5分鐘', label: '快速接入' },
    ],
    perMonth: '/月起',
    guarantee: '安全支付 · 7天內無條件退款 · 企業可開增值稅發票',
  },
  ja: {
    hero: {
      badge: '料金',
      title: 'シンプルで透明な料金体系',
      subtitle: '無料体験からエンタープライズカスタムまで、最適なプランをお選びください。',
      buttons: ['無料トライアル', '営業に問い合わせ'] as const,
    },
    apiSection: {
      badge: 'VxonAPI',
      title: 'LLM統合プラットフォーム',
      description: '1つのインターフェースで全主要LLMにアクセス、公式価格の7割から。',
    },
    apiPlans: [
      { name: 'スターター', price: '無料', description: '個人体験向け', features: ['100元分の無料クレジット', 'ChatGPT 3.5', '1日1000回コール'], cta: '今すぐ登録' },
      { name: 'プロ', price: '7割から', description: '開発者・小規模チーム向け', features: ['全モデル対応', '日次コール制限なし', 'API優先レスポンス', 'リアルタイム残高照会'], cta: '無料トライアル', badge: 'おすすめ' },
      { name: 'エンタープライズ', price: 'お問い合わせ', description: '企業チーム向け', features: ['統一アカウント管理', '柔軟なクォータ配分', '専任技術サポート', 'SLA保証', 'プライベートデプロイ対応'], cta: 'お問い合わせ' },
    ],
    aiSection: {
      badge: 'VxonAI',
      title: 'エンタープライズAIプライベートデプロイ',
      description: 'LLMをローカルにデプロイ。データは社内に留まります。カスタムソリューション。',
      features: ['プライベートデプロイ、完全なデータ主権', '主要オープンソース＆商用モデル対応', '統一アカウント＆権限管理', '専任技術チームサポート', '柔軟なハードウェア適応'],
      cta: '営業に問い合わせて見積もりを取得',
    },
    comingSoonSection: {
      badge: '近日公開',
      title: 'さらなる製品が登場予定',
      products: [
        { name: 'VxonClaw', subtitle: 'エンタープライズエージェントプラットフォーム', description: 'BI/CRM/OAをリアルタイムAIで置き換え。' },
        { name: 'VxonFort ZT', subtitle: 'ゼロトラストAIコーディング要塞', description: 'Claude Codeのゼロトラスト管理、コンプライアンス対応。' },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'よくある質問',
      items: [
        { q: 'VxonAPIの課金方法は？', a: '実際の使用量に基づく従量課金です。月額料金はありません。モデルにより価格が異なります。詳細はドキュメントをご覧ください。' },
        { q: '無料クレジットがなくなったら？', a: 'いつでもチャージして継続利用できます。チャージ後は自動的にプロにアップグレードされ、全モデルアクセスと日次制限なしが適用されます。' },
        { q: 'VxonAIプライベートデプロイの価格は？', a: 'デプロイ規模、モデル選択、サービス要件に基づくカスタム見積もりです。詳細は営業チームにお問い合わせください。' },
        { q: '請求書発行に対応していますか？', a: 'はい。法人のお客様は請求書を申請できます。' },
      ],
    },
    cta: {
      title: '始める準備はできましたか？',
      subtitle: '今すぐ登録して、100元分の無料クレジットで全モデルをお試しください。',
      primaryLabel: '無料トライアル',
    },
    trustIndicators: [
      { value: '5,000+', label: '企業のお客様' },
      { value: '99.9%', label: 'サービス稼働率' },
      { value: '7+', label: '主要モデル' },
      { value: '5分', label: 'クイック統合' },
    ],
    perMonth: '/月〜',
    guarantee: '安全な決済 · 7日間無条件返金 · 法人向け請求書発行対応',
  },
  es: {
    hero: {
      badge: 'Precios',
      title: 'Precios Simples y Transparentes',
      subtitle: 'Desde prueba gratuita hasta planes empresariales personalizados. Elige lo que mejor te funcione.',
      buttons: ['Prueba Gratis', 'Contactar Ventas'] as const,
    },
    apiSection: {
      badge: 'VxonAPI',
      title: 'Plataforma de Agregación LLM',
      description: 'Una interfaz para todos los principales LLM, desde 30% de descuento sobre precios oficiales.',
    },
    apiPlans: [
      { name: 'Inicial', price: 'Gratis', description: 'Para exploración personal', features: ['¥100 en créditos gratis', 'ChatGPT 3.5', '1.000 llamadas/día'], cta: 'Registrarse' },
      { name: 'Pro', price: 'Desde 30% dto.', description: 'Para desarrolladores y equipos pequeños', features: ['Todos los modelos incluidos', 'Sin límite diario', 'Respuesta API prioritaria', 'Consulta de saldo en tiempo real'], cta: 'Prueba Gratis', badge: 'Recomendado' },
      { name: 'Empresa', price: 'Contáctenos', description: 'Para equipos empresariales', features: ['Gestión unificada de cuentas', 'Asignación flexible de cuotas', 'Soporte técnico dedicado', 'Garantía SLA', 'Despliegue privado opcional'], cta: 'Contáctenos' },
    ],
    aiSection: {
      badge: 'VxonAI',
      title: 'Despliegue Privado de IA Empresarial',
      description: 'Despliega LLMs localmente. Tus datos permanecen en tu red. Soluciones personalizadas.',
      features: ['Despliegue privado, soberanía total de datos', 'Soporte para modelos open-source y comerciales', 'Gestión unificada de cuentas y permisos', 'Equipo técnico dedicado', 'Adaptación flexible de hardware'],
      cta: 'Contactar Ventas para Cotización',
    },
    comingSoonSection: {
      badge: 'Próximamente',
      title: 'Más Productos en Camino',
      products: [
        { name: 'VxonClaw', subtitle: 'Plataforma de Agentes Empresariales', description: 'Reemplaza BI/CRM/OA con procesos de negocio impulsados por IA en tiempo real.' },
        { name: 'VxonFort ZT', subtitle: 'Bastión de Codificación IA Zero-Trust', description: 'Control zero-trust para Claude Code, listo para cumplimiento.' },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'Preguntas Frecuentes',
      items: [
        { q: '¿Cómo funciona la facturación de VxonAPI?', a: 'Pago por uso basado en consumo real. Sin cuotas mensuales. Los precios varían según el modelo — consulta nuestra documentación.' },
        { q: '¿Qué pasa cuando se agotan los créditos gratis?', a: 'Recarga en cualquier momento. Después de recargar, se actualiza automáticamente a Pro con acceso completo y sin límites diarios.' },
        { q: '¿Cómo se cotiza el despliegue privado de VxonAI?', a: 'Cotizaciones personalizadas según escala, selección de modelos y requisitos. Contacta a nuestro equipo de ventas.' },
        { q: '¿Emiten facturas?', a: 'Sí. Los clientes empresariales pueden solicitar facturas con IVA.' },
      ],
    },
    cta: {
      title: '¿Listo para Empezar?',
      subtitle: 'Regístrate ahora y obtén ¥100 en créditos gratis para probar todos los modelos.',
      primaryLabel: 'Prueba Gratis',
    },
    trustIndicators: [
      { value: '5.000+', label: 'Clientes empresariales' },
      { value: '99.9%', label: 'Disponibilidad SLA' },
      { value: '7+', label: 'Modelos principales' },
      { value: '5 min', label: 'Integración rápida' },
    ],
    perMonth: '/mes',
    guarantee: 'Pago seguro · Reembolso incondicional en 7 días · Facturación empresarial disponible',
  },
} as const;
