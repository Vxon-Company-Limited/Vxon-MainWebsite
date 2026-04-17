import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Advantages } from "@/components/Advantages";
import { Scenarios } from "@/components/Scenarios";
import { Partners } from "@/components/Partners";
import { Metrics } from "@/components/Metrics";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { metadata as metaT, type Locale } from "@/lib/translations/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const m = metaT[lang as Locale] ?? metaT.zh;
  return { title: m.home.title, description: m.home.description };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-blue-500/30">
      <Navbar locale={lang} />
      <Hero locale={lang} />
      <Products locale={lang} />
      <Advantages locale={lang} />
      <Scenarios locale={lang} />
      <Partners locale={lang} />
      <Metrics locale={lang} />
      <CTA locale={lang} />
      <Footer locale={lang} />
    </main>
  );
}
