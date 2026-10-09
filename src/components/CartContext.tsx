"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, qty?: number) => void;
  removeItem: (slug: string) => void;
  updateQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("pm-cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("pm-cart", JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const addItem = (product: Product, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.product.slug === product.slug);
      if (found) {
        return prev.map((i) =>
          i.product.slug === product.slug ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { product, qty }];
    });
  };

  const removeItem = (slug: string) =>
    setItems((prev) => prev.filter((i) => i.product.slug !== slug));

  const updateQty = (slug: string, qty: number) => {
    if (qty <= 0) return removeItem(slug);
    setItems((prev) =>
      prev.map((i) => (i.product.slug === slug ? { ...i, qty } : i))
    );
  };

  const clear = () => setItems([]);
  const count = items.reduce((n, i) => n + i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQty, clear, count }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
