import { useState } from 'react'
import { Code2, Server, Brain, Database, CheckCircle2, Terminal } from 'lucide-react'
import SectionHeading from './SectionHeading'
import StickyHeader from './StickyHeader'
import { skills } from '../data/portfolio'

export default function SkillsBento() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null)

  const groupIcons: Record<string, React.ReactNode> = {
    'Frontend Engineering': <Code2 className="text-emerald-400" size={24} />,
    'Backend & Enterprise APIs': <Server className="text-cyan-400" size={24} />,
    'Machine Learning & AI': <Brain className="text-purple-400" size={24} />,
    'Databases & Dev Ecosystem': <Database className="text-amber-400" size={24} />,
  }

  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative" id="skills">
      {/* Sticky Section Header: Pins beneath navbar and smoothly blurs when covered as stack cards scroll up */}
      <StickyHeader>
        <SectionHeading
          index="03"
          eyebrow="TECH STACK"
          title={
            <>
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Stacks.</span>
            </>
          }
        />
      </StickyHeader>

      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-7 pt-2">
        {skills.map((category, idx) => (
          <div
            key={category.group}
            className={`bento-card p-6 sm:p-9 flex flex-col transition-all duration-300 ${
              activeGroup === category.group ? 'border-emerald-500/50 shadow-emerald-500/10' : ''
            }`}
            onMouseEnter={() => setActiveGroup(category.group)}
            onMouseLeave={() => setActiveGroup(null)}
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800 min-h-[76px] sm:min-h-[84px]">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    {groupIcons[category.group] || <Code2 className="text-emerald-400" size={24} />}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {category.group}
                    </h3>
                    {/* <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      CLUSTER 0{idx + 1}
                    </span> */}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal min-h-[44px] sm:min-h-[48px]">
                {category.description}
              </p>
            </div>

            {/* Skill Badges with larger text */}
            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap gap-2.5">
              {category.items.map((skill) => (
                <div
                  key={skill.name}
                  className="group/badge px-3.5 py-2 rounded-xl bg-slate-900/95 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 transition-all flex items-center gap-2 text-xs sm:text-sm font-mono font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400/70 group-hover/badge:bg-emerald-400 group-hover/badge:scale-125 transition-all" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
