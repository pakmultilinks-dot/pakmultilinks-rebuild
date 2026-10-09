"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { items, updateQty, removeItem, clear } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="font-serif-display text-3xl text-[#1d3325]">Your cart is empty</h1>
        <p className="mt-3 text-neutral-500 text-sm">
          Browse our wholesale collection and add cartons to get started.
        </p>
        <Link
          href="/shop"
          className="inline-block mt-6 bg-[#14532d] hover:bg-[#0c3a20] text-white text-sm font-medium px-8 py-3 rounded-lg"
        >
          Shop Products
        </Link>
      </div>
    );
  }

  const message = encodeURIComponent(
    "Hello Pak Multilinks! I would like to order:\n" +
      items.map((i) => `- ${i.product.name} x ${i.qty} carton(s)`).join("\n")
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="font-serif-display text-3xl text-[#1d3325]">Your cart</h1>
      <p className="mt-2 text-sm text-neutral-500">
        {items.reduce((n, i) => n + i.qty, 0)} carton(s) in your bulk order
      </p>

      <div className="mt-8 space-y-4">
        {items.map(({ product, qty }) => (
          <div
            key={product.slug}
            className="flex gap-4 border border-neutral-200 rounded-xl p-4"
          >
            <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-[#f4f6f3]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <Link
                href={`/product/${product.slug}`}
                className="font-semibold hover:text-[#14532d]"
              >
                {product.name}
              </Link>
              <p className="text-xs text-neutral-500 mt-0.5">{product.category}</p>
              <p className="text-sm font-medium text-[#14532d] mt-1">Price on request</p>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex items-center border border-neutral-200 rounded-lg">
                  <button
                    onClick={() => updateQty(product.slug, qty - 1)}
                    className="w-8 h-8 flex items-center justify-center text-neutral-600"
                    aria-label="Decrease"
                  >
                    &minus;
                  </button>
                  <span className="w-8 text-center text-sm font-medium">{qty}</span>
                  <button
                    onClick={() => updateQty(product.slug, qty + 1)}
                    className="w-8 h-8 flex items-center justify-center text-neutral-600"
                    aria-label="Increase"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(product.slug)}
                  className="text-xs text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a
          href={`https://wa.me/923006917385?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-[#14532d] hover:bg-[#0c3a20] text-white text-sm font-medium px-6 py-3.5 rounded-lg"
        >
          Send Order on WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex-1 text-center border border-[#14532d] text-[#14532d] text-sm font-medium px-6 py-3.5 rounded-lg hover:bg-[#14532d] hover:text-white transition-colors"
        >
          Request Bulk Quote
        </Link>
      </div>
      <button
        onClick={clear}
        className="mt-4 text-xs text-neutral-400 hover:text-red-600"
      >
        Clear cart
      </button>
    </div>
  );
}
