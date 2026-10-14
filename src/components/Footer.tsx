import { ArrowUp, Sparkles, ExternalLink, Heart } from 'lucide-react'

interface FooterProps {
  onOpenTerminal: () => void
}

export default function Footer({ onOpenTerminal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-[#04070c] border-t border-slate-800 text-slate-300 py-12 px-4 sm:px-8 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex items-center gap-3.5">
          <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-emerald-400/80 shadow-md shadow-emerald-500/20 shrink-0 bg-slate-800">
            <img
              src="/assets/Profile-AI.jpeg"
              alt="Mochammad Dzahwan"
              className="w-full h-full object-cover object-center filter saturate-105 contrast-[1.02]"
            />
          </div>
          <div className="space-y-0.5">
            <span className="font-extrabold text-white text-sm sm:text-base block">Mochammad Dzahwan Fadhloly</span>
            <span className="text-slate-400 block font-mono text-xs">
              © {new Date().getFullYear()} · All rights reserved.
            </span>
          </div>
        </div>

        {/* Middle Quick Actions */}
        <div className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm font-mono font-medium">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <Sparkles size={15} className="text-emerald-400" />
            <span>ASK DZAHWAN AI</span>
          </button>

          <a
            href="https://www.linkedin.com/in/mochammad-dzahwan-fadhloly/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <span>LINKEDIN</span>
            <ExternalLink size={14} />
          </a>

          <a
            href="/Mochammad-Dzahwan-Fadhloly-CV.pdf"
            download="Mochammad-Dzahwan-Fadhloly-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-white transition-colors"
          >
            CURRICULUM VITAE
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-xs sm:text-sm font-mono text-slate-300 hover:text-emerald-300 transition-all font-semibold"
        >
          <span>BACK TO TOP</span>
          <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  )
}
