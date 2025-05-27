"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Menu,
  X,
  Star,
  Heart,
  ArrowRight,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ProductCard } from "@/types/product";

export default function FashionWebsite() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const toggleLike = (productId: number) => {
    setLikedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const featuredProducts: ProductCard[] = [
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

  const collections = [
    {
      title: "Urban Cosmos",
      description: "Street-inspired pieces with celestial flair",
      image: "/model-6.png?height=500&width=400",
      itemCount: 24,
    },
    {
      title: "Stellar Essentials",
      description: "Everyday basics that shine",
      image: "/model-4.png?height=500&width=400",
      itemCount: 18,
    },
    {
      title: "Midnight Collection",
      description: "Dark elegance meets modern style",
      image: "/model-5.png?height=500&width=400",
      itemCount: 32,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-50 to-purple-50">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/star-profile-2.png?height=1080&width=1920&text=Starry+Night+Sky')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 via-purple-300/30 to-pink-400/30"></div>
          {/* <div className="absolute inset-0 bg-[url('/logo-2.png?height=100&width=100&text=dots')] opacity-10 animate-pulse"></div> */}
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-4 md:px-8 py-6">
          <div className="flex-1"></div>
          <div className="hidden md:flex items-center space-x-8 text-white font-medium">
            <a
              href="#"
              className="hover:text-pink-300 transition-colors relative group"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-300 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/products"
              className="hover:text-pink-300 transition-colors relative group"
            >
              PRODUCTS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-300 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#book"
              className="hover:text-pink-300 transition-colors relative group"
            >
              BOOK
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-300 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="hover:text-pink-300 transition-colors relative group"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-300 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="hover:text-pink-300 transition-colors relative group"
            >
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-300 group-hover:w-full transition-all duration-300"></span>
            </a>
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
              <ShoppingCart className="w-6 h-6 text-white hover:text-pink-300 transition-colors cursor-pointer" />
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
              <a
                href="#"
                className="text-xl hover:text-pink-300 transition-colors"
              >
                HOME
              </a>
              <a
                href="#products"
                className="text-xl hover:text-pink-300 transition-colors"
              >
                PRODUCTS
              </a>
              <a
                href="#book"
                className="text-xl hover:text-pink-300 transition-colors"
              >
                BOOK
              </a>
              <a
                href="#about"
                className="text-xl hover:text-pink-300 transition-colors"
              >
                ABOUT
              </a>
              <a
                href="#contact"
                className="text-xl hover:text-pink-300 transition-colors"
              >
                CONTACT
              </a>
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

        {/* Hero Content */}
        <div className="relative z-10 flex items-center min-h-[calc(100vh-100px)] lg:ml-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Text Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
                    BEYOND
                    <br />
                    <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                      THE STARS
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 max-w-md mx-auto lg:mx-0">
                    Discover streetwear that transcends ordinary fashion. Where
                    purpose meets urban style.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-3 rounded-full flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <ShoppingCart className="w-5 h-5" />
                      <span className="font-medium">SHOP COLLECTION</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white text-black hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full transition-all duration-300"
                    >
                      EXPLORE STORY
                    </Button>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $75</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Your payment information is safe</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
            <div className="col-span-1 md:col-span-3 mt-12 text-center">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-8 border border-pink-100">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-pink-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Supporting The fight against Lupus
                  </h3>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  A portion of every purchase goes directly to the{" "}
                  <span className="font-semibold text-purple-600">
                    Lupus Foundation of America
                  </span>{" "}
                  to support research and help those affected by lupus.
                  Together, we can make a difference beyond the stars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              FEATURED{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                COLLECTION
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular pieces that blend cosmic inspiration
              with street-ready style
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={1000}
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
                      <span className="text-lg font-bold">
                        ${product.price}
                      </span>
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

          <div className="text-center">
            <Button
              variant="outline"
              className="px-8 py-3 border-gray-300 hover:border-pink-400 hover:text-pink-500"
              asChild
            >
              <Link href="/products">
                VIEW ALL PRODUCTS
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              SHOP BY{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                COLLECTION
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Curated collections that tell a story through fashion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    width={400}
                    height={500}
                    className="w-full h-80 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-sm text-white/90 mb-3">
                      {collection.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        {collection.itemCount} items
                      </span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section id="book" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              PLENTY OF{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                PURPOSE
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A journey through pain, purpose, and the fight to protect what
              matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Book Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-lg transform group-hover:scale-105 transition-transform duration-500"></div>
              <Image
                src="/book-2.jpg"
                alt="Beyond The Stars Book Cover"
                width={600}
                height={800}
                className="w-full h-auto object-cover rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Book Details */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-gray-900">
                  When the game breaks your home, but not your soul.
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Could you live in an environment where luxury was provided by
                  the drug game while it turned your mom into the slave of the
                  game to the slave of the drug? Living in Brooklyn Crown
                  Heights turned all that into reality and more for my family.
                  This book is dedicated to the struggles of my life due to
                  being parentified once my home became a crack house and
                  realizing my sister needed me as her caregiver due to her
                  fight against Lupus. However, the story doesn't stop there
                  because the nature of the game wasn't learning how to manage
                  the pain of seeing the ones I love fight a battle most see as
                  a losing one, but a journey of survival and family
                  togetherness in order to keep surviving within myself while
                  holding the strength of my family.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-pink-400" />
                    <span>Unfiltered stories of survival and sacrifice</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-pink-400" />
                    <span>Raw reflections on addiction, love, and loss</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-pink-400" />
                    <span>
                      Intimate moments from a childhood turned caregiver
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-pink-400" />
                    <span>
                      Limited edition signed copies for early supporters
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-3 rounded-full flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="font-medium">PRE-ORDER NOW</span>
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 hover:border-pink-400 hover:text-pink-500 px-8 py-3 rounded-full"
                >
                  Download E-Book
                </Button>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white font-medium">
                      4.9
                    </div>
                    <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center text-white font-medium">
                      ★
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      Rated 4.9/5 by readers
                    </p>
                    <p className="text-xs text-gray-500">
                      Based on 128 reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-pink-400 to-purple-400">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              JOIN THE COMMUNITY
            </h2>
            <p className="text-white/90 mb-8">
              Be the first to know about new collections, exclusive drops, and
              stellar style tips
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-medium">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-light tracking-wider mb-4">
                BEYOND THE STARS
              </h3>
              <p className="text-gray-400 mb-4">
                Discover streetwear that transcends ordinary fashion.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 hover:text-pink-400 transition-colors cursor-pointer" />
                <Twitter className="w-5 h-5 hover:text-pink-400 transition-colors cursor-pointer" />
                <Youtube className="w-5 h-5 hover:text-pink-400 transition-colors cursor-pointer" />
                <Instagram className="w-5 h-5 hover:text-pink-400 transition-colors cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">SHOP</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hoodies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    T-Shirts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">SUPPORT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Beyond The Stars. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export async function getStaticPaths() {
  // Fetch all product IDs
  const products = await fetchProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const product = await fetchProductById(params.id);
  return {
    props: {
      product,
      relatedProducts: await fetchRelatedProducts(product.category),
    },
    revalidate: 60, // Revalidate every minute
  };
}

export function ProductSEO({ product }) {
  return (
    <Head>
      <title>{`${product.name} | Beyond The Stars`}</title>
      <meta name="description" content={product.description} />
      <meta property="og:title" content={product.name} />
      <meta property="og:description" content={product.description} />
      <meta property="og:image" content={product.images[0]} />
      <meta property="product:price:amount" content={product.price} />
      <meta property="product:price:currency" content="USD" />
      <link rel="canonical" href={`/products/${product.id}`} />
    </Head>
  );
}
