'use client';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { type SyntheticEvent, useEffect, useState, useTransition } from 'react';
import {
  Collapsible,
  CollapsibleContent,
} from 'fumadocs-ui/components/ui/collapsible';
import { cva } from 'class-variance-authority';
import { usePathname } from 'next/navigation';

const rateButtonVariants = cva(
  'inline-flex items-center gap-2 px-3 py-2 rounded-full font-medium border text-sm [&_svg]:size-4 disabled:cursor-not-allowed cursor-pointer transition-colors',
  {
    variants: {
      active: {
        true: 'bg-fd-accent text-fd-accent-foreground [&_svg]:fill-current',
        false: 'text-fd-muted-foreground hover:bg-fd-accent/50',
      },
    },
  }
);

export interface FeedbackData {
  opinion: 'good' | 'bad';
  message: string;
}

const translations = {
  zh: {
    question: '这篇文档对您有帮助吗？',
    good: '有帮助',
    bad: '没帮助',
    thanks: '感谢您的反馈！',
    placeholder: '请留下您的反馈...',
    submit: '提交',
  },
  en: {
    question: 'How is this guide?',
    good: 'Good',
    bad: 'Bad',
    thanks: 'Thank you for your feedback!',
    placeholder: 'Leave your feedback...',
    submit: 'Submit',
  },
  'zh-Hant': {
    question: '這篇文檔對您有幫助嗎？',
    good: '有幫助',
    bad: '沒幫助',
    thanks: '感謝您的回饋！',
    placeholder: '請留下您的回饋...',
    submit: '提交',
  },
  ja: {
    question: 'このガイドは役に立ちましたか？',
    good: '役に立った',
    bad: '役に立たなかった',
    thanks: 'フィードバックありがとうございます！',
    placeholder: 'フィードバックをお書きください...',
    submit: '送信',
  },
  es: {
    question: '¿Te resultó útil esta guía?',
    good: 'Útil',
    bad: 'No útil',
    thanks: '¡Gracias por tu opinión!',
    placeholder: 'Deja tu comentario...',
    submit: 'Enviar',
  },
};

export function Feedback({ lang }: { lang: string }) {
  const url = usePathname();
  const [submitted, setSubmitted] = useState(false);
  const [opinion, setOpinion] = useState<'good' | 'bad' | null>(null);
  const [message, setMessage] = useState('');

  const t = translations[lang as keyof typeof translations] || translations.zh;

  useEffect(() => {
    const item = localStorage.getItem(`docs-feedback-${url}`);
    if (item) setSubmitted(true);
  }, [url]);

  function submit(e?: SyntheticEvent) {
    if (opinion == null) return;
    e?.preventDefault();
    localStorage.setItem(`docs-feedback-${url}`, JSON.stringify({ opinion, message }));
    setSubmitted(true);
    setMessage('');
    setOpinion(null);
  }

  const activeOpinion = submitted ? null : opinion;

  return (
    <Collapsible
      open={opinion !== null || submitted}
      onOpenChange={(v) => { if (!v) setOpinion(null); }}
      className="border-y py-3"
    >
      <div className="flex flex-row flex-wrap items-center gap-2">
        <p className="pe-2 text-sm font-medium">{t.question}</p>
        <button
          disabled={submitted}
          className={cn(rateButtonVariants({ active: activeOpinion === 'good' }))}
          onClick={() => setOpinion('good')}
        >
          <ThumbsUp />
          {t.good}
        </button>
        <button
          disabled={submitted}
          className={cn(rateButtonVariants({ active: activeOpinion === 'bad' }))}
          onClick={() => setOpinion('bad')}
        >
          <ThumbsDown />
          {t.bad}
        </button>
      </div>
      <CollapsibleContent className="mt-3">
        {submitted ? (
          <div className="bg-fd-card text-fd-muted-foreground flex flex-col items-center gap-3 rounded-xl px-3 py-6 text-center text-sm">
            <p>{t.thanks}</p>
          </div>
        ) : (
          <form className="flex flex-col gap-3" onSubmit={submit}>
            <textarea
              autoFocus
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-fd-secondary text-fd-secondary-foreground placeholder:text-fd-muted-foreground resize-none rounded-lg border p-3 focus-visible:outline-none"
              placeholder={t.placeholder}
              onKeyDown={(e) => {
                if (!e.shiftKey && e.key === 'Enter') submit(e);
              }}
            />
            <button
              type="submit"
              className={cn(buttonVariants({ color: 'outline' }), 'w-fit px-3')}
            >
              {t.submit}
            </button>
          </form>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
}
