"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { useCart } from "./CartContext";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group">
      <Link href={`/product/${product.slug}`} className="block relative">
        <div className="relative aspect-square rounded-xl overflow-hidden bg-[#f4f6f3]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-amber-100 text-amber-800 text-[11px] font-semibold px-2.5 py-1 rounded-full">
              {product.badge}
            </span>
          )}
        </div>
      </Link>
      <div className="pt-4">
        <div className="flex items-center justify-between gap-2">
          <Link
            href={`/shop?category=${encodeURIComponent(product.category)}`}
            className="text-xs text-[#14532d] font-medium hover:underline"
          >
            {product.category}
          </Link>
          <span className="text-[11px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full whitespace-nowrap">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mr-1" />
            Available on request
          </span>
        </div>
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-2 font-semibold text-neutral-900 hover:text-[#14532d]">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-[13px] text-neutral-500 leading-5">
          {product.description}
        </p>
        <p className="mt-2 text-[13px] font-medium text-[#14532d]">
          Carton packing confirmed on request
        </p>
        <p className="text-[13px] font-medium text-[#14532d]">
          MOQ: {product.moq}
        </p>
        <p className="mt-1.5 font-bold text-[#14532d]">Price on request</p>
        <div className="mt-3 flex gap-2">
          <button
            onClick={handleAdd}
            className={`flex-1 flex items-center justify-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors ${
              added
                ? "bg-green-600 text-white"
                : "bg-[#14532d] hover:bg-[#0c3a20] text-white"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {added ? "Added!" : "Add to cart"}
          </button>
          <Link
            href={`/product/${product.slug}`}
            aria-label={`Quick view ${product.name}`}
            className="w-11 h-11 shrink-0 border border-neutral-200 rounded-lg flex items-center justify-center text-neutral-500 hover:border-[#14532d] hover:text-[#14532d]"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
