'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, createScope } from 'animejs'
import clsx from 'clsx'

const navBasesClasses = 'w-full p-2 mt-2 max-w-main fixed left-1/2 -translate-x-1/2 top-0 bg-transparent rounded-full backdrop-blur-md overflow-hidden z-50 transition-all duration-100 ease-linear'
const navVariants = {
  top: 'w-full bg-transparent',
  scrolled: 'shadow-xl bg-neutral-700/70 ',
}

const navDivBasesClasses = 'flex gap-2 text-xs text-white sm:text-base'
const navDivBasesVariants = {
  top: 'justify-end',
  scrolled: 'justify-between',
}

const navButtonClasses = 'py-2 px-4 duration-500 nav-link rounded-full hover:bg-blue-500'

export default function Navbar() {
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
        <a className={navButtonClasses} href="#home">
          Inicio
        </a>
        <a className={navButtonClasses} href="#about">
          Sobre
        </a>
        <a className={navButtonClasses} href="#timeline">
          Timeline
        </a>
        <a className={navButtonClasses} href="#projects">
          Projetos
        </a>
        <a className={navButtonClasses} href="#contact">
          Contato
        </a>
      </div>
    </nav>
  )
}
