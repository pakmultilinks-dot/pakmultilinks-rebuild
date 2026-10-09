"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { products, categories, brands } from "@/data/products";
import ProductCard from "@/components/ProductCard";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All categories";
  const initialQ = searchParams.get("q") || "";

  const [q, setQ] = useState(initialQ);
  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState("All brands");
  const [availableOnly, setAvailableOnly] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (q) {
        const needle = q.toLowerCase();
        if (
          !p.name.toLowerCase().includes(needle) &&
          !p.category.toLowerCase().includes(needle) &&
          !p.slug.includes(needle)
        )
          return false;
      }
      if (category !== "All categories" && p.category !== category) return false;
      return true;
    });
  }, [q, category]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="font-serif-display text-3xl sm:text-4xl text-[#1d3325]">
        Shop all products
      </h1>
      <p className="mt-2 text-sm text-neutral-500">
        Wholesale hygiene products by carton in Lahore
      </p>

      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/* Filters sidebar */}
        <aside className="lg:w-64 shrink-0">
          <div className="border border-neutral-200 rounded-xl p-5 lg:sticky lg:top-40">
            <h2 className="font-semibold flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16M7 12h10M10 18h4" />
              </svg>
              Filter products
            </h2>
            <div className="mt-5">
              <label className="text-sm font-semibold text-[#14532d]">
                Search products
              </label>
              <div className="relative mt-2">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Name, SKU or category"
                  className="w-full border border-neutral-200 rounded-lg pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#14532d]/30 focus:border-[#14532d]"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
            <div className="mt-5">
              <label className="text-sm font-semibold text-[#14532d]">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-2 w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#14532d]"
              >
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="mt-5">
              <label className="text-sm font-semibold text-[#14532d]">Brand</label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="mt-2 w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#14532d]"
              >
                {brands.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
            <label className="mt-5 flex items-center gap-2 text-sm text-neutral-600 cursor-pointer">
              <input
                type="checkbox"
                checked={availableOnly}
                onChange={(e) => setAvailableOnly(e.target.checked)}
                className="w-4 h-4 accent-[#14532d]"
              />
              Available products only
            </label>
          </div>
        </aside>

        {/* Product grid */}
        <div className="flex-1">
          <p className="text-sm text-neutral-500 mb-6">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
          </p>
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-neutral-500">
              <p className="font-medium">No products match your filters.</p>
              <button
                onClick={() => {
                  setQ("");
                  setCategory("All categories");
                  setBrand("All brands");
                }}
                className="mt-3 text-sm text-[#14532d] underline underline-offset-4"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
