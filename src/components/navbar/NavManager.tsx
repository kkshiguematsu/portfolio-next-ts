'use client'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { NavButton } from './NavButton'
import Navbar from './Navbar'

const links = [
  { href: '/#home', label: 'Inicio' },
  { href: '/#about', label: 'Sobre' },
  { href: '/#timeline', label: 'Timeline' },
  { href: '/#projects', label: 'Projetos' },
  { href: '/#contact', label: 'Contato' },
]

export const NavManager = () => {
  const [isClient, setIsClient] = useState(false)
  const isSmallScreen = useMediaQuery({ maxWidth: 767 })

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? isSmallScreen ? <NavButton links={links} /> : <Navbar links={links} /> : null
}
