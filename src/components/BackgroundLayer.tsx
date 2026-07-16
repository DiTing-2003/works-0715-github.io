import { getBg } from '@/hooks/useBackground'

export default function BackgroundLayer() {
  return (
    <>
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${getBg()})`,
          zIndex: -10,
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#0d0d1a]/50 via-[#0d0d1a]/60 to-[#0d0d1a] pointer-events-none" style={{ zIndex: -9 }} />
    </>
  )
}
