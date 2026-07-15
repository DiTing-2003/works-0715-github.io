import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { portfolioItems, categories, type PortfolioItem } from '@/data/portfolio'
import PortfolioCard from './PortfolioCard'
import VideoModal from './VideoModal'

const PER_PAGE = 6

export default function PortfolioSection() {
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState<PortfolioItem | null>(null)
  const [vis, setVis] = useState(false)
  const [page, setPage] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); o.unobserve(el) } }, { threshold: 0.1 })
    o.observe(el); return () => o.disconnect()
  }, [])

  // Reset page when category changes
  useEffect(() => { setPage(0) }, [active])

  const items = active === 'all' ? portfolioItems : portfolioItems.filter(i => i.category === active)
  const totalPages = Math.ceil(items.length / PER_PAGE)

  const scrollToPage = useCallback((p: number) => {
    if (!scrollRef.current) return
    const w = scrollRef.current.clientWidth
    scrollRef.current.scrollTo({ left: w * p, behavior: 'smooth' })
    setPage(p)
  }, [])

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return
    const w = scrollRef.current.clientWidth
    const p = Math.round(scrollRef.current.scrollLeft / w)
    setPage(p)
  }, [])

  return (
    <section id="portfolio" ref={ref} className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className={`text-center mb-16 transition-all duration-1000 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full mb-6 animate-float">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e8a838]" />
          <span className="text-xs uppercase tracking-[0.2em] text-gold-light font-semibold">作品集</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">精选<span className="gradient-gold">作品</span></h2>
        <p className="text-cream max-w-md mx-auto text-sm">左右滑动浏览</p>
        <div className="section-divider max-w-xs mx-auto mt-6" />
      </div>

      <div className={`flex flex-wrap justify-center gap-2 mb-14 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {categories.map(c => (
          <button key={c.key} onClick={() => setActive(c.key)}
            className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
              active === c.key ? 'bg-gradient-to-r from-[#e8a838] to-[#d4952a] text-[#0d0d1a] shadow-lg shadow-[#e8a838]/30 scale-105' : 'glass-card text-cream hover:text-white hover:bg-white/10'
            }`}>
            {c.label}
          </button>
        ))}
      </div>

      {items.length > 0 ? (
        <div className="relative">
          {/* Horizontal scroll container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {Array.from({ length: totalPages }).map((_, pIdx) => (
              <div key={pIdx} className="snap-start shrink-0 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.slice(pIdx * PER_PAGE, pIdx * PER_PAGE + PER_PAGE).map((item, i) => (
                  <PortfolioCard key={item.id} item={item} index={i} onClick={setSelected} />
                ))}
                  </div>
                </div>
            ))}
          </div>

          {/* Navigation arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={() => scrollToPage(page - 1)}
                disabled={page === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-0 -ml-5"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToPage(page + 1)}
                disabled={page >= totalPages - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-0 -mr-5"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Pagination dots */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToPage(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === page ? 'bg-[#e8a838] w-6' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="py-20 text-center"><p className="text-cream">该分类暂无作品</p></div>
      )}

      {selected && <VideoModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
