import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function BlogPreview() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
            Can AI Actually Save Teachers Time? Here's What We Found
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            We analysed how real educators are using AI to reclaim planning time and spark creativity—without losing
            control.
          </p>

          <Link href="/blog/can-ai-save-teachers-time" className="group inline-block">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto shimmer-cta">
              <span>Read More</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
