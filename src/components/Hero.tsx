import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, ChevronDown } from 'lucide-react'

function scrollToPortfolio(e: React.MouseEvent) {
  e.preventDefault()
  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
}

const titles = ['AI视觉设计师', 'AI叙事设计师', 'AI漫剧制作师']

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [titleIdx, setTitleIdx] = useState(0)
  useEffect(() => setLoaded(true), [])
  useEffect(() => {
    const t = setInterval(() => setTitleIdx(i => (i + 1) % titles.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Golden glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#e8a838]/10 rounded-full blur-[150px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#e8a838]/6 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e8a838]/30 to-transparent" />

      <div className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-float">
          <span className="w-2 h-2 bg-[#e8a838] rounded-full animate-pulse" />
          <span key={titleIdx} className="inline-block text-xs uppercase tracking-[0.2em] text-gold-light font-semibold animate-title-fade">{titles[titleIdx]}</span>
        </div>
        <div className="mb-14">
          <p className="text-lg sm:text-xl text-cream font-light tracking-wide">用AI构建画面，以故事创造共鸣。</p>
          <p className="text-xs sm:text-sm text-gray-soft mt-2 tracking-wider">Craft visuals with AI, create resonance through stories.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#portfolio" onClick={scrollToPortfolio}
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#e8a838] to-[#d4952a] text-[#0d0d1a] font-bold text-sm rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#e8a838]/40 hover:scale-105 active:scale-95 shadow-lg shadow-[#e8a838]/20 animate-glow-warm">
            <Play className="w-4 h-4" /><span>查看作品</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-20deg] group-hover:translate-x-[100%] transition-transform duration-700" />
          </a>
          <Link to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 glass-card text-white font-semibold text-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
            关于我<ChevronDown className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center p-1.5 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-gradient-to-b from-[#e8a838] to-transparent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
