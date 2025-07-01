"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function NewsletterTeaser() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">
          Love what we're building? Get early access, ideas, and insights—monthly.
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
          <button
            type="submit"
            disabled={isSubmitted}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 disabled:opacity-50 whitespace-nowrap min-w-[180px] shimmer-cta"
          >
            <span>{isSubmitted ? "Joined!" : "Join the List"}</span>
            {!isSubmitted && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>
      </div>
    </section>
  )
}
