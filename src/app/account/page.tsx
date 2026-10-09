"use client";

export default function AccountPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="font-serif-display text-3xl text-[#1d3325] text-center">My account</h1>
      <p className="mt-2 text-sm text-neutral-500 text-center">
        Sign in to track your bulk orders and quotations.
      </p>
      <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="text-sm font-medium">Email address</label>
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="mt-1.5 w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#14532d]/30 focus:border-[#14532d]"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            required
            placeholder="••••••••"
            className="mt-1.5 w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#14532d]/30 focus:border-[#14532d]"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#14532d] hover:bg-[#0c3a20] text-white text-sm font-medium py-3 rounded-lg"
        >
          Sign in
        </button>
        <p className="text-center text-sm text-neutral-500">
          Prefer WhatsApp?{" "}
          <a
            href="https://wa.me/923006917385"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#14532d] font-medium hover:underline"
          >
            Chat with us directly
          </a>
        </p>
      </form>
    </div>
  );
}
