import { useState } from 'react'
import { GraduationCap, Award, ShieldCheck, CheckCircle2, FileCheck, Sparkles, Star, ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import StickyHeader from './StickyHeader'
import { education, certifications, achievements } from '../data/portfolio'

export default function Credentials() {
  const [activeTab, setActiveTab] = useState<'all' | 'education' | 'certifications' | 'awards'>('all')

  const tabs = [
    { id: 'all', label: 'All Overview' },
    { id: 'education', label: '🎓 Education' },
    { id: 'certifications', label: '📜 Certifications & HKI (5)' },
    { id: 'awards', label: '🏆 Honors & Awards (3)' },
  ] as const

  const edu = education[0]

  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative" id="credentials">
      {/* Sticky Section Header: Pins header & category tabs together, blurs when covered by cards */}
      <StickyHeader>
        <SectionHeading
          index="04"
          eyebrow="ACHIEVEMENTS"
          title={
            <>
              Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Distinctions.</span>
            </>
          }
          className="mb-4 sm:mb-5"
        />

        {/* Clean Interactive Category Tabs: Sticky with header and covered when cards scroll up */}
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 font-bold'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 backdrop-blur-md'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </StickyHeader>

      {/* Content wrapper: cards scroll over sticky header and tabs */}
      <div className="relative z-20 space-y-8 pt-4">

      {/* TAB CONTENT: ALL OVERVIEW (Clean, uncrowded layout) */}
      {activeTab === 'all' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* 1. Academic Spotlight Banner (Full Width, Peaceful & Elegant) */}
          <div className="bento-card p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    DIPONEGORO UNIVERSITY
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    CUM LAUDE
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-semibold">
                    {edu.date}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Completed accelerated bachelor degree in <strong className="text-white">3.5 years</strong> with a cumulative GPA of <strong className="text-emerald-400 font-mono font-bold">3.80 / 4.00</strong>. Researched deep learning LSTM models for crude oil volatility forecasting, resulting in an officially registered intellectual property copyright.
                </p>
              </div>

              {/* Right highlight stats */}
              <div className="lg:col-span-4 flex flex-row lg:flex-col justify-start lg:justify-center gap-4 lg:border-l lg:border-slate-800 lg:pl-8">
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                    Cumulative GPA
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono mt-0.5 block">
                    3.80 <span className="text-sm font-normal text-emerald-400 font-sans">/ 4.00</span>
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold">Cum Laude Distinction</span>
                </div>

                <div className="pt-0 lg:pt-3 lg:border-t lg:border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                    Study Duration
                  </span>
                  <span className="text-base sm:text-lg font-bold text-cyan-300 font-mono block">
                    3.5 Years Accelerated
                  </span>
                  <span className="text-xs text-slate-400">Class of 2021 – 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Two Balanced Columns: Certifications & HKI (Left) vs Honors & Awards (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Certifications & Copyrights Clean List */}
            <div className="bento-card p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    Certifications & HKI Copyrights
                  </h4>
                  <span className="text-xs font-mono text-slate-400">
                    Verified Credentials & Intellectual Properties
                  </span>
                </div>
              </div>

              <div className="divide-y divide-slate-800/80">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="text-sm sm:text-base font-semibold text-white">
                        {cert.title}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400">
                        {cert.issuer}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className="text-xs font-mono text-emerald-400 font-bold">
                        {cert.year}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase font-semibold">
                        {cert.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors & Milestones Clean List */}
            <div className="bento-card p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400">
                  <Award size={22} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    Honors & Achievements
                  </h4>
                  <span className="text-xs font-mono text-slate-400">
                    Professional Performance & Leadership
                  </span>
                </div>
              </div>

              <div className="divide-y divide-slate-800/80">
                {achievements.map((item, idx) => (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-emerald-400">
                        {item.organization} · {item.year}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/25 font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-base font-bold text-white">
                      {item.title}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: EDUCATION ONLY */}
      {activeTab === 'education' && (
        <div className="bento-card p-6 sm:p-9 space-y-6 animate-in fade-in duration-300">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                <GraduationCap size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">Diponegoro University</h3>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  UNIVERSITAS DIPONEGORO (UNDIP) · SEMARANG
                </span>
              </div>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-bold">
              GPA 3.80 / 4.00 · CUM LAUDE
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
              {edu.degree}
            </h4>
            <div className="text-sm font-mono text-slate-400">
              Duration: {edu.date} ({edu.duration})
            </div>
            <p className="text-base text-slate-200 leading-relaxed max-w-3xl">
              Completed an intensive Computer Science curriculum covering software engineering, relational database architectures, algorithms, and deep learning. Graduated in accelerated 3.5 years with top-tier academic standing.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
              Academic Milestones & Thesis
            </span>
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-200">
              {edu.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 leading-relaxed">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* TAB CONTENT: CERTIFICATIONS ONLY */}
      {activeTab === 'certifications' && (
        <div className="bento-card p-6 sm:p-9 space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between pb-5 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">Official Certifications & Copyrights</h3>
                <span className="text-xs font-mono text-slate-400">
                  Verified by DeepLearning.AI, Stanford Online, ETS, and Kemenkumham RI
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 font-bold">{cert.year}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase font-semibold">
                      {cert.type}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white pt-1">
                    {cert.title}
                  </h4>
                </div>
                <div className="text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                  Issuer: {cert.issuer}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: AWARDS ONLY */}
      {activeTab === 'awards' && (
        <div className="bento-card p-6 sm:p-9 space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between pb-5 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-amber-400">
                <Award size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">Honors & Performance Awards</h3>
                <span className="text-xs font-mono text-slate-400">
                  Recognized for enterprise engineering excellence and leadership
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {achievements.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {item.organization} · {item.year}
                  </span>
                  {item.badge && (
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/25 font-bold">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </section>
  )
}
