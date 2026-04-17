"use client";

import { useEffect, useState } from "react";
import { ArrowRight, MessageSquareCode } from "lucide-react";
import Link from "next/link";
import { t, cta as ctaT } from "@/lib/translations/site";

export function CTA({ locale }: { locale: string }) {
  const s = t(ctaT, locale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section style={{ 
        position: 'relative', 
        padding: '96px 24px',
        minHeight: '500px',
        backgroundColor: 'var(--background)'
      }} />
    );
  }

  return (
    <section style={{
      position: 'relative',
      padding: '96px 24px',
      overflow: 'hidden',
      minHeight: '500px'
    }}>
      {/* 视频背景 - 使用 poster 作为 fallback */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          top: '-50px',
          left: 0,
          width: '100%',
          height: 'calc(100% + 100px)',
          objectFit: 'cover',
          opacity: 0.4,
          zIndex: 0,
        }}
      >
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* 遮罩 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'color-mix(in srgb, var(--background), transparent 30%)',
        zIndex: 1,
      }} />

      {/* 内容 */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '896px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: 'clamp(1.875rem, 5vw, 3rem)',
          fontWeight: 'bold',
          color: 'var(--foreground)',
          marginBottom: '24px',
        }}>
          {s.title}
        </h2>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--muted-foreground)',
          marginBottom: '40px',
        }}>
          {s.subtitle}
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Link
            href="#signup"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 32px',
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              fontWeight: '600',
              borderRadius: '9999px',
              textDecoration: 'none',
            }}
          >
            {s.primary}
            <ArrowRight size={20} />
          </Link>

          <Link
            href="#demo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 32px',
              backgroundColor: 'color-mix(in srgb, var(--foreground), transparent 95%)',
              border: '1px solid var(--border)',
              color: 'var(--foreground)',
              fontWeight: '600',
              borderRadius: '9999px',
              textDecoration: 'none',
            }}
          >
            <MessageSquareCode size={20} />
            {s.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
