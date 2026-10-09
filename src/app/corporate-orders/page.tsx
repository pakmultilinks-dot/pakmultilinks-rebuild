import Image from "next/image";
import Link from "next/link";

export default function CorporateOrdersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-sm text-neutral-500">For businesses</p>
      <h1 className="font-serif-display text-3xl sm:text-4xl text-[#1d3325] mt-1">
        Corporate Orders
      </h1>
      <p className="mt-3 text-neutral-600 max-w-2xl leading-7">
        From offices and restaurants to schools and clinics, we help you arrange
        the everyday supplies your team needs. Send us your quantities for a
        quotation.
      </p>

      <div className="mt-8 rounded-2xl overflow-hidden">
        <Image
          src="/images/complete-hygiene-solutions.jpg"
          alt="Complete hygiene solutions for every workspace"
          width={1400}
          height={500}
          className="w-full h-auto"
        />
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { t: "Offices & Corporate", d: "Daily tissue and washroom essentials for your teams." },
          { t: "Industries & Warehouses", d: "Bulk cartons for large facilities and staff." },
          { t: "Schools & Educational Institutes", d: "Hygiene supplies for students and staff." },
          { t: "Healthcare & Clinics", d: "Reliable hygiene products for patient areas." },
          { t: "Hotels & Hospitality", d: "Guest-ready tissue and cleaning supplies." },
          { t: "Restaurants & Food", d: "Napkins, tissues and disposables for service." },
        ].map((s) => (
          <div key={s.t} className="border border-neutral-200 rounded-xl p-5">
            <h3 className="font-semibold">{s.t}</h3>
            <p className="mt-1.5 text-sm text-neutral-500">{s.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-[#eef7f0] rounded-2xl p-8 sm:p-10 text-center">
        <h2 className="font-serif-display text-2xl text-[#1d3325]">
          Send us your quantities for a quotation
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Tell us what you need on WhatsApp and we will confirm carton packing and pricing.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/923006917385?text=Hello%20Pak%20Multilinks!%20I%20need%20a%20bulk%20quotation."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#14532d] hover:bg-[#0c3a20] text-white text-sm font-medium px-8 py-3 rounded-lg"
          >
            Get a Bulk Quote
          </a>
          <Link
            href="/shop"
            className="bg-white border border-[#14532d] text-[#14532d] text-sm font-medium px-8 py-3 rounded-lg"
          >
            Explore products
          </Link>
        </div>
      </div>
    </div>
  );
}
