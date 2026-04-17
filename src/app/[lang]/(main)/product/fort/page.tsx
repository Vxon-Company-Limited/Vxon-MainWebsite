import type { Metadata } from "next";
import { VxonFortPage } from "./VxonFortPage";
import { metadata as metaT, type Locale } from "@/lib/translations/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const m = metaT[lang as Locale] ?? metaT.zh;
  return { title: m.productFort.title, description: m.productFort.description };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <VxonFortPage locale={lang} />;
}
