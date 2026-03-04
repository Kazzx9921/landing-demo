import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flux | The AI Social Translator for Creators',
  description: 'Transform a single idea into native, culturally-adapted posts for X, Threads, and Facebook in one click.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;500;600&family=Playfair+Display:ital@1&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/@phosphor-icons/web" defer></script>
      </head>
      <body className="font-body selection:bg-brand-blue selection:text-brand-white">{children}</body>
    </html>
  )
}
