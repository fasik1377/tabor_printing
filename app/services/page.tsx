"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader, useLanguage } from "../site-chrome";

const services = [
  ["Offset printing", "ኦፍሴት ህትመት", "Consistent, economical color for books, brochures, forms, and larger production runs.", "ለመጽሐፍት፣ ብሮሹሮች፣ ቅጾችና ብዛት ላላቸው ስራዎች ወጥ የሆነ ጥራት።", "/images/book_cover6.jpg", "Volume / precision"],
  ["Digital printing", "ዲጂታል ህትመት", "Fast, flexible short runs with vivid color—ideal for urgent and personalized jobs.", "ለአስቸኳይና ለግል የተዘጋጁ ስራዎች ፈጣን፣ ተለዋዋጭና ደማቅ ህትመት።", "/images/flyer3.jpg", "Fast / flexible"],
  ["Packaging & labels", "ማሸጊያና መለያዎች", "Boxes, sleeves, labels, and product packaging engineered to protect and get noticed.", "ምርትዎን የሚጠብቁና ትኩረት የሚስቡ ሳጥኖች፣ መለያዎችና ማሸጊያዎች።", "/images/flyer2.jpg", "Structure / finish"],
  ["Brand stationery", "የድርጅት መገልገያዎች", "Business cards, letterheads, folders, receipts, and envelopes that feel unmistakably yours.", "የንግድ ካርዶች፣ ደብዳቤ ወረቀቶች፣ ፎልደሮች፣ ደረሰኞችና ፖስታዎች።", "/images/business_card3.jpg", "Identity / detail"],
  ["Books & school materials", "መጽሐፍትና የትምህርት ቁሳቁስ", "Durable books, exercise materials, certificates, calendars, and learning aids.", "ጠንካራ መጽሐፍት፣ የመማሪያ ቁሳቁሶች፣ ሰርተፍኬቶችና የዘመን መቁጠሪያዎች።", "/images/book_cover7.png", "Learn / last"],
  ["Posters & party promotion", "ፖስተሮችና የድግስ ማስታወቂያ", "Bold posters, invitations, programs, and campaign visuals designed to make events impossible to miss.", "ትኩረት የሚስቡ ፖስተሮች፣ ግብዣዎች፣ ፕሮግራሞችና የዝግጅት ማስታወቂያዎች።", "/images/party_poster.jpg", "Events / attention"],
  ["Garment printing", "የልብስ ህትመት", "Custom T-shirts, uniforms, branded apparel, and promotional garments printed for teams, businesses, and events.", "ለቡድኖች፣ ለንግዶችና ለዝግጅቶች ብጁ ቲሸርቶች፣ ዩኒፎርሞችና የማስታወቂያ ልብሶች።", "/images/garment.jpg", "Wear / promote"],
  ["Cloth & event printing", "የጨርቅና የዝግጅት ህትመት", "Printed event cloths, backdrops, table covers, and fabric branding made for a strong physical presence.", "የዝግጅት ጨርቆች፣ የጀርባ ማስዋቢያዎች፣ የጠረጴዛ ልብሶችና የጨርቅ ብራንዲንግ።", "/images/cloth_for_event.jpg", "Fabric / events"],
  ["Vehicle stickers & graphics", "የመኪና ስቲከርና ግራፊክስ", "Durable vehicle lettering, promotional stickers, and branded graphics prepared for clean, visible application.", "ጠንካራ የመኪና ፊደላት፣ የማስታወቂያ ስቲከሮችና የብራንድ ግራፊክስ።", "/images/car_sticker.jpg", "Mobile / visible"],
  ["Billboards & wall advertising", "ቢልቦርድና የግድግዳ ማስታወቂያ", "Large-format corporate campaigns, wall graphics, and outdoor advertising produced for maximum visibility.", "ትልቅ የድርጅት ዘመቻዎች፣ የግድግዳ ግራፊክስና የውጭ ማስታወቂያዎች።", "/images/dashen_bank_ad.jpg", "Scale / impact"],
];

export default function ServicesPage() {
  const { language } = useLanguage();
  const am = language === "am";
  return <main className="bg-cream text-ink">
    <section className="services-page-hero">
      <Image src="/images/background_cover.jpg" alt="" fill priority sizes="100vw" className="inner-hero-background object-cover" />
      <div className="inner-hero-wash services-hero-wash" />
      <SiteHeader dark />
      <div className="services-hero-ink" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="services-hero-layout mx-auto max-w-7xl px-5 pb-24 pt-14 sm:px-8">
        <div className="services-hero-copy">
          <p className="kicker inner-hero-kicker">{am ? "ከሀሳብ እስከ ህትመት" : "From idea to finished piece"}</p>
          <h1 className="page-title inner-painted-title mt-7">{am ? "ለእያንዳንዱ ሀሳብ ትክክለኛው ህትመት።" : "The right print for every idea."}</h1>
          <p className="inner-hero-lead mt-8 max-w-xl text-xl font-semibold leading-9">{am ? "ዲዛይን፣ ህትመት፣ ማጠናቀቅና ማድረስ—ሁሉም በአንድ ቦታ።" : "Design support, production, finishing, and delivery—handled as one clear, dependable process."}</p>
          <div className="hero-paint-tool hero-paint-roller" aria-hidden="true"><span /><i /><b /></div>
        </div>
        <div className="services-hero-machine" aria-label="Animated print samples">
          <div className="print-sheet print-sheet-back"><Image src="/images/cloth_for_event.jpg" alt="Custom event cloth printing" fill sizes="40vw" className="object-cover" /></div>
          <div className="print-sheet print-sheet-middle"><Image src="/images/flyer3.jpg" alt="Tabor flyer printing" fill sizes="40vw" className="object-cover" /></div>
          <div className="print-sheet print-sheet-front"><Image src="/images/party_poster.jpg" alt="Party poster printed by Tabor" fill priority sizes="(min-width:1024px) 40vw, 88vw" className="object-cover" /><span>PRINT / 01—10</span></div>
          <div className="print-roller-hero"><i /><b>ታ</b></div>
          <div className="print-register-marks"><i /><i /><i /><i /></div>
        </div>
      </div>
      <div className="services-hero-marquee"><div>OFFSET ✦ DIGITAL ✦ GARMENTS ✦ CLOTH ✦ EVENTS ✦ VEHICLE GRAPHICS ✦ BOOKS ✦ LARGE FORMAT ✦ OFFSET ✦ DIGITAL ✦ GARMENTS ✦ CLOTH ✦ EVENTS ✦ VEHICLE GRAPHICS ✦ BOOKS ✦ LARGE FORMAT ✦</div></div>
    </section>
    <section className="services-showcase px-5 py-28 sm:px-8"><div className="mx-auto max-w-7xl">
      {services.map(([en, amharic, text, amText, image, tag], index) => <article className="service-feature" key={en}>
        <div className="service-feature-copy"><span>{String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}</span><h2>{am ? amharic : en}</h2><p>{am ? amText : text}</p><small>{tag}</small></div>
        <div className="service-feature-image"><Image src={image} alt={am ? amharic : en} fill sizes="(min-width:1024px) 50vw, 94vw" className="object-contain" /><i className="service-image-sweep" aria-hidden="true" /><b aria-hidden="true">{String(index + 1).padStart(2, "0")}</b><span className="service-crop-label">FULL ARTWORK / PRINT DETAIL</span></div>
      </article>)}
    </div></section>
    <section className="services-cta px-5 py-24 text-white sm:px-8"><div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-10"><div><p className="section-label text-yellow">{am ? "የሚቀጥለው ስራዎ" : "Your next print run"}</p><h2 className="display-title mt-5 max-w-4xl">{am ? "የሚፈልጉትን እንስራ።" : "Let’s make exactly what you need."}</h2></div><Link className="button button-yellow" href="/contact">{am ? "ዋጋ ይጠይቁ" : "Request a quote"} <span>↗</span></Link></div></section>
    <SiteFooter />
  </main>;
}
