"use client"

import type React from "react"
import Link from "next/link"
import { MessageCircle, GraduationCap, Puzzle, PenTool, Drama, Globe, Brain, Lightbulb } from "lucide-react"

interface LiveProductCardProps {
  icon: React.ComponentType<{ className?: string }>
  iconColor: string
  name: string
  subtitle: string
  description: string
  buttonText: string
  href: string
}

interface ComingSoonCardProps {
  icon: React.ComponentType<{ className?: string }>
  iconColor: string
  name: string
  description: string
}

function LiveProductCard({
  icon: Icon,
  iconColor,
  name,
  subtitle,
  description,
  buttonText,
  href,
}: LiveProductCardProps) {
  return (
    <div className="group bg-white rounded-3xl p-10 lg:p-12 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03] hover:rotate-1 transition-all duration-500 ease-out relative overflow-hidden">
      {/* Status Badge */}
      <div className="absolute top-6 right-6">
        <span className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full border border-green-200 shadow-sm">
          Live
        </span>
      </div>

      <div className="mb-8">
        <div
          className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${iconColor} rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
        >
          <Icon className="w-12 h-12 text-white" />
        </div>
      </div>

      <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
        {name}
      </h3>
      <p className="text-xl font-medium text-blue-600 mb-6">{subtitle}</p>
      <p className="text-gray-600 leading-relaxed mb-10 text-lg">{description}</p>

      <Link href={href} className="group/button inline-block">
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 shimmer-button">
          <span>{buttonText}</span>
          <span className="group-hover/button:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </Link>
    </div>
  )
}

function ComingSoonCard({ icon: Icon, iconColor, name, description }: ComingSoonCardProps) {
  return (
    <div className="group bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:-rotate-1 transition-all duration-400 ease-out relative overflow-hidden">
      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        <span className="bg-orange-100 text-orange-700 text-sm font-medium px-3 py-2 rounded-full border border-orange-200">
          Coming Soon
        </span>
      </div>

      <div className="mb-6">
        <div
          className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${iconColor} rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {name}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

export function ExploreSuite() {
  const liveProducts = [
    {
      icon: Lightbulb,
      iconColor: "from-yellow-400 to-orange-500",
      name: "Zaza Teach",
      subtitle: "Lesson planning, reinvented",
      description: "AI lesson planner that frees up your time.",
      buttonText: "Try Teach",
      href: "#",
    },
    {
      icon: MessageCircle,
      iconColor: "from-blue-400 to-purple-500",
      name: "Zaza Promptly",
      subtitle: "Feedback without the fatigue",
      description: "Generate perfect parent messages and reports, instantly.",
      buttonText: "Try Promptly",
      href: "#",
    },
  ]

  const comingSoonProducts = [
    {
      icon: GraduationCap,
      iconColor: "from-green-400 to-blue-500",
      name: "Zaza Study",
      description: "AI-powered study assistant. Gamified, social, and built for deep learning.",
    },
    {
      icon: Puzzle,
      iconColor: "from-purple-400 to-pink-500",
      name: "Zaza StackMate",
      description: "Step-by-step AI roadmap for first-time app builders. No code, no stress.",
    },
    {
      icon: PenTool,
      iconColor: "from-red-400 to-orange-500",
      name: "Zaza ScaffoldAI",
      description: "AI writing tutor that scaffolds critical thinking—not just essays.",
    },
    {
      icon: Drama,
      iconColor: "from-indigo-400 to-purple-500",
      name: "Zaza PlotTwist AI",
      description: "Choose-your-own-adventure storytelling meets philosophy class.",
    },
    {
      icon: Globe,
      iconColor: "from-teal-400 to-green-500",
      name: "Zaza Looop",
      description: "Language learning reimagined with immersive culture-first experiences.",
    },
    {
      icon: Brain,
      iconColor: "from-pink-400 to-red-500",
      name: "Zaza Unbox",
      description: "Puzzle-feed app that trains your brain daily with adaptive challenges.",
    },
  ]

  return (
    <section id="products" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">Explore the Zaza Suite</h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            AI-powered tools for educators, learners, and builders who want more than just productivity—who want joy.
          </p>
        </div>

        {/* Live Now Section */}
        <div className="mb-20 lg:mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Live Now</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {liveProducts.map((product, index) => (
              <LiveProductCard
                key={index}
                icon={product.icon}
                iconColor={product.iconColor}
                name={product.name}
                subtitle={product.subtitle}
                description={product.description}
                buttonText={product.buttonText}
                href={product.href}
              />
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Coming Soon from Zaza</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {comingSoonProducts.map((product, index) => (
              <ComingSoonCard
                key={index}
                icon={product.icon}
                iconColor={product.iconColor}
                name={product.name}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
