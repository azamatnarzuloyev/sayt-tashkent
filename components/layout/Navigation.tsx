"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Send } from 'lucide-react'

interface NavigationProps {
  variant?: 'transparent' | 'solid'
}

export default function Navigation({ variant = 'solid' }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const bgClass = variant === 'solid'
    ? 'bg-background/95 backdrop-blur-md border-b border-border'
    : ''

  return (
    <nav className={`sticky top-0 z-50 p-4 sm:p-6 ${bgClass}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg sm:text-2xl font-bold text-foreground">
          <span className="text-primary">▲</span>NEXWEB
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm text-muted-foreground">
          <Link href="/#services" className="hover:text-foreground transition-colors">
            РАЗРАБОТКА САЙТОВ
          </Link>
          <Link href="/#portfolio" className="hover:text-foreground transition-colors">
            ПОРТФОЛИО
          </Link>
          <Link href="/#prices" className="hover:text-foreground transition-colors">
            ЦЕНЫ
          </Link>
          <Link href="/uslugi/seo-prodvizhenie-saytov" className="hover:text-foreground transition-colors">
            SEO ПРОДВИЖЕНИЕ
          </Link>
          <Link href="/#reviews" className="hover:text-foreground transition-colors">
            ОТЗЫВЫ
          </Link>
          <Link href="/#contact" className="hover:text-foreground transition-colors">
            КОНТАКТЫ
          </Link>
        </div>

        {/* Contact info */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4 text-xs lg:text-sm">
          <a href="tel:+998990167647" className="hidden lg:inline text-muted-foreground hover:text-primary transition-colors">
            +998 99 016 76 47
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Мобильное меню"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-30">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/#services" className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50" onClick={() => setIsMobileMenuOpen(false)}>
                РАЗРАБОТКА САЙТОВ
              </Link>
              <Link href="/uslugi/sozdanie-internet-magazinov" className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50" onClick={() => setIsMobileMenuOpen(false)}>
                ИНТЕРНЕТ-МАГАЗИНЫ
              </Link>
              <Link href="/uslugi/korporativnye-sayty" className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50" onClick={() => setIsMobileMenuOpen(false)}>
                КОРПОРАТИВНЫЕ САЙТЫ
              </Link>
              <Link href="/uslugi/landing-page-pod-klyuch" className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50" onClick={() => setIsMobileMenuOpen(false)}>
                LANDING PAGE
              </Link>
              <Link href="/uslugi/seo-prodvizhenie-saytov" className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50" onClick={() => setIsMobileMenuOpen(false)}>
                SEO ПРОДВИЖЕНИЕ
              </Link>
              <Link href="/uslugi/tehpodderzhka-saytov" className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50" onClick={() => setIsMobileMenuOpen(false)}>
                ТЕХПОДДЕРЖКА
              </Link>
              <Link href="/#contact" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                КОНТАКТЫ
              </Link>
              <div className="pt-4 border-t border-border/50 space-y-2">
                <a href="tel:+998990167647" className="flex items-center text-primary font-medium">
                  <Phone className="h-4 w-4 mr-2" />
                  +998 99 016 76 47
                </a>
                <a href="mailto:info@nexweb.uz" className="flex items-center text-muted-foreground">
                  <Send className="h-4 w-4 mr-2" />
                  info@nexweb.uz
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
