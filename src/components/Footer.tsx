import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0c2417] text-neutral-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <Image
            src="/images/logo.jpg"
            alt="Pak Multilinks Hygiene"
            width={200}
            height={58}
            className="h-12 w-auto rounded"
          />
          <p className="mt-4 text-sm leading-6">
            Your hygiene partner for wholesale tissue, hygiene and cleaning
            supplies delivered by carton across Lahore and Pakistan.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Information</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/about" className="hover:text-white">Our story</Link></li>
            <li><Link href="/corporate-orders" className="hover:text-white">Business orders</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact us</Link></li>
            <li><Link href="/account" className="hover:text-white">My account</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Collections</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/shop?category=Facial+Tissues" className="hover:text-white">Facial Tissues</Link></li>
            <li><Link href="/shop?category=Tissue+Rolls" className="hover:text-white">Tissue Rolls</Link></li>
            <li><Link href="/shop?category=Washroom+Supplies" className="hover:text-white">Washroom Supplies</Link></li>
            <li><Link href="/shop?category=Cleaning+Products" className="hover:text-white">Cleaning Products</Link></li>
            <li><Link href="/shop?category=Disposable+Items" className="hover:text-white">Disposable Items</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Get in touch</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="tel:+923006917385" className="hover:text-white">
                Phone / WhatsApp: +92 300 6917 385
              </a>
            </li>
            <li>
              <a href="mailto:zohair.shah8@gmail.com" className="hover:text-white">
                zohair.shah8@gmail.com
              </a>
            </li>
            <li>
              Shop No LG-9, Rehman Tower Main Market Gulberg II, Lahore.
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>&copy; 2026 Pak Multilinks Hygiene. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
