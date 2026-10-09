import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-sm text-neutral-500">Our story</p>
      <h1 className="font-serif-display text-3xl sm:text-4xl text-[#1d3325] mt-1">
        About Pak Multilinks Hygiene
      </h1>
      <div className="mt-8 grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4 text-neutral-600 leading-7 text-[15px]">
          <p>
            Pak Multilinks Hygiene is a wholesale supplier of tissue, hygiene
            and cleaning products based in Lahore, Pakistan. We supply everyday
            essentials by the carton to homes, offices and businesses that
            can&apos;t afford to run out.
          </p>
          <p>
            From Rose Petal facial tissues and tissue rolls to hand wash,
            dispensers, floor care and disposable items, we arrange the products
            your team needs, confirmed carton-wise and delivered reliably.
          </p>
          <p>
            Led by founder and sales head Zohair Ahmed, we work directly with
            businesses across Lahore, schools, clinics, restaurants and
            corporate offices, with transparent wholesale pricing and dedicated
            B2B support.
          </p>
          <div className="pt-2">
            <p className="font-semibold text-neutral-900">Zohair Ahmed</p>
            <p className="text-sm">Founder &amp; Sales Head</p>
            <p className="text-sm mt-1">+92 300 6917 385 &middot; zohair.shah8@gmail.com</p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/hero-banner.png"
            alt="Pak Multilinks Hygiene warehouse"
            width={1000}
            height={700}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
