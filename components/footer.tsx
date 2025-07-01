import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Logo and description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/zaza-app-logo.png"
                alt="Zaza Technologies Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Zaza
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Empowering educators with AI-powered tools that save time, spark creativity, and focus on what matters
              most: just teaching.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2">
                <Link href="#products" className="text-gray-400 hover:text-white transition-colors block">
                  Products
                </Link>
                <Link href="#mission" className="text-gray-400 hover:text-white transition-colors block">
                  Mission
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors block">
                  Contact
                </Link>
                <Link href="#privacy" className="text-gray-400 hover:text-white transition-colors block">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Zaza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
