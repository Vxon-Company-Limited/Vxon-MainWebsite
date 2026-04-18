import type { Locale } from './site';

export const fortPage = {
  zh: {
    hero: {
      badge: 'VxonFort ZT — 零信任AI编码安全堡垒机 · 即将上线',
      title: '零信任AI编码安全堡垒机，代码不外泄，合规有保障',
      subtitle: 'VxonFort ZT 将 Claude Code 封装进零信任管控体系，网络隔离、研发区隔离、出站API审计过滤，Copy操作自动触发审批流，审批通过方可释放，满足企业等保合规要求。',
      buttons: ['预约企业演示'],
    },
  },
  en: {
    hero: {
      badge: 'VxonFort ZT — Zero-Trust AI Coding Bastion · Coming Soon',
      title: 'Zero-Trust AI Coding Bastion — No Code Leaks, Compliance Guaranteed',
      subtitle: 'VxonFort ZT wraps Claude Code in a zero-trust control framework with network isolation, R&D zone isolation, outbound API audit filtering, and automatic copy approval workflows. Releases only after approval, meeting enterprise compliance requirements.',
      buttons: ['Book Enterprise Demo'],
    },
  },
  'zh-Hant': {
    hero: {
      badge: 'VxonFort ZT — 零信任AI編碼安全堡壘機 · 即將上線',
      title: '零信任AI編碼安全堡壘機，程式碼不外洩，合規有保障',
      subtitle: 'VxonFort ZT 將 Claude Code 封裝進零信任管控體系，網路隔離、研發區隔離、出站API審計過濾，Copy操作自動觸發審批流，審批通過方可釋放，滿足企業等保合規要求。',
      buttons: ['預約企業演示'],
    },
  },
  ja: {
    hero: {
      badge: 'VxonFort ZT — ゼロトラストAIコーディング要塞 · 近日公開',
      title: 'ゼロトラストAIコーディング要塞、コード漏洩なし、コンプライアンス保証',
      subtitle: 'VxonFort ZTはClaude Codeをゼロトラスト管理フレームワークに組み込み、ネットワーク分離、R&Dゾーン分離、アウトバウンドAPI監査フィルタリング、コピー操作の自動承認ワークフローを提供。承認後のみリリース、企業コンプライアンス要件に対応。',
      buttons: ['企業デモを予約'],
    },
  },
  es: {
    hero: {
      badge: 'VxonFort ZT — Bastion de Codificacion IA Zero-Trust · Proximamente',
      title: 'Bastion de codificacion IA zero-trust — sin fugas de codigo, cumplimiento garantizado',
      subtitle: 'VxonFort ZT envuelve Claude Code en un marco de control zero-trust con aislamiento de red, aislamiento de zona I+D, filtrado de auditoria API saliente y flujos de aprobacion automaticos de copia. Solo se libera tras aprobacion, cumpliendo requisitos de cumplimiento empresarial.',
      buttons: ['Reservar demo empresarial'],
    },
  },
} as const;

// PLACEHOLDER_COMING_SOON

export const comingSoon = {
  zh: {
    title: '敬请期待',
    subtitle: 'VxonFort ZT',
    description: '零信任AI编码安全堡垒机，即将上线',
    buttons: ['预约企业演示', '填写需求表单'],
  },
  en: {
    title: 'Coming Soon',
    subtitle: 'VxonFort ZT',
    description: 'Zero-Trust AI Coding Bastion, launching soon',
    buttons: ['Book Enterprise Demo', 'Submit Requirements'],
  },
  'zh-Hant': {
    title: '敬請期待',
    subtitle: 'VxonFort ZT',
    description: '零信任AI編碼安全堡壘機，即將上線',
    buttons: ['預約企業演示', '填寫需求表單'],
  },
  ja: {
    title: '近日公開',
    subtitle: 'VxonFort ZT',
    description: 'ゼロトラストAIコーディング要塞、まもなくリリース',
    buttons: ['企業デモを予約', '要件フォームを送信'],
  },
  es: {
    title: 'Proximamente',
    subtitle: 'VxonFort ZT',
    description: 'Bastion de codificacion IA zero-trust, lanzamiento proximo',
    buttons: ['Reservar demo empresarial', 'Enviar formulario de requisitos'],
  },
} as const;

export const coreCapabilities = {
  zh: {
    badge: 'Capabilities',
    title: '核心能力预告',
    items: [
      { title: '零信任安全架构', description: '基于零信任原则构建，默认不信任任何用户和设备，所有操作需经过身份验证和权限校验。' },
      { title: '网络完全隔离', description: '研发环境与外网完全隔离，代码和数据无法通过网络外传，从物理层面杜绝泄露风险。' },
      { title: '出站API审计过滤', description: '所有出站API请求经过审计过滤，仅允许白名单内的API调用通过，异常请求实时告警。' },
      { title: 'Copy 操作审批流', description: 'Copy/粘贴操作自动触发审批流程，审批通过后方可释放内容，全程留痕可追溯。' },
    ],
  },
  en: {
    badge: 'Capabilities',
    title: 'Core Capabilities Preview',
    items: [
      { title: 'Zero-Trust Security Architecture', description: 'Built on zero-trust principles — no user or device is trusted by default. All operations require identity verification and permission checks.' },
      { title: 'Complete Network Isolation', description: 'R&D environments are fully isolated from external networks. Code and data cannot be transmitted externally, eliminating leak risks at the physical level.' },
      { title: 'Outbound API Audit Filtering', description: 'All outbound API requests are audited and filtered. Only whitelisted API calls are allowed through, with real-time alerts for anomalous requests.' },
      { title: 'Copy Operation Approval Flow', description: 'Copy/paste operations automatically trigger an approval workflow. Content is only released after approval, with full audit trails.' },
    ],
  },
  'zh-Hant': {
    badge: 'Capabilities',
    title: '核心能力預告',
    items: [
      { title: '零信任安全架構', description: '基於零信任原則構建，預設不信任任何用戶和設備，所有操作需經過身份驗證和權限校驗。' },
      { title: '網路完全隔離', description: '研發環境與外網完全隔離，程式碼和資料無法透過網路外傳，從物理層面杜絕洩露風險。' },
      { title: '出站API審計過濾', description: '所有出站API請求經過審計過濾，僅允許白名單內的API呼叫通過，異常請求即時告警。' },
      { title: 'Copy 操作審批流', description: 'Copy/貼上操作自動觸發審批流程，審批通過後方可釋放內容，全程留痕可追溯。' },
    ],
  },
  ja: {
    badge: 'Capabilities',
    title: 'コア機能プレビュー',
    items: [
      { title: 'ゼロトラストセキュリティアーキテクチャ', description: 'ゼロトラスト原則に基づき構築。デフォルトでユーザーやデバイスを信頼せず、すべての操作に本人確認と権限チェックが必要。' },
      { title: '完全ネットワーク分離', description: 'R&D環境を外部ネットワークから完全に分離。コードやデータはネットワーク経由で外部に送信不可、物理レベルで漏洩リスクを排除。' },
      { title: 'アウトバウンドAPI監査フィルタリング', description: 'すべてのアウトバウンドAPIリクエストを監査・フィルタリング。ホワイトリスト内のAPI呼び出しのみ許可、異常リクエストはリアルタイムアラート。' },
      { title: 'コピー操作承認フロー', description: 'コピー/ペースト操作で自動的に承認ワークフローが起動。承認後のみコンテンツがリリースされ、完全な監査証跡を保持。' },
    ],
  },
  es: {
    badge: 'Capabilities',
    title: 'Vista previa de capacidades principales',
    items: [
      { title: 'Arquitectura de seguridad zero-trust', description: 'Construida sobre principios zero-trust — ningun usuario ni dispositivo es confiable por defecto. Todas las operaciones requieren verificacion de identidad y permisos.' },
      { title: 'Aislamiento de red completo', description: 'Los entornos de I+D estan completamente aislados de redes externas. El codigo y los datos no pueden transmitirse externamente, eliminando riesgos de fuga a nivel fisico.' },
      { title: 'Filtrado de auditoria API saliente', description: 'Todas las solicitudes API salientes son auditadas y filtradas. Solo se permiten llamadas API en lista blanca, con alertas en tiempo real para solicitudes anomalas.' },
      { title: 'Flujo de aprobacion de operaciones de copia', description: 'Las operaciones de copiar/pegar activan automaticamente un flujo de aprobacion. El contenido solo se libera tras la aprobacion, con trazabilidad completa.' },
    ],
  },
} as const;

// PLACEHOLDER_COMPARISON

export const comparison = {
  zh: {
    badge: 'Comparison',
    title: '与传统方案对比',
    left: {
      title: '传统 Claude Code 使用方式',
      items: [
        '代码可随意复制粘贴到外部',
        '网络不隔离，数据可自由外传',
        '无出站API审计，调用不可控',
        '无操作审批流程，合规风险高',
      ],
    },
    right: {
      title: 'VxonFort ZT 管控方式',
      items: [
        'Copy操作自动触发审批，审批通过方可释放',
        '网络完全隔离，研发区与外网物理隔断',
        '出站API白名单审计过滤，异常实时告警',
        '全操作留痕可追溯，满足等保合规要求',
      ],
    },
  },
  en: {
    badge: 'Comparison',
    title: 'Compared to Traditional Approaches',
    left: {
      title: 'Traditional Claude Code Usage',
      items: [
        'Code can be freely copied and pasted externally',
        'No network isolation, data can be transmitted freely',
        'No outbound API audit, uncontrolled API calls',
        'No operation approval workflows, high compliance risk',
      ],
    },
    right: {
      title: 'VxonFort ZT Controlled Approach',
      items: [
        'Copy operations auto-trigger approval, released only after approval',
        'Complete network isolation, R&D zone physically separated from external networks',
        'Outbound API whitelist audit filtering, real-time anomaly alerts',
        'Full operation audit trails, meeting compliance requirements',
      ],
    },
  },
  'zh-Hant': {
    badge: 'Comparison',
    title: '與傳統方案對比',
    left: {
      title: '傳統 Claude Code 使用方式',
      items: [
        '程式碼可隨意複製貼上到外部',
        '網路不隔離，資料可自由外傳',
        '無出站API審計，呼叫不可控',
        '無操作審批流程，合規風險高',
      ],
    },
    right: {
      title: 'VxonFort ZT 管控方式',
      items: [
        'Copy操作自動觸發審批，審批通過方可釋放',
        '網路完全隔離，研發區與外網物理隔斷',
        '出站API白名單審計過濾，異常即時告警',
        '全操作留痕可追溯，滿足等保合規要求',
      ],
    },
  },
  ja: {
    badge: 'Comparison',
    title: '従来のアプローチとの比較',
    left: {
      title: '従来のClaude Code使用方法',
      items: [
        'コードを自由に外部にコピー＆ペースト可能',
        'ネットワーク分離なし、データを自由に外部送信可能',
        'アウトバウンドAPI監査なし、制御不能なAPI呼び出し',
        '操作承認ワークフローなし、コンプライアンスリスクが高い',
      ],
    },
    right: {
      title: 'VxonFort ZT管理アプローチ',
      items: [
        'コピー操作で自動承認トリガー、承認後のみリリース',
        '完全ネットワーク分離、R&Dゾーンと外部ネットワークを物理的に分断',
        'アウトバウンドAPIホワイトリスト監査フィルタリング、リアルタイム異常アラート',
        '全操作の監査証跡、コンプライアンス要件に対応',
      ],
    },
  },
  es: {
    badge: 'Comparison',
    title: 'Comparacion con enfoques tradicionales',
    left: {
      title: 'Uso tradicional de Claude Code',
      items: [
        'El codigo puede copiarse y pegarse libremente al exterior',
        'Sin aislamiento de red, los datos pueden transmitirse libremente',
        'Sin auditoria API saliente, llamadas API sin control',
        'Sin flujos de aprobacion de operaciones, alto riesgo de cumplimiento',
      ],
    },
    right: {
      title: 'Enfoque controlado de VxonFort ZT',
      items: [
        'Las operaciones de copia activan aprobacion automatica, liberacion solo tras aprobacion',
        'Aislamiento de red completo, zona I+D fisicamente separada de redes externas',
        'Filtrado de auditoria API saliente con lista blanca, alertas de anomalias en tiempo real',
        'Trazabilidad completa de operaciones, cumpliendo requisitos de cumplimiento',
      ],
    },
  },
} as const;

// PLACEHOLDER_INDUSTRY

export const industryCards = {
  zh: {
    badge: 'Industries',
    title: '适用行业与场景',
    items: [
      { title: '金融行业', description: '银行、证券、保险等金融机构对代码安全和数据合规要求极高，VxonFort ZT 满足等保三级及以上要求。' },
      { title: '政务单位', description: '政府机关和事业单位对信息安全有严格管控需求，零信任架构确保研发数据不外泄。' },
      { title: '大型科技公司', description: '核心代码资产是科技公司的命脉，VxonFort ZT 防止研发人员无意或恶意泄露代码。' },
      { title: '研发外包场景', description: '外包团队使用 AI 编码工具时，通过零信任管控确保甲方代码资产安全，合作无忧。' },
    ],
  },
  en: {
    badge: 'Industries',
    title: 'Industries & Scenarios',
    items: [
      { title: 'Financial Services', description: 'Banks, securities, and insurance institutions have extremely high requirements for code security and data compliance. VxonFort ZT meets Level 3+ compliance standards.' },
      { title: 'Government', description: 'Government agencies have strict information security control needs. Zero-trust architecture ensures R&D data never leaks.' },
      { title: 'Large Tech Companies', description: 'Core code assets are the lifeblood of tech companies. VxonFort ZT prevents accidental or malicious code leaks by developers.' },
      { title: 'R&D Outsourcing', description: 'When outsourced teams use AI coding tools, zero-trust controls ensure client code assets remain secure.' },
    ],
  },
  'zh-Hant': {
    badge: 'Industries',
    title: '適用行業與場景',
    items: [
      { title: '金融行業', description: '銀行、證券、保險等金融機構對程式碼安全和資料合規要求極高，VxonFort ZT 滿足等保三級及以上要求。' },
      { title: '政務單位', description: '政府機關和事業單位對資訊安全有嚴格管控需求，零信任架構確保研發資料不外洩。' },
      { title: '大型科技公司', description: '核心程式碼資產是科技公司的命脈，VxonFort ZT 防止研發人員無意或惡意洩露程式碼。' },
      { title: '研發外包場景', description: '外包團隊使用 AI 編碼工具時，透過零信任管控確保甲方程式碼資產安全，合作無憂。' },
    ],
  },
  ja: {
    badge: 'Industries',
    title: '対象業界とシナリオ',
    items: [
      { title: '金融業界', description: '銀行、証券、保険などの金融機関はコードセキュリティとデータコンプライアンスに極めて高い要件を持つ。VxonFort ZTはレベル3以上のコンプライアンス基準に対応。' },
      { title: '政府機関', description: '政府機関は情報セキュリティに厳格な管理要件を持つ。ゼロトラストアーキテクチャでR&Dデータの漏洩を防止。' },
      { title: '大手テクノロジー企業', description: 'コアコード資産はテクノロジー企業の生命線。VxonFort ZTは開発者による意図的・偶発的なコード漏洩を防止。' },
      { title: 'R&Dアウトソーシング', description: '外部委託チームがAIコーディングツールを使用する際、ゼロトラスト管理でクライアントのコード資産の安全を確保。' },
    ],
  },
  es: {
    badge: 'Industries',
    title: 'Industrias y escenarios aplicables',
    items: [
      { title: 'Servicios financieros', description: 'Bancos, valores y aseguradoras tienen requisitos extremadamente altos de seguridad de codigo y cumplimiento de datos. VxonFort ZT cumple estandares de cumplimiento Nivel 3+.' },
      { title: 'Gobierno', description: 'Las agencias gubernamentales tienen necesidades estrictas de control de seguridad de la informacion. La arquitectura zero-trust asegura que los datos de I+D nunca se filtren.' },
      { title: 'Grandes empresas tecnologicas', description: 'Los activos de codigo son la esencia de las empresas tecnologicas. VxonFort ZT previene fugas de codigo accidentales o maliciosas por parte de desarrolladores.' },
      { title: 'Externalizacion de I+D', description: 'Cuando equipos externos usan herramientas de codificacion IA, los controles zero-trust aseguran que los activos de codigo del cliente permanezcan seguros.' },
    ],
  },
} as const;

export const reservationForm = {
  zh: {
    title: '产品即将上线，提前预约抢先体验',
    subtitle: '留下联系方式，产品上线后第一时间通知您',
    fields: {
      name: '姓名',
      company: '公司名称',
      email: '邮箱',
      phone: '手机',
      description: '需求描述',
    },
    submit: '提交预约',
    success: {
      title: '提交成功',
      description: '我们会在产品上线后第一时间联系您',
    },
  },
  en: {
    title: 'Product launching soon — reserve your early access',
    subtitle: 'Leave your contact info and we will notify you as soon as the product launches',
    fields: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      description: 'Requirements',
    },
    submit: 'Submit Reservation',
    success: {
      title: 'Submitted Successfully',
      description: 'We will contact you as soon as the product launches',
    },
  },
  'zh-Hant': {
    title: '產品即將上線，提前預約搶先體驗',
    subtitle: '留下聯絡方式，產品上線後第一時間通知您',
    fields: {
      name: '姓名',
      company: '公司名稱',
      email: '郵箱',
      phone: '手機',
      description: '需求描述',
    },
    submit: '提交預約',
    success: {
      title: '提交成功',
      description: '我們會在產品上線後第一時間聯繫您',
    },
  },
  ja: {
    title: '製品まもなくリリース — 早期アクセスを予約',
    subtitle: '連絡先をお残しください。製品リリース後すぐにお知らせします',
    fields: {
      name: '氏名',
      company: '会社名',
      email: 'メールアドレス',
      phone: '電話番号',
      description: '要件の説明',
    },
    submit: '予約を送信',
    success: {
      title: '送信完了',
      description: '製品リリース後すぐにご連絡いたします',
    },
  },
  es: {
    title: 'Producto proximo a lanzarse — reserva tu acceso anticipado',
    subtitle: 'Deja tu informacion de contacto y te notificaremos en cuanto el producto se lance',
    fields: {
      name: 'Nombre',
      company: 'Empresa',
      email: 'Correo electronico',
      phone: 'Telefono',
      description: 'Descripcion de requisitos',
    },
    submit: 'Enviar reserva',
    success: {
      title: 'Enviado con exito',
      description: 'Le contactaremos en cuanto el producto se lance',
    },
  },
} as const;



