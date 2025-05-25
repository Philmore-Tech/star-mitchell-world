"use client";

import Image from "next/image";
import Link from "next/link";

export default function PromotionalGrid() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Top Left - Streetwear Exclusive */}
        <div className="relative h-[350px] md:col-span-6 bg-[#f5f5f5]">
          <div className="absolute inset-0 flex">
            <div className="w-full md:w-3/5 relative">
              <Image
                src="/star-streetwear.jpg?height=800&width=600"
                alt="Model in blue puffer jacket"
                fill
                className="object-cover object-center"
                style={{ objectPosition: "60% 10%" }}
              />
            </div>
            <div className="hidden md:flex md:w-2/5 items-center justify-center bg-white">
              <div className="p-6">
                <div className="bg-black text-white px-2 py-1 mb-1">
                  <h2 className="text-2xl font-bold">STREETWEAR</h2>
                </div>
                <div className="bg-black text-white px-2 py-1 mb-4">
                  <h2 className="text-2xl font-bold">EXCLUSIVE</h2>
                </div>
                <Link
                  href="/shop"
                  className="text-sm font-medium flex items-center mt-4 hover:text-green-400 transition-colors"
                >
                  SHOP BRAND <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
          {/* Mobile version of the text overlay */}
          <div className="absolute bottom-4 left-4 md:hidden">
            <div className="bg-black text-white px-2 py-1 mb-1">
              <h2 className="text-xl font-bold">STREETWEAR</h2>
            </div>
            <div className="bg-black text-white px-2 py-1 mb-2">
              <h2 className="text-xl font-bold">EXCLUSIVE</h2>
            </div>
            <Link
              href="/shop"
              className="text-xs font-medium flex items-center mt-2 text-black hover:text-green-400 transition-colors"
            >
              SHOP BRAND <span className="ml-1">→</span>
            </Link>
          </div>
        </div>

        {/* Right Side - Be New Everyday */}
        <div className="relative h-[350px] md:h-[700px] md:col-span-6 md:row-span-2">
          <Image
            src="/model-1.png?height=1000&width=600"
            alt="Model in green sweater and yellow beanie"
            fill
            className="object-cover"
            style={{ objectPosition: "50% 20%" }}
          />
          <div className="absolute bottom-8 left-8">
            <div className="bg-black text-white px-3 py-1 mb-1 inline-block">
              <h2 className="text-3xl md:text-4xl font-bold">BE NEW</h2>
            </div>
            <div className="block">
              <div className="bg-black text-white px-3 py-1 mb-2 inline-block">
                <h2 className="text-3xl md:text-4xl font-bold">EVERYDAY</h2>
              </div>
            </div>
            <p className="text-white text-sm mt-2">
              More than 100 brands on sale.
            </p>
          </div>
        </div>

        {/* Bottom Left - Trending Footwear */}
        <div className="relative h-[350px] md:col-span-6 bg-[#f5f5f5]">
          <div className="absolute inset-0 flex">
            <div className="w-2/5 flex items-center justify-center bg-[#5A3C58]">
              <div className="p-6">
                <div className="bg-black text-white px-2 py-1 mb-1">
                  <h2 className="text-2xl font-bold">TRENDING</h2>
                </div>
                <div className="bg-black text-white px-2 py-1 mb-4">
                  <h2 className="text-2xl font-bold">STYLES</h2>
                </div>
                <Link
                  href="/shop"
                  className="text-sm font-medium flex items-center mt-4 text-white hover:text-green-400 transition-colors"
                >
                  SHOP BRAND <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            <div className="w-3/5 relative">
              <Image
                src="/model-1.png?height=800&width=600"
                alt="Person sitting on chair showing sneakers"
                fill
                // className="object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-full bg-white w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-up"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
