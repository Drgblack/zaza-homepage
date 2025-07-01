import Image from "next/image"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote: "I saved 3 hours in my first week using Zaza.",
      author: "Sarah M.",
      role: "High School Teacher",
      image: "/sarah-avatar.jpg",
    },
    {
      quote: "The comment writer feels like magic.",
      author: "David L.",
      role: "Elementary Educator",
      image: "/david-educator.png",
    },
    {
      quote: "Zaza helps my students think more clearly.",
      author: "Maria R.",
      role: "University Professor",
      image: "/maria-educator.png",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Loved by Educators</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Zaza Logo at top */}
              <div className="flex items-center space-x-2 mb-6">
                <Image src="/zaza-app-logo.png" alt="Zaza Logo" width={32} height={32} className="w-8 h-8 rounded-md" />
                <span className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Zaza
                </span>
              </div>

              {/* Blue Quote Icon */}
              <Quote className="w-10 h-10 text-blue-500 mb-6" />

              {/* Testimonial Text */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">"{testimonial.quote}"</p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-gray-100 flex-shrink-0">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.author}, ${testimonial.role} - Zaza user testimonial`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
