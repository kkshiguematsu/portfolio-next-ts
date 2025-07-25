'use client'

import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { baseBackdropClasses, baseButtonClasses, baseDivListClasses, baseLinkClasses, variantsBackdropClasses, variantsButtonClasses, variantsDivListClasses } from './tailwind'
import { usePathname } from 'next/navigation'

export interface NavButtonProps {
  links: { href: string; label: string }[]
}

export const NavButton = ({ links }: NavButtonProps) => {
  const [activeHash, setActiveHash] = useState<string>('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash)

    // Função para detectar a seção visível ao dar scroll
    const onScroll = () => {
      // Pega todos os ids das seções
      const sectionIds = links.map((link) => link.href.replace('/#', ''))
      let found = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          // Considera a seção ativa se o topo está acima de 80px do topo da viewport e a base está abaixo de 80px
          if (rect.top <= 80 && rect.bottom > 80) {
            found = '#' + id
            break
          }
        }
      }
      if (found) {
        setActiveHash(found)
      } else {
        setActiveHash(window.location.hash)
      }
    }

    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('scroll', onScroll)
    setActiveHash(window.location.hash)
    onScroll() // Atualiza ao montar

    return () => {
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('scroll', onScroll)
    }
  }, [links])

  useEffect(() => {
    console.log('Active Hash Changed:', activeHash)
  }, [activeHash])

  return (
    <>
      <div className="fixed left-4 top-4 z-50">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={clsx(baseButtonClasses, variantsButtonClasses[isMenuOpen ? 'open' : 'closed'])}>
          <div className="transition-all duration-300 ease-in-out">
            {isMenuOpen ? <X className="scale-100 text-white transition-all duration-300" /> : <Menu className="scale-100 text-white transition-all duration-300" />}
          </div>
        </button>
      </div>
      <div className={clsx(baseBackdropClasses, variantsBackdropClasses[isMenuOpen ? 'open' : 'closed'])}>
        <div className={clsx(baseDivListClasses, variantsDivListClasses[isMenuOpen ? 'open' : 'closed'])}>
          {links.map((link) => (
            <a key={link.href} className={clsx(baseLinkClasses, activeHash === link.href.replace('/', '') && 'bg-blue-500 text-white')} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
