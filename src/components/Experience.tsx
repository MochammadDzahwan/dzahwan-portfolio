import { Briefcase, Calendar, MapPin, Award, CheckCircle2, ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import StickyHeader from './StickyHeader'
import { experiences } from '../data/portfolio'

export default function Experience() {
  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative" id="experience">
      {/* Sticky Section Header: Pins beneath navbar and smoothly blurs when covered as timeline scrolls up */}
      <StickyHeader>
        <SectionHeading
          index="01"
          eyebrow="WORK EXPERIENCES"
          title={
            <>
              Where I’ve Made an <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Impact.</span>
            </>
          }
        />
      </StickyHeader>

      {/* Timeline container with centered markers (Scrolls over sticky header) */}
      <div className="relative z-20 border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12 pt-2">
        {experiences.map((exp, index) => (
          <div key={exp.company + exp.role} className="relative group pl-6 sm:pl-10">
            {/* Timeline Marker Beacon - Centered exactly on the line via left-0 -translate-x-1/2 */}
            <div
              className={`absolute left-0 -translate-x-1/2 top-2 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all z-10 ${
                exp.isCurrent
                  ? 'border-emerald-400 bg-emerald-500/25 text-emerald-400 shadow-xl shadow-emerald-500/40'
                  : 'border-slate-700 bg-slate-900 text-slate-300 group-hover:border-emerald-500/60 group-hover:text-emerald-300'
              }`}
            >
              {exp.isCurrent ? (
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              ) : (
                <span className="text-xs font-mono font-bold">{index + 1}</span>
              )}
            </div>

            {/* Experience Card */}
            <div className="bento-card p-6 sm:p-9">
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-5 border-b border-slate-800">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                      {exp.badge}
                    </span>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        CURRENT ROLE
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-base sm:text-lg font-bold text-emerald-400">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-1.5 text-xs sm:text-sm font-mono text-slate-300">
                  <div className="flex items-center gap-2 font-semibold">
                    <Calendar size={15} className="text-emerald-400" />
                    <span>{exp.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin size={15} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Award Banner if present */}
              {exp.award && (
                <div className="mt-5 p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 flex items-center gap-3 text-xs sm:text-sm font-semibold text-emerald-300">
                  <Award size={18} className="text-emerald-400 shrink-0" />
                  <span>{exp.award}</span>
                </div>
              )}

              {/* Bullet Points */}
              <ul className="mt-5 space-y-3.5 text-sm sm:text-base text-slate-200">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 leading-relaxed">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-1" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="mt-7 pt-5 border-t border-slate-800 flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold mr-1">
                  Technologies:
                </span>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-900/95 text-slate-200 border border-slate-700/80 font-mono text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
