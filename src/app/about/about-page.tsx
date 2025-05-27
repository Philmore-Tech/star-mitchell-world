"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  Quote,
  Camera,
  BookOpen,
  Sparkles,
  Users,
  Globe,
  Award,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTimelineItem, setActiveTimelineItem] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimelineItem((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const timelineItems = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Started modeling while studying fashion design, discovering my passion for streetwear culture.",
      icon: Camera,
    },
    {
      year: "2020",
      title: "Acting Breakthrough",
      description: "Landed my first major role, bringing cosmic characters to life on screen.",
      icon: Star,
    },
    {
      year: "2022",
      title: "Published Author",
      description: "Released my first book about finding your authentic style in a digital world.",
      icon: BookOpen,
    },
    {
      year: "2024",
      title: "Beyond The Stars",
      description: "Launched my streetwear brand, merging all my passions into wearable art.",
      icon: Sparkles,
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "Every piece reflects genuine self-expression and personal truth.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a family of dreamers who dare to shine differently.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Creating fashion that respects our planet and future generations.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Crafting pieces that last, both in style and construction.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-4 md:px-8 py-6 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="flex items-center">
          <h1 className="text-xl font-light tracking-wider bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            BEYOND THE STARS
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <a href="/" className="hover:text-pink-500 transition-colors">
            HOME
          </a>
          <a href="/products" className="hover:text-pink-500 transition-colors">
            PRODUCTS
          </a>
          <a href="/about" className="text-pink-500 border-b-2 border-pink-500 pb-1">
            ABOUT
          </a>
          <a href="/contact" className="hover:text-pink-500 transition-colors">
            CONTACT
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden text-gray-700 hover:text-pink-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-pink-500 transition-colors cursor-pointer" />
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
            <a href="/" className="text-xl hover:text-pink-300 transition-colors">
              HOME
            </a>
            <a href="/products" className="text-xl hover:text-pink-300 transition-colors">
              PRODUCTS
            </a>
            <a href="/about" className="text-xl text-pink-300">
              ABOUT
            </a>
            <a href="/contact" className="text-xl hover:text-pink-300 transition-colors">
              CONTACT
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=stars')] opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-2">
                  Model • Actress • Author • Designer
                </Badge>
                <h1 className="text-4xl md:text-6xl font-light leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Star Mitchell
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A dreamer who believes fashion is the language of self-expression. Through modeling, acting, and
                  writing, I've discovered that style isn't just what you wear—it's who you are.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <blockquote className="text-lg italic text-gray-700">
                    "Fashion fades, but style is eternal. I create pieces that help you discover your own cosmic
                    signature."
                  </blockquote>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-3 rounded-full">
                    Shop My Collection
                  </Button>
                  <Button
                    variant="outline"
                    className="border-pink-400 text-pink-500 hover:bg-pink-50 px-8 py-3 rounded-full"
                  >
                    Read My Story
                  </Button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Main Image */}
                <div className="relative z-10">
                  <Image
                    src="/placeholder.svg?height=600&width=400&text=Star+Mitchell+Portrait"
                    alt="Star Mitchell"
                    width={400}
                    height={600}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-25 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              MY{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                JOURNEY
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From small-town dreams to cosmic creations, every step has led to this moment
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timelineItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <Card
                    key={index}
                    className={`relative overflow-hidden transition-all duration-500 cursor-pointer ${
                      activeTimelineItem === index
                        ? "shadow-xl scale-105 border-pink-200"
                        : "shadow-lg hover:shadow-xl hover:scale-102"
                    }`}
                    onClick={() => setActiveTimelineItem(index)}
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                          activeTimelineItem === index
                            ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                      <div
                        className={`text-2xl font-bold mb-2 transition-colors ${
                          activeTimelineItem === index ? "text-pink-500" : "text-gray-800"
                        }`}
                      >
                        {item.year}
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              WHAT I{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                BELIEVE IN
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These values guide every decision, every design, and every interaction with our cosmic community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-pink-500 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              FOLLOW MY{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                COSMIC JOURNEY
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get behind-the-scenes content, style inspiration, and cosmic vibes across all platforms
            </p>
          </div>

          {/* Social Platform Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Instagram */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-pink-50 to-purple-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-pink-500 transition-colors">Instagram</h3>
                <p className="text-sm text-gray-600 mb-4">Daily style inspiration & behind-the-scenes moments</p>
                <div className="text-2xl font-bold text-pink-500 mb-1">125K</div>
                <div className="text-xs text-gray-500">Followers</div>
              </CardContent>
            </Card>

            {/* TikTok */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 text-white font-bold text-lg">T</div>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-purple-500 transition-colors">TikTok</h3>
                <p className="text-sm text-gray-600 mb-4">Fashion tips, styling hacks & cosmic content</p>
                <div className="text-2xl font-bold text-purple-500 mb-1">89K</div>
                <div className="text-xs text-gray-500">Followers</div>
              </CardContent>
            </Card>

            {/* YouTube */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-red-50 to-pink-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Youtube className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-red-500 transition-colors">YouTube</h3>
                <p className="text-sm text-gray-600 mb-4">Long-form content, vlogs & design process</p>
                <div className="text-2xl font-bold text-red-500 mb-1">45K</div>
                <div className="text-xs text-gray-500">Subscribers</div>
              </CardContent>
            </Card>

            {/* Twitter */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Twitter className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-blue-500 transition-colors">Twitter</h3>
                <p className="text-sm text-gray-600 mb-4">Thoughts, updates & cosmic conversations</p>
                <div className="text-2xl font-bold text-blue-500 mb-1">32K</div>
                <div className="text-xs text-gray-500">Followers</div>
              </CardContent>
            </Card>
          </div>

          {/* Featured Social Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Instagram Feed Preview */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center mb-4 flex items-center justify-center space-x-2">
                <Instagram className="w-5 h-5 text-pink-500" />
                <span>Latest Posts</span>
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative group cursor-pointer">
                    <Image
                      src={`/placeholder.svg?height=150&width=150&text=IG+Post+${i}`}
                      alt={`Instagram post ${i}`}
                      width={150}
                      height={150}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TikTok Videos Preview */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center mb-4 flex items-center justify-center space-x-2">
                <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded text-white text-xs flex items-center justify-center font-bold">
                  T
                </div>
                <span>Trending Videos</span>
              </h3>
              <div className="space-y-3">
                {[
                  { title: "5 Ways to Style Cosmic Hoodies", views: "125K" },
                  { title: "Behind the Scenes: Photoshoot", views: "89K" },
                  { title: "Styling Tips for Streetwear", views: "156K" },
                ].map((video, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="w-16 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{video.title}</p>
                      <p className="text-xs text-gray-500">{video.views} views</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* YouTube Channel Preview */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center mb-4 flex items-center justify-center space-x-2">
                <Youtube className="w-5 h-5 text-red-500" />
                <span>Latest Videos</span>
              </h3>
              <div className="space-y-3">
                {[
                  { title: "My Design Process: From Sketch to Reality", duration: "12:45" },
                  { title: "Cosmic Collection Launch Vlog", duration: "8:32" },
                  { title: "Q&A: Your Fashion Questions Answered", duration: "15:20" },
                ].map((video, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="relative mb-2">
                      <Image
                        src={`/placeholder.svg?height=100&width=180&text=YT+Video+${i + 1}`}
                        alt={`YouTube video ${i + 1}`}
                        width={180}
                        height={100}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </span>
                    </div>
                    <p className="font-medium text-sm group-hover:text-red-500 transition-colors">{video.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Join the cosmic community across all platforms</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-6 py-2 rounded-full flex items-center space-x-2">
                <Instagram className="w-4 h-4" />
                <span>Follow on Instagram</span>
              </Button>
              <Button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-2 rounded-full flex items-center space-x-2">
                <div className="w-4 h-4 bg-white rounded text-purple-500 text-xs flex items-center justify-center font-bold">
                  T
                </div>
                <span>Follow on TikTok</span>
              </Button>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full flex items-center space-x-2">
                <Youtube className="w-4 h-4" />
                <span>Subscribe</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light">
                BEHIND THE{" "}
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  SCENES
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every piece in the Beyond The Stars collection starts with a story. Whether I'm on set, walking the
                runway, or writing late into the night, inspiration strikes in the most unexpected moments.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My studio is where magic happens—sketches scattered across tables, fabric swatches pinned to walls, and
                mood boards that capture the essence of cosmic dreams. Each design goes through countless iterations
                until it feels just right.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-6 py-3 rounded-full">
                  Follow My Journey
                </Button>
                <Button
                  variant="outline"
                  className="border-pink-400 text-pink-500 hover:bg-pink-50 px-6 py-3 rounded-full"
                >
                  Design Process
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/placeholder.svg?height=300&width=250&text=Studio+Shot+1"
                  alt="Behind the scenes"
                  width={250}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <Image
                  src="/placeholder.svg?height=200&width=250&text=Design+Process"
                  alt="Design process"
                  width={250}
                  height={200}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image
                  src="/placeholder.svg?height=250&width=250&text=Studio+Shot+2"
                  alt="Creative process"
                  width={250}
                  height={250}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <Image
                  src="/placeholder.svg?height=200&width=250&text=Inspiration"
                  alt="Inspiration board"
                  width={250}
                  height={200}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-400 to-purple-400">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">READY TO JOIN THE COSMIC COMMUNITY?</h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Be part of a movement that celebrates individuality, creativity, and the courage to shine differently.
              Your cosmic journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-medium">
                SHOP COLLECTION
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full"
              >
                FOLLOW MY STORY
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
              <h3 className="text-xl font-light tracking-wider mb-4">BEYOND THE STARS</h3>
              <p className="text-gray-400 mb-4">
                Where cosmic inspiration meets urban style. Discover streetwear that transcends ordinary fashion.
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
            <p>&copy; 2024 Beyond The Stars. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
