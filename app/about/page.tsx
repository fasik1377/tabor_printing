"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader, useLanguage } from "../site-chrome";

const copy = {
  en: {
    label: "About Tabor",
    title: "A local press with bold ambition.",
    intro: "We help ideas move from screen to paper with clarity, color, and craft.",
    storyLabel: "Our story",
    storyTitle: "Built in Hawassa. Made for everywhere.",
    story: "Tabor Printing Press is a production partner for people who care how their work shows up in the world. We combine attentive service, practical advice, modern production, and careful finishing—whether the job is one box of business cards or a complete campaign.",
    values: [["Clarity", "Straightforward advice and clear communication at every stage."], ["Craft", "Careful color, material selection, trimming, and finishing."], ["Reliability", "Realistic timelines and production you can plan around."]],
    cta: "See what we make",
  },
  am: {
    label: "ስለ ታቦር",
    title: "ትልቅ ራዕይ ያለው የአካባቢ ማተሚያ ቤት።",
    intro: "ሀሳቦችን ከስክሪን ወደ ወረቀት በግልጽነት፣ በቀለምና በጥበብ እናሸጋግራለን።",
    storyLabel: "ታሪካችን",
    storyTitle: "በሐዋሳ የተመሰረተ። ለሁሉም ቦታ የተዘጋጀ።",
    story: "ታቦር ማተሚያ ቤት ስራቸው ለዓለም እንዴት እንደሚታይ ለሚጨነቁ ሰዎች የምርት አጋር ነው። ከአንድ ሳጥን የንግድ ካርድ እስከ ሙሉ ዘመቻ ድረስ ትኩረት፣ ተግባራዊ ምክርና ጥራት እናቀርባለን።",
    values: [["ግልጽነት", "በእያንዳንዱ ደረጃ ቀጥተኛ ምክርና ግልጽ ግንኙነት።"], ["ጥበብ", "በቀለም፣ በቁሳቁስ፣ በቆረጣና በማጠናቀቅ ላይ ጥንቃቄ።"], ["አስተማማኝነት", "ተጨባጭ የጊዜ ሰሌዳና ሊታቀድ የሚችል ምርት።"]],
    cta: "ስራዎቻችንን ይመልከቱ",
  },
};

export default function AboutPage() {
  const { language } = useLanguage();
  const t = copy[language];
  return <main className="bg-cream text-ink"><section className="page-hero about-page-hero"><Image src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=2000&q=90" alt="" fill priority sizes="100vw" className="inner-hero-background object-cover" /><div className="inner-hero-wash about-hero-wash" /><SiteHeader dark /><div className="about-hero-layout mx-auto grid max-w-7xl gap-10 px-5 pb-24 pt-16 text-white sm:px-8 lg:grid-cols-[1fr_.8fr] lg:items-center"><div className="about-hero-copy"><p className="kicker inner-hero-kicker">{t.label}</p><h1 className="page-title inner-painted-title mt-7">{t.title}</h1><p className="inner-hero-lead mt-8 max-w-2xl text-xl font-semibold leading-9">{t.intro}</p><div className="hero-paint-tool hero-paint-brush" aria-hidden="true"><i /><b /><span /><em /></div></div><div className="about-paint-canvas"><div className="about-canvas-image relative"><Image src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1200&q=85" alt="Printing and paper production workspace" fill priority sizes="(min-width:1024px) 40vw, 90vw" className="object-cover" /></div><span>COLOR / CRAFT / HAWASSA</span><i /><i /><i /></div></div></section>
  <section className="about-story px-5 py-28 sm:px-8"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.6fr_1fr]"><p className="section-label">{t.storyLabel}</p><div><h2 className="display-title">{t.storyTitle}</h2><p className="mt-8 text-lg font-medium leading-9 text-zinc-700">{t.story}</p></div></div><div className="mx-auto mt-24 grid max-w-7xl gap-5 md:grid-cols-3">{t.values.map(([title,text],i)=><article className="value-card" key={title}><b>0{i+1}</b><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  <section className="about-numbers"><div><strong>4K+</strong><span>{language === "am" ? "የህትመት ፕሮጀክቶች" : "print projects"}</span></div><div><strong>24h</strong><span>{language === "am" ? "ፈጣን የዋጋ ምላሽ" : "quote response"}</span></div><div><strong>100%</strong><span>{language === "am" ? "ለጥራት ትኩረት" : "attention to finish"}</span></div></section>
  <section className="about-promise px-5 py-28 sm:px-8"><div className="mx-auto max-w-7xl"><span className="section-label">{language === "am" ? "የእኛ ቃል" : "Our promise"}</span><blockquote>{language === "am" ? "ስራዎን እንደራሳችን ስራ እንይዛለን—እያንዳንዱ ቀለም፣ ጠርዝና ዝርዝር አስፈላጊ ነው።" : "We treat your work like our own—because every color, edge, and detail carries your name."}</blockquote><Link className="button button-dark mt-12" href="/gallery">{t.cta} ↗</Link></div></section><SiteFooter /></main>;
}
