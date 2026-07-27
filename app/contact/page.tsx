"use client";

import Image from "next/image";
import { SiteFooter, SiteHeader, useLanguage } from "../site-chrome";

const mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=38.47344%2C7.04159%2C38.49344%2C7.06159&layer=mapnik&marker=7.05159%2C38.48344";
const directionsUrl = "https://www.google.com/maps/search/?api=1&query=South+Star+International+Hotel+Hawassa";

export default function ContactPage() {
  const { language } = useLanguage();
  const am = language === "am";
  return <main className="bg-cream text-ink">
    <section className="contact-page-hero">
      <Image src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=2000&q=90" alt="" fill priority sizes="100vw" className="inner-hero-background object-cover" />
      <div className="inner-hero-wash contact-hero-wash" />
      <SiteHeader dark />
      <div className="contact-hero-grid mx-auto max-w-7xl px-5 pb-24 pt-14 text-white sm:px-8">
        <div className="contact-hero-copy"><p className="section-label text-yellow inner-hero-kicker">{am ? "ያግኙን" : "Contact Tabor"}</p><h1 className="page-title inner-painted-title mt-7">{am ? "ሀሳብዎን ይዘው ይምጡ።" : "Bring us your next idea."}</h1><p className="inner-hero-lead mt-7 max-w-2xl text-xl font-medium leading-9">{am ? "መጠን፣ ብዛትና የጊዜ ገደብዎን ይንገሩን፤ ግልጽ የሆነ ቀጣይ እርምጃ እንሰጥዎታለን።" : "Tell us the size, quantity, and deadline. We’ll reply with practical guidance and a clear next step."}<span className="hero-paint-tool hero-paint-marker" aria-hidden="true"><i /><b /><em /></span></p></div>
        <div className="contact-hero-postcard" aria-label="Animated Hawassa location postcard">
          <div className="postcard-photo"><Image src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=88" alt="Colorful creative studio materials" fill priority sizes="(min-width:1024px) 40vw, 88vw" className="object-cover" /></div>
          <div className="postcard-address"><small>TO / ወደ</small><b>TABOR PRINTING PRESS</b><span>HAWASSA, ETHIOPIA</span><i /></div>
          <div className="postcard-stamp">7.0516° N<br />38.4834° E</div>
          <div className="postcard-pin"><span>●</span><b>SOUTH STAR AREA</b></div>
          <div className="postcard-orbit" aria-hidden="true" />
        </div>
      </div>
      <div className="contact-signal" aria-hidden="true"><i /><i /><i /></div>
    </section>
    <section className="contact-page-grid px-5 py-24 sm:px-8"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.75fr_1fr]">
      <div><p className="section-label">{am ? "ይጻፉልን" : "Start a conversation"}</p><h2 className="display-title mt-5">{am ? "ፕሮጀክትዎን ይንገሩን።" : "Tell us about your project."}</h2><div className="contact-cards"><a href="mailto:hello@taborprintingpress.com"><small>Email</small><strong>hello@taborprintingpress.com</strong><span>↗</span></a><a href="tel:+251000000000"><small>{am ? "ስልክ" : "Phone"}</small><strong>+251 000 000 000</strong><span>↗</span></a><div><small>{am ? "ሰዓት" : "Hours"}</small><strong>{am ? "ሰኞ–ቅዳሜ / 8:00–6:00" : "Mon–Sat / 8:00–6:00"}</strong></div></div></div>
      <form className="quote-form" onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const subject = encodeURIComponent(`Print quote: ${data.get("project")}`); const body = encodeURIComponent(`Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nProject: ${data.get("project")}\n\n${data.get("message")}`); window.location.href = `mailto:hello@taborprintingpress.com?subject=${subject}&body=${body}`; }}>
        <div className="form-row"><label>{am ? "ስም" : "Your name"}<input name="name" required placeholder={am ? "ሙሉ ስም" : "Full name"} /></label><label>{am ? "ስልክ" : "Phone"}<input name="phone" required placeholder="+251..." /></label></div>
        <label>{am ? "የፕሮጀክት አይነት" : "Project type"}<select name="project" defaultValue="Packaging"><option>Packaging</option><option>Business stationery</option><option>Posters & banners</option><option>Books & school materials</option><option>Other</option></select></label>
        <label>{am ? "ዝርዝር" : "Project details"}<textarea name="message" required rows={5} placeholder={am ? "መጠን፣ ብዛት፣ ጊዜ..." : "Size, quantity, deadline..."} /></label><button className="button button-yellow" type="submit">{am ? "መልዕክት ይላኩ" : "Send project details"} ↗</button>
      </form>
    </div></section>
    <section className="location-section px-5 pb-28 sm:px-8"><div className="mx-auto max-w-7xl"><div className="location-heading"><div><p className="section-label">{am ? "ያግኙን" : "Find us in Hawassa"}</p><h2 className="display-title mt-5">{am ? "በሳውዝ ስታር አካባቢ።" : "Near South Star International Hotel."}</h2></div><div><p>{am ? "ሀዋሳ፣ ሲዳማ፣ ኢትዮጵያ" : "Hawassa, Sidama, Ethiopia"}</p><a href={directionsUrl} target="_blank" rel="noreferrer">{am ? "በካርታ ይክፈቱ" : "Open directions"} ↗</a></div></div><div className="map-frame"><iframe title="Map showing Tabor Printing Press area near South Star International Hotel in Hawassa" src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-label"><span>●</span><div><b>Tabor Printing Press</b><small>{am ? "ሳውዝ ስታር አካባቢ" : "South Star area, Hawassa"}</small></div></div></div></div></section>
    <SiteFooter />
  </main>;
}
