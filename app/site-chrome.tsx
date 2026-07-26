"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "am";
const LanguageContext = createContext<{language: Language; setLanguage: (l: Language) => void}>({ language: "en", setLanguage: () => undefined });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  useEffect(() => {
    const saved = window.localStorage.getItem("tabor-language");
    const restoreLanguage = window.setTimeout(() => {
      if (saved === "am") setLanguageState("am");
    }, 0);
    return () => window.clearTimeout(restoreLanguage);
  }, []);
  const setLanguage = (value: Language) => {
    setLanguageState(value);
    window.localStorage.setItem("tabor-language", value);
    document.documentElement.lang = value === "am" ? "am" : "en";
  };
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);

const nav = {
  en: { home: "Home", about: "About", gallery: "Gallery", services: "Services", contact: "Contact" },
  am: { home: "መነሻ", about: "ስለ እኛ", gallery: "ጋለሪ", services: "አገልግሎቶች", contact: "ያግኙን" },
};

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const t = nav[language];
  return (
    <header className={`site-header relative z-50 ${dark ? "text-white" : "text-ink"}`}>
      <Link href="/" className="brand"><span className="brand-cube"><span className="brand-mark brand-front">ታ</span><span className="brand-mark brand-back">T</span><span className="brand-side brand-left" /><span className="brand-side brand-right" /><span className="brand-side brand-top" /><span className="brand-side brand-bottom" /><span className="brand-ink" /></span><span><b>{language === "am" ? "ታቦር" : "TABOR"}</b><small>{language === "am" ? "ማተሚያ ቤት" : "PRINTING PRESS"}</small></span></Link>
      <nav aria-label="Primary navigation">
        <Link className={pathname === "/" ? "active" : ""} href="/">{t.home}</Link>
        <Link className={pathname === "/about" ? "active" : ""} href="/about">{t.about}</Link>
        <Link className={pathname === "/gallery" ? "active" : ""} href="/gallery">{t.gallery}</Link>
        <Link href="/#services">{t.services}</Link>
        <Link href="/#contact">{t.contact}</Link>
      </nav>
      <div className="language-switch" aria-label="Language selector">
        <button className={language === "en" ? "selected" : ""} onClick={() => setLanguage("en")}>EN</button>
        <span>/</span>
        <button className={language === "am" ? "selected" : ""} onClick={() => setLanguage("am")}>አማ</button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { language } = useLanguage();
  return (
    <footer className="bg-yellow px-5 py-12 text-ink sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row">
        <div><div className="brand"><span className="brand-cube"><span className="brand-mark brand-front">ታ</span><span className="brand-mark brand-back">T</span></span><span><b>ታቦር / TABOR</b><small>ማተሚያ ቤት / PRINTING PRESS</small></span></div><p className="mt-5 max-w-md font-semibold">{language === "am" ? "ሀሳቦችን በቀለም፣ በወረቀትና በጥራት እውን እናደርጋለን።" : "Ideas made tangible through color, paper, craft, and care."}</p></div>
        <div className="grid gap-2 text-sm font-black uppercase"><Link href="/about">About / ስለ እኛ</Link><Link href="/gallery">Gallery / ጋለሪ</Link><a href="mailto:hello@taborprintingpress.com">hello@taborprintingpress.com</a><span>Hawassa, Ethiopia</span></div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t-2 border-ink pt-6 text-xs font-extrabold uppercase tracking-[.12em] sm:flex-row">
        <p>© {new Date().getFullYear()} Tabor Printing Press. All rights reserved.</p>
        <p>Developed by <a className="developer-link" href="https://fasik1377.github.io/fasika-abera/" target="_blank" rel="noreferrer">Fasika Abera ↗</a></p>
      </div>
    </footer>
  );
}
