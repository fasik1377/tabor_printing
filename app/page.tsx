"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader, useLanguage } from "./site-chrome";

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
  ["Premium packaging", "https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&w=1100&q=85"],
  ["Corporate stationery", "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1100&q=85"],
  ["Campaign design", "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1100&q=85"],
];

export default function Home() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <main className="overflow-hidden bg-cream text-ink">
      <section className="hero relative min-h-screen">
        <Image
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=2000&q=90"
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
              <Image src={showcase[1][1]} alt={showcase[1][0]} fill sizes="45vw" className="object-cover" />
            </div>
            <div className="hero-card hero-card-main">
              <Image src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=90" alt="Colorful print samples on a studio table" fill priority sizes="(min-width:1024px) 42vw, 90vw" className="object-cover" />
              <span className="hero-caption">Color / Craft / Impact</span>
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

      <section id="services" className="services-section bg-ink px-5 py-28 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="section-label text-yellow">{t.servicesLabel}</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <h2 className="display-title">{t.servicesTitle}</h2>
            <p className="max-w-xl text-lg font-medium leading-8 text-white/65">{t.servicesLead}</p>
          </div>
          <div className="mt-16 grid gap-px border border-white/20 bg-white/20 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service, index) => <div key={service} className="service-card group"><span>0{index + 1}</span><i className={`service-icon service-icon-${index + 1}`} /><h3>{service}</h3><p>{language === "am" ? "ከዲዛይን እስከ ማጠናቀቅ በጥራት የሚሰራ።" : "Designed, produced, and finished with close attention to every detail."}</p><b>↗</b></div>)}
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
            <div className="contact-details"><a href="mailto:hello@taborprintingpress.com">hello@taborprintingpress.com ↗</a><a href="tel:+251000000000">+251 000 000 000 ↗</a><span>Hawassa, Ethiopia</span></div>
          </div>
          <form className="quote-form" onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const subject = encodeURIComponent(`Print quote: ${data.get("project")}`);
            const body = encodeURIComponent(`Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nProject: ${data.get("project")}\n\n${data.get("message")}`);
            window.location.href = `mailto:hello@taborprintingpress.com?subject=${subject}&body=${body}`;
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
