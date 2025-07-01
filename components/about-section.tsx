import { Clock, Sparkles, Users } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Clock,
      title: "Save time, reclaim the joy of teaching",
      description: "Automate the routine so you can focus on inspiring minds",
    },
    {
      icon: Sparkles,
      title: "Spark student creativity",
      description: "Tools designed to unlock imagination and critical thinking",
    },
    {
      icon: Users,
      title: "Built by learning scientists",
      description: "Research-backed solutions from educators who understand",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Zaza is an educator-first AI company on a mission to protect the human heart of teaching.
            <br />
            Our tools are built with ethical AI, explainable by design, and grounded in real pedagogy — not tech hype.
            <br />
            We help teachers plan smarter, give feedback faster, and design AI-resilient lessons that strengthen
            learning, not weaken it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
