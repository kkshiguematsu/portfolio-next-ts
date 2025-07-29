'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, createScope } from 'animejs'
import clsx from 'clsx'
import { navBasesClasses, navButtonClasses, navDivBasesClasses, navVariants } from './tailwind'

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

      if (!navRef.current) return

      const targetWidth = currentVariant === 'scrolled' ? 460 : navRef.current.parentElement?.offsetWidth || window.innerWidth

      // Define a largura atual antes de animar (evita pulo)
      navRef.current.style.width = `${navRef.current.offsetWidth}px`

      animate(navRef.current, {
        width: targetWidth,
        duration: 50,
        // easing: 'easeInOutQuad',
        complete: () => {
          setVariant(currentVariant)
        },
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [variant])

  return (
    <nav id="nav" ref={navRef} style={{ width: '100%' }} className={clsx('box-border', navBasesClasses, navVariants[variant])}>
      <div className={clsx(navDivBasesClasses)}>
        {links.map((link) => (
          <a key={link.href} className={navButtonClasses} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
