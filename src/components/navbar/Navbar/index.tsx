'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, createScope } from 'animejs'
import clsx from 'clsx'
import { navBasesClasses, navButtonClasses, navDivBasesClasses, navDivBasesVariants, navVariants } from './tailwind'

interface NavbarProps {
  links: { href: string; label: string }[]
}

export default function Navbar({ links }: NavbarProps) {
  const navRef = useRef<HTMLDivElement | null>(null)
  const [variant, setVariant] = useState<'top' | 'scrolled'>('top')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const currentVariant = scrollY > 1 ? 'scrolled' : 'top'

      if (navRef.current) {
        animate(navRef.current, {
          width: currentVariant === 'scrolled' ? '20%' : '100%',
          duration: 300,
          easing: 'easeOutExpo',
          complete: () => {
            setVariant(currentVariant)
          },
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [variant])

  return (
    <nav id="nav" ref={navRef} style={{ width: '100%' }} className={clsx(navBasesClasses, navVariants[variant])}>
      <div className={clsx(navDivBasesClasses, navDivBasesVariants[variant])}>
        {links.map((link) => (
          <a key={link.href} className={navButtonClasses} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
