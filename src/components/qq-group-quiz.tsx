'use client';

import { useState } from 'react';

interface QuizProps {
  locale?: 'en' | 'zh' | 'ja' | 'zh-Hant' | 'es';
}

const translations = {
  en: {
    questions: [
      {
        id: 'q1',
        question: '1. What is Vxon?',
        options: [
          { value: 'a', label: 'A commercial API sales platform' },
          {
            value: 'b',
            label:
              'An open-source AI interface management and distribution system',
          },
          { value: 'c', label: 'A paid software' },
          { value: 'd', label: 'A public welfare API site' },
        ],
        correct: 'b',
        errorMessage:
          'Please re-read the project introduction. Vxon is an open-source AI interface management and distribution system.',
      },
      {
        id: 'q2',
        question:
          '2. Is it allowed to post information about buying accounts or API products in the group?',
        options: [
          { value: 'true', label: 'Yes' },
          { value: 'false', label: 'No' },
        ],
        correct: 'false',
        errorMessage:
          'According to Group Rule 2: The group chat prohibits posting any information related to account or API product sales or purchases.',
      },
      {
        id: 'q3',
        question: '3. Does Vxon have a closed-source paid version?',
        options: [
          {
            value: 'true',
            label: 'Yes, there is a closed-source paid version',
          },
          {
            value: 'false',
            label:
              'No, Vxon is open-source software, but a commercial license is required in certain scenarios',
          },
        ],
        correct: 'false',
        errorMessage:
          'According to Group Rule 4: Vxon is open-source software, but a commercial license is required in certain scenarios. For details, please see the Project Introduction.',
      },
      {
        id: 'q4',
        question:
          '4. Are the group owner and administrators obligated to provide me with technical support?',
        options: [
          {
            value: 'true',
            label: 'Yes, they are obligated to provide technical support',
          },
          {
            value: 'false',
            label:
              'No, they are not obligated to provide technical support; an issue should be submitted',
          },
        ],
        correct: 'false',
        errorMessage:
          'According to Group Rule 1: Group administrators and the group owner are under no obligation to provide you with any technical support. If you have questions, please submit an issue.',
      },
      {
        id: 'q5',
        question:
          '5. Can I purchase API products sold by administrators in the group?',
        options: [
          { value: 'true', label: 'Yes, I can purchase' },
          {
            value: 'false',
            label: 'No, this group does not sell any API products',
          },
        ],
        correct: 'false',
        errorMessage:
          'According to Group Rule 3: This group does not sell any API products. Please do not trust or purchase API products from anyone (including administrators).',
      },
    ],
    submitButton: 'Submit Answers',
    answerAllQuestions: 'Please answer all questions before submitting.',
    successTitle: 'Congratulations, verification passed!',
    successMessage:
      'Thank you for carefully reading the group rules. Welcome to our community!',
    methodOne: 'Method One: Scan QR Code',
    methodTwo: 'Method Two: Click Link',
    joinLink: 'Click here to join the QQ group directly',
    incorrectAnswer: 'Incorrect Answer!',
  },
  zh: {
    questions: [
      {
        id: 'q1',
        question: '1. Vxon 是什么？',
        options: [
          { value: 'a', label: '一个商业API销售平台' },
          { value: 'b', label: '一个开源的AI接口管理和分发系统' },
          { value: 'c', label: '一个付费软件' },
          { value: 'd', label: '一个公益API站点' },
        ],
        correct: 'b',
        errorMessage:
          '请重新阅读项目介绍。Vxon 是一个开源的AI接口管理和分发系统。',
      },
      {
        id: 'q2',
        question: '2. 群内是否允许发布买卖账号或API产品的信息？',
        options: [
          { value: 'true', label: '是' },
          { value: 'false', label: '否' },
        ],
        correct: 'false',
        errorMessage:
          '根据群规第2条：群聊禁止发布任何与账号或API产品买卖相关的信息。',
      },
      {
        id: 'q3',
        question: '3. Vxon 是否有闭源的付费版本？',
        options: [
          { value: 'true', label: '有，存在付费的闭源版本' },
          {
            value: 'false',
            label: '没有，Vxon 采用 AGPLv3 开源协议，遵守协议即可免费使用',
          },
        ],
        correct: 'false',
        errorMessage:
          '根据群规第4条：Vxon 采用 GNU AGPLv3 开源协议，只要遵守开源协议即可免费使用。',
      },
      {
        id: 'q4',
        question: '4. 群主和管理员是否有义务为我提供技术支持？',
        options: [
          { value: 'true', label: '是，他们有义务提供技术支持' },
          {
            value: 'false',
            label: '否，他们没有义务提供技术支持，应该提交issue',
          },
        ],
        correct: 'false',
        errorMessage:
          '根据群规第1条：群管理员和群主没有义务为您提供任何技术支持。如有问题，请提交issue。',
      },
      {
        id: 'q5',
        question: '5. 我可以购买群内管理员出售的API产品吗？',
        options: [
          { value: 'true', label: '可以购买' },
          { value: 'false', label: '不可以，本群不出售任何API产品' },
        ],
        correct: 'false',
        errorMessage:
          '根据群规第3条：本群不出售任何API产品。请勿相信或购买任何人（包括管理员）出售的API产品。',
      },
    ],
    submitButton: '提交答案',
    answerAllQuestions: '请回答所有问题后再提交。',
    successTitle: '恭喜，验证通过！',
    successMessage: '感谢您仔细阅读群规。欢迎加入我们的社区！',
    methodOne: '方式一：扫描二维码',
    methodTwo: '方式二：点击链接',
    joinLink: '点击这里直接加入QQ群',
    incorrectAnswer: '答案错误！',
  },
  ja: {
    questions: [
      {
        id: 'q1',
        question: '1. Vxonとは何ですか？',
        options: [
          { value: 'a', label: '商用API販売プラットフォーム' },
          {
            value: 'b',
            label: 'オープンソースのAIインターフェース管理・配布システム',
          },
          { value: 'c', label: '有料ソフトウェア' },
          { value: 'd', label: '公益APIサイト' },
        ],
        correct: 'b',
        errorMessage:
          'プロジェクト紹介を再度お読みください。VxonはオープンソースのAIインターフェース管理・配布システムです。',
      },
      {
        id: 'q2',
        question:
          '2. グループ内でアカウントやAPI製品の売買情報を投稿することは許可されていますか？',
        options: [
          { value: 'true', label: 'はい' },
          { value: 'false', label: 'いいえ' },
        ],
        correct: 'false',
        errorMessage:
          'グループルール2により：グループチャットでは、アカウントやAPI製品の売買に関する情報の投稿は禁止されています。',
      },
      {
        id: 'q3',
        question: '3. Vxonにはクローズドソースの有料版がありますか？',
        options: [
          { value: 'true', label: 'はい、クローズドソースの有料版があります' },
          {
            value: 'false',
            label:
              'いいえ、Vxonはオープンソースソフトウェアですが、特定のシナリオでは商用ライセンスが必要です',
          },
        ],
        correct: 'false',
        errorMessage:
          'グループルール4により：Vxonはオープンソースソフトウェアですが、特定のシナリオでは商用ライセンスが必要です。詳細については、プロジェクト紹介をご覧ください。',
      },
      {
        id: 'q4',
        question:
          '4. グループオーナーと管理者は技術サポートを提供する義務がありますか？',
        options: [
          {
            value: 'true',
            label: 'はい、技術サポートを提供する義務があります',
          },
          {
            value: 'false',
            label: 'いいえ、義務はありません。issueを提出してください',
          },
        ],
        correct: 'false',
        errorMessage:
          'グループルール1により：グループ管理者とグループオーナーは、技術サポートを提供する義務はありません。ご質問がある場合は、issueを提出してください。',
      },
      {
        id: 'q5',
        question: '5. グループ内で管理者が販売するAPI製品を購入できますか？',
        options: [
          { value: 'true', label: 'はい、購入できます' },
          {
            value: 'false',
            label: 'いいえ、このグループではAPI製品を販売していません',
          },
        ],
        correct: 'false',
        errorMessage:
          'グループルール3により：このグループではAPI製品を販売していません。誰からも（管理者を含む）API製品を信用したり購入したりしないでください。',
      },
    ],
    submitButton: '回答を送信',
    answerAllQuestions: 'すべての質問に回答してから送信してください。',
    successTitle: 'おめでとうございます、認証に合格しました！',
    successMessage:
      'グループルールを注意深くお読みいただきありがとうございます。コミュニティへようこそ！',
    methodOne: '方法1：QRコードをスキャン',
    methodTwo: '方法2：リンクをクリック',
    joinLink: 'ここをクリックしてQQグループに直接参加',
    incorrectAnswer: '不正解です！',
  },
  'zh-Hant': {
    questions: [
      {
        id: 'q1',
        question: '1. Vxon 是什麼？',
        options: [
          { value: 'a', label: '一個商業API銷售平台' },
          { value: 'b', label: '一個開源的AI介面管理和分發系統' },
          { value: 'c', label: '一個付費軟體' },
          { value: 'd', label: '一個公益API站點' },
        ],
        correct: 'b',
        errorMessage:
          '請重新閱讀專案介紹。Vxon 是一個開源的AI介面管理和分發系統。',
      },
      {
        id: 'q2',
        question: '2. 群內是否允許發布買賣帳號或API產品的資訊？',
        options: [
          { value: 'true', label: '是' },
          { value: 'false', label: '否' },
        ],
        correct: 'false',
        errorMessage:
          '根據群規第2條：群聊禁止發布任何與帳號或API產品買賣相關的資訊。',
      },
      {
        id: 'q3',
        question: '3. Vxon 是否有閉源的付費版本？',
        options: [
          { value: 'true', label: '有，存在付費的閉源版本' },
          {
            value: 'false',
            label: '沒有，Vxon 採用 AGPLv3 開源協議，遵守協議即可免費使用',
          },
        ],
        correct: 'false',
        errorMessage:
          '根據群規第4條：Vxon 採用 GNU AGPLv3 開源協議，只要遵守開源協議即可免費使用。',
      },
      {
        id: 'q4',
        question: '4. 群主和管理員是否有義務為我提供技術支援？',
        options: [
          { value: 'true', label: '是，他們有義務提供技術支援' },
          {
            value: 'false',
            label: '否，他們沒有義務提供技術支援，應該提交issue',
          },
        ],
        correct: 'false',
        errorMessage:
          '根據群規第1條：群管理員和群主沒有義務為您提供任何技術支援。如有問題，請提交issue。',
      },
      {
        id: 'q5',
        question: '5. 我可以購買群內管理員出售的API產品嗎？',
        options: [
          { value: 'true', label: '可以購買' },
          { value: 'false', label: '不可以，本群不出售任何API產品' },
        ],
        correct: 'false',
        errorMessage:
          '根據群規第3條：本群不出售任何API產品。請勿相信或購買任何人（包括管理員）出售的API產品。',
      },
    ],
    submitButton: '提交答案',
    answerAllQuestions: '請回答所有問題後再提交。',
    successTitle: '恭喜，驗證通過！',
    successMessage: '感謝您仔細閱讀群規。歡迎加入我們的社群！',
    methodOne: '方式一：掃描二維碼',
    methodTwo: '方式二：點擊連結',
    joinLink: '點擊這裡直接加入QQ群',
    incorrectAnswer: '答案錯誤！',
  },
  es: {
    questions: [
      {
        id: 'q1',
        question: '1. ¿Qué es Vxon?',
        options: [
          { value: 'a', label: 'Una plataforma comercial de venta de API' },
          { value: 'b', label: 'Un sistema de código abierto para gestión y distribución de interfaces de IA' },
          { value: 'c', label: 'Un software de pago' },
          { value: 'd', label: 'Un sitio de API benéfico' },
        ],
        correct: 'b',
        errorMessage:
          'Por favor, vuelve a leer la introducción del proyecto. Vxon es un sistema de código abierto para gestión y distribución de interfaces de IA.',
      },
      {
        id: 'q2',
        question: '2. ¿Está permitido publicar información de compra/venta de cuentas o productos API en el grupo?',
        options: [
          { value: 'true', label: 'Sí' },
          { value: 'false', label: 'No' },
        ],
        correct: 'false',
        errorMessage:
          'Según la regla 2: El grupo prohíbe publicar cualquier información relacionada con la compra o venta de cuentas o productos API.',
      },
      {
        id: 'q3',
        question: '3. ¿Tiene Vxon una versión de pago de código cerrado?',
        options: [
          { value: 'true', label: 'Sí, existe una versión de pago de código cerrado' },
          {
            value: 'false',
            label: 'No, Vxon usa la licencia AGPLv3 y es gratuito si se cumple la licencia',
          },
        ],
        correct: 'false',
        errorMessage:
          'Según la regla 4: Vxon usa la licencia GNU AGPLv3 y es gratuito siempre que se cumpla la licencia de código abierto.',
      },
      {
        id: 'q4',
        question: '4. ¿Tienen los administradores la obligación de brindar soporte técnico?',
        options: [
          { value: 'true', label: 'Sí, tienen la obligación de brindar soporte técnico' },
          {
            value: 'false',
            label: 'No, no tienen obligación; se debe enviar un issue',
          },
        ],
        correct: 'false',
        errorMessage:
          'Según la regla 1: Los administradores no tienen obligación de brindar soporte técnico. Si tienes preguntas, envía un issue.',
      },
      {
        id: 'q5',
        question: '5. ¿Puedo comprar productos API vendidos por administradores del grupo?',
        options: [
          { value: 'true', label: 'Sí, puedo comprar' },
          { value: 'false', label: 'No, este grupo no vende ningún producto API' },
        ],
        correct: 'false',
        errorMessage:
          'Según la regla 3: Este grupo no vende ningún producto API. No confíes ni compres productos API de nadie (incluidos los administradores).',
      },
    ],
    submitButton: 'Enviar respuestas',
    answerAllQuestions: 'Por favor, responde todas las preguntas antes de enviar.',
    successTitle: '¡Felicidades, verificación aprobada!',
    successMessage: 'Gracias por leer las reglas del grupo. ¡Bienvenido a nuestra comunidad!',
    methodOne: 'Método 1: Escanear código QR',
    methodTwo: 'Método 2: Hacer clic en el enlace',
    joinLink: 'Haz clic aquí para unirte al grupo QQ',
    incorrectAnswer: '¡Respuesta incorrecta!',
  },
};

export function QQGroupQuiz({ locale = 'en' }: QuizProps) {
  const t = translations[locale] || translations.en;
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setError(null);
  };

  const handleSubmit = () => {
    // Check if all questions are answered
    const unanswered = t.questions.find((q) => !answers[q.id]);
    if (unanswered) {
      setError(t.answerAllQuestions);
      return;
    }

    // Check answers
    const wrongQuestion = t.questions.find((q) => answers[q.id] !== q.correct);
    if (wrongQuestion) {
      setError(wrongQuestion.errorMessage);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }

    // All correct!
    setShowResult(true);
  };

  if (showResult) {
    return (
      <>
        <div className="bg-fd-card text-fd-card-foreground my-4 flex flex-row gap-2 rounded-xl border p-3 ps-1 text-sm shadow-md">
          <div
            role="none"
            className="bg-fd-primary w-0.5 shrink-0 rounded-sm"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-fd-primary text-fd-card size-5 shrink-0"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <span className="font-medium">{t.successTitle}</span>
            <span className="text-fd-muted-foreground">{t.successMessage}</span>
          </div>
        </div>

        <h3>{t.methodOne}</h3>
        <img
          src="/assets/qq_1.jpg"
          alt="QQ Group QR Code"
          style={{
            maxWidth: '300px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        />

        <h3 className="mt-5">{t.methodTwo}</h3>
        <a
          href="https://qm.qq.com/q/tMKEbRIHVS"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded bg-blue-600 px-5 py-2.5 font-medium text-white no-underline transition-colors hover:bg-blue-700"
        >
          {t.joinLink}
        </a>
      </>
    );
  }

  return (
    <div style={{ margin: '20px 0' }}>
      {t.questions.map((question) => (
        <div
          key={question.id}
          style={{
            marginBottom: '20px',
            padding: '15px',
            background: 'var(--fd-secondary)',
            borderRadius: '4px',
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: '10px' }}>
            {question.question}
          </div>
          {question.options.map((option) => (
            <label
              key={option.value}
              style={{
                display: 'block',
                margin: '8px 0',
                cursor: 'pointer',
              }}
            >
              <input
                type="radio"
                name={question.id}
                value={option.value}
                checked={answers[question.id] === option.value}
                onChange={(e) =>
                  handleAnswerChange(question.id, e.target.value)
                }
                style={{ marginRight: '8px' }}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      ))}

      {error && (
        <div className="bg-fd-card text-fd-card-foreground my-4 flex flex-row gap-2 rounded-xl border p-3 ps-1 text-sm shadow-md">
          <div
            role="none"
            className="w-0.5 shrink-0 rounded-sm"
            style={{ backgroundColor: '#ef4444' }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#ef4444"
            className="size-5 shrink-0"
          >
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
          </svg>
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <span className="font-medium">{t.incorrectAnswer}</span>
            <span className="text-fd-muted-foreground">{error}</span>
          </div>
        </div>
      )}

      <button
        onClick={handleSubmit}
        style={{
          width: '100%',
          padding: '12px 20px',
          background: isShaking ? '#c62828' : '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '15px',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'background 0.3s',
          animation: isShaking ? 'shake 0.5s' : 'none',
        }}
        onMouseEnter={(e) => {
          if (!isShaking) {
            (e.target as HTMLButtonElement).style.background = '#1565c0';
          }
        }}
        onMouseLeave={(e) => {
          if (!isShaking) {
            (e.target as HTMLButtonElement).style.background = '#1976d2';
          }
        }}
      >
        {t.submitButton}
      </button>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
}
