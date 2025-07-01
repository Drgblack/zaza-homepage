"use client"

interface ProductCardProps {
  name: string
  tagline: string
  description: string
}

export function ProductCard({ name, tagline, description }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{name}</h3>
        <p className="text-sm font-medium text-gray-500 italic mb-3">{tagline}</p>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
