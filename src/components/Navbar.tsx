import { useState, useEffect } from 'react'
import { Terminal, Download, ArrowUpRight, Menu, X, Clock, Sparkles } from 'lucide-react'

interface NavbarProps {
  onOpenTerminal: () => void
}

export default function Navbar({ onOpenTerminal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  const [activeSection, setActiveSection] = useState('home')

  // Scrollspy & Scrolled state detection
  useEffect(() => {
    const sectionIds = ['home', 'experience', 'projects', 'skills', 'credentials', 'contact']

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Detect bottom of page to highlight contact
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70
      if (isBottom) {
        setActiveSection('contact')
        return
      }

      // Offset (200px) accounting for sticky navbar
      const scrollPos = window.scrollY + 200
      let current = 'home'

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            current = id
            break
          } else if (scrollPos >= top) {
            current = id
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Jakarta Real-time Clock (WIB / GMT+7)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Jakarta',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      setCurrentTime(timeStr)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const navLinks = [
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Tech Stack', href: '#skills' },
    { id: 'credentials', label: 'Achievements', href: '#credentials' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Top Ambient Status Bar */}
      <div className="w-full bg-[#05080c]/90 border-b border-slate-800/80 text-xs font-mono text-slate-300 py-2 px-4 sm:px-8 z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 text-emerald-400 font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              OPEN FOR OPPORTUNITIES
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300 font-medium">
              IT DEVELOPER
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <div className="flex items-center gap-1.5 text-xs text-slate-200">
              <Clock size={13} className="text-cyan-400" />
              <span>JAKARTA {currentTime || 'WIB'} (GMT+7)</span>
            </div>
            <a
              href="/Mochammad-Dzahwan-Fadhloly-CV.pdf"
              download="Mochammad-Dzahwan-Fadhloly-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 font-medium transition-colors"
            >
              <Download size={12} />
              <span>CV.PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Floating Glass Navbar */}
      <header
        className={`sticky top-3 z-40 transition-all duration-300 px-4 sm:px-8 max-w-7xl mx-auto ${
          scrolled ? 'pt-0' : 'pt-2'
        }`}
      >
        <div className="backdrop-blur-xl bg-slate-900/90 border border-slate-800 shadow-2xl rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4 lg:gap-6">
          {/* Brand Mark with Photo & Full Name */}
          <a href="#home" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border-2 border-emerald-400/80 shadow-md shadow-emerald-500/20 group-hover:scale-105 group-hover:border-emerald-300 transition-all shrink-0 bg-slate-800">
              <img
                src="/assets/Profile-AI.jpeg"
                alt="Mochammad Dzahwan"
                className="w-full h-full object-cover object-center filter saturate-105 contrast-[1.02]"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-900" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-white text-sm sm:text-base tracking-tight group-hover:text-emerald-400 transition-colors flex items-center gap-1.5 whitespace-nowrap">
                Mochammad Dzahwan F
                {/* <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-mono font-bold border border-emerald-500/30">
                  DEV
                </span> */}
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                SOFTWARE ENGINEER & ML
              </span>
            </div>
          </a>

          {/* Center Nav Links with Active Underline Indicator */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800/80">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-all whitespace-nowrap flex flex-col items-center justify-center ${
                    isActive
                      ? 'text-white bg-slate-800/75 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  <span className={isActive ? 'text-white font-bold' : ''}>
                    {item.label}
                  </span>

                  {/* Active Indicator Underline Bar */}
                  {isActive ? (
                    <span className="absolute -bottom-0.5 left-2 right-2 h-[2.5px] bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.95)] animate-in fade-in duration-200" />
                  ) : (
                    <span className="absolute -bottom-0.5 left-2 right-2 h-[2.5px] bg-transparent rounded-full" />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Ask Dzahwan AI Button */}
            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800/90 hover:bg-slate-800 border border-emerald-500/30 hover:border-emerald-400 text-emerald-300 shadow-sm transition-all group whitespace-nowrap"
              title="Ask Dzahwan AI (Cmd + K)"
            >
              <Sparkles size={14} className="text-emerald-400 group-hover:rotate-12 transition-transform" />
              <span>Ask Dzahwan</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold border border-emerald-500/30">
                AI
              </span>
              <kbd className="hidden xl:inline-block text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Direct Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 sm:hidden"
              aria-label="Ask Dzahwan AI"
              title="Ask Dzahwan AI"
            >
              <Sparkles size={18} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Active Section Highlighting */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-5 rounded-2xl backdrop-blur-2xl bg-slate-900/95 border border-slate-800 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-2 font-bold">
              Navigation Menu
            </div>
            {navLinks.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm sm:text-base font-semibold px-3.5 py-2.5 rounded-lg transition-all flex items-center justify-between ${
                    isActive
                      ? 'text-emerald-400 bg-slate-800/90 border-l-4 border-emerald-400 font-bold'
                      : 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                  )}
                </a>
              )
            })}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenTerminal()
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-emerald-400 font-bold"
              >
                <Sparkles size={16} />
                <span>Ask Dzahwan AI</span>
              </button>
              <a
                href="/Mochammad-Dzahwan-Fadhloly-CV.pdf"
                download="Mochammad-Dzahwan-Fadhloly-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm"
              >
                <Download size={15} />
                Download CV (PDF)
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
