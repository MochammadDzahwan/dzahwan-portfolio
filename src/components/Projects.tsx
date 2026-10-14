import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import StickyHeader from './StickyHeader'
import { projects } from '../data/portfolio'

const wtiImages = [
  { src: '/assets/WTI/wti-dashboard.jpg', alt: 'WTI Oil Forecasting — Dashboard Prediksi & Metrik Evaluasi' },
  { src: '/assets/WTI/wti-grafik.jpg', alt: 'WTI Oil Forecasting — Grafik Perbandingan Aktual vs Prediksi' },
  { src: '/assets/WTI/wti-forecast.jpg', alt: 'WTI Oil Forecasting — Halaman Prediksi & Unggah Data Historis' },
]

const guestImages = [
  { src: '/assets/GuestRequest/guest-tasks.jpg', alt: 'Guest Request Management — Klasifikasi Tugas Tamu Otomatis' },
  { src: '/assets/GuestRequest/guest-detail.jpg', alt: 'Guest Request Management — Detail Tugas & Aksi Pengerjaan' },
  { src: '/assets/GuestRequest/guest-input.jpg', alt: 'Guest Request Management — Form Input Permintaan Tamu Hotel' },
]

const sipsImages = [
  { src: '/assets/SIPS/sips-login.jpg', alt: 'SIPS - Portal Login Bank Syariah Indonesia' },
  { src: '/assets/SIPS/sips-dashboard.jpg', alt: 'SIPS - Dashboard Utama Bank Syariah Indonesia' },
  { src: '/assets/SIPS/sips-table.jpg', alt: 'SIPS - Data Pengarsipan Surat Masuk' },
]

const simproImages = [
  { src: '/assets/SIMPRO/simpro-login.jpg', alt: 'SIMPRO Undip - Portal Login Sistem' },
  { src: '/assets/SIMPRO/simpro-dashboard.jpg', alt: 'SIMPRO Undip - Dashboard Monitoring Dosen Wali' },
  { src: '/assets/SIMPRO/simpro-mahasiswa.jpg', alt: 'SIMPRO Undip - Data Mahasiswa Perwalian' },
]

const bookoramaImages = [
  { src: '/assets/Bookorama/bookorama-login.jpg', alt: 'Bookorama — Portal Login Sistem Perpustakaan' },
  { src: '/assets/Bookorama/bookorama-dashboard.jpg', alt: 'Bookorama — Dashboard Utama Sistem Perpustakaan' },
  { src: '/assets/Bookorama/bookorama-koleksi.jpg', alt: 'Bookorama — Data Koleksi Buku & Peminjaman' },
]

interface ProjectCarouselProps {
  images: { src: string; alt: string }[]
}

function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isPaused, images.length])

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Sliding Images Container (Full Canvas) */}
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img) => (
          <div key={img.src} className="w-full h-full flex-shrink-0 relative">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover object-center select-none pointer-events-none"
            />
          </div>
        ))}
      </div>

      {/* Subtle bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

      {/* Subtle Navigation Chevrons on hover */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }}
        className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-slate-950/80 border border-slate-700/60 text-slate-200 hover:text-emerald-400 hover:border-emerald-500/50 opacity-0 group-hover:opacity-100 transition-all shadow-lg pointer-events-auto"
        title="Previous Photo"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          setCurrentIndex((prev) => (prev + 1) % images.length)
        }}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-slate-950/80 border border-slate-700/60 text-slate-200 hover:text-emerald-400 hover:border-emerald-500/50 opacity-0 group-hover:opacity-100 transition-all shadow-lg pointer-events-auto"
        title="Next Photo"
      >
        <ChevronRight size={16} />
      </button>

      {/* Minimal 3-Dot Slide Indicators */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-950/70 border border-slate-800/80 backdrop-blur-sm pointer-events-auto">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setCurrentIndex(idx)
            }}
            className={`transition-all rounded-full ${
              idx === currentIndex
                ? 'w-3.5 h-1.5 bg-emerald-400 shadow-sm shadow-emerald-400/50'
                : 'w-1.5 h-1.5 bg-slate-500 hover:bg-slate-300'
            }`}
            title={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative" id="projects">
      {/* Sticky Section Header: Pins beneath navbar and smoothly blurs when covered as cards scroll up */}
      <StickyHeader>
        <SectionHeading
          index="02"
          eyebrow="PROJECT HIGHLIGHTS"
          title={
            <>
              Engineered Works & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Research.</span>
            </>
          }
        />
      </StickyHeader>

      {/* 5 Projects Centered Layout: Higher z-index so cards scroll over and cover the sticky header */}
      <div className="relative z-20 flex flex-wrap justify-center gap-7 pt-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="bento-card group flex flex-col justify-between w-full md:w-[calc(50%-14px)] lg:w-[calc((100%-56px)/3)] shrink-0"
          >
            {/* Visual Header Canvas */}
            <div className="relative h-56 bg-slate-950/85 border-b border-slate-800 p-5 overflow-hidden flex items-center justify-center">
              {/* Scanline overlay */}
              <div className="absolute inset-0 scanline-overlay opacity-25 pointer-events-none" />

              {/* 01: WTI Oil Forecasting Full Box Carousel */}
              {project.visual === 'oil' && <ProjectCarousel images={wtiImages} />}

              {/* 02: Guest Request Management Full Box Carousel */}
              {project.visual === 'guest' && <ProjectCarousel images={guestImages} />}

              {/* 03: SIPS Full Box Carousel */}
              {project.visual === 'mail' && <ProjectCarousel images={sipsImages} />}

              {/* 04: SIMPRO Full Box Carousel */}
              {project.visual === 'academic' && <ProjectCarousel images={simproImages} />}

              {/* 05: Bookorama Full Box Carousel */}
              {project.visual === 'bookorama' && <ProjectCarousel images={bookoramaImages} />}

            </div>

            {/* Project Content Description with clear typography */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                {/* Project Note & Number above title */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-emerald-400">
                    {project.note}
                  </span>
                  <span className="text-slate-400 font-bold font-mono">
                    #{project.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Stack Pills - All technologies displayed */}
              <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-sm px-2.5 py-1 rounded-md bg-slate-900 text-slate-200 border border-slate-800 font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
