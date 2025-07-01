"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    checkDesktop()
    window.addEventListener("resize", checkDesktop)

    return () => window.removeEventListener("resize", checkDesktop)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const handleMouseMove = (e: MouseEvent) => {
      const heroSection = document.getElementById("hero-section")
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const heroSection = document.getElementById("hero-section")
    if (heroSection) {
      heroSection.addEventListener("mousemove", handleMouseMove)
      return () => heroSection.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isDesktop])

  return (
    <section id="hero-section" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Trailing Z Cursor Effect - Desktop Only */}
      {isDesktop && (
        <div
          className="fixed pointer-events-none z-10 text-6xl font-bold text-blue-200 opacity-30 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 30,
            top: mousePosition.y - 30,
            transform: "translate(-50%, -50%)",
          }}
        >
          Z
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center relative z-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Human-Centred AI, <span className="text-blue-600">Built for the Classroom</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Zaza builds transparent, ethical AI tools that save teachers time — without replacing them. Built for
          pedagogy. Trusted by educators. Focused on learning, not shortcuts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/products" className="group inline-block">
            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2 shimmer-hero">
              <span>Explore the Suite</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          <Link href="/mission" className="group inline-block">
            <button className="group border-2 border-orange-400 text-orange-600 bg-transparent px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 hover:border-orange-500 hover:scale-105 hover:shadow-lg hover:shadow-orange-400/25 transition-all duration-300 flex items-center space-x-2">
              <span>Our Ethical Commitment</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
