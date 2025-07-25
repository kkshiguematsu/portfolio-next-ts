import './globals.css'
import { HeroSection } from '@components/sections/heroPage'
import { NavManager } from '@components/navbar/NavManager'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative box-border bg-[#1e1d20]">
        <NavManager />
        <main className="relative m-auto flex min-h-screen w-full flex-col items-center justify-center text-white">{children}</main>
      </body>
    </html>
  )
}
