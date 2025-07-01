"use client"

import Link from "next/link"

interface CTACardProps {
  heading: string
  subheading: string
  buttonText: string
  href: string
}

function CTACard({ heading, subheading, buttonText, href }: CTACardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center">
      <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">{heading}</h3>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">{subheading}</p>

      <Link href={href} className="group inline-block">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105 animate-pulse hover:animate-none">
          {buttonText}
        </button>
      </Link>
    </div>
  )
}

export function CTACards() {
  const ctas = [
    {
      heading: "I'm a Teacher",
      subheading: "Discover AI tools that bring back the joy of teaching.",
      buttonText: "Start Exploring",
      href: "#",
    },
    {
      heading: "I'm a Student",
      subheading: "Find the perfect tool to help you learn smarter.",
      buttonText: "Find My Fit",
      href: "#",
    },
    {
      heading: "I'm Building Something",
      subheading: "Turn your app idea into reality — with AI guidance.",
      buttonText: "Get Started",
      href: "#",
    },
  ]

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {ctas.map((cta, index) => (
            <CTACard
              key={index}
              heading={cta.heading}
              subheading={cta.subheading}
              buttonText={cta.buttonText}
              href={cta.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
