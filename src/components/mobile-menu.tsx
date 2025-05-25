"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} aria-label="Open menu" className="p-2">
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 p-8">
            <Link href="/" className="text-xl font-medium" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
            <Link href="/shop" className="text-xl font-medium" onClick={() => setIsOpen(false)}>
              SHOP
            </Link>
            <Link href="/men" className="text-xl font-medium" onClick={() => setIsOpen(false)}>
              ABOUT
            </Link>
            <Link href="/women" className="text-xl font-medium" onClick={() => setIsOpen(false)}>
              Booking
            </Link>
         
          </nav>
        </div>
      )}
    </div>
  )
}
