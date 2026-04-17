import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default async function ProductLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-blue-500/30">
      <Navbar locale={lang} />
      {children}
      <Footer locale={lang} />
    </main>
  );
}
