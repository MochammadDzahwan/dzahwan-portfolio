import { useState } from 'react'
import { ArrowDown, Terminal, Download, Copy, Check, Sparkles, ShieldCheck, Award, ArrowUpRight } from 'lucide-react'

interface HeroProps {
  onOpenTerminal: () => void
}

export default function Hero({ onOpenTerminal }: HeroProps) {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('m.dzahwan@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section className="relative pt-8 pb-20 md:py-24 px-4 sm:px-8 max-w-7xl mx-auto" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column: Headline, Bio & CTAs */}
        <div className="lg:col-span-7 space-y-7">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span>DKI JAKARTA BASED // IT DEVELOPER // TECHNOLOGY & DIGITAL TRANSFORMATION</span>
          </div>

          {/* Main Giant Typography */}
          <div className="space-y-1">
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.05]">
              Mochammad <br />
              Dzahwan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Fadhloly
              </span>
              <span className="text-emerald-400">.</span>
            </h1>
          </div>

          {/* Bio Description */}
          <p className="text-slate-200 text-lg sm:text-xl max-w-2xl leading-relaxed font-normal">
            IT Developer with a Computer Science background from <strong className="text-white font-bold">Diponegoro University</strong> (GPA 3.80 / 4.00, Cum Laude). 
            Passionate about building scalable digital solutions through modern web technologies, software engineering, and machine learning.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all"
            >
              <span>Explore My Work</span>
              <ArrowDown size={18} />
            </a>

            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl text-sm sm:text-base font-bold text-emerald-300 bg-slate-900/90 hover:bg-slate-800 border border-emerald-500/30 hover:border-emerald-400 shadow-sm hover:shadow-emerald-500/10 transition-all group"
            >
              <Sparkles size={18} className="text-emerald-400 group-hover:rotate-12 transition-transform" />
              <span>Ask Dzahwan</span>
              <span className="text-[11px] font-mono text-emerald-300 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                AI
              </span>
              <span className="text-xs text-slate-400 px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono">⌘K</span>
            </button>

            <a
              href="/Mochammad-Dzahwan-Fadhloly-CV.pdf"
              download="Mochammad-Dzahwan-Fadhloly-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-sm sm:text-base font-medium text-slate-200 bg-slate-900/70 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 hover:text-white transition-all"
            >
              <Download size={17} />
              <span>Download CV</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-mono text-slate-300 hover:text-emerald-300 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/90 transition-colors"
              title="Copy email to clipboard"
            >
              {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Quick Credibility Bento Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-7 border-t border-slate-800">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 flex flex-col justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                Academics
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-1 flex items-baseline gap-1 whitespace-nowrap">
                3.80 <span className="text-xs text-emerald-400 font-normal">/ 4.00</span>
              </div>
              <span className="text-xs text-slate-300 mt-0.5 block font-medium">Cum Laude · 3.5 Yrs</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 flex flex-col justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                Recognition
              </span>
              <span className="text-lg sm:text-xl xl:text-2xl font-extrabold text-white font-mono mt-1 block">
                Top 3 Best
              </span>
              <span className="text-xs text-cyan-300 mt-0.5 block font-semibold">
                CIPTA IT Dev (2026)
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 flex flex-col justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                Leadership
              </span>
              <span className="text-lg sm:text-xl xl:text-2xl font-extrabold text-white font-mono mt-1 block">
                Chairman
              </span>
              <span className="text-xs text-amber-300 mt-0.5 block font-semibold">
                ANFORCOM 2023
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 flex flex-col justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                Intellectual Prop.
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-1 block">
                2x HKI
              </span>
              <span className="text-xs text-slate-300 mt-0.5 block font-medium">Copyright Registered</span>
            </div>
          </div>
        </div>

        {/* Right Column: Holographic Cyber HUD Developer Portrait Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
          <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />

            {/* Cyber HUD Container */}
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/95 to-[#070d18] border border-slate-700/90 p-3.5 sm:p-4 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Corner Brackets */}
              <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-emerald-400" />
              <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-emerald-400" />
              <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400" />

              {/* HUD Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3 text-[11px] font-mono text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  PROFILE
                </span>
                <span className="text-slate-400 font-semibold">STATUS: ACTIVE</span>
              </div>

              {/* Portrait Visual Window — Full Edge-to-Edge 3:4 Framing */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-emerald-500/30 shadow-xl shadow-emerald-500/10 group">
                {/* Full-bleed Portrait Photo (Head to Waist Complete View) */}
                <img
                  src="/assets/Profil.jpeg"
                  alt="Mochammad Dzahwan Fadhloly"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter saturate-105 contrast-[1.02]"
                />

                {/* Cyber Scanline & Grid Texture Overlay */}
                <div className="absolute inset-0 scanline-overlay opacity-20 pointer-events-none z-10" />

                {/* Subtle Cinematic Vignette & Bottom/Top Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-slate-950/25 z-10 pointer-events-none" />

                {/* Holographic Corner Tech Reticles */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-emerald-400 z-20 pointer-events-none" />
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-cyan-400 z-20 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-emerald-400 z-20 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-cyan-400 z-20 pointer-events-none" />

                {/* Floating Glassmorphism Tech Badges */}
                <div className="absolute top-2.5 left-2.5 z-20 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-[10px] sm:text-[11px] font-mono font-semibold text-emerald-300 shadow-lg flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  React · TypeScript
                </div>
                <div className="absolute bottom-2.5 left-2.5 z-20 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-[10px] sm:text-[11px] font-mono font-semibold text-cyan-300 shadow-lg flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  TensorFlow · LSTM
                </div>
                <div className="absolute bottom-2.5 right-2.5 z-20 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[10px] sm:text-[11px] font-mono font-semibold text-slate-200 shadow-lg flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Laravel · SQL
                </div>
              </div>

              {/* HUD Footer Status Card */}
              <div className="mt-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Current Workplace</div>
                  <div className="text-xs sm:text-sm font-bold text-white">PT CIMB Niaga Tbk</div>
                </div>
                <div className="text-right space-y-0.5">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Role Status</div>
                  <div className="text-[11px] sm:text-xs font-mono text-slate-200 font-semibold">CIPTA IT Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
