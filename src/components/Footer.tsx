import Link from "next/link";
import { t, footer as footerT } from "@/lib/translations/site";

export function Footer({ locale }: { locale: string }) {
  const s = t(footerT, locale);
  return (
    <footer className="relative z-10 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{s.products}</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link href={`/${locale}/product/api`} className="hover:text-zinc-300 transition-colors">VxonAPI</Link></li>
              <li><Link href={`/${locale}/product/ai`} className="hover:text-zinc-300 transition-colors">VxonAI</Link></li>
              <li><Link href={`/${locale}/product/claw`} className="hover:text-zinc-300 transition-colors">VxonClaw</Link></li>
              <li><Link href={`/${locale}/product/fort`} className="hover:text-zinc-300 transition-colors">VxonFort</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{s.resources}</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link href={`/${locale}/docs`} className="hover:text-zinc-300 transition-colors">{s.docs}</Link></li>
              <li><Link href={`/${locale}/models`} className="hover:text-zinc-300 transition-colors">{s.models}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{s.company}</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link href={`/${locale}/docs/guide/wiki/basic-concepts/project-introduction`} className="hover:text-zinc-300 transition-colors">{s.aboutUs}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{s.community}</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="https://github.com/Vxon" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Vxon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
