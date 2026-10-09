import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-sm text-neutral-500">Contact us</p>
      <h1 className="font-serif-display text-3xl sm:text-4xl text-[#1d3325] mt-1">
        Get in touch
      </h1>
      <div className="mt-8 grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="border border-neutral-200 rounded-xl p-6">
            <h2 className="font-semibold text-lg">Zohair Ahmed</h2>
            <p className="text-sm text-neutral-500">Founder &amp; Sales Head</p>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <span className="font-medium">Phone / WhatsApp: </span>
                <a href="tel:+923006917385" className="text-[#14532d] font-medium">+92 300 6917 385</a>
              </p>
              <p>
                <span className="font-medium">Phone: </span>
                <a href="tel:+923121091848" className="text-[#14532d] font-medium">+92 312 1091 848</a>
              </p>
              <p>
                <span className="font-medium">Email: </span>
                <a href="mailto:zohair.shah8@gmail.com" className="text-[#14532d] font-medium">zohair.shah8@gmail.com</a>
              </p>
              <p>
                <span className="font-medium">Address: </span>
                Shop No LG-9, Rehman Tower Main Market Gulberg II, Lahore.
              </p>
            </div>
            <a
              href="https://wa.me/923006917385"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-[#14532d] hover:bg-[#0c3a20] text-white text-sm font-medium px-6 py-3 rounded-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="border border-neutral-200 rounded-xl p-6">
            <h2 className="font-semibold text-lg">M. Bilal Shah</h2>
            <p className="text-sm text-neutral-500">BDO</p>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <span className="font-medium">Phone: </span>
                <a href="tel:+923258166829" className="text-[#14532d] font-medium">0325 8166829</a>
              </p>
              <p>
                <span className="font-medium">Email: </span>
                <a href="mailto:bilalshah2237463@gmail.com" className="text-[#14532d] font-medium">bilalshah2237463@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/zohair-card.jpg"
              alt="Zohair Ahmed business card"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/bilal-card.jpg"
              alt="M. Bilal Shah business card"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
