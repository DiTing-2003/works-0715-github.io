import { useState, useEffect } from 'react'

export interface BgConfig {
  hero: string
  portfolio: string
  about: string
  contact: string
}

const thresholds = [0.15, 0.40, 0.65, 0.85]

let sharedBgs: BgConfig = {
  hero: 'https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AI/%E6%98%9F%E7%A9%BA%E5%B1%B1%E8%84%89.png',
  portfolio: 'https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AI/%E6%9C%88%E5%85%89.png',
  about: 'https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AI/%E6%A0%91%E5%BD%B1.png',
  contact: 'https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AI/%E5%B0%8F%E8%B7%AF.png',
}

export function getBg(key: keyof BgConfig) { return sharedBgs[key] }

export function useBgIndex(): number {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const fn = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      const i = thresholds.findIndex(t => pct < t)
      setIdx(i === -1 ? 3 : i)
    }
    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return idx
}
