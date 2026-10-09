"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "./CartContext";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop", dropdown: true },
  { label: "Corporate Orders", href: "/corporate-orders" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const { count } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Announcement bar */}
      <div className="bg-neutral-100 text-[11px] sm:text-xs text-neutral-700">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between gap-2">
          <span className="truncate">
            Tissue &amp; hygiene essentials &middot; Wholesale supply from Lahore
          </span>
          <span className="hidden sm:inline font-medium whitespace-nowrap">
            Zohair Ahmed &middot; Call{" "}
            <a href="tel:+923006917385" className="text-[#14532d] font-semibold">
              +92 300 6917 385
            </a>
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3 sm:gap-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="Pak Multilinks Hygiene"
            width={220}
            height={64}
            className="h-12 sm:h-14 w-auto"
            priority
          />
        </Link>

        <form
          action="/shop"
          method="GET"
          className="hidden md:flex flex-1 max-w-xl relative"
        >
          <input
            name="q"
            type="search"
            placeholder="Search products, SKU or category"
            className="w-full border border-neutral-200 rounded-full pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#14532d]/30 focus:border-[#14532d]"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </form>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Link
            href="/account"
            aria-label="Your account"
            className="w-10 h-10 rounded-full border border-neutral-200 hidden sm:flex items-center justify-center text-neutral-600 hover:border-[#14532d] hover:text-[#14532d]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
          </Link>
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative w-10 h-10 rounded-lg bg-[#14532d] flex items-center justify-center text-white hover:bg-[#0c3a20]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1">
                {count}
              </span>
            )}
          </Link>
          <a
            href="https://wa.me/923006917385"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-10 h-10 rounded-full border border-neutral-200 hidden sm:flex items-center justify-center text-[#14532d] hover:border-[#14532d]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.89 9.88m8.42-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.4" />
            </svg>
          </a>
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Nav */}
      <nav className="border-t border-neutral-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="py-3 text-sm font-medium text-neutral-700 hover:text-[#14532d] flex items-center gap-1"
            >
              {item.label}
              {item.dropdown && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-auto my-2 bg-[#14532d] hover:bg-[#0c3a20] text-white text-sm font-medium px-5 py-2 rounded-md"
          >
            Get a quote
          </Link>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-neutral-100 bg-white">
          <div className="px-4 py-2 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-sm font-medium text-neutral-700 border-b border-neutral-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="my-3 bg-[#14532d] text-white text-sm font-medium px-5 py-2.5 rounded-md text-center"
            >
              Get a quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
