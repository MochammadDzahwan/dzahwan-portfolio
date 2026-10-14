import React from 'react'

type Props = {
  index: string
  eyebrow: string
  title: React.ReactNode
  description?: string
  className?: string
}

export default function SectionHeading({ index, eyebrow, title, description, className = '' }: Props) {
  return (
    <div className={`section-heading mb-6 sm:mb-8 ${className}`}>
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 mb-3.5 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        {index} // {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3.5 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  )
}