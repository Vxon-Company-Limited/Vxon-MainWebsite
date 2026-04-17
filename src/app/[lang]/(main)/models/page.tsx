import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ModelHub } from "@/components/ModelHub";
import type { Metadata } from "next";
import { metadata as metaT, type Locale } from "@/lib/translations/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const m = metaT[lang as Locale] ?? metaT.zh;
  return { title: m.models.title, description: m.models.description };
}

export default async function ModelsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 flex flex-col">
      <Navbar locale={lang} />
      <div className="flex-1 pt-24 pb-12">
        <ModelHub locale={lang} />
      </div>
      <Footer locale={lang} />
    </main>
  );
}
