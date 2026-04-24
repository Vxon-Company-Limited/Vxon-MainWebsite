"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Server, Box, BrainCircuit, Shield, ChevronDown, Code2, BarChart3, Briefcase, Building2, Users, Mail, Globe, Leaf } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { t, navbar as navbarT, type Locale } from "@/lib/translations/site";
import { ThemeToggle } from "./ThemeToggle";

const productIcons: LucideIcon[] = [Server, Box, BrainCircuit, Shield];
const productIds = ["api", "ai", "claw", "fort"];
const productSoon = [false, false, false, true];

const solutionIcons: LucideIcon[] = [Code2, BarChart3, Briefcase];
const solutionHrefs = ["/product/ai", "/product/claw", "/product/fort"];

const aboutIcons: LucideIcon[] = [Building2, Users, Mail];
const aboutHrefs = ["#about", "#careers", "#contact"];

const languages: { code: Locale; label: string }[] = [
  { code: 'zh', label: '简体中文' },
  { code: 'en', label: 'English' },
  { code: 'zh-Hant', label: '繁體中文' },
  { code: 'ja', label: '日本語' },
  { code: 'es', label: 'Español' },
];

export function Navbar({ locale }: { locale: string }) {
  const s = t(navbarT, locale);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const lp = (path: string) => `/${locale}${path}`;

  const switchLang = (code: string) => {
    const segments = pathname.split('/');
    segments[1] = code;
    return segments.join('/');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuEnter = (menu: string) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const handlePanelEnter = () => clearTimeout(timeoutRef.current);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-[20px] border-b border-white/5"
          : "bg-transparent"
      }`}
      onMouseLeave={handleMenuLeave}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all">
            <span className="text-white font-bold text-xl">V</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Vxon</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMenuEnter("products")}
          >
            <button className={`nav-link flex items-center gap-1 px-3 py-2 text-sm transition-colors rounded-lg ${activeMenu === "products" ? "text-white" : "text-zinc-400 hover:text-white"}`}>
              {s.products}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === "products" ? "rotate-180" : ""}`} />
            </button>
          </div>

          <Link href={lp("/models")} className="nav-link px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg">
            {s.modelHub}
          </Link>

          {/* Solutions dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMenuEnter("solutions")}
          >
            <button className={`nav-link flex items-center gap-1 px-3 py-2 text-sm transition-colors rounded-lg ${activeMenu === "solutions" ? "text-white" : "text-zinc-400 hover:text-white"}`}>
              {s.solutions}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === "solutions" ? "rotate-180" : ""}`} />
            </button>
          </div>

          <Link href={lp("/pricing")} className="nav-link px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg">
            {s.pricing}
          </Link>
          <Link href={lp("/compare")} className="nav-link px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg">
            {s.compare}
          </Link>
          <Link href={lp("/docs")} target="_blank" className="nav-link px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg">
            {s.docs}
          </Link>

          {/* About dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMenuEnter("about")}
          >
            <button className={`nav-link flex items-center gap-1 px-3 py-2 text-sm transition-colors rounded-lg ${activeMenu === "about" ? "text-white" : "text-zinc-400 hover:text-white"}`}>
              {s.aboutUs}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === "about" ? "rotate-180" : ""}`} />
            </button>
          </div>
        </nav>

        {/* CTA + Language Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <div className="relative">
            <button
              className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              onBlur={() => setTimeout(() => setLangMenuOpen(false), 150)}
            >
              <Globe className="w-4 h-4" />
              {languages.find(l => l.code === locale)?.label ?? locale}
              <ChevronDown className={`w-3 h-3 transition-transform ${langMenuOpen ? "rotate-180" : ""}`} />
            </button>
            {langMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg py-1 min-w-[140px] z-50">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={switchLang(lang.code)}
                    className={`block px-4 py-2 text-sm transition-colors ${lang.code === locale ? 'text-blue-400' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                    onClick={() => setLangMenuOpen(false)}
                  >
                    {lang.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="#login" className="text-sm text-zinc-400 hover:text-white transition-colors">
            {s.login}
          </Link>
          <Link
            href="#signup"
            className="group flex items-center gap-2 px-5 py-2 bg-white text-zinc-900 text-sm font-medium rounded-full hover:bg-zinc-200 transition-all"
          >
            {s.freeTrial}
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-zinc-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Desktop Mega Menu Panels */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 bg-black/80 backdrop-blur-xl border-b border-white/10"
            onMouseEnter={handlePanelEnter}
            onMouseLeave={handleMenuLeave}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
              {activeMenu === "products" && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {productIds.map((id, idx) => {
                    const Icon = productIcons[idx];
                    const pi = s.productItems[idx];
                    const titles = ["VxonAPI", "VxonAI", "VxonClaw", "VxonFort ZT"];
                    return (
                    <Link
                      key={id}
                      href={lp(`/product/${id}`)}
                      className="group/card relative flex flex-col gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-blue-500 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity" />
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-white">{titles[idx]}</span>
                            {productSoon[idx] && <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded">{s.comingSoon}</span>}
                          </div>
                          <span className="text-xs text-zinc-500">{pi.subtitle}</span>
                        </div>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">{pi.desc}</p>
                      <span className="text-xs text-zinc-500 group-hover/card:text-blue-400 transition-colors flex items-center gap-1">
                        {s.enter} <ArrowRight className="w-3 h-3 group-hover/card:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                    );
                  })}
                </div>
              )}
              {activeMenu === "solutions" && (
                <div className="grid grid-cols-3 gap-4 max-w-3xl">
                  {s.solutionItems.map((sol, idx) => {
                    const Icon = solutionIcons[idx];
                    return (
                    <Link
                      key={idx}
                      href={lp(solutionHrefs[idx])}
                      className="group/card relative flex flex-col gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-blue-500 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity" />
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-white">{sol.title}</span>
                      <span className="text-xs text-zinc-400">{sol.desc}</span>
                    </Link>
                    );
                  })}
                </div>
              )}
              {activeMenu === "about" && (
                <div className="flex gap-8 max-w-md">
                  <div className="flex flex-col gap-2">
                    {s.aboutItems.map((title, idx) => {
                      const Icon = aboutIcons[idx];
                      return (
                      <Link
                        key={idx}
                        href={aboutHrefs[idx]}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setActiveMenu(null)}
                      >
                        <Icon className="w-4 h-4" />
                        {title}
                      </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-0 top-0 bg-black/95 backdrop-blur-xl z-50 lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">Vxon</span>
              </Link>
              <button className="text-zinc-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              <MobileSection title={s.products}>
                {productIds.map((id, idx) => {
                  const Icon = productIcons[idx];
                  const pi = s.productItems[idx];
                  const titles = ["VxonAPI", "VxonAI", "VxonClaw", "VxonFort ZT"];
                  return (
                  <Link key={id} href={lp(`/product/${id}`)} className="flex items-center gap-3 py-3 text-zinc-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                    <Icon className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-sm font-medium">{titles[idx]}</div>
                      <div className="text-xs text-zinc-500">{pi.subtitle}</div>
                    </div>
                  </Link>
                  );
                })}
              </MobileSection>
              <Link href={lp("/models")} className="block py-3 text-lg font-medium text-zinc-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>{s.modelHub}</Link>
              <MobileSection title={s.solutions}>
                {s.solutionItems.map((sol, idx) => (
                  <Link key={idx} href={lp(solutionHrefs[idx])} className="block py-3 text-zinc-300 hover:text-white text-sm" onClick={() => setMobileMenuOpen(false)}>{sol.title}</Link>
                ))}
              </MobileSection>
              <Link href={lp("/pricing")} className="block py-3 text-lg font-medium text-zinc-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>{s.pricing}</Link>
              <Link href={lp("/compare")} className="block py-3 text-lg font-medium text-zinc-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>{s.compare}</Link>
              <Link href={lp("/docs")} className="block py-3 text-lg font-medium text-zinc-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>{s.docs}</Link>
              <div className="h-px bg-white/10" />
              <div className="flex items-center gap-3 py-3">
                <ThemeToggle />
              </div>
              <MobileSection title={s.langLabel}>
                {languages.map((lang) => (
                  <Link key={lang.code} href={switchLang(lang.code)} className={`block py-2 text-sm ${lang.code === locale ? 'text-blue-400' : 'text-zinc-400 hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>{lang.label}</Link>
                ))}
              </MobileSection>
              <Link href="#login" className="block py-3 text-zinc-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>{s.login}</Link>
              <Link
                href="#signup"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white text-zinc-900 font-semibold rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {s.freeTrial}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="flex items-center justify-between w-full py-3 text-lg font-medium text-zinc-300 hover:text-white"
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-4 border-l border-white/10"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
