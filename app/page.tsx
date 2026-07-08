import Image from "next/image";

const services = [
  "Offset printing",
  "Digital printing",
  "Packaging",
  "Business stationery",
  "School materials",
  "Large format posters",
];

const stats = [
  { value: "24h", label: "fast quote response" },
  { value: "4K+", label: "print projects handled" },
  { value: "100%", label: "color-focused finishing" },
];

const portfolio = [
  {
    title: "Premium Packaging",
    text: "Retail boxes, sleeves, stickers, and labels with crisp color and durable finish.",
    image:
      "https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Corporate Identity",
    text: "Business cards, letterheads, folders, receipts, and branded office materials.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Campaign Prints",
    text: "Posters, flyers, banners, invitations, and event materials made to stand out.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
  },
];

const sliderImages = [
  {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
    alt: "Colorful printed materials arranged on a production table",
  },
  {
    src: "https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&w=900&q=80",
    alt: "Premium printed packaging boxes",
  },
  {
    src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=80",
    alt: "Business cards and branded stationery",
  },
  {
    src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
    alt: "Printed campaign posters and design materials",
  },
];

const productionSteps = [
  { label: "Consult", text: "We clarify size, paper, color, quantity, and deadline before production starts." },
  { label: "Proof", text: "Your artwork is checked for layout, sharpness, bleed, and print-ready color." },
  { label: "Produce", text: "Offset and digital jobs move through a focused print and finishing workflow." },
  { label: "Deliver", text: "Finished materials are packed cleanly and prepared for pickup or local delivery." },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3e8] text-black">
      <section className="relative isolate min-h-screen bg-[#ffd21f]">
        <div className="absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(90deg,rgba(0,0,0,.22)_1px,transparent_1px),linear-gradient(rgba(0,0,0,.18)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute left-0 top-24 h-24 w-full -rotate-2 overflow-hidden bg-black text-[#ffd21f] shadow-2xl">
          <div className="marquee h-full text-2xl font-black uppercase leading-none tracking-[0.18em]">
            <div className="marquee-track">
              {Array.from({ length: 2 }).map((_, copyIndex) => (
                <div
                  className="marquee-copy"
                  aria-hidden={copyIndex > 0}
                  key={copyIndex}
                >
                  {Array.from({ length: 4 }).map((__, phraseIndex) => (
                    <span className="marquee-phrase" key={phraseIndex}>
                      <span>ታቦር ማተሚያ ቤት</span>
                      <span>Design</span>
                      <span>Print</span>
                      <span>Finish</span>
                      <span>Deliver</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
          <a href="#" className="logo-flip logo-moving group block h-14 w-52">
            <span className="logo-flip-inner">
              <span className="logo-face logo-face-front">
                <span className="grid h-12 w-12 place-items-center rounded-sm border-2 border-black bg-black text-lg font-black text-[#ffd21f] shadow-[6px_6px_0_#fff]">
                  ታቦር
                </span>
                <span>
                  <span className="block text-xl font-black leading-none tracking-tight">
                    ታቦር
                  </span>
                  <span className="block text-sm font-bold leading-none tracking-tight">
                    ማተሚያ ቤት
                  </span>
                </span>
              </span>
              <span className="logo-face logo-face-back">
                <span className="grid h-12 w-12 place-items-center rounded-sm border-2 border-black bg-black text-sm font-black uppercase text-[#ffd21f] shadow-[6px_6px_0_#fff]">
                  Tabor
                </span>
                <span>
                  <span className="block text-xl font-black uppercase leading-none tracking-tight">
                    Tabor
                  </span>
                  <span className="block text-xs font-bold uppercase leading-none tracking-[0.2em]">
                    Printing Press
                  </span>
                </span>
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-extrabold uppercase tracking-[0.14em] md:flex">
            <a href="#services" className="transition hover:opacity-60">
              Services
            </a>
            <a href="#work" className="transition hover:opacity-60">
              Work
            </a>
            <a href="#contact" className="transition hover:opacity-60">
              Contact
            </a>
          </nav>
        </header>

        <div className="mx-auto grid min-h-[calc(100vh-96px)] w-full max-w-7xl items-center gap-10 px-5 pb-12 pt-24 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:pt-16">
          <div className="relative z-10">
            <p className="mb-5 inline-flex border-2 border-black bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.24em] shadow-[5px_5px_0_#000]">
              Hawassa based print production
            </p>
            <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.86] tracking-normal sm:text-7xl lg:text-8xl">
              Prints that arrive with impact.
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 sm:text-xl">
              Tabor Printing Press creates sharp, reliable, high-energy print
              materials for businesses, schools, events, and organizations
              across Hawassa and beyond.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-14 items-center justify-center rounded-sm border-2 border-black bg-black px-7 text-sm font-black uppercase tracking-[0.16em] text-[#ffd21f] shadow-[7px_7px_0_#fff] transition duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_#fff]"
              >
                Start a project
              </a>
              <a
                href="#work"
                className="inline-flex h-14 items-center justify-center rounded-sm border-2 border-black bg-white px-7 text-sm font-black uppercase tracking-[0.16em] shadow-[7px_7px_0_#000] transition duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_#000]"
              >
                View capabilities
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[560px]">
            <div className="press-card absolute inset-5 overflow-hidden rounded-sm border-2 border-black bg-black shadow-[16px_16px_0_#fff]">
              <Image
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1100&q=80"
                alt="Colorful printed materials arranged on a production table"
                fill
                priority
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover opacity-95"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black p-5 text-[#ffd21f]">
                <p className="text-xs font-black uppercase tracking-[0.26em]">
                  Color rich. Deadline ready.
                </p>
              </div>
            </div>
            <div className="ink-wheel absolute -right-5 top-9 h-24 w-24 rounded-full border-[14px] border-black bg-[#ffd21f] shadow-[8px_8px_0_#fff]" />
            <div className="print-sheet absolute -left-2 bottom-16 w-44 border-2 border-black bg-white p-4 shadow-[8px_8px_0_#000]">
              <div className="mb-3 h-3 w-28 bg-black" />
              <div className="mb-2 h-3 w-full bg-[#ffd21f]" />
              <div className="h-3 w-20 bg-black" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-black px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#ffd21f]">
                What we make
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-black uppercase leading-none sm:text-6xl">
                Built for brands that need to be seen.
              </h2>
            </div>
            <p className="max-w-2xl text-lg font-semibold leading-8 text-white/75">
              From single-run business prints to event campaigns and packaging,
              Tabor keeps the process crisp, practical, and deadline focused.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                className="service-tile rounded-sm border border-white/15 bg-white p-6 text-black shadow-[8px_8px_0_#ffd21f] transition duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_#ffd21f]"
                key={service}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <span className="text-sm font-black text-[#9b7b00]">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-2xl font-black uppercase">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3e8] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#9b7b00]">
                Press room preview
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black uppercase leading-none sm:text-6xl">
                Sliding through the work that keeps brands moving.
              </h2>
            </div>
            <p className="max-w-md text-base font-semibold leading-7 text-zinc-700">
              A quick moving gallery for packaging, stationery, campaigns, and
              production detail.
            </p>
          </div>

          <div className="slider-shell">
            <div className="slider-frame p-4 shadow-[14px_14px_0_#000]">
              <span className="slider-roller slider-roller-left" />
              <span className="slider-roller slider-roller-right" />
              <div className="image-slider flex w-max gap-5 py-2">
                {[...sliderImages, ...sliderImages].map((image, index) => (
                  <div
                    key={`${image.alt}-${index}`}
                    className="slider-image-card relative h-72 w-[78vw] shrink-0 overflow-hidden rounded-sm bg-zinc-900 sm:w-[430px] lg:h-80"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 430px, 78vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#9b7b00]">
                Production range
              </p>
              <h2 className="mt-3 text-4xl font-black uppercase leading-none sm:text-6xl">
                From first proof to final stack.
              </h2>
            </div>
            <p className="max-w-md text-base font-semibold leading-7">
              Clean layouts, strong paper choices, careful trimming, and
              finishing that makes every printed piece feel intentional.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {portfolio.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-sm border-2 border-black bg-[#f7f3e8] shadow-[9px_9px_0_#ffd21f] transition duration-300 hover:-translate-y-1 hover:shadow-[13px_13px_0_#ffd21f]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-semibold leading-7 text-zinc-700">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#ffd21f]">
              How it works
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black uppercase leading-none sm:text-6xl">
              A modern print flow from idea to finished stack.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {productionSteps.map((step, index) => (
              <div
                key={step.label}
                className="border border-white/15 bg-white p-5 text-black shadow-[7px_7px_0_#ffd21f]"
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9b7b00]">
                  Step {index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-black uppercase">
                  {step.label}
                </h3>
                <p className="mt-3 font-semibold leading-7 text-zinc-700">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-black bg-[#ffd21f] px-5 py-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="border-2 border-black bg-white p-6">
              <p className="text-5xl font-black uppercase">{stat.value}</p>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.18em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.8fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#9b7b00]">
              Ready in Hawassa
            </p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-none sm:text-7xl">
              Bring your next print job to Tabor.
            </h2>
          </div>
          <div className="border-2 border-black bg-[#ffd21f] p-7 text-black shadow-[12px_12px_0_#000]">
            <p className="text-xl font-black uppercase leading-8">
              Visit or contact Tabor Printing Press in Hawassa, Ethiopia for
              quotes, design support, print production, and finishing.
            </p>
            <div className="mt-8 grid gap-3 text-sm font-black uppercase tracking-[0.16em]">
              <a href="tel:+251000000000" className="border-2 border-black bg-white p-4">
                Call: +251 000 000 000
              </a>
              <a href="mailto:hello@taborprintingpress.com" className="border-2 border-black bg-white p-4">
                hello@taborprintingpress.com
              </a>
              <p className="border-2 border-black bg-white p-4">
                Hawassa, Ethiopia
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-black bg-[#ffd21f] px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-sm border-2 border-black bg-black text-lg font-black text-[#ffd21f] shadow-[6px_6px_0_#fff]">
                ታቦር
              </span>
              <span>
                <span className="block text-2xl font-black leading-none">
                  ታቦር
                </span>
                <span className="block text-sm font-bold leading-none">
                  ማተሚያ ቤት / Tabor Printing Press
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xl text-base font-semibold leading-7">
              Sharp design, reliable production, clean finishing, and print
              materials prepared with care in Hawassa.
            </p>
          </div>
          <div className="grid gap-2 text-sm font-black uppercase tracking-[0.16em] md:text-right">
            <a href="#services" className="transition hover:opacity-60">
              Services
            </a>
            <a href="#work" className="transition hover:opacity-60">
              Work
            </a>
            <a href="#contact" className="transition hover:opacity-60">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
