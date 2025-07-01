import Link from "next/link"
import { ArrowRight, MessageSquare, Sparkles, UserCheck } from "lucide-react"

export function HowZazaWorks() {
  const steps = [
    {
      icon: MessageSquare,
      iconColor: "from-blue-400 to-purple-500",
      title: "Tell Zaza what you need",
      description: "Choose your goal, subject, or message type.",
    },
    {
      icon: Sparkles,
      iconColor: "from-purple-400 to-pink-500",
      title: "Get instant, aligned results",
      description: "No prompts, no noise — just what you need.",
    },
    {
      icon: UserCheck,
      iconColor: "from-green-400 to-blue-500",
      title: "Tweak and teach",
      description: "You stay in control, Zaza does the heavy lifting.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">How Zaza Works</h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                  {index + 1}
                </div>
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.iconColor} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/signup" className="group inline-block">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto shimmer-button">
              <span>Try Zaza Now</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
