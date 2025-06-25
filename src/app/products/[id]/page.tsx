import { notFound } from "next/navigation";
import ProductDetail from "@/app/product-detail";

// This would typically come from your database or API
const products = [
  {
    id: 1,
    name: "BTS Dark Blue Hoodie",
    price: 45,
    originalPrice: 60,
    rating: 4.8,
    reviews: 124,
    category: "Hoodies",
    isNew: true,
    description:
      "Embrace the cosmic energy with our signature Stellar Streetwear Hoodie. Crafted from premium cotton blend with a soft fleece interior, this hoodie features our exclusive galaxy-inspired design that captures the essence of reaching beyond the stars. Perfect for those who dare to dream bigger.",
    features: [
      "Premium 80% cotton, 20% polyester blend",
      "Soft fleece interior lining",
      "Adjustable drawstring hood",
      "Kangaroo pocket with hidden phone compartment",
      "Ribbed cuffs and hem",
      "Machine washable",
      "Unisex fit",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        image: "/merch-1.png?height=600&width=600",
      },
      {
        name: "Purple",
        hex: "#6b46c1",
        image: "/hoodies/dark-purple-hoddie.png?height=600&width=600",
      },
      {
        name: "Pink",
        hex: "#ec4899",
        image: "/merch-1-pink.png?height=600&width=600",
      },
    ],
    images: [
      "/merch-1.png?height=600&width=600",
      "/merch-1-back.png?height=600&width=600",
      "/merch-1-detail.png?height=600&width=600",
      "/merch-1-lifestyle.png?height=600&width=600",
    ],
  },
  {
    id: 2,
    name: "Cosmic Denim Jacket",
    price: 145,
    originalPrice: 180,
    rating: 4.9,
    reviews: 89,
    category: "Jackets",
    isNew: false,
    description:
      "A modern take on the classic denim jacket, featuring cosmic-inspired details and premium construction.",
    features: [
      "Premium denim construction",
      "Cosmic-inspired embroidery",
      "Multiple pockets",
      "Adjustable cuffs",
      "Machine washable",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      {
        name: "Deep Space",
        hex: "#1a1a1a",
        image: "/merch-2.png?height=600&width=600",
      },
      {
        name: "Stellar Blue",
        hex: "#3b82f6",
        image: "/merch-2-blue.png?height=600&width=600",
      },
    ],
    images: [
      "/merch-2.png?height=600&width=600",
      "/merch-2-back.png?height=600&width=600",
      "/merch-2-detail.png?height=600&width=600",
    ],
  },
  {
    id: 3,
    name: "Galaxy Print Tee",
    price: 45,
    originalPrice: 60,
    rating: 4.7,
    reviews: 203,
    category: "T-Shirts",
    isNew: true,
    description:
      "A stunning galaxy-inspired t-shirt that brings the cosmos to your everyday style. Featuring a vibrant, detailed print of the Milky Way and surrounding stars, this tee is perfect for those who want to wear their love for the universe.",
    features: [
      "100% premium cotton",
      "Vibrant, fade-resistant print",
      "Regular fit",
      "Machine washable",
      "Unisex design",
      "Made with sustainable materials",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Cosmic Black",
        hex: "#1a1a1a",
        image: "/merch-3.png?height=600&width=600",
      },
      {
        name: "Stellar White",
        hex: "#ffffff",
        image: "/merch-3-white.png?height=600&width=600",
      },
      {
        name: "Nebula Blue",
        hex: "#1e40af",
        image: "/merch-3-blue.png?height=600&width=600",
      },
    ],
    images: [
      "/merch-3.png?height=600&width=600",
      "/merch-3-back.png?height=600&width=600",
      "/merch-3-detail.png?height=600&width=600",
      "/merch-3-lifestyle.png?height=600&width=600",
    ],
  },
  {
    id: 4,
    name: "Nebula Cargo Pants",
    price: 95,
    originalPrice: 125,
    rating: 4.6,
    reviews: 156,
    category: "Pants",
    isNew: false,
    description:
      "Functional and stylish cargo pants with a cosmic twist. These versatile pants feature multiple pockets, a comfortable fit, and a unique nebula-inspired design that sets them apart from ordinary cargo pants.",
    features: [
      "Durable cotton-blend fabric",
      "Multiple utility pockets",
      "Adjustable waistband",
      "Reinforced knees",
      "Machine washable",
      "Available in multiple colors",
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: [
      {
        name: "Deep Space",
        hex: "#1a1a1a",
        image: "/merch-4.png?height=600&width=600",
      },
      {
        name: "Cosmic Khaki",
        hex: "#d4b483",
        image: "/merch-4-khaki.png?height=600&width=600",
      },
      {
        name: "Stellar Olive",
        hex: "#4a5d23",
        image: "/merch-4-olive.png?height=600&width=600",
      },
    ],
    images: [
      "/merch-4.png?height=600&width=600",
      "/merch-4-back.png?height=600&width=600",
      "/merch-4-detail.png?height=600&width=600",
      "/merch-4-lifestyle.png?height=600&width=600",
    ],
  },
  // Add more products as needed
];

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
