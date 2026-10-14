import React, { useEffect, useRef } from 'react'

interface StickyHeaderProps {
  children: React.ReactNode
  className?: string
}

export default function StickyHeader({ children, className = '' }: StickyHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    let rafId: number

    const handleScroll = () => {
      // Find following content container and the first card
      const content = container.nextElementSibling as HTMLElement | null
      const targetCard = (content?.querySelector('.bento-card') as HTMLElement | null) || content

      if (!targetCard) {
        inner.style.filter = 'none'
        inner.style.opacity = '1'
        inner.style.transform = 'none'
        return
      }

      const headerRect = inner.getBoundingClientRect()
      const cardRect = targetCard.getBoundingClientRect()

      // The card covers the header ONLY when card's top edge crosses header's bottom edge
      // coveredPixels represents how many pixels of the header are physically covered by the card
      const coveredPixels = headerRect.bottom - cardRect.top

      if (coveredPixels <= 0) {
        // Card has NOT reached or covered the header yet -> STRICTLY 100% SHARP & NORMAL
        inner.style.filter = 'none'
        inner.style.opacity = '1'
        inner.style.transform = 'none'
      } else {
        // Card is physically covering the header!
        // Progress ramps from 0 (just touching bottom) to 1 (card has covered the entire header)
        const totalHeaderHeight = headerRect.height || 140
        const progress = Math.min(coveredPixels / totalHeaderHeight, 1)

        const blurAmount = (progress * 12).toFixed(1)
        const opacityAmount = (1 - progress * 0.45).toFixed(2)
        const translateY = (-progress * 6).toFixed(1)
        const scaleAmount = (1 - progress * 0.03).toFixed(3)

        inner.style.filter = `blur(${blurAmount}px)`
        inner.style.opacity = opacityAmount
        inner.style.transform = `translateY(${translateY}px) scale(${scaleAmount})`
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    handleScroll()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`sticky top-20 sm:top-24 z-10 pb-6 pointer-events-none ${className}`}
    >
      <div
        ref={innerRef}
        className="pointer-events-auto will-change-[filter,opacity,transform] transition-[filter,opacity,transform] duration-75 ease-out"
      >
        {children}
      </div>
    </div>
  )
}
