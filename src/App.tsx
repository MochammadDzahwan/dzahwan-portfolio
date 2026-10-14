import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import SkillsBento from './components/SkillsBento'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TerminalPalette from './components/TerminalPalette'

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false)

  // Global keyboard shortcut: Cmd+K or Ctrl+K to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setTerminalOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-[#06090e] text-slate-100 relative font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Ambient Cyber Grid & Glow Mesh */}
      <div className="ambient-bg" />

      {/* Main Content Layers */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

        <main className="flex-1 space-y-12 md:space-y-20">
          <Hero onOpenTerminal={() => setTerminalOpen(true)} />
          <Experience />
          <Projects />
          <SkillsBento />
          <Credentials />
          <Contact />
        </main>

        <Footer onOpenTerminal={() => setTerminalOpen(true)} />
      </div>

      {/* Interactive Developer Terminal / Command Palette */}
      <TerminalPalette
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  )
}
