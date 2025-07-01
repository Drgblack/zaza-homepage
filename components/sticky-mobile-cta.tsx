"use client"

import Link from "next/link"

export function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 shadow-lg">
      <Link href="/signup" className="block">
        <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 shimmer-cta">
          Try Zaza Free
        </button>
      </Link>
    </div>
  )
}
