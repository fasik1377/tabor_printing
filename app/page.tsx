"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { SiteFooter, SiteHeader, SocialIcon, useLanguage } from "./site-chrome";

const copy = {
  en: {
    eyebrow: "Hawassa-based print production",
    title: "Make your mark.",
    lead: "Bold printing, careful finishing, and dependable delivery for brands, schools, events, and organizations across Ethiopia.",
    cta: "Start a project",
    gallery: "Explore our work",
    servicesLabel: "What we make",
    servicesTitle: "Everything your idea needs to become tangible.",
    servicesLead: "From one-off business prints to complete campaigns, we keep every step practical, precise, and deadline focused.",
    services: ["Offset printing", "Digital printing", "Premium packaging", "Business stationery", "School materials", "Posters & banners"],
    workLabel: "Selected work",
    workTitle: "Print you can feel.",
    viewGallery: "View full gallery",
    processLabel: "Our process",
    processTitle: "Clear from first idea to final stack.",
    steps: [
      ["01 / Consult", "We align on size, stock, quantity, color, and timing."],
      ["02 / Proof", "We check layout, bleed, sharpness, and print-ready color."],
      ["03 / Produce", "Your job moves through focused printing and finishing."],
      ["04 / Deliver", "Everything is packed cleanly for pickup or delivery."],
    ],
    ready: "Ready to put something brilliant into print?",
    contact: "Tell us about your project",
  },
  am: {
    eyebrow: "በሐዋሳ የሚገኝ የህትመት ማምረቻ",
    title: "አሻራዎን ያኑሩ።",
    lead: "በመላው ኢትዮጵያ ላሉ ድርጅቶች፣ ትምህርት ቤቶችና ዝግጅቶች ጥራት ያለው ህትመት፣ ማጠናቀቂያና አስተማማኝ አቅርቦት።",
    cta: "ፕሮጀክት ይጀምሩ",
    gallery: "ስራዎቻችንን ይመልከቱ",
    servicesLabel: "የምንሰራቸው",
    servicesTitle: "ሀሳብዎ እውን እንዲሆን የሚያስፈልገው ሁሉ።",
    servicesLead: "ከአንድ ጊዜ የንግድ ህትመት እስከ ሙሉ ዘመቻ፣ እያንዳንዱን ደረጃ በትክክልና በጊዜ እናከናውናለን።",
    services: ["ኦፍሴት ህትመት", "ዲጂታል ህትመት", "የጥራት ማሸጊያ", "የቢሮ መገልገያዎች", "የትምህርት ቤት ቁሳቁስ", "ፖስተርና ባነር"],
    workLabel: "የተመረጡ ስራዎች",
    workTitle: "ሊሰማ የሚችል ህትመት።",
    viewGallery: "ሙሉ ጋለሪ ይመልከቱ",
    processLabel: "የስራ ሂደታችን",
    processTitle: "ከመጀመሪያው ሀሳብ እስከ መጨረሻው ህትመት።",
    steps: [
      ["01 / ምክክር", "መጠን፣ ወረቀት፣ ብዛት፣ ቀለምና ጊዜን እናስማማለን።"],
      ["02 / ማረጋገጫ", "አቀማመጥን፣ ጥራትንና ለህትመት ዝግጁነትን እንፈትሻለን።"],
      ["03 / ማምረት", "ስራዎ በጥንቃቄ ታትሞ ይጠናቀቃል።"],
      ["04 / ማድረስ", "ሁሉም ነገር በንጽህና ታሽጎ ለመውሰድ ወይም ለማድረስ ይዘጋጃል።"],
    ],
    ready: "ድንቅ ሀሳብዎን ለማተም ዝግጁ ነዎት?",
    contact: "ስለ ፕሮጀክትዎ ይንገሩን",
  },
};

const showcase = [
  ["Book cover printing", "/images/book_cover3.jpg"],
  ["Corporate stationery", "/images/business_card.jpg"],
  ["Dashen Bank campaign", "/images/dashen_bank_ad.jpg"],
];

const tshirts = ["/images/t-shirt.jpg", "/images/t-shirt1.jpg", "/images/t-shirt2.jpg", "/images/t-shirt3.jpg", "/images/t-shirt4.jpg", "/images/t-shirt5.jpg"];
const serviceGalleryFilters = ["all", "all", "packaging", "identity", "editorial", "campaign"];

const partners = [
  ["Abune Gorgories School", "/images/partners/Abune_Gorgories_School.jpg"],
  ["Africa Beza College", "/images/partners/Africa_Beza_College.jpg"],
  ["Buladi Lions", "/images/partners/Buladi_Lions.jpg"],
  ["Buy Ethiopian", "/images/partners/Buy_Ethiopian.jpg"],
  ["Education Sustainable Development", "/images/partners/Education_Sustainable_Development.jpg"],
  ["GT Import Export", "/images/partners/GT_import_export.jpg"],
  ["Hawassa City Sport Club", "/images/partners/Hawassa_City_Sport_Club.jpg"],
  ["Nice Distance School", "/images/partners/Nice_Distance_School.jpg"],
  ["Nova Barber", "/images/partners/Nova_barber.jpg"],
  ["Sidama Coffee", "/images/partners/sidama_coffee.jpg"],
  ["Sidama Regional Chamber of Commerce", "/images/partners/Sidama_Regional_Chamber_of_Commerece.jpg"],
  ["Sidama Trade Council Association", "/images/partners/sidama_trade_council_association.jpg"],
  ["Sol Furniture", "/images/partners/Sol_Furniture.jpg"],
];

export default function Home() {
  const { language } = useLanguage();
  const t = copy[language];
  const [showNewYearModal, setShowNewYearModal] = useState(true);

  useEffect(() => {
    if (!showNewYearModal) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowNewYearModal(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [showNewYearModal]);

  return (
    <main className="overflow-hidden bg-cream text-ink">
      {showNewYearModal && (
        <div className="new-year-modal" role="dialog" aria-modal="true" aria-labelledby="new-year-title">
          <button className="new-year-backdrop" aria-label="Close celebration message" onClick={() => setShowNewYearModal(false)} />
          <div className="new-year-panel">
            <div className="new-year-flowers" aria-hidden="true">
              {Array.from({ length: 52 }, (_, index) => <Image key={index} src="/images/adey_abeba.png" alt="" width={72} height={72} style={{ "--flower-index": index, "--flower-x": (index * 17) % 108, "--flower-delay": `${(index * -0.42).toFixed(2)}s` } as CSSProperties} />)}
            </div>
            <button className="new-year-close" aria-label="Close celebration message" onClick={() => setShowNewYearModal(false)}>×</button>
            <p className="new-year-kicker">Meskerem 1 · 2019</p>
            <h2 id="new-year-title">Happy Ethiopian 2019 New Year</h2>
            <p className="new-year-amharic">እንኳን ለ2019 ዓ.ም በሰላም አደረሳችሁ!</p>
            <p className="new-year-note">Wishing you a bright year filled with peace, joy, and new beginnings.</p>
            <button className="button button-dark new-year-action" onClick={() => setShowNewYearModal(false)}>Continue to Tabor <span>→</span></button>
          </div>
        </div>
      )}
      <section className="hero relative min-h-screen">
        <Image
          src="/images/background_cover.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-background object-cover"
        />
        <div className="hero-background-wash" />
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="ink-drops" aria-hidden="true">
          <span className="ink-drop ink-drop-cyan" />
          <span className="ink-drop ink-drop-magenta" />
          <span className="ink-drop ink-drop-black" />
          <span className="ink-drop ink-drop-yellow" />
        </div>
        <SiteHeader />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-92px)] max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1fr_.92fr]">
          <div>
            <p className="kicker">{t.eyebrow}</p>
            <h1 className="hero-title mt-6 max-w-4xl text-[clamp(4.7rem,11vw,9.5rem)] font-black uppercase leading-[.76] tracking-[-.075em]" data-text={t.title}>
              <span className="brush-letters">{t.title}</span>
              <span className="hero-brush-3d" aria-hidden="true">
                <i className="brush-handle" />
                <i className="brush-ferrule" />
                <i className="brush-bristles" />
                <i className="brush-ink-drop" />
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg font-semibold leading-8 sm:text-xl">{t.lead}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="button button-dark">{t.cta} <span>↗</span></a>
              <Link href="/gallery" className="button button-light">{t.gallery} <span>→</span></Link>
            </div>
          </div>
          <div className="hero-stage" aria-label="Animated print showcase">
            <div className="hero-card hero-card-back">
              {["/images/staff.jpg", "/images/cloth_for_event.jpg", "/images/wall_advertising3.jpg"].map((src, index) => <Image key={src} src={src} alt={index === 0 ? "Tabor Printing Press staff" : "Tabor completed print work"} fill sizes="45vw" className={`hero-cycle-image hero-cycle-${index + 1} object-cover`} />)}
            </div>
            <div className="hero-card hero-card-main">
              {["/images/tabor.jpg", "/images/garment.jpg", "/images/cloth_for_event0.jpg"].map((src, index) => <Image key={src} src={src} alt={index === 0 ? "Tabor Printing Press team and workplace" : "Tabor custom printing work"} fill priority={index === 0} sizes="(min-width:1024px) 42vw, 90vw" className={`hero-cycle-image hero-cycle-${index + 1} object-cover`} />)}
              <span className="hero-caption">Tabor / Color / Craft / Impact</span>
            </div>
            <div className="hero-flyer-deck" aria-label="Animated Tabor flyer designs">
              {["/images/flyer2.jpg", "/images/flyer.jpg", "/images/flyer3.jpg"].map((src, index) => <div className={`hero-flyer-card hero-flyer-${index + 1}`} key={src}><Image src={src} alt={`Tabor flyer design ${index + 1}`} fill sizes="22vw" className="object-cover" /></div>)}
            </div>
            <span className="color-dot cyan" /><span className="color-dot magenta" /><span className="color-dot black" />
          </div>
        </div>
        <div className="ticker">
          <div className="ticker-track">
            {Array(2).fill(null).map((_, i) => (
              <div className="ticker-copy" aria-hidden={i === 1} key={i}>
                <span>DESIGN</span><b>✦</b><span>PRINT</span><b>✦</b><span>FINISH</span><b>✦</b><span>DELIVER</span><b>✦</b>
                <span>ዲዛይን</span><b>✦</b><span>ህትመት</span><b>✦</b><span>ማጠናቀቅ</span><b>✦</b><span>ማድረስ</span><b>✦</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tshirt-showcase px-5 py-28 sm:px-8" aria-labelledby="tshirt-heading">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">{language === "am" ? "የቲሸርት ህትመት" : "Custom T-shirt printing"}</p>
          <div className="tshirt-heading-row">
            <h2 id="tshirt-heading" className="display-title">{language === "am" ? "ዲዛይንዎን በእንቅስቃሴ ይመልከቱ።" : "Your design, in motion."}</h2>
            <p>{language === "am" ? "ለቡድን፣ ለዝግጅት እና ለንግድ ምልክት የሚሆኑ ግልጽ እና ዘላቂ ህትመቶች።" : "Bold, durable garment prints for teams, events, campaigns, and brands."}</p>
          </div>
          <div className="tshirt-3d-stage">
            {tshirts.map((src, index) => <article className="tshirt-card" key={src}><div><Image src={src} alt={`Custom printed T-shirt design ${index + 1}`} fill sizes="(min-width:1024px) 28vw, 72vw" className="object-contain" /></div><span>T-shirt series / {String(index + 1).padStart(2, "0")}</span></article>)}
          </div>
          <Link className="text-link tshirt-gallery-link" href="/gallery">{t.viewGallery} ↗</Link>
        </div>
      </section>

      <section className="cover-story" aria-label="Tabor Printing Press featured cover image">
        <Image src="/images/background_cover.jpg" alt="Tabor Printing Press production and printed work" fill sizes="100vw" className="cover-story-image object-cover" />
        <div className="cover-story-overlay" />
        <div className="cover-story-copy"><span>Tabor / Hawassa</span><h2>{language === "am" ? "ሀሳብን ወደ ህትመት እንቀይራለን።" : "Ideas become something you can hold."}</h2></div>
      </section>

      <section className="people-section px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="people-heading"><div><p className="section-label">{language === "am" ? "የታቦር ቡድን" : "People behind the print"}</p><h2 className="display-title mt-4">{language === "am" ? "ሀሳብዎን የሚያትም ቡድን።" : "The team that makes your ideas tangible."}</h2></div><p>{language === "am" ? "ከዲዛይን እስከ ህትመትና ማጠናቀቂያ፣ ቡድናችን እያንዳንዱን ስራ በጥንቃቄ ይሰራል።" : "From design and production to finishing, our staff brings practical experience and close attention to every job."}</p></div>
          <div className="people-grid">
            <article className="people-card people-card-main"><div><Image src="/images/staff.jpg" alt="Tabor Printing Press staff" fill sizes="(min-width:1024px) 58vw, 94vw" className="object-cover" /></div><span>Our team / Hawassa</span></article>
            <article className="people-card garment-feature"><div><Image src="/images/garment.jpg" alt="Tabor garment printing work" fill sizes="(min-width:1024px) 30vw, 94vw" className="object-contain" /></div><span>Garment printing</span></article>
            <article className="people-card bank-feature"><div><Image src="/images/debub_global_logo.jpg" alt="Debub Global Bank logo" fill sizes="(min-width:1024px) 22vw, 70vw" className="object-contain" /></div><span>Featured client work / Debub Global Bank</span></article>
          </div>
        </div>
      </section>

      <section id="services" className="services-section bg-ink px-5 py-28 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="section-label text-yellow">{t.servicesLabel}</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <h2 className="display-title">{t.servicesTitle}</h2>
            <p className="max-w-xl text-lg font-medium leading-8 text-white/65">{t.servicesLead}</p>
          </div>
          <div className="mt-16 grid gap-px border border-white/20 bg-white/20 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service, index) => <Link href={`/gallery?filter=${serviceGalleryFilters[index]}#gallery-collection`} aria-label={`${service} — view matching gallery work`} key={service} className="service-card group"><span>0{index + 1}</span><i className={`service-icon service-icon-${index + 1}`} /><h3>{service}</h3><p>{language === "am" ? "ከዲዛይን እስከ ማጠናቀቅ በጥራት የሚሰራ።" : "Designed, produced, and finished with close attention to every detail."}</p><b>↗</b></Link>)}
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-7">
            <div><p className="section-label">{t.workLabel}</p><h2 className="display-title mt-4">{t.workTitle}</h2></div>
            <Link href="/gallery" className="text-link">{t.viewGallery} ↗</Link>
          </div>
          <div className="gallery-slider mt-14">
            <div className="gallery-slider-track">
              {Array(2).fill(null).map((_, copyIndex) => (
                <div className="gallery-slider-set" aria-hidden={copyIndex === 1} key={copyIndex}>
                  {showcase.map(([title, image], index) => (
                    <Link href="/gallery" className="work-card" key={`${copyIndex}-${title}`}>
                      <div className="relative h-full min-h-[420px] overflow-hidden">
                        <Image src={image} alt={title} fill sizes="(min-width:1024px) 430px, 82vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                        <span>{String(index + 1).padStart(2, "0")} — {title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section py-28" aria-labelledby="partners-heading">
        <div className="partners-heading mx-auto max-w-7xl px-5 sm:px-8">
          <div>
            <p className="section-label">{language === "am" ? "የምንሰራቸው አጋሮች" : "Partners in print"}</p>
            <h2 id="partners-heading" className="display-title mt-4">
              {language === "am" ? "በእኛ የሚተማመኑ ድርጅቶች።" : "Trusted by organizations that make an impact."}
            </h2>
          </div>
          <p>{language === "am" ? "ከትምህርት ቤቶች እና ንግዶች እስከ ማህበራት፣ ለእያንዳንዱ አጋር ጥራት ያለው ህትመት እናቀርባለን።" : "From schools and businesses to associations and community brands, we produce work they are proud to put their name on."}</p>
        </div>
        <div className="partners-stage" aria-label="Partner logos">
          {[partners.slice(0, 7), partners.slice(7)].map((row, rowIndex) => (
            <div className={`partners-rail partners-rail-${rowIndex + 1}`} key={rowIndex}>
              {Array(2).fill(null).map((_, copyIndex) => (
                <div className="partners-set" aria-hidden={copyIndex === 1} key={copyIndex}>
                  {row.map(([name, src], index) => (
                    <article className="partner-logo" style={{ "--partner-index": index } as CSSProperties} key={`${copyIndex}-${name}`}>
                      <div className="partner-logo-face">
                        <Image src={src} alt={copyIndex === 0 ? `${name} logo` : ""} fill sizes="(min-width:1024px) 220px, 160px" className="object-contain" />
                      </div>
                      <span>{name}</span>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="partners-note">13 partners / Hawassa and beyond</p>
      </section>

      <section className="process-section bg-yellow px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="process-heading">
            <div><p className="section-label">{t.processLabel}</p><h2 className="display-title mt-4 max-w-5xl">{t.processTitle}</h2></div>
            <div className="process-seal"><span>01</span><i>→</i><span>04</span><small>{language === "am" ? "ግልጽ ሂደት" : "ONE CLEAR FLOW"}</small></div>
          </div>
          <div className="process-track mt-16">
            {t.steps.map(([title, text], index) => <article className="process-card" key={title}><div className={`process-icon process-icon-${index + 1}`}><i /><b>{index + 1}</b></div><span>{title}</span><p>{text}</p><em>{index < t.steps.length - 1 ? "→" : "✓"}</em></article>)}
          </div>
          <div className="process-note"><span>{language === "am" ? "አንድ ሀሳብ" : "ONE IDEA"}</span><i /><span>{language === "am" ? "ዝግጁ ህትመት" : "PRINT READY"}</span></div>
        </div>
      </section>

      <section id="contact" className="contact-section bg-ink px-5 py-24 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1fr]">
          <div>
            <p className="section-label text-yellow">Contact / ያግኙን</p>
            <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[.92] sm:text-7xl">{t.ready}</h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-white/60">{language === "am" ? "ስለ ህትመትዎ መጠን፣ ብዛትና የጊዜ ገደብ ይንገሩን። በተግባራዊ ምክር እንመለሳለን።" : "Tell us the size, quantity, and timing of your print job. We’ll reply with practical guidance and a clear next step."}</p>
            <div className="contact-details"><a href="mailto:tabordigitaladvert@gmail.com">tabordigitaladvert@gmail.com ↗</a><a href="tel:+251916038585">0916038585 ↗</a><a href="tel:+251967213619">0967213619 ↗</a><div className="social-icon-links"><a href="https://t.me/Tabro_advert" target="_blank" rel="noreferrer" aria-label="Tabor on Telegram"><SocialIcon name="telegram" /></a><a href="https://www.facebook.com/profile.php?id=100070440477160" target="_blank" rel="noreferrer" aria-label="Tabor on Facebook"><SocialIcon name="facebook" /></a></div><span>Hawassa, Ethiopia</span></div>
          </div>
          <form className="quote-form" onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const subject = encodeURIComponent(`Print quote: ${data.get("project")}`);
            const body = encodeURIComponent(`Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nProject: ${data.get("project")}\n\n${data.get("message")}`);
            window.location.href = `mailto:tabordigitaladvert@gmail.com?subject=${subject}&body=${body}`;
          }}>
            <div className="form-row"><label>{language === "am" ? "ስም" : "Your name"}<input name="name" required placeholder={language === "am" ? "ሙሉ ስም" : "Full name"} /></label><label>{language === "am" ? "ስልክ" : "Phone"}<input name="phone" required placeholder="+251..." /></label></div>
            <label>{language === "am" ? "የፕሮጀክት አይነት" : "Project type"}<select name="project" defaultValue="Packaging"><option>Packaging</option><option>Business stationery</option><option>Posters & banners</option><option>Books & school materials</option><option>Other</option></select></label>
            <label>{language === "am" ? "ዝርዝር" : "Project details"}<textarea name="message" required rows={4} placeholder={language === "am" ? "መጠን፣ ብዛት፣ ጊዜ..." : "Size, quantity, deadline..."} /></label>
            <button className="button button-yellow" type="submit">{t.contact} ↗</button>
          </form>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
