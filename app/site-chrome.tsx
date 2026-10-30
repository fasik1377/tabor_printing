"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "am";
const LanguageContext = createContext<{language: Language; setLanguage: (l: Language) => void}>({ language: "en", setLanguage: () => undefined });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  useEffect(() => {
    let saved: string | null = null;
    try { saved = window.localStorage.getItem("tabor-language"); } catch {}
    const restoreLanguage = window.setTimeout(() => {
      if (saved === "am") setLanguageState("am");
    }, 0);
    return () => window.clearTimeout(restoreLanguage);
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const setLanguage = (value: Language) => {
    setLanguageState(value);
    try { window.localStorage.setItem("tabor-language", value); } catch {}
  };
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);

export const projectTypes = [
  ["Packaging", "ማሸጊያ"],
  ["Business stationery", "የቢሮ መገልገያዎች"],
  ["Posters & banners", "ፖስተርና ባነር"],
  ["Books & school materials", "መጽሐፍትና የትምህርት ቁሳቁስ"],
  ["Garments & cloth", "ልብስና ጨርቅ ህትመት"],
  ["Other", "ሌላ"],
];

export function SocialIcon({ name }: { name: "telegram" | "facebook" }) {
  return name === "telegram" ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.7 3.2 18.5 20c-.2 1.2-.9 1.5-1.9.9l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.4-.1-.6-.6-.2l-11 6.9-4.7-1.5c-1-.3-1-1 .2-1.5L20 3.8c.9-.3 1.9.2 1.7-.6Z" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.8 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7h1.9V2.4c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.6H7V13h3v9h3.8Z" /></svg>
  );
}

const nav = {
  en: { home: "Home", about: "About", gallery: "Gallery", services: "Services", contact: "Contact" },
  am: { home: "መነሻ", about: "ስለ እኛ", gallery: "ጋለሪ", services: "አገልግሎቶች", contact: "ያግኙን" },
};

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = nav[language];
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);
  return (
    <header className={`site-header relative z-50 ${dark ? "text-white" : "text-ink"}`}>
      <Link href="/" className="brand">
        <span className="brand-logo-3d">
          <Image className="brand-logo-image" src="/images/logo.jpg" alt="Tabor Printing Press logo" width={58} height={58} priority />
          <i className="brand-logo-shadow" aria-hidden="true" />
          <i className="brand-logo-paper" aria-hidden="true" />
        </span>
        <span><b>{language === "am" ? "ታቦር" : "TABOR"}</b><small>{language === "am" ? "ማተሚያ ቤት" : "PRINTING PRESS"}</small></span>
      </Link>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen((open) => !open)}>
        <span /><span /><span />
      </button>
      <nav id="primary-navigation" className={menuOpen ? "menu-open" : ""} aria-label="Primary navigation">
        <Link onClick={() => setMenuOpen(false)} className={pathname === "/" ? "active" : ""} href="/">{t.home}</Link>
        <Link onClick={() => setMenuOpen(false)} className={pathname === "/about" ? "active" : ""} href="/about">{t.about}</Link>
        <Link onClick={() => setMenuOpen(false)} className={pathname === "/gallery" ? "active" : ""} href="/gallery">{t.gallery}</Link>
        <Link onClick={() => setMenuOpen(false)} className={pathname === "/services" ? "active" : ""} href="/services">{t.services}</Link>
        <Link onClick={() => setMenuOpen(false)} className={pathname === "/contact" ? "active" : ""} href="/contact">{t.contact}</Link>
      </nav>
      <div className="language-switch" role="group" aria-label="Language selector">
        <button type="button" lang="en" aria-pressed={language === "en"} aria-label="English" className={language === "en" ? "selected" : ""} onClick={() => setLanguage("en")}>EN</button>
        <span aria-hidden="true">/</span>
        <button type="button" lang="am" aria-pressed={language === "am"} aria-label="አማርኛ" className={language === "am" ? "selected" : ""} onClick={() => setLanguage("am")}>አማ</button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { language } = useLanguage();
  const am = language === "am";
  const t = nav[language];
  return (
    <footer className="modern-footer">
      <div className="footer-cta">
        <div>
          <span>{language === "am" ? "ቀጣዩ ፕሮጀክትዎ" : "Your next project"}</span>
          <h2>{language === "am" ? "አንድ ላይ እናትም።" : "Let’s make it tangible."}</h2>
        </div>
        <a href="mailto:tabordigitaladvert@gmail.com">{language === "am" ? "ያግኙን" : "Start a conversation"} <b>↗</b></a>
      </div>
      <div className="footer-main">
        <div className="footer-intro">
          <div className="brand footer-brand"><Image className="brand-logo-image footer-logo-image" src="/images/logo.jpg" alt="Tabor Printing Press logo" width={58} height={58} /><span><b>ታቦር / TABOR</b><small>ማተሚያ ቤት / PRINTING PRESS</small></span></div>
          <p>{language === "am" ? "ሀሳቦችን በቀለም፣ በወረቀትና በጥራት እውን እናደርጋለን።" : "Ideas made tangible through color, paper, craft, and care."}</p>
          <div className="footer-swatches"><i /><i /><i /><i /></div>
        </div>
        <div className="footer-column"><span>{am ? "ያስሱ" : "Explore"}</span><Link href="/">{t.home}</Link><Link href="/about">{t.about}</Link><Link href="/gallery">{t.gallery}</Link><Link href="/contact">{t.contact}</Link></div>
        <div className="footer-column"><span>{t.services}</span><Link href="/services">{am ? "ኦፍሴት ህትመት" : "Offset print"}</Link><Link href="/services">{am ? "ዲጂታል ህትመት" : "Digital print"}</Link><Link href="/services">{am ? "ማሸጊያ" : "Packaging"}</Link><Link href="/services">{am ? "የልብስ ህትመት" : "Garment print"}</Link></div>
        <div className="footer-column footer-contact"><span>{am ? "ሰላም ይበሉን" : "Say hello"}</span><a href="mailto:tabordigitaladvert@gmail.com">tabordigitaladvert@gmail.com</a><a href="tel:+251916038585">0916038585</a><a href="tel:+251967213619">0967213619</a><div className="social-icon-links"><a href="https://t.me/Tabro_advert" target="_blank" rel="noreferrer" aria-label="Tabor on Telegram"><SocialIcon name="telegram" /></a><a href="https://www.facebook.com/profile.php?id=100070440477160" target="_blank" rel="noreferrer" aria-label="Tabor on Facebook"><SocialIcon name="facebook" /></a></div></div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tabor Printing Press. {am ? "መብቱ በህግ የተጠበቀ ነው።" : "All rights reserved."}</p>
        <p>{am ? "የተሰራው በ" : "Developed by"} <a className="developer-link" href="https://fasik1377.github.io/fasika-abera/" target="_blank" rel="noreferrer">Fasika Abera ↗</a></p>
      </div>
    </footer>
  );
}
