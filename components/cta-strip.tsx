import { ArrowRight } from "lucide-react"

export function CTAStrip() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 to-orange-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Join thousands of educators using Zaza to reclaim their time and inspire creativity.
        </h2>

        <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2 mx-auto shimmer-cta">
          <span>Start Exploring</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}
