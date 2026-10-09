export interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
  moq: string;
}

export const products: Product[] = [
  {
    slug: "pop-up",
    name: "Pop Up",
    category: "Facial Tissues",
    description: "Wholesale Pop Up tissue supplied by carton.",
    image: "/images/rose-petal-popup-black.jpg",
    badge: "Best seller",
    moq: "1 carton",
  },
  {
    slug: "mambo-roll",
    name: "Mambo Roll",
    category: "Tissue Rolls",
    description: "Mambo Roll supplied carton-wise for business customers.",
    image: "/images/rose-petal-maxob.jpg",
    moq: "1 carton",
  },
  {
    slug: "pantry-white",
    name: "Pantry White",
    category: "Tissue & Paper Wholesale",
    description: "Pantry White product available in wholesale cartons.",
    image: "/images/rose-petal-party-pack.jpg",
    moq: "1 carton",
  },
  {
    slug: "pantry-pack",
    name: "Pantry Pack",
    category: "Tissue & Paper Wholesale",
    description: "Pantry Pack supplied for bulk commercial requirements.",
    image: "/images/rose-petal-popup.jpg",
    moq: "1 carton",
  },
  {
    slug: "soft-pack-regular",
    name: "Soft Pack Regular",
    category: "Facial Tissues",
    description: "Soft Pack Regular tissues for offices and homes.",
    image: "/images/hi-jeen-blue.jpg",
    moq: "1 carton",
  },
  {
    slug: "soft-pack-p",
    name: "Soft Pack P",
    category: "Facial Tissues",
    description: "Soft Pack P premium facial tissues, wholesale cartons.",
    image: "/images/hi-jeen-green.jpg",
    moq: "1 carton",
  },
  {
    slug: "mambo-8-plus-2",
    name: "Mambo 8+2",
    category: "Tissue & Paper Wholesale",
    description: "Mambo 8+2 value pack tissue rolls for businesses.",
    image: "/images/rose-petal-party-pack-pink.jpg",
    moq: "1 carton",
  },
  {
    slug: "rose-petal-wet-wipes",
    name: "Rose Petal Wet Wipes",
    category: "Personal Care",
    description: "Rose-scented wet wipes, 5 sachets pack.",
    image: "/images/rose-petal-wet-wipes.jpg",
    moq: "1 carton",
  },
  {
    slug: "rose-petal-ciblure",
    name: "Rose Petal Ciblure",
    category: "Facial Tissues",
    description: "Rose Petal Ciblure premium black box tissues.",
    image: "/images/rose-petal-ciblure.jpg",
    moq: "1 carton",
  },
  {
    slug: "hand-towel-blue",
    name: "Rose Petal Hand Towel",
    category: "Washroom Supplies",
    description: "Premium hand towels, avoid 10x more germs.",
    image: "/images/rose-petal-hand-towel-blue.jpg",
    moq: "1 carton",
  },
  {
    slug: "family-starter-pack",
    name: "Family Starter Pack",
    category: "Cleaning Products",
    description: "Essential cleaning products for a cleaner home.",
    image: "/images/family-starter-pack.jpg",
    badge: "Deal",
    moq: "1 pack",
  },
];

export const categories = [
  "All categories",
  "Facial Tissues",
  "Tissue Rolls",
  "Tissue & Paper Wholesale",
  "Washroom Supplies",
  "Personal Care",
  "Cleaning Products",
  "Disposable Items",
];

export const brands = ["All brands", "Rose Petal", "Pak Multilinks", "Hi-jeen", "Mamos"];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
