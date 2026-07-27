"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader, useLanguage } from "../site-chrome";

const services = [
  ["Offset printing", "ኦፍሴት ህትመት", "Consistent, economical color for books, brochures, forms, and larger production runs.", "ለመጽሐፍት፣ ብሮሹሮች፣ ቅጾችና ብዛት ላላቸው ስራዎች ወጥ የሆነ ጥራት።", "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1200&q=88", "Volume / precision"],
  ["Digital printing", "ዲጂታል ህትመት", "Fast, flexible short runs with vivid color—ideal for urgent and personalized jobs.", "ለአስቸኳይና ለግል የተዘጋጁ ስራዎች ፈጣን፣ ተለዋዋጭና ደማቅ ህትመት።", "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=88", "Fast / flexible"],
  ["Packaging", "ማሸጊያ", "Boxes, sleeves, labels, and product packaging engineered to protect and get noticed.", "ምርትዎን የሚጠብቁና ትኩረት የሚስቡ ሳጥኖች፣ መለያዎችና ማሸጊያዎች።", "https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&w=1200&q=88", "Structure / finish"],
  ["Brand stationery", "የድርጅት መገልገያዎች", "Business cards, letterheads, folders, receipts, and envelopes that feel unmistakably yours.", "የንግድ ካርዶች፣ ደብዳቤ ወረቀቶች፣ ፎልደሮች፣ ደረሰኞችና ፖስታዎች።", "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=88", "Identity / detail"],
  ["Books & school materials", "መጽሐፍትና የትምህርት ቁሳቁስ", "Durable books, exercise materials, certificates, calendars, and learning aids.", "ጠንካራ መጽሐፍት፣ የመማሪያ ቁሳቁሶች፣ ሰርተፍኬቶችና የዘመን መቁጠሪያዎች።", "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=88", "Learn / last"],
  ["Posters, banners & events", "ፖስተሮች፣ ባነሮችና ዝግጅቶች", "Large-format visuals, invitations, programs, signage, and complete event print kits.", "ትልቅ ፎርማት ህትመት፣ ግብዣዎች፣ ፕሮግራሞች፣ ምልክቶችና የዝግጅት ጥቅሎች።", "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=88", "Scale / impact"],
];

export default function ServicesPage() {
  const { language } = useLanguage();
  const am = language === "am";
  return <main className="bg-cream text-ink">
    <section className="services-page-hero"><SiteHeader /><div className="mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8">
      <p className="kicker">{am ? "ከሀሳብ እስከ ህትመት" : "From idea to finished piece"}</p>
      <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_.62fr] lg:items-end"><h1 className="page-title">{am ? "ለእያንዳንዱ ሀሳብ ትክክለኛው ህትመት።" : "The right print for every idea."}</h1><p className="max-w-xl text-xl font-semibold leading-9">{am ? "ዲዛይን፣ ህትመት፣ ማጠናቀቅና ማድረስ—ሁሉም በአንድ ቦታ።" : "Design support, production, finishing, and delivery—handled as one clear, dependable process."}</p></div>
    </div></section>
    <section className="services-showcase px-5 py-28 sm:px-8"><div className="mx-auto max-w-7xl">
      {services.map(([en, amharic, text, amText, image, tag], index) => <article className="service-feature" key={en}>
        <div className="service-feature-copy"><span>0{index + 1} / 06</span><h2>{am ? amharic : en}</h2><p>{am ? amText : text}</p><small>{tag}</small></div>
        <div className="service-feature-image"><Image src={image} alt={am ? amharic : en} fill sizes="(min-width:1024px) 50vw, 94vw" className="object-cover" /><i className="service-image-sweep" aria-hidden="true" /><b aria-hidden="true">{String(index + 1).padStart(2, "0")}</b></div>
      </article>)}
    </div></section>
    <section className="services-cta px-5 py-24 text-white sm:px-8"><div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-10"><div><p className="section-label text-yellow">{am ? "የሚቀጥለው ስራዎ" : "Your next print run"}</p><h2 className="display-title mt-5 max-w-4xl">{am ? "የሚፈልጉትን እንስራ።" : "Let’s make exactly what you need."}</h2></div><Link className="button button-yellow" href="/contact">{am ? "ዋጋ ይጠይቁ" : "Request a quote"} <span>↗</span></Link></div></section>
    <SiteFooter />
  </main>;
}
