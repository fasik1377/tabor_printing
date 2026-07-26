"use client";

import Image from "next/image";
import { useState } from "react";
import { SiteFooter, SiteHeader, useLanguage } from "../site-chrome";

const works = [
  ["Brand stationery", "የድርጅት መገልገያ", "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=85", "identity"],
  ["Premium boxes", "የጥራት ማሸጊያ", "https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&w=1200&q=85", "packaging"],
  ["Campaign posters", "የዘመቻ ፖስተሮች", "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=85", "campaign"],
  ["Color stories", "የቀለም ታሪኮች", "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=85", "editorial"],
  ["Paper detail", "የወረቀት ዝርዝር", "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85", "finish"],
  ["Event materials", "የዝግጅት ቁሳቁስ", "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=85", "campaign"],
];

export default function GalleryPage() {
  const { language } = useLanguage();
  const am = language === "am";
  const [filter, setFilter] = useState("all");
  const filters = ["all", "identity", "packaging", "campaign", "editorial", "finish"];
  const filteredWorks = filter === "all" ? works : works.filter((work) => work[3] === filter);
  return <main className="bg-ink text-white"><section className="gallery-hero"><SiteHeader dark /><div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8"><p className="section-label text-yellow">{am ? "የስራ ጋለሪ" : "Work gallery"}</p><h1 className="page-title mt-7 max-w-5xl">{am ? "የምንሰራውን ይመልከቱ።" : "See what print can do."}</h1><p className="mt-7 max-w-2xl text-xl font-medium leading-9 text-white/65">{am ? "ማሸጊያ፣ የድርጅት መለያ፣ ዘመቻና በጥንቃቄ የተጠናቀቁ የህትመት ስራዎች።" : "Packaging, identity, campaigns, and crafted print details—made to look memorable and work beautifully."}</p></div></section>
  <section className="gallery-page-slider pb-24">
    <div className="gallery-page-track">
      {Array(2).fill(null).map((_,copyIndex)=><div className="gallery-page-set" aria-hidden={copyIndex===1} key={copyIndex}>{works.map(([en,amharic,src,tag],i)=><article className="gallery-slide" key={`${copyIndex}-${en}`}><div className="relative h-[430px] overflow-hidden"><Image src={src} alt={am ? amharic : en} fill sizes="(min-width:1024px) 500px, 84vw" className="object-cover" /></div><div><h2>{am ? amharic : en}</h2><span>{tag} / 0{i+1}</span></div></article>)}</div>)}
    </div>
  </section>
  <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8">
    <div className="gallery-filter" aria-label="Filter gallery">
      {filters.map((item)=><button className={filter===item ? "active" : ""} onClick={()=>setFilter(item)} key={item}>{item}</button>)}
    </div>
    <div className="gallery-grid">{filteredWorks.map(([en,amharic,src,tag],i)=><article className={`gallery-piece piece-${i+1}`} key={en}><div className="gallery-image relative overflow-hidden"><Image src={src} alt={am ? amharic : en} fill sizes="(min-width:1024px) 50vw, 94vw" className="object-cover" /></div><div className="flex items-center justify-between gap-4 border-t-2 border-ink bg-yellow p-5 text-ink"><h2 className="text-2xl font-black uppercase">{am ? amharic : en}</h2><span className="text-xs font-black uppercase tracking-widest">{tag}</span></div></article>)}</div>
  </section><SiteFooter /></main>;
}
