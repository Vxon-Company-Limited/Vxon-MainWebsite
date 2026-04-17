import type { Metadata } from "next";
import { PricingPage } from "./PricingPage";
import { metadata as metaT, type Locale } from "@/lib/translations/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const m = metaT[lang as Locale] ?? metaT.zh;
  return { title: m.pricing.title, description: m.pricing.description };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <PricingPage locale={lang} />;
}
