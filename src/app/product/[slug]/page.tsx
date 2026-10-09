"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getProduct, products } from "@/data/products";
import { useCart } from "@/components/CartContext";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  const handleAdd = () => {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <nav className="text-xs text-neutral-500 mb-6">
        <Link href="/" className="hover:text-[#14532d]">Home</Link>
        {" / "}
        <Link href="/shop" className="hover:text-[#14532d]">Shop</Link>
        {" / "}
        <span className="text-neutral-800">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#f4f6f3]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-full">
              {product.badge}
            </span>
          )}
        </div>

        <div>
          <Link
            href={`/shop?category=${encodeURIComponent(product.category)}`}
            className="text-sm text-[#14532d] font-medium hover:underline"
          >
            {product.category}
          </Link>
          <h1 className="mt-2 font-serif-display text-3xl sm:text-4xl text-[#1d3325]">
            {product.name}
          </h1>
          <p className="mt-3 text-neutral-600 leading-7">{product.description}</p>

          <div className="mt-5 space-y-1.5 text-sm">
            <p className="font-medium text-[#14532d]">Carton packing confirmed on request</p>
            <p className="font-medium text-[#14532d]">MOQ: {product.moq}</p>
            <p className="text-lg font-bold text-[#14532d] pt-1">Price on request</p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center border border-neutral-200 rounded-lg">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-10 h-11 flex items-center justify-center text-lg text-neutral-600 hover:text-[#14532d]"
                aria-label="Decrease quantity"
              >
                &minus;
              </button>
              <span className="w-10 text-center font-medium">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-10 h-11 flex items-center justify-center text-lg text-neutral-600 hover:text-[#14532d]"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAdd}
              className={`flex-1 flex items-center justify-center gap-2 text-sm font-medium px-6 py-3 rounded-lg transition-colors ${
                added ? "bg-green-600 text-white" : "bg-[#14532d] hover:bg-[#0c3a20] text-white"
              }`}
            >
              {added ? "Added to cart!" : "Add to cart"}
            </button>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="https://wa.me/923006917385"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center border border-[#14532d] text-[#14532d] text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#14532d] hover:text-white transition-colors"
            >
              Order on WhatsApp
            </a>
            <Link
              href="/contact"
              className="flex-1 text-center border border-neutral-200 text-neutral-700 text-sm font-medium px-6 py-3 rounded-lg hover:border-[#14532d] hover:text-[#14532d]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="font-serif-display text-2xl text-[#1d3325]">Related products</h2>
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
