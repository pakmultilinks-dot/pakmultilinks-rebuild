"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const HERO_SLIDES = [
  { src: "/images/hero-banner.png", alt: "Quality you can see, freshness you can trust" },
  { src: "/images/product-collection.jpg", alt: "Rose Petal, Mamos and Soft Pack tissue range" },
];

const PARTNERS = [
  "Dove", "Palmolive", "Clorox", "Gillette", "Pepsi", "Comfort",
  "Sensodyne", "Shell", "Surf Excel", "Careem", "Daraz", "Colgate",
];

const COLLECTIONS = [
  { title: "Tissue & Paper", desc: "Facial tissues, rolls and napkins for every space.", links: ["Facial Tissues", "Soft Pack Tissues", "Tissue Rolls", "Paper Napkins"] },
  { title: "Washroom Supplies", desc: "Hand wash, dispensers and washroom essentials.", links: ["Hand Wash", "Dispensers"] },
  { title: "Cleaning Products", desc: "Floor, surface and glass care for workplaces.", links: ["Floor & Surface Care"] },
  { title: "Disposable Items", desc: "Garbage bags, gloves and single-use hygiene disposables.", links: ["Garbage Bags"] },
];

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 8000);
    return () => clearInterval(t);
  }, []);

  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero carousel */}
      <section className="relative w-full overflow-hidden bg-neutral-100">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[21/8]">
          {HERO_SLIDES.map((s, i) => (
            <div
              key={s.src}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === slide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === slide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Collections strip */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {COLLECTIONS.map((c) => (
          <div key={c.title} className="border-b border-neutral-200 pb-6">
            <Link
              href={`/shop?category=${encodeURIComponent(c.links[0])}`}
              className="flex items-center justify-between font-semibold text-neutral-900 hover:text-[#14532d]"
            >
              {c.title}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <p className="mt-2 text-sm text-neutral-500 leading-6">{c.desc}</p>
            <ul className="mt-3 space-y-1.5">
              {c.links.map((l) => (
                <li key={l}>
                  <Link
                    href={`/shop?category=${encodeURIComponent(l)}`}
                    className="text-sm text-neutral-600 hover:text-[#14532d]"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Trusted partners */}
      <section className="border-y border-neutral-100 bg-white py-10 overflow-hidden">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-neutral-400 mb-6">
          Trusted Partners
        </p>
        <div className="relative">
          <div className="flex animate-marquee w-max gap-14 px-7">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="text-2xl font-bold text-neutral-300 whitespace-nowrap select-none"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* From our collection */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <p className="text-sm text-neutral-500">For your everyday spaces</p>
        <div className="mt-1 flex items-end justify-between">
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1d3325]">
            From our collection
          </h2>
          <Link
            href="/shop"
            className="text-sm font-medium text-neutral-700 underline underline-offset-4 hover:text-[#14532d]"
          >
            View all products
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Banner section */}
      <section className="max-w-7xl mx-auto px-4 pb-4">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/images/complete-hygiene-solutions.jpg"
            alt="Give your business a reliable hygiene supply"
            width={1400}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent flex items-center">
            <div className="p-8 sm:p-12 max-w-lg">
              <h2 className="text-white text-2xl sm:text-4xl font-bold leading-tight">
                Give your business a reliable hygiene supply
              </h2>
              <p className="mt-3 text-white/85 text-sm sm:text-base">
                Carton-wise wholesale supply for offices, schools, clinics,
                restaurants and commercial spaces.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-[#14532d] hover:bg-[#0c3a20] text-white text-sm font-medium px-6 py-3 rounded-lg"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/shop"
                  className="bg-white/95 hover:bg-white text-[#14532d] text-sm font-medium px-6 py-3 rounded-lg"
                >
                  Explore products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price list CTA */}
      <section className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm text-neutral-500">Wholesale price list</p>
          <h2 className="font-serif-display text-3xl text-[#1d3325] mt-1">
            Transparent carton pricing
          </h2>
          <p className="mt-3 text-neutral-600 text-sm leading-6">
            From handwash to mops and gloves, see our wholesale rates for
            everyday hygiene essentials. Bulk orders available for businesses.
          </p>
          <Link
            href="/shop"
            className="inline-block mt-5 bg-[#14532d] hover:bg-[#0c3a20] text-white text-sm font-medium px-6 py-3 rounded-lg"
          >
            Shop Products
          </Link>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/price-list.jpg"
            alt="Hygiene products price list"
            width={800}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}
