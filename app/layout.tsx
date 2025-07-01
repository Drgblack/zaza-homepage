import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zaza Technologies – Ethical AI Tools for Teachers",
  description:
    "Zaza creates transparent, human-centred AI tools that save teachers time without replacing them. Trusted by educators, built with pedagogy in mind.",
  keywords: [
    "AI education tools",
    "teacher productivity",
    "lesson planning",
    "educational technology",
    "AI for teachers",
    "classroom tools",
    "EdTech",
    "ethical AI",
    "pedagogy",
    "human-centred AI",
  ],
  authors: [{ name: "Zaza Technologies" }],
  creator: "Zaza Technologies",
  publisher: "Zaza Technologies",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Zaza Technologies – Ethical AI Tools for Teachers",
    description:
      "Zaza creates transparent, human-centred AI tools that save teachers time without replacing them. Trusted by educators, built with pedagogy in mind.",
    url: "https://zaza.ai",
    siteName: "Zaza Technologies",
    images: [
      {
        url: "/zaza-logo.png",
        width: 1200,
        height: 630,
        alt: "Zaza Technologies - Ethical AI tools for teachers and educators",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaza Technologies – Ethical AI Tools for Teachers",
    description:
      "Zaza creates transparent, human-centred AI tools that save teachers time without replacing them. Trusted by educators, built with pedagogy in mind.",
    images: ["/zaza-logo.png"],
    creator: "@zazatech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
