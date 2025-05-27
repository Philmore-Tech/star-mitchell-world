"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/types/product";

import { ArrowLeft, RotateCcw, Shield, Share2 } from "lucide-react";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button
                variant="ghost"
                className="flex items-center space-x-2 text-gray-600 hover:text-pink-500"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Shop</span>
              </Button>
            </Link>
            <h1 className="text-xl font-light tracking-wider">
              BEYOND{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                THE STARS
              </span>
            </h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-pink-500 transition-colors cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative group">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-50">
                <Image
                  src={product.images[currentImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                {product.isNew && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white">
                    NEW
                  </Badge>
                )}
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isLiked ? "fill-pink-500 text-pink-500" : "text-gray-600"
                    }`}
                  />
                </button>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                    currentImageIndex === index
                      ? "border-pink-400"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-gray-500">
                  {product.category}
                </span>
                <span className="text-gray-300">•</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">
                    {product.rating}
                  </span>
                  <span className="text-sm text-gray-400">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <h1 className="text-3xl font-light mb-4">{product.name}</h1>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl font-bold">${product.price}</span>
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-700"
                >
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  % OFF
                </Badge>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator />

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Color: {selectedColor}</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 rounded-full border-2 transition-colors ${
                      selectedColor === color.name
                        ? "border-pink-400 ring-2 ring-pink-200"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">Size: {selectedSize}</h3>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 rounded-md border-2 transition-colors ${
                      selectedSize === size
                        ? "border-pink-400 bg-pink-50 text-pink-600"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-xl font-medium w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white py-6 text-lg">
              Add to Cart
            </Button>

            {/* Product Features */}
            <div>
              <h3 className="font-semibold mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-gray-600"
                  >
                    <Star className="w-4 h-4 text-pink-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-medium">Free Shipping</h4>
                  <p className="text-sm text-gray-500">On orders over $75</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-medium">Secure Payment</h4>
                  <p className="text-sm text-gray-500">
                    Your data is protected
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-medium">Easy Returns</h4>
                  <p className="text-sm text-gray-500">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
