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
      <Link href="/" className="brand">
        <span className="print-logo" aria-hidden="true">
          <span className="print-roller"><span>ታ</span></span>
          <span className="roller-arm" />
          <span className="ink-trail" />
          <span className="ink-spark ink-spark-one" />
          <span className="ink-spark ink-spark-two" />
        </span>
        <span><b>{language === "am" ? "ታቦር" : "TABOR"}</b><small>{language === "am" ? "ማተሚያ ቤት" : "PRINTING PRESS"}</small></span>
      </Link>
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
    <footer className="modern-footer">
      <div className="footer-cta">
        <div>
          <span>{language === "am" ? "ቀጣዩ ፕሮጀክትዎ" : "Your next project"}</span>
          <h2>{language === "am" ? "አንድ ላይ እናትም።" : "Let’s make it tangible."}</h2>
        </div>
        <a href="mailto:hello@taborprintingpress.com">{language === "am" ? "ያግኙን" : "Start a conversation"} <b>↗</b></a>
      </div>
      <div className="footer-main">
        <div className="footer-intro">
          <div className="brand footer-brand"><span className="footer-logo">ታ</span><span><b>ታቦር / TABOR</b><small>ማተሚያ ቤት / PRINTING PRESS</small></span></div>
          <p>{language === "am" ? "ሀሳቦችን በቀለም፣ በወረቀትና በጥራት እውን እናደርጋለን።" : "Ideas made tangible through color, paper, craft, and care."}</p>
          <div className="footer-swatches"><i /><i /><i /><i /></div>
        </div>
        <div className="footer-column"><span>Explore</span><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/gallery">Gallery</Link></div>
        <div className="footer-column"><span>Services</span><Link href="/#services">Offset print</Link><Link href="/#services">Digital print</Link><Link href="/#services">Packaging</Link></div>
        <div className="footer-column footer-contact"><span>Say hello</span><a href="mailto:hello@taborprintingpress.com">hello@taborprintingpress.com</a><p>Hawassa, Ethiopia</p></div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tabor Printing Press. All rights reserved.</p>
        <p>Developed by <a className="developer-link" href="https://fasik1377.github.io/fasika-abera/" target="_blank" rel="noreferrer">Fasika Abera ↗</a></p>
      </div>
    </footer>
  );
}
