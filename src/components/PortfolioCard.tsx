import { useRef, useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import type { PortfolioItem } from '@/data/portfolio'
const catLabels: Record<string, string> = { commercial:'商业', film:'影视', music:'音乐', documentary:'纪录片' }

export default function PortfolioCard({ item, index, onClick }: { item: PortfolioItem; index: number; onClick: (i: PortfolioItem) => void }) {
  const [vis, setVis] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); o.unobserve(el) } }, { threshold: 0.1 })
    o.observe(el); return () => o.disconnect()
  }, [])

  return (
    <div ref={ref} onClick={() => onClick(item)}
      className={`group bg-[#1a1a2e] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-2xl hover:shadow-[#e8a838]/10 hover:-translate-y-2 border border-white/5 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 150}ms` }}>
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0d0d1a] to-[#080812] flex items-center justify-center">
          <Play className="w-14 h-14 text-gold-light/20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e8a838] to-[#d4952a] flex items-center justify-center shadow-2xl shadow-[#e8a838]/50 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-100 animate-glow-warm">
            <Play className="w-8 h-8 text-[#0d0d1a] ml-1" />
          </div>
        </div>
        <span className="absolute top-3 left-3 px-3 py-1.5 text-[11px] font-semibold bg-black/40 backdrop-blur-sm text-cream rounded-full">{catLabels[item.category] || item.category}</span>
        <span className="absolute top-3 right-3 px-3 py-1.5 text-[11px] text-cream bg-black/40 backdrop-blur-sm rounded-full">{item.year}</span>
      </div>
      <div className="p-5">
        <h3 className="text-white font-bold text-lg mb-1.5 leading-tight group-hover:text-gold-light transition-colors">{item.title}</h3>
        <p className="text-cream text-sm leading-relaxed line-clamp-2 mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(t => <span key={t} className="px-3 py-1 text-xs bg-white/5 text-cream rounded-full">{t}</span>)}
        </div>
      </div>
    </div>
  )
}
