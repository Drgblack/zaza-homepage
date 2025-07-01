import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, ArrowRight } from "lucide-react"

export function FounderSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100">
          {/* Founder Photo */}
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-white shadow-xl relative">
              <Image
                src="/greg-headshot-new.jpg"
                alt="Dr Greg Blackburn, Founder and CEO of Zaza Technologies - Learning Scientist and EdTech Builder"
                width={128}
                height={128}
                className="w-full h-full object-cover object-center scale-110 founder-photo"
                style={{
                  filter: "contrast(1.1) brightness(1.05) saturate(1.1)",
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-transparent to-black/10 pointer-events-none"></div>
            </div>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">Dr Greg Blackburn</h3>
          <p className="text-lg font-medium text-blue-600 mb-6">
            Founder of Zaza | Learning Scientist | EdTech Builder
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
            Greg is a PhD-qualified educator and Global Director of Learning with over 20 years of experience in digital
            learning, instructional design, and workplace education. He is a recognised thought leader in EdTech, widely
            published in the field, and known for translating research into practical tools that work in real
            classrooms. Greg founded Zaza to help teachers save time with ethical, pedagogy-first AI solutions built for
            trust, not shortcuts.
          </p>

          {/* Blog CTA */}
          <p className="text-lg text-gray-700 mb-8">
            Want to hear my latest thoughts on AI and education?{" "}
            <Link href="/blog" className="group inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              Read the Zaza blog
              <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </p>

          {/* Social Share Section */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 mb-4">Share this post:</p>
            <div className="flex justify-center items-center space-x-4">
              <Link
                href="https://linkedin.com/in/drgregblackburn"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com/zazatech_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center w-10 h-10 bg-sky-500 text-white rounded-full hover:bg-sky-600 hover:scale-110 transition-all duration-300"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
