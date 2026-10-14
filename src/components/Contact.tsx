import { useState } from 'react'
import { Mail, ArrowUpRight, Copy, Check, Send, MapPin, Globe, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'
import StickyHeader from './StickyHeader'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const copyEmail = () => {
    navigator.clipboard.writeText('m.dzahwan@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Discussion with Mochammad Dzahwan Fadhloly${name ? ` - from ${name}` : ''}`)
    const body = encodeURIComponent(message || 'Hi Dzahwan, I came across your portfolio and would love to connect!')
    window.location.href = `mailto:m.dzahwan@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative" id="contact">
      {/* Sticky Section Header: Pins beneath navbar and smoothly blurs when covered as contact cards scroll up */}
      <StickyHeader>
        <SectionHeading
          index="05"
          eyebrow="COMMUNICATION CHANNELS"
          title={
            <>
              Let’s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Exceptional.</span>
            </>
          }
          // description="Whether you have an enterprise software engineering opportunity, technical challenge, or innovative project — I’m excited to connect."
        />
      </StickyHeader>

      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Direct Email Bento Card */}
          <div className="bento-card p-6 sm:p-9 space-y-5">
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 w-fit">
              <Mail size={26} />
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                Direct Email Channel
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white break-all">
                m.dzahwan@gmail.com
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Feel free to email me directly regarding full-stack software development roles, machine learning solutions, or technology collaboration.
            </p>

            <div className="pt-2 flex flex-wrap gap-3.5">
              <a
                href="mailto:m.dzahwan@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25"
              >
                <span>Compose Email</span>
                <ArrowUpRight size={16} />
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-sm sm:text-base text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Address'}</span>
              </button>
            </div>
          </div>

          {/* Social & Coordinates Bento Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://www.linkedin.com/in/mochammad-dzahwan-fadhloly/"
              target="_blank"
              rel="noreferrer"
              className="bento-card p-5 sm:p-6 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-slate-300 text-xs sm:text-sm font-mono font-semibold">
                <span>LINKEDIN</span>
                <ArrowUpRight size={16} className="group-hover:text-emerald-400 transition-colors" />
              </div>
              <div className="mt-5 font-bold text-white text-base sm:text-lg group-hover:text-cyan-300 transition-colors">
                Connect on LinkedIn
              </div>
            </a>

            <div className="bento-card p-5 sm:p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-300 text-xs sm:text-sm font-mono font-semibold">
                <span>LOCATION</span>
                <MapPin size={16} className="text-emerald-400" />
              </div>
              <div className="mt-5 font-bold text-white text-base sm:text-lg">
                Jakarta, Indonesia
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Quick Message Dispatcher */}
        <div className="lg:col-span-7">
          <div className="bento-card p-6 sm:p-9">
            <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-mono text-emerald-400 font-bold tracking-wider">
                  QUICK MESSAGE GENERATOR
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400 font-semibold">
                DIRECT CLIENT DISPATCH
              </span>
            </div>

            <form onSubmit={handleSendMail} className="space-y-5">
              <div>
                <label className="block text-xs sm:text-sm font-mono text-slate-300 mb-2 uppercase font-semibold">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name or organization"
                  className="w-full px-4 sm:px-5 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 text-sm sm:text-base font-sans"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-mono text-slate-300 mb-2 uppercase font-semibold">
                  Message or Project Scope
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your role or project opportunity"
                  className="w-full px-4 sm:px-5 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 text-sm sm:text-base font-sans resize-none leading-relaxed"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs sm:text-sm font-mono text-slate-400 flex items-center gap-2">
                  <Sparkles size={14} className="text-emerald-400" />
                  <span>Direct delivery via your default mail client</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-emerald-500/25 transition-all"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
