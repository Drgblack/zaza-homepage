import { ProductCard } from "./product-card"

export function ProductSuite() {
  const products = [
    {
      name: "Zaza Promptly",
      tagline: "AI comment writer for teachers",
      description: "Write feedback in seconds with hallucination-free AI built for real classrooms.",
    },
    {
      name: "Zaza Teach",
      tagline: "AI lesson planner & curriculum designer",
      description: "Create structured, standards-aligned lessons in minutes—not hours.",
    },
    {
      name: "Zaza Visuals",
      tagline: "Posters, slides & content in one click",
      description: "Turn ideas into beautiful visuals optimised for classroom or social sharing.",
    },
    {
      name: "Zaza Study",
      tagline: "The social study assistant for serious learners",
      description: "Personalised, gamified, and built to go viral—Zaza Study transforms how students learn.",
    },
    {
      name: "Zaza StackMate",
      tagline: "Build apps without overwhelm",
      description: "StackMate recommends your tech stack, guides you step-by-step, and mentors you as you build.",
    },
    {
      name: "Zaza ScaffoldAI",
      tagline: "Write smarter, not faster",
      description:
        "Scaffold student thinking with AI-aligned frameworks like TEEL, PEEL and SEEL—without shortcutting learning.",
    },
    {
      name: "Zaza PlotTwist AI",
      tagline: "Interactive stories that build your brain",
      description: "Debate characters, make choices, and shape stories that sharpen critical thinking.",
    },
    {
      name: "Zaza Looop",
      tagline: "Speak the language. Live the culture.",
      description:
        "The world's first language platform blending AI, storytelling, and global mentorship for deep cultural fluency.",
    },
    {
      name: "Zaza Unbox",
      tagline: "Brain training that feels like TikTok",
      description:
        "AI-crafted puzzles personalised to your thinking style. For restless minds, sharp thinkers, and cognitive creators.",
    },
  ]

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">The Zaza Suite</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
