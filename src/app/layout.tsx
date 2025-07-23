import Navbar from '@components/Navbar'
import './globals.css'
import { HeroSection } from '@components/HeroSection'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#1e1d20] box-border relative">
        <Navbar />
        <main className="relative w-full min-h-screen m-auto text-white flex items-center justify-center">
          <HeroSection />
        </main>
        {children}
      </body>
    </html>
  )
}
