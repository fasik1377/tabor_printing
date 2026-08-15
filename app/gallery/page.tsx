"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SiteFooter, SiteHeader, useLanguage } from "../site-chrome";

const works = [
  ["Brand stationery", "የድርጅት መገልገያ", "/images/business_card.jpg", "identity"],
  ["Book covers", "የጥራት ማሸጊያ", "/images/book_cover1.jpg", "packaging"],
  ["Campaign posters", "የዘመቻ ፖስተሮች", "/images/poster.jpg", "campaign"],
  ["Flyer design", "የቀለም ታሪኮች", "/images/flyer.jpg", "editorial"],
  ["Cloth printing", "የወረቀት ዝርዝር", "/images/cloth_printing5.jpg", "finish"],
  ["Large-format advertising", "የዝግጅት ቁሳቁስ", "/images/bank_billboard.jpg", "campaign"],
  ["Event cloth", "የዝግጅት ጨርቅ", "/images/cloth_for_event.jpg", "finish"],
  ["Event branding", "የዝግጅት ብራንዲንግ", "/images/cloth_for_event0.jpg", "campaign"],
  ["Wall campaign", "የግድግዳ ማስታወቂያ", "/images/wall_advertising3.jpg", "campaign"],
  ["Dashen Bank advertising", "የዳሽን ባንክ ማስታወቂያ", "/images/dashen_bank_ad.jpg", "campaign"],
  ["Party poster", "የድግስ ፖስተር", "/images/party_poster.jpg", "editorial"],
  ["Classic printed T-shirt", "የታተመ ቲሸርት", "/images/t-shirt.jpg", "tshirts"],
  ["Custom T-shirt design 01", "ብጁ ቲሸርት 01", "/images/t-shirt1.jpg", "tshirts"],
  ["Custom T-shirt design 02", "ብጁ ቲሸርት 02", "/images/t-shirt2.jpg", "tshirts"],
  ["Custom T-shirt design 03", "ብጁ ቲሸርት 03", "/images/t-shirt3.jpg", "tshirts"],
  ["Custom T-shirt design 04", "ብጁ ቲሸርት 04", "/images/t-shirt4.jpg", "tshirts"],
  ["Custom T-shirt design 05", "ብጁ ቲሸርት 05", "/images/t-shirt5.jpg", "tshirts"],
];
const filters = ["all", "tshirts", "identity", "packaging", "campaign", "editorial", "finish"];

export default function GalleryPage() {
  const { language } = useLanguage();
  const am = language === "am";
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    const requestedFilter = new URLSearchParams(window.location.search).get("filter");
    const applyRequestedFilter = window.setTimeout(() => {
      if (requestedFilter && filters.includes(requestedFilter)) setFilter(requestedFilter);
    }, 0);
    return () => window.clearTimeout(applyRequestedFilter);
  }, []);
  const filteredWorks = filter === "all" ? works : works.filter((work) => work[3] === filter);
  return <main className="bg-ink text-white"><section className="gallery-hero"><Image src="/images/flyer3.jpg" alt="" fill priority sizes="100vw" className="gallery-hero-background object-cover" /><div className="gallery-hero-wash" /><SiteHeader dark /><div className="gallery-hero-layout mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8"><div><p className="section-label text-yellow">{am ? "የስራ ጋለሪ" : "Work gallery"}</p><h1 className="page-title mt-7 max-w-5xl">{am ? "የምንሰራውን ይመልከቱ።" : "See what print can do."}</h1><p className="mt-7 max-w-2xl text-xl font-medium leading-9 text-white/75">{am ? "ማሸጊያ፣ የድርጅት መለያ፣ ዘመቻና በጥንቃቄ የተጠናቀቁ የህትመት ስራዎች።" : "Packaging, identity, campaigns, and crafted print details—made to look memorable and work beautifully."}</p></div><div className="gallery-hero-cards"><div><Image src="/images/cloth_for_event0.jpg" alt="Printed event cloth" fill sizes="30vw" className="object-cover" /></div><div><Image src="/images/poster.jpg" alt="Tabor campaign poster" fill sizes="24vw" className="object-cover" /></div></div></div></section>
  <section className="gallery-page-slider pb-24">
    <div className="gallery-page-track">
      {Array(2).fill(null).map((_,copyIndex)=><div className="gallery-page-set" aria-hidden={copyIndex===1} key={copyIndex}>{works.map(([en,amharic,src,tag],i)=><article className="gallery-slide" key={`${copyIndex}-${en}`}><div className="relative h-[430px] overflow-hidden"><Image src={src} alt={am ? amharic : en} fill sizes="(min-width:1024px) 500px, 84vw" className="object-cover" /></div><div><h2>{am ? amharic : en}</h2><span>{tag} / 0{i+1}</span></div></article>)}</div>)}
    </div>
  </section>
  <section id="gallery-collection" className="mx-auto max-w-7xl scroll-mt-6 px-5 pb-28 sm:px-8">
    <div className="gallery-filter" aria-label="Filter gallery">
      {filters.map((item)=><button className={filter===item ? "active" : ""} onClick={()=>setFilter(item)} key={item}>{item}</button>)}
    </div>
    <div className="gallery-grid">{filteredWorks.map(([en,amharic,src,tag],i)=><article className={`gallery-piece piece-${i+1} ${tag === "tshirts" ? "gallery-tshirt-piece" : ""}`} key={en}><div className="gallery-image relative overflow-hidden"><Image src={src} alt={am ? amharic : en} fill sizes="(min-width:1024px) 50vw, 94vw" className={tag === "tshirts" ? "object-contain" : "object-cover"} /></div><div className="flex items-center justify-between gap-4 border-t-2 border-ink bg-yellow p-5 text-ink"><h2 className="text-2xl font-black uppercase">{am ? amharic : en}</h2><span className="text-xs font-black uppercase tracking-widest">{tag}</span></div></article>)}</div>
  </section><SiteFooter /></main>;
}
