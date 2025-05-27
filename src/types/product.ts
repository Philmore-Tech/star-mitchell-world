export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  category: string;
  isNew: boolean;
  description: string;
  features: string[];
  sizes: string[];
  colors: {
    name: string;
    hex: string;
    image: string;
  }[];
  images: string[];
}

export interface ProductCard {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew: boolean;
}
