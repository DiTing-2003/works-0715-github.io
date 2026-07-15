import { useBgIndex, getBg } from '@/hooks/useBackground'
import { useLocation } from 'react-router-dom'

const imgs = ['hero', 'portfolio', 'about', 'contact'] as const

export default function BackgroundLayer() {
  const idx = useBgIndex()
  const loc = useLocation()

  // About and Contact pages always show hero background (星空山脉)
  const fixedBgPages = ['/about', '/contact']
  const displayIndex = fixedBgPages.includes(loc.pathname) ? 0 : idx

  return (
    <>
      {imgs.map((key, i) => (
        <div
          key={key}
          className="fixed inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${getBg(key)})`,
            opacity: i === displayIndex ? 1 : 0,
            zIndex: -10,
          }}
        />
      ))}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0d0d1a]/50 via-[#0d0d1a]/60 to-[#0d0d1a] pointer-events-none" style={{ zIndex: -9 }} />
    </>
  )
}
