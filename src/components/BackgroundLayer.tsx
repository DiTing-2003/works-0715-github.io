import { useBgIndex, getBg } from '@/hooks/useBackground'

const imgs = ['hero', 'portfolio', 'about', 'contact'] as const

export default function BackgroundLayer() {
  const idx = useBgIndex()

  return (
    <>
      {imgs.map((key, i) => (
        <div
          key={key}
          className="fixed inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${getBg(key)})`,
            opacity: i === idx ? 1 : 0,
            zIndex: -10,
          }}
        />
      ))}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0d0d1a]/50 via-[#0d0d1a]/60 to-[#0d0d1a] pointer-events-none" style={{ zIndex: -9 }} />
    </>
  )
}
