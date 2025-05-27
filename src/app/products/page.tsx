"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Grid, List, Star } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "@/types/product";
import { Menu, X } from "lucide-react";

export default function ProductsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const toggleLike = (productId: number) => {
    setLikedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const products: ProductCard[] = [
    {
      id: 1,
      name: "Stellar Streetwear Hoodie",
      price: 89,
      originalPrice: 120,
      image: "/merch-1.png?height=400&width=1000",
      category: "Hoodies",
      rating: 4.8,
      reviews: 124,
      isNew: true,
    },
    {
      id: 2,
      name: "Cosmic Denim Jacket",
      price: 145,
      originalPrice: 180,
      image: "/merch-2.png?height=400&width=500",
      category: "Tee Shirts",
      rating: 4.9,
      reviews: 89,
      isNew: false,
    },
    {
      id: 3,
      name: "Galaxy Print Tee",
      price: 45,
      originalPrice: 60,
      image: "/merch-3.png?height=400&width=500",
      category: "T-Shirts",
      rating: 4.7,
      reviews: 203,
      isNew: true,
    },
    {
      id: 4,
      name: "Nebula Cargo Pants",
      price: 95,
      originalPrice: 125,
      image: "/merch-4.png?height=400&width=300",
      category: "Pants",
      rating: 4.6,
      reviews: 156,
      isNew: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url('/star-streetwear.jpg?height=1080&width=1920&text=Starry+Night+Sky')`,
          }}
        >
          {/* <div className="absolute top-0 left-0 w-64 h-64 bg-no-repeat bg-contain bg-[url('/logo-2.png?height=100&width=100&text=dots')] animate-pulse"></div> */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 via-purple-300/30 to-pink-400/30"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-4 md:px-8 py-6">
          <div className="flex-1"></div>
          <div className="hidden md:flex items-center space-x-8 text-white font-medium">
            <Link
              href="/"
              className="hover:text-pink-300 transition-colors relative group"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/products"
              className="hover:text-pink-300 transition-colors relative group"
            >
              PRODUCTS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/book"
              className="hover:text-pink-300 transition-colors relative group"
            >
              BOOK
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="hover:text-pink-300 transition-colors relative group"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="hover:text-pink-300 transition-colors relative group"
            >
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          <div className="flex-1 flex justify-end items-center space-x-4">
            <button
              className="md:hidden text-white hover:text-pink-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <div className="relative">
              <ShoppingBag className="w-6 h-6 text-white hover:text-pink-300 transition-colors cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-50 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full w-full flex flex-col items-center justify-center space-y-8 text-white">
            <div className="flex flex-col items-center space-y-6">
              <h2 className="text-3xl font-light tracking-[0.3em] text-center">
                BEYOND THE STARS
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-pink-400 to-purple-400"></div>
            </div>
            <div className="flex flex-col items-center space-y-6 mt-8">
              <Link
                href="/"
                className="text-xl hover:text-pink-300 transition-colors"
              >
                HOME
              </Link>
              <Link
                href="/products"
                className="text-xl hover:text-pink-300 transition-colors"
              >
                PRODUCTS
              </Link>
              <Link
                href="/book"
                className="text-xl hover:text-pink-300 transition-colors"
              >
                BOOK
              </Link>
              <Link
                href="/about"
                className="text-xl hover:text-pink-300 transition-colors"
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="text-xl hover:text-pink-300 transition-colors"
              >
                CONTACT
              </Link>
            </div>
            <div className="flex space-x-6 mt-8">
              <Facebook className="w-6 h-6 text-white hover:text-pink-500 transition-colors cursor-pointer" />
              <Twitter className="w-6 h-6 text-white hover:text-pink-500 transition-colors cursor-pointer" />
              <Youtube className="w-6 h-6 text-white hover:text-pink-500 transition-colors cursor-pointer" />
              <Instagram className="w-6 h-6 text-white hover:text-pink-500 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Left sidebar - Hidden on mobile */}
        <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-20 bg-white/80 backdrop-blur-sm flex-col items-center justify-center space-y-6 z-10 border-r border-pink-100">
          <div className="flex flex-col items-center space-y-1">
            {[
              "B",
              "E",
              "Y",
              "O",
              "N",
              "D",
              " ",
              "T",
              "H",
              "E",
              " ",
              "S",
              "T",
              "A",
              "R",
              "S",
            ].map((letter, index) => (
              <span
                key={index}
                className="text-gray-800 text-sm font-light tracking-wider hover:text-pink-500 transition-colors"
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </div>
          <div className="w-px h-16 bg-gradient-to-b from-pink-200 to-purple-200"></div>
          <div className="flex flex-col space-y-4">
            <Facebook className="w-5 h-5 text-gray-800 hover:text-pink-500 transition-colors cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-800 hover:text-pink-500 transition-colors cursor-pointer" />
            <Youtube className="w-5 h-5 text-gray-800 hover:text-pink-500 transition-colors cursor-pointer" />
            <Instagram className="w-5 h-5 text-gray-800 hover:text-pink-500 transition-colors cursor-pointer" />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center min-h-screen">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4">
              SHOP{" "}
              <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                COLLECTION
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Discover our cosmic-inspired streetwear collection
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Homepage
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Products</span>
        </nav>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Button
              variant="outline"
              className="border-gray-200 hover:border-pink-400 hover:text-pink-500"
            >
              Filter
            </Button>
            <Button
              variant="outline"
              className="border-gray-200 hover:border-pink-400 hover:text-pink-500"
            >
              Sort
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">View:</span>
            <Button variant="ghost" size="icon" className="hover:text-pink-500">
              <Grid className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-pink-500">
              <List className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-3 left-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white">
                      NEW
                    </Badge>
                  )}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleLike(product.id);
                    }}
                    className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedProducts.includes(product.id)
                          ? "fill-pink-500 text-pink-500"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">
                      Quick View
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {product.rating}
                      </span>
                      <span className="text-sm text-gray-400">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-pink-500 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-lg font-bold">${product.price}</span>
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      % OFF
                    </span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white">
                    Add to Cart
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
}
