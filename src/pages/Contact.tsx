import { useRef, useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { siteConfig } from '@/data/portfolio'

function R({ children }: { children: React.ReactNode }) {
  const [v, s] = useState(false); const r = useRef<HTMLDivElement>(null)
  useEffect(() => { const e = r.current; if (!e) return; const o = new IntersectionObserver(([i]) => { if (i.isIntersecting) { s(true); o.unobserve(e) } }, { threshold: 0.15 }); o.observe(e); return () => o.disconnect() }, [])
  return <div ref={r} className={`transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{children}</div>
}

export default function Contact() {
  return (
    <main className="pt-24 pb-16 min-h-screen relative">
      <div className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AI/%E8%83%8C%E6%99%AF.jpg')" }} />
      <div className="fixed inset-0 bg-gradient-to-b from-white/70 via-white/80 to-[#f0f5ff]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full mb-6 animate-float shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#3b82f6] font-semibold">联系我</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1e293b] tracking-tight">与我<span className="gradient-blue">联系</span></h1>
          <p className="text-[#64748b] mt-4">欢迎联系，一起创造精彩</p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { label: '邮箱', value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
              { label: '电话', value: siteConfig.phone, href: `tel:${siteConfig.phone}`, icon: Phone },
              { label: '地址', value: siteConfig.location, href: null, icon: MapPin },
            ].map(item => (
              <R key={item.label}>
                <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] hover:shadow-lg hover:shadow-[#3b82f6]/10 hover:border-[#93c5fd] transition-all duration-500 group shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#dbeafe] flex items-center justify-center group-hover:bg-[#bfdbfe] transition-all group-hover:scale-110 duration-300">
                      <item.icon className="w-5 h-5 text-[#3b82f6]" />
                    </div>
                    <div>
                      <p className="text-[#64748b] text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#1e293b] font-bold text-base hover:text-[#3b82f6] transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-[#1e293b] font-bold text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              </R>
            ))}
          </div>
          <R>
            <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-sm h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#dbeafe] flex items-center justify-center"><Send className="w-5 h-5 text-[#3b82f6]" /></div>
                <h3 className="text-xl font-bold text-[#1e293b]">发送消息</h3>
              </div>
              <form action={`mailto:${siteConfig.email}`} method="GET" className="space-y-4">
                <input type="text" name="subject" placeholder="你的姓名"
                  className="w-full px-4 py-3.5 bg-[#f8faff] border border-[#e2e8f0] rounded-xl text-[#1e293b] text-sm placeholder:text-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#dbeafe] transition-all" />
                <input type="email" name="cc" placeholder="你的邮箱"
                  className="w-full px-4 py-3.5 bg-[#f8faff] border border-[#e2e8f0] rounded-xl text-[#1e293b] text-sm placeholder:text-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#dbeafe] transition-all" />
                <textarea name="body" rows={4} placeholder="想说的话..."
                  className="w-full px-4 py-3.5 bg-[#f8faff] border border-[#e2e8f0] rounded-xl text-[#1e293b] text-sm placeholder:text-[#94a3b8] focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#dbeafe] transition-all resize-none" />
                <button type="submit"
                  className="group relative w-full px-6 py-4 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#3b82f6]/40 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#3b82f6]/20">
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm"><Send className="w-4 h-4" />发送消息</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-20deg] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
              </form>
            </div>
          </R>
        </div>
      </div>
    </main>
  )
}
