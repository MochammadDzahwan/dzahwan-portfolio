import { useState, useRef, useEffect } from 'react'
import { Sparkles, X, Maximize2, Minimize2, Send, Check, Copy, Download, ExternalLink, ArrowUpRight, Award, GraduationCap, Briefcase, Code2, Bot, User, MapPin, Trash2, HelpCircle } from 'lucide-react'
import { experiences, projects, skills, education, certifications, achievements } from '../data/portfolio'

interface AskDzahwanProps {
  isOpen: boolean
  onClose: () => void
}

interface Message {
  id: string
  sender: 'user' | 'ai'
  text?: string
  contentNode?: React.ReactNode
  timestamp: string
}

export default function TerminalPalette({ isOpen, onClose }: AskDzahwanProps) {
  const [inputVal, setInputVal] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const quickPrompts = [
    { label: '👤 Profile & Bio', query: 'Ceritakan tentang profil dan bio Mochammad Dzahwan Fadhloly' },
    { label: '💼 Work Experience', query: 'Jelaskan riwayat pengalaman kerja Mochammad Dzahwan' },
    { label: '💻 Project', query: 'Tampilkan 5 project portofolio unggulan Mochammad Dzahwan' },
    { label: '⚡ Tech Stack', query: 'Apa saja tech stack dan teknologi yang dikuasai Dzahwan?' },
    { label: '🏆 Achievement', query: 'Apa saja prestasi dan rekognisi yang diraih Dzahwan?' },
    { label: '📄 View CV', query: 'Buka dan download CV Mochammad Dzahwan' },
    { label: '📬 Contact / Hire', query: 'Bagaimana cara menghubungi atau merekrut Dzahwan?' },
  ]

  const createWelcomeMessage = (): Message => {
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    return {
      id: 'welcome-' + Date.now(),
      sender: 'ai',
      timestamp: now,
      contentNode: (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
            <Sparkles size={18} className="text-emerald-400 animate-pulse" />
            <span>Halo! Saya Ask Dzahwan AI</span>
          </div>
          <p className="leading-relaxed text-slate-300">
            Saya adalah asisten AI resmi portofolio <strong className="text-white">Mochammad Dzahwan Fadhloly</strong>. Saya dilatih dengan seluruh data latar belakang, pengalaman pekerjaan profesional (PT CIMB Niaga Tbk & BSI), project web & machine learning, serta pencapaian akademis Dzahwan.
          </p>
          <p className="text-slate-300 text-xs sm:text-sm">
            💡 <span className="text-cyan-300 font-semibold">Tanyakan apa saja seputar portofolio Dzahwan</span>, atau klik salah satu topik rekomendasi di atas untuk mulai.
          </p>
        </div>
      ),
    }
  }

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([createWelcomeMessage()])
    }
  }, [messages.length])

  // Reset chat helper
  const resetChat = () => {
    setMessages([createWelcomeMessage()])
    setInputVal('')
    setIsTyping(false)
  }

  // Auto focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [isOpen])

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Handle keyboard shortcuts (Escape and Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        if (isOpen) onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const copyEmail = () => {
    navigator.clipboard.writeText('m.dzahwan@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  // Precise AI Knowledge Answer Engine
  const generateAiAnswer = (query: string): React.ReactNode => {
    const q = query.toLowerCase().trim()

    // 1. DOMISILI / LOKASI DZAHWAN
    const domisiliKeywords = [
      'domisili',
      'tinggal di mana',
      'tinggal dimana',
      'dimana tinggal',
      'lokasi tinggal',
      'tempat tinggal',
      'berdomisili',
      'kota tinggal',
      'alamat dzahwan',
      'dimana domisili',
      'asal dzahwan',
      'lokasi dzahwan',
      'dimana dzahwan tinggal',
      'dzahwan tinggal di mana',
      'domisili saat ini',
    ]
    if (domisiliKeywords.some((kw) => q.includes(kw))) {
      return (
        <div className="space-y-3 text-sm sm:text-base text-slate-200">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
            <MapPin size={18} />
            <span>Domisili Mochammad Dzahwan</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-2">
            <p className="leading-relaxed">
              Saat ini Mochammad Dzahwan Fadhloly berdomisili di <strong className="text-white text-base sm:text-lg font-bold">DKI Jakarta, Indonesia</strong>.
            </p>
            <p className="text-slate-400 text-xs font-mono">
              📍 Jabodetabek / Jakarta Metropolitan Area.
            </p>
          </div>
        </div>
      )
    }

    // 2. SPECIFIC ACTIVITY / LEADERSHIP: KETUA ANFORCOM 2023
    if (q.includes('anforcom') || q.includes('annual informatics competition')) {
      const anforcomData = achievements.find((a) => a.title.toLowerCase().includes('anforcom'))
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-base sm:text-lg">
              <Award size={18} />
              <span>Chairperson / Ketua Acara ANFORCOM 2023</span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
              LEADERSHIP
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/30 space-y-3">
            <div className="text-xs font-mono text-slate-400">
              HMIF Universitas Diponegoro · Tahun 2023
            </div>
            <p className="leading-relaxed text-slate-200">
              Sebagai <strong className="text-white font-semibold">Chairperson / Ketua Acara ANFORCOM 2023</strong> (Annual Informatics Competition & Seminar) di Universitas Diponegoro, Mochammad Dzahwan memimpin dan mengorkestrasi komite yang terdiri dari <strong className="text-amber-300">100+ panitia mahasiswa</strong> lintas divisi.
            </p>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              <p>• <strong>Tanggung Jawab:</strong> Bertanggung jawab penuh atas manajemen proyek acara, alokasi anggaran, kemitraan sponsor, strategi publikasi, serta kesiapan infrastruktur teknis kompetisi.</p>
              <p>• <strong>Dampak & Skala:</strong> Berhasil menyelenggarakan kompetisi pemrograman tingkat nasional dan seminar teknologi yang diikuti oleh <strong className="text-emerald-400 font-mono font-bold">300+ peserta</strong> dari berbagai universitas di seluruh Indonesia.</p>
              <p>• <strong>Deskripsi Portofolio:</strong> {anforcomData?.detail}</p>
            </div>
          </div>
        </div>
      )
    }

    // 3. SPECIFIC PROJECT: BOOKORAMA LIBRARY MANAGEMENT SYSTEM
    if (q.includes('bookorama') || (q.includes('perpustakaan') && !q.includes('semua project'))) {
      const bookorama = projects.find((p) => p.id === 'bookorama-library-management')
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
              <Code2 size={18} />
              <span>Bookorama — Library Management System</span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
              FULL CRUD
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-3">
            <p className="leading-relaxed text-slate-200">
              {bookorama?.description}
            </p>
            <div className="space-y-2 text-xs sm:text-sm">
              <p><strong>⚠️ Masalah yang Diselesaikan:</strong> {bookorama?.problem}</p>
              <p><strong>💡 Solusi Teknis:</strong> {bookorama?.solution}</p>
              <p><strong>🛠️ Tech Stack:</strong> <span className="font-mono text-emerald-300">{bookorama?.stack.join(' · ')}</span></p>
              <div className="pt-1 border-t border-slate-800 space-y-1 text-slate-300">
                <span className="font-semibold text-white block">Fitur Unggulan Portofolio:</span>
                {bookorama?.highlights.map((h, i) => (
                  <p key={i}>• {h}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }

    // 4. SPECIFIC PROJECT: WTI CRUDE OIL PRICE PREDICTION
    if (q.includes('wti') || q.includes('crude oil') || q.includes('minyak mentah') || (q.includes('minyak') && !q.includes('semua project'))) {
      const wti = projects.find((p) => p.id === 'wti-oil-prediction')
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-base sm:text-lg">
              <Code2 size={18} />
              <span>WTI Crude Oil Price Volatility Prediction</span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
              DEEP LEARNING · HKI
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/30 space-y-3">
            <p className="leading-relaxed text-slate-200">{wti?.description}</p>
            <div className="space-y-2 text-xs sm:text-sm">
              <p><strong>⚠️ Masalah:</strong> {wti?.problem}</p>
              <p><strong>💡 Solusi:</strong> {wti?.solution}</p>
              <p><strong>🛠️ Tech Stack:</strong> <span className="font-mono text-cyan-300">{wti?.stack.join(' · ')}</span></p>
              <div className="pt-1 border-t border-slate-800 space-y-1 text-slate-300">
                <span className="font-semibold text-white block">Sorotan Riset & Hak Cipta:</span>
                {wti?.highlights.map((h, i) => (
                  <p key={i}>• {h}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }

    // 5. SPECIFIC PROJECT: GUEST REQUEST MANAGEMENT
    if (q.includes('guest request') || q.includes('bukitvista') || q.includes('triase')) {
      const guest = projects.find((p) => p.id === 'guest-request-management')
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-purple-300 font-bold text-base sm:text-lg">
              <Code2 size={18} />
              <span>Guest Request Management & Classification</span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30">
              NLP BiLSTM
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/30 space-y-3">
            <p className="leading-relaxed text-slate-200">{guest?.description}</p>
            <div className="space-y-2 text-xs sm:text-sm">
              <p><strong>⚠️ Masalah:</strong> {guest?.problem}</p>
              <p><strong>💡 Solusi:</strong> {guest?.solution}</p>
              <p><strong>🛠️ Tech Stack:</strong> <span className="font-mono text-purple-300">{guest?.stack.join(' · ')}</span></p>
              <div className="pt-1 border-t border-slate-800 space-y-1 text-slate-300">
                <span className="font-semibold text-white block">Sorotan Proyek:</span>
                {guest?.highlights.map((h, i) => (
                  <p key={i}>• {h}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }

    // 6. SPECIFIC PROJECT: SIPS (MAIL ARCHIVING)
    if (q.includes('sips') || q.includes('mail archiving') || q.includes('arsip surat') || q.includes('surat izin penelitian')) {
      const sips = projects.find((p) => p.id === 'sips-mail-archiving')
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
              <Code2 size={18} />
              <span>SIPS — Mail Archiving System</span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
              ENTERPRISE BSI · HKI
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-3">
            <p className="leading-relaxed text-slate-200">{sips?.description}</p>
            <div className="space-y-2 text-xs sm:text-sm">
              <p><strong>⚠️ Masalah Operasional:</strong> {sips?.problem}</p>
              <p><strong>💡 Solusi Teknis:</strong> {sips?.solution}</p>
              <p><strong>🛠️ Tech Stack:</strong> <span className="font-mono text-emerald-300">{sips?.stack.join(' · ')}</span></p>
              <div className="pt-1 border-t border-slate-800 space-y-1 text-slate-300">
                <span className="font-semibold text-white block">Pencapaian:</span>
                {sips?.highlights.map((h, i) => (
                  <p key={i}>• {h}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }

    // 7. SPECIFIC PROJECT: ACADEMIC INFORMATION SYSTEM
    if (q.includes('academic information') || q.includes('sistem informasi akademik') || q.includes('academic portal') || q.includes('krs/khs') || q.includes('portal akademik')) {
      const academic = projects.find((p) => p.id === 'academic-information-system')
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-base sm:text-lg">
              <Code2 size={18} />
              <span>Informatics Academic Information System</span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
              ACADEMIC PORTAL
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/30 space-y-3">
            <p className="leading-relaxed text-slate-200">{academic?.description}</p>
            <div className="space-y-2 text-xs sm:text-sm">
              <p><strong>⚠️ Masalah:</strong> {academic?.problem}</p>
              <p><strong>💡 Solusi:</strong> {academic?.solution}</p>
              <p><strong>🛠️ Tech Stack:</strong> <span className="font-mono text-cyan-300">{academic?.stack.join(' · ')}</span></p>
              <div className="pt-1 border-t border-slate-800 space-y-1 text-slate-300">
                <span className="font-semibold text-white block">Fitur:</span>
                {academic?.highlights.map((h, i) => (
                  <p key={i}>• {h}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }

    // 8. SPECIFIC EXPERIENCE: CIMB NIAGA
    if (q.includes('cimb') || q.includes('cimb niaga') || q.includes('cipta it developer')) {
      const cimb = experiences[0]
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
              <Briefcase size={18} />
              <span>{cimb.role} @ {cimb.company}</span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
              CURRENT ROLE
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-3">
            <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
              <span>{cimb.date}</span>
              <span>{cimb.location}</span>
            </div>

            {cimb.award && (
              <div className="text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
                <Award size={14} className="text-cyan-400" />
                <span>{cimb.award}</span>
              </div>
            )}

            <div className="space-y-1.5 text-xs sm:text-sm text-slate-200">
              <span className="font-bold text-white block">Tanggung Jawab & Kontribusi:</span>
              {cimb.points.map((pt, i) => (
                <p key={i} className="leading-relaxed">• {pt}</p>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 text-xs font-mono text-slate-400">
              Tech Stack: <span className="text-emerald-300">{cimb.techStack.join(' · ')}</span>
            </div>
          </div>
        </div>
      )
    }

    // 9. SPECIFIC EXPERIENCE: BANK SYARIAH INDONESIA (BSI)
    if (q.includes('bsi') || q.includes('bank syariah indonesia')) {
      const bsi = experiences[1]
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
              <Briefcase size={18} />
              <span>{bsi.role} @ {bsi.company}</span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
              INTERNSHIP
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
              <span>{bsi.date}</span>
              <span>{bsi.location}</span>
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-200">
              <span className="font-bold text-white block">Pekerjaan & Pencapaian:</span>
              {bsi.points.map((pt, i) => (
                <p key={i} className="leading-relaxed">• {pt}</p>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-800 text-xs font-mono text-slate-400">
              Tech Stack: <span className="text-emerald-300">{bsi.techStack.join(' · ')}</span>
            </div>
          </div>
        </div>
      )
    }

    // 10. SPECIFIC EXPERIENCE: BANGKIT ACADEMY
    if (q.includes('bangkit') || q.includes('bangkit academy')) {
      const bangkit = experiences[2]
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-purple-300 font-bold text-base sm:text-lg">
              <Briefcase size={18} />
              <span>{bangkit.role} @ {bangkit.company}</span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">
              INDEPENDENT STUDY
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
              <span>{bangkit.date}</span>
              <span>{bangkit.location}</span>
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-200">
              <span className="font-bold text-white block">Aktivitas & Hasil Studi:</span>
              {bangkit.points.map((pt, i) => (
                <p key={i} className="leading-relaxed">• {pt}</p>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-800 text-xs font-mono text-slate-400">
              Tech Stack: <span className="text-purple-300">{bangkit.techStack.join(' · ')}</span>
            </div>
          </div>
        </div>
      )
    }

    // 11. SPECIFIC EXPERIENCE: ASISTEN LABORATORIUM BASIS DATA UNDIP
    if (q.includes('asisten lab') || q.includes('asisten laboratorium') || q.includes('lab assistant') || q.includes('asisten basis data')) {
      const lab = experiences[3]
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-base sm:text-lg">
              <Briefcase size={18} />
              <span>{lab.role} @ {lab.company}</span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">
              ACADEMIC
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
              <span>{lab.date}</span>
              <span>{lab.location}</span>
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-200">
              <span className="font-bold text-white block">Peran & Tanggung Jawab:</span>
              {lab.points.map((pt, i) => (
                <p key={i} className="leading-relaxed">• {pt}</p>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-800 text-xs font-mono text-slate-400">
              Tech Stack: <span className="text-cyan-300">{lab.techStack.join(' · ')}</span>
            </div>
          </div>
        </div>
      )
    }

    // 12. SPECIFIC ACHIEVEMENT: TOP 3 BEST CIPTA IT DEVELOPER
    if (q.includes('top 3') || q.includes('best cipta') || q.includes('batch 5 2026')) {
      const top3 = achievements[0]
      return (
        <div className="space-y-3 text-sm sm:text-base text-slate-200">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
            <Award size={18} />
            <span>{top3.title}</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-white font-bold">{top3.organization}</span>
              <span className="text-emerald-400 font-bold">{top3.year}</span>
            </div>
            <p className="text-slate-200 leading-relaxed text-xs sm:text-sm">{top3.detail}</p>
          </div>
        </div>
      )
    }

    // 13. SPECIFIC ACHIEVEMENT: 2X HKI (HAK CIPTA KEMENKUMHAM)
    if (q.includes('hki') || q.includes('hak cipta') || q.includes('kemenkumham') || q.includes('surat pencatatan ciptaan')) {
      const hkiCerts = certifications.filter((c) => c.type === 'copyright')
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center gap-2 text-cyan-300 font-bold text-base sm:text-lg">
            <Award size={18} />
            <span>2x Hak Cipta (HKI) Resmi Terdaftar Kemenkumham RI</span>
          </div>
          <p className="leading-relaxed text-slate-300 text-xs sm:text-sm">
            Mochammad Dzahwan memegang 2 sertifikat Hak Kekayaan Intelektual resmi yang diterbitkan oleh Direktorat Jenderal Kekayaan Intelektual (Kemenkumham RI):
          </p>
          <div className="space-y-2.5">
            {hkiCerts.map((cert, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-cyan-500/30 space-y-1">
                <span className="font-bold text-white text-sm block">📜 {cert.title}</span>
                <span className="text-xs font-mono text-cyan-300 block">{cert.issuer} ({cert.year})</span>
              </div>
            ))}
          </div>
        </div>
      )
    }

    // 14. SPECIFIC ACADEMIC: CUM LAUDE & IPK 3.80
    if (q.includes('cum laude') || q.includes('ipk 3.80') || q.includes('ipk dzahwan') || q.includes('berapa ipk') || q.includes('nilai ipk') || q.includes('lulus 3.5 tahun')) {
      const edu = education[0]
      return (
        <div className="space-y-3 text-sm sm:text-base text-slate-200">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
            <GraduationCap size={18} />
            <span>Kelulusan Cum Laude — Universitas Diponegoro</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-2.5">
            <div className="flex justify-between items-center">
              <span className="font-bold text-white text-sm sm:text-base">{edu.degree}</span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">{edu.honor}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Dzahwan menyelesaikan studi sarjana di <strong className="text-white">{edu.institution}</strong> dengan IPK <strong className="text-emerald-400 font-mono font-bold">3.80 / 4.00</strong> secara akselerasi dalam waktu <strong className="text-white">3.5 tahun</strong> (Angkatan 2021 — 2025).
            </p>
          </div>
        </div>
      )
    }

    // 15. SPECIFIC TECH TOOL INQUIRIES
    if (q.includes('react') || q.includes('typescript') || q.includes('laravel') || q.includes('tensorflow') || q.includes('lstm') || q.includes('sql server') || q.includes('mysql')) {
      const techName = q.includes('react') ? 'React.js'
        : q.includes('typescript') ? 'TypeScript'
        : q.includes('laravel') ? 'Laravel'
        : q.includes('tensorflow') ? 'TensorFlow'
        : q.includes('lstm') ? 'LSTM / BiLSTM'
        : q.includes('sql server') ? 'Microsoft SQL Server'
        : 'MySQL'

      return (
        <div className="space-y-3 text-sm sm:text-base text-slate-200">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
            <Code2 size={18} />
            <span>Keahlian Stack: {techName}</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-2">
            <p className="leading-relaxed text-xs sm:text-sm text-slate-200">
              Dalam portofolio Mochammad Dzahwan, <strong className="text-white">{techName}</strong> merupakan salah satu teknologi inti yang digunakan:
            </p>
            {techName === 'React.js' && <p className="text-xs sm:text-sm text-slate-300">• Digunakan dalam pengembangan aplikasi enterprise web internal perbankan di PT CIMB Niaga Tbk dan sistem portal akademik modern.</p>}
            {techName === 'TypeScript' && <p className="text-xs sm:text-sm text-slate-300">• Digunakan untuk implementasi frontend berskala enterprise dengan *strict type safety*, sinkronisasi state, dan integrasi REST API di PT CIMB Niaga Tbk.</p>}
            {techName === 'Laravel' && <p className="text-xs sm:text-sm text-slate-300">• Digunakan untuk membangun SIPS (Mail Archiving System) di PT Bank Syariah Indonesia Tbk dan Sistem Informasi Akademik UNDIP dengan Role-Based Access Control (RBAC).</p>}
            {(techName === 'TensorFlow' || techName === 'LSTM / BiLSTM') && <p className="text-xs sm:text-sm text-slate-300">• Digunakan dalam skripsi peramalan harga minyak mentah WTI (HKI Kemenkumham) dan model NLP klasifikasi pesan tamu di Bangkit Academy × BukitVista.</p>}
            {(techName === 'Microsoft SQL Server' || techName === 'MySQL') && <p className="text-xs sm:text-sm text-slate-300">• Diterapkan dalam basis data relasional enterprise, normalisasi skema, optimasi query berkecepatan tinggi, dan diajarkan langsung sebagai Asisten Laboratorium Basis Data UNDIP.</p>}
          </div>
        </div>
      )
    }

    // 16. GENERAL CATEGORY: CV / RESUME
    const cvKeywords = ['cv', 'resume', 'curriculum vitae', 'download cv', 'buka cv', 'unduh cv', 'minta cv', 'lihat cv', 'file cv', 'pdf', 'view cv']
    if (cvKeywords.some((kw) => q.includes(kw))) {
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
            <Download size={18} />
            <span>Curriculum Vitae (CV) — Mochammad Dzahwan Fadhloly</span>
          </div>
          <p className="leading-relaxed text-slate-300 text-xs sm:text-sm">
            Berkas CV resmi Mochammad Dzahwan telah siap dalam format PDF. Memuat rangkuman rekam jejak enterprise IT Developer di PT CIMB Niaga Tbk, predikat Cum Laude UNDIP (IPK 3.80), 2x HKI, serta portofolio proyek.
          </p>
          <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/40 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="font-bold text-white text-base">Mochammad-Dzahwan-Fadhloly-CV.pdf</div>
                <div className="text-xs text-slate-400 font-mono">Format: PDF · Verified & Updated</div>
              </div>
              <a
                href="/Mochammad-Dzahwan-Fadhloly-CV.pdf"
                download="Mochammad-Dzahwan-Fadhloly-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold transition-all shadow-lg text-xs sm:text-sm inline-flex items-center gap-2"
              >
                <Download size={15} />
                <span>Buka & Unduh CV</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )
    }

    // 17. GENERAL CATEGORY: KONTAK & REKRUTMEN
    const contactKeywords = ['rekrut', 'merekrut', 'hire', 'kontak', 'hubungi', 'menghubungi', 'email', 'linkedin', 'whatsapp', 'kerja sama', 'kolaborasi', 'lowongan', 'tawaran kerja', 'contact', 'contact / hire', 'contact/hire']
    if (contactKeywords.some((kw) => q.includes(kw))) {
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
            <Sparkles size={18} />
            <span>Cara Menghubungi & Merekrut Mochammad Dzahwan</span>
          </div>
          <p className="leading-relaxed text-slate-300 text-xs sm:text-sm">
            Dzahwan terbuka untuk mendiskusikan peluang karir software engineering, proyek enterprise banking, maupun inisiatif applied machine learning.
          </p>
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
            <div className="font-bold text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Status: Terbuka untuk Diskusi Peluang & Kolaborasi
            </div>
            <div className="space-y-2 text-xs sm:text-sm font-mono">
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400">Email:</span>
                <a href="mailto:m.dzahwan@gmail.com" className="text-cyan-300 hover:underline font-bold">m.dzahwan@gmail.com</a>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/mochammad-dzahwan-fadhloly/" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline font-bold flex items-center gap-1">
                  <span>Mochammad Dzahwan Fadhloly</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400">Domisili:</span>
                <span className="text-slate-200 font-bold">DKI Jakarta, Indonesia</span>
              </div>
            </div>
            <div className="pt-1 flex flex-wrap gap-2.5">
              <a
                href="mailto:m.dzahwan@gmail.com?subject=Tawaran%20Diskusi%20dengan%20Dzahwan"
                className="px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 transition-colors shadow-md"
              >
                <Send size={14} />
                <span>Kirim Email Langsung</span>
              </a>
              <button
                onClick={copyEmail}
                className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Email Tersalin!' : 'Salin Email'}</span>
              </button>
            </div>
          </div>
        </div>
      )
    }

    // 18. GENERAL CATEGORY: ALL 5 PROJECTS OVERVIEW
    const projectKeywords = ['semua project', 'daftar project', 'apa saja project', 'project apa saja', '5 project', 'project yang dibuat', 'portfolio project', 'karya apa saja', 'project unggulan', 'projek apa saja', 'project portofolio']
    if (projectKeywords.some((kw) => q.includes(kw)) || q === 'project' || q === 'projects') {
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
            <Code2 size={18} />
            <span>5 Project Unggulan Mochammad Dzahwan</span>
          </div>
          <p className="leading-relaxed text-slate-300 text-xs sm:text-sm">
            Berikut adalah 5 portofolio proyek terkurasi yang dibangun Mochammad Dzahwan:
          </p>
          <div className="space-y-2.5">
            {projects.map((p) => (
              <div key={p.id} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">[{p.number}] {p.title}</span>
                  <span className="text-[11px] font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/15">
                    {p.category}
                  </span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{p.summary}</p>
                <div className="text-[11px] text-slate-400 font-mono">
                  Stack: {p.stack.join(' · ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    // 19. GENERAL CATEGORY: ALL EXPERIENCES OVERVIEW
    const expKeywords = ['semua pengalaman', 'daftar pengalaman', 'apa saja pengalaman', 'pengalaman kerja', 'riwayat karir', 'riwayat kerja', 'karir dzahwan', 'pengalaman profesional', 'work experience', 'riwayat pengalaman']
    if (expKeywords.some((kw) => q.includes(kw)) || q === 'experience' || q === 'pengalaman' || q === 'work experience') {
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
            <Briefcase size={18} />
            <span>Pengalaman Kerja & Karir Profesional</span>
          </div>
          <div className="space-y-3">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white text-sm sm:text-base">{exp.role}</span>
                  <span className="text-xs font-mono text-slate-400">{exp.date}</span>
                </div>
                <div className="text-emerald-400 text-xs sm:text-sm font-semibold">{exp.company} · {exp.location}</div>
                <p className="text-slate-300 text-xs leading-relaxed">{exp.points[0]}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }

    // 20. GENERAL CATEGORY: ALL SKILLS & TECH STACK OVERVIEW
    const skillKeywords = ['semua stack', 'tech stack apa saja', 'skill apa saja', 'keahlian apa saja', 'teknologi apa saja', 'stack yang dikuasai', 'semua skill', 'tech stack', 'teknologi yang dikuasai']
    if (skillKeywords.some((kw) => q.includes(kw)) || q === 'skills' || q === 'stack' || q === 'tech stack') {
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
            <Code2 size={18} />
            <span>Tech Stack & Keahlian Teknologi</span>
          </div>
          <div className="space-y-3">
            {skills.map((cat) => (
              <div key={cat.group} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="font-bold text-emerald-400 text-sm">
                  {cat.group}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span key={item.name} className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 font-mono text-xs font-semibold">
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    // 21. GENERAL CATEGORY: ALL ACHIEVEMENTS OVERVIEW
    const awardKeywords = ['semua prestasi', 'apa saja prestasi', 'daftar prestasi', 'penghargaan apa saja', 'daftar award', 'prestasi dzahwan', 'achievement', 'achievements', 'prestasi dan rekognisi', 'penghargaan']
    if (awardKeywords.some((kw) => q.includes(kw)) || q === 'achievement' || q === 'achievements') {
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-base sm:text-lg">
            <Award size={18} />
            <span>Prestasi & Rekognisi Mochammad Dzahwan</span>
          </div>
          <div className="space-y-2.5">
            {achievements.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-amber-500/30 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white text-sm">{item.title}</span>
                  <span className="text-xs font-mono text-amber-300">{item.year}</span>
                </div>
                <p className="text-slate-300 text-xs">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }

    // 22. GENERAL CATEGORY: PENDIDIKAN / KULIAH OVERVIEW
    const eduKeywords = ['pendidikan', 'kuliah dimana', 'kampus', 'undip', 'universitas diponegoro', 'lulusan mana', 'sarjana', 'jurusan']
    if (eduKeywords.some((kw) => q.includes(kw))) {
      const edu = education[0]
      return (
        <div className="space-y-3 text-sm sm:text-base text-slate-200">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
            <GraduationCap size={18} />
            <span>Latar Belakang Pendidikan & Akademik</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="font-bold text-white text-base block">{edu.institution}</span>
            <p className="text-emerald-400 text-sm font-semibold">{edu.degree} · {edu.honor}</p>
            <p className="text-slate-300 text-xs sm:text-sm">
              IPK <strong className="text-emerald-400 font-mono font-bold">{edu.gpa}</strong> diselesaikan dalam waktu <strong className="text-white">{edu.duration}</strong>.
            </p>
          </div>
        </div>
      )
    }

    // 23. GENERAL CATEGORY: PROFIL & BIO OVERVIEW
    const bioKeywords = ['siapa dzahwan', 'profil dzahwan', 'bio dzahwan', 'biodata', 'tentang dzahwan', 'about dzahwan', 'kenalan', 'ceritakan tentang dzahwan', 'latar belakang', 'background dzahwan', 'siapakah dzahwan', 'siapa anda', 'siapa kamu', 'about', 'profile & bio', 'profil dan bio', 'bio']
    if (bioKeywords.some((kw) => q.includes(kw)) || q === 'dzahwan' || q === 'profil' || q === 'profile') {
      return (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-200">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-base sm:text-lg font-bold text-white">Mochammad Dzahwan Fadhloly</span>
              <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                IT DEVELOPER
              </span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              IT Developer with a Computer Science background from Diponegoro University (GPA 3.80 / 4.00, Cum Laude). Passionate about building scalable digital solutions through modern web technologies, software engineering, and machine learning.
            </p>
          </div>

          <div className="space-y-2 leading-relaxed text-xs sm:text-sm">
            <p>
              💼 <strong>Saat Ini:</strong> Bekerja sebagai <span className="text-emerald-400 font-semibold">CIPTA IT Developer di PT CIMB Niaga Tbk</span>, di mana Dzahwan mendapat penghargaan <span className="text-cyan-300 font-semibold">Top 3 Best CIPTA IT Developer Batch 5 (2026)</span>.
            </p>
            <p>
              🎓 <strong>Pendidikan:</strong> Sarjana Informatika dari <span className="text-white font-semibold">Universitas Diponegoro (UNDIP)</span>, lulus dengan predikat <span className="text-emerald-400 font-semibold">Cum Laude (IPK 3.80 / 4.00)</span> diselesaikan cepat dalam waktu 3.5 tahun.
            </p>
            <p>
              📍 <strong>Domisili:</strong> DKI Jakarta, Indonesia.
            </p>
             <p>
              🏆 <strong>Leadership:</strong> Ketua Annual Informatics Competition 2023.
            </p>
            <p>
              📜 <strong>Hak Cipta:</strong> Memiliki 2x HKI resmi Kemenkumham untuk Prediksi Harga Minyak Mentah WTI dan Pembuatan Sistem Informasi Pengarsipan Surat Berbasis Website.
            </p>
          </div>
        </div>
      )
    }

    // 24. GENERAL GREETING
    const greetingKeywords = ['halo', 'hai', 'hello', 'hei', 'pagi', 'siang', 'sore', 'malam', 'assalamualaikum']
    if (greetingKeywords.some((kw) => q.includes(kw))) {
      return (
        <div className="space-y-3 text-sm sm:text-base text-slate-200">
          <p className="leading-relaxed">
            Halo! Senang bisa menyapa Anda. Saya siap membantu memberikan deskripsi spesifik kegiatan, pengalaman, project, tech stack, atau prestasi Mochammad Dzahwan Fadhloly.
          </p>
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-1">
            <p className="font-semibold text-emerald-400">Contoh pertanyaan yang bisa Anda tanyakan:</p>
            <p>• "Coba deskripsikan Anforcom"</p>
            <p>• "Coba deskripsikan project Guest Request Management"</p>
            <p>• "Dimana domisili Dzahwan?"</p>
            <p>• "Buka dan download CV Dzahwan"</p>
          </div>
        </div>
      )
    }

    // 25. OUT OF CONTEXT FALLBACK (Sesuai Permintaan User: Bahasa AI yang Santun & Eksklusif Portofolio)
    return (
      <div className="space-y-3 text-sm sm:text-base text-slate-200">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-base">
          <HelpCircle size={18} />
          <span>Informasi di Luar Konteks Portofolio</span>
        </div>
        <p className="leading-relaxed text-slate-300 text-xs sm:text-sm">
          Mohon maaf, sebagai asisten AI khusus portofolio Mochammad Dzahwan, saya belum mendapatkan informasi tentang hal tersebut dalam basis pengetahuan portofolio saya.
        </p>
        <p className="leading-relaxed text-slate-300 text-xs sm:text-sm">
          Sistem saya secara spesifik difokuskan untuk menjawab dan mendeskripsikan latar belakang, kegiatan/organisasi, pengalaman kerja, karya proyek, keahlian teknologi, serta prestasi Mochammad Dzahwan Fadhloly.
        </p>
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs text-slate-400">
          <p className="text-emerald-400 font-semibold">Anda dapat menanyakan hal seperti:</p>
          <p>• "Coba deskripsikan Anforcom"</p>
          <p>• "Coba deskripsikan project Guest Request Management"</p>
          <p>• "Dimana domisili Dzahwan?"</p>
          <p>• Ketik <strong className="text-white font-mono">'clear'</strong> untuk mereset percakapan</p>
        </div>
      </div>
    )
  }

  const handleSendMessage = (userText: string) => {
    const text = userText.trim()
    if (!text || isTyping) return

    // Requirement: Command "clear" or "delete" resets the chat
    const cleanLower = text.toLowerCase()
    if (['clear', 'delete', '/clear', 'hapus', 'reset'].includes(cleanLower)) {
      resetChat()
      return
    }

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    // Add user message
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text,
      timestamp: now,
    }

    setMessages((prev) => [...prev, userMsg])
    setInputVal('')
    setIsTyping(true)

    // Simulate realistic AI thought/generation delay
    setTimeout(() => {
      const aiNode = generateAiAnswer(text)
      const aiMsg: Message = {
        id: Math.random().toString(),
        sender: 'ai',
        contentNode: aiNode,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
      setMessages((prev) => [...prev, aiMsg])
      setIsTyping(false)
    }, 380)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputVal)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`w-full bg-[#0a0f19] border border-slate-700/90 shadow-2xl rounded-2xl overflow-hidden flex flex-col transition-all duration-300 font-sans ${
          isMaximized ? 'h-[95vh] max-w-6xl' : 'max-h-[90vh] h-[720px] max-w-3xl'
        }`}
        style={{
          boxShadow: '0 0 50px -10px rgba(16, 185, 129, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.95)',
        }}
      >
        {/* Ask Dzahwan AI Header Bar */}
        <div className="bg-[#0e1626] border-b border-slate-800 px-5 py-3.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-emerald-400/80 shadow-md shadow-emerald-500/20 shrink-0">
              <img
                src="/assets/Profile-AI.jpeg"
                alt="Dzahwan AI"
                className="w-full h-full object-cover object-center filter saturate-105 contrast-[1.02]"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-900" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-extrabold text-white flex items-center gap-1.5">
                  Ask Dzahwan
                  <Sparkles size={14} className="text-emerald-400" />
                </span>
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  AI ASSISTANT
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400 hidden sm:block">
                Online · Knowledge base: Portfolio, Activities, Projects & Tech Stack
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Reset Chat Button */}
            <button
              onClick={resetChat}
              className="text-xs px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-rose-500/40 flex items-center gap-1.5 transition-colors font-medium"
              title="Reset Chat ('clear')"
            >
              <Trash2 size={13} className="text-rose-400" />
              <span className="hidden sm:inline">Clear</span>
            </button>
            {/* <button
              onClick={copyEmail}
              className="text-xs px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:text-white border border-slate-700 flex items-center gap-1.5 transition-colors font-medium"
              title="Copy Dzahwan's Email"
            >
              {copiedEmail ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span className="hidden sm:inline">{copiedEmail ? 'Copied' : 'Email'}</span>
            </button> */}
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors hidden sm:block"
              title={isMaximized ? 'Restore' : 'Maximize'}
            >
              {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Close (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Quick Suggestion Topic Chips */}
        <div className="bg-[#090d16] border-b border-slate-800/80 px-4 py-2.5 flex items-center gap-2 overflow-x-auto text-xs scrollbar-none">
          <span className="text-slate-400 font-mono text-[11px] uppercase font-bold shrink-0 flex items-center gap-1">
            <Sparkles size={12} className="text-emerald-400" /> Topik:
          </span>
          {quickPrompts.map((p) => (
            <button
              key={p.label}
              onClick={() => handleSendMessage(p.query)}
              className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-emerald-500/20 hover:text-emerald-300 text-slate-200 border border-slate-700/80 hover:border-emerald-500/40 transition-colors whitespace-nowrap font-medium text-xs shrink-0"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* AI Chat History Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-sm sm:text-base bg-[#070b12] select-text">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full overflow-hidden border border-emerald-500/50 shrink-0 mt-1 shadow-sm">
                  <img
                    src="/assets/Profile-AI.jpeg"
                    alt="AI"
                    className="w-full h-full object-cover object-center filter saturate-105 contrast-[1.02]"
                  />
                </div>
              )}

              <div
                className={`max-w-[88%] sm:max-w-[80%] rounded-2xl p-4 shadow-lg ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-tr-sm'
                    : 'bg-slate-900/90 border border-slate-800 text-slate-100 rounded-tl-sm'
                }`}
              >
                {msg.text ? <p className="leading-relaxed">{msg.text}</p> : msg.contentNode}
                <div
                  className={`text-[10px] font-mono mt-2 pt-1 border-t ${
                    msg.sender === 'user'
                      ? 'border-emerald-500/30 text-emerald-200 text-right'
                      : 'border-slate-800/80 text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0 mt-1">
                  <User size={16} />
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3 items-center text-slate-400 text-xs font-mono">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-emerald-500/50 shrink-0">
                <img
                  src="/assets/Profile-AI.jpeg"
                  alt="AI"
                  className="w-full h-full object-cover object-center filter saturate-105 contrast-[1.02]"
                />
              </div>
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-2">
                <Sparkles size={14} className="text-emerald-400 animate-spin" />
                <span>Ask Dzahwan sedang menganalisis & menyusun jawaban...</span>
                <span className="flex gap-1 ml-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* AI Prompt Input Bar */}
        <div className="bg-[#0e1626] border-t border-slate-800 p-3 sm:p-4">
          <div className="flex items-center gap-2.5 bg-[#090d16] border border-slate-700 focus-within:border-emerald-500/60 rounded-xl px-3.5 py-2.5 transition-colors shadow-inner">
            <Bot size={18} className="text-emerald-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-slate-100 placeholder-slate-400 text-sm sm:text-base font-medium"
              placeholder="Tanyakan deskripsi pengalaman/kegiatan/proyek... (ketik 'clear' untuk reset)"
              disabled={isTyping}
            />
            <button
              onClick={() => handleSendMessage(inputVal)}
              disabled={!inputVal.trim() || isTyping}
              className={`p-2 rounded-lg font-bold transition-all flex items-center justify-center ${
                inputVal.trim() && !isTyping
                  ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
              title="Kirim Pertanyaan (Enter)"
            >
              <Send size={15} />
            </button>
          </div>

          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Ask Dzahwan AI · Powered by Mochammad Dzahwan Fadhloly
            </span>
            <span className="hidden sm:inline">
              Ketik <kbd className="px-1 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">'clear'</kbd> / <kbd className="px-1 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">'delete'</kbd> untuk reset · <kbd className="px-1 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Esc</kbd> tutup
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
