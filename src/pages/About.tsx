import { useRef, useEffect, useState } from 'react'
import { Calendar, Award, GraduationCap, Star } from 'lucide-react'
import { siteConfig } from '@/data/portfolio'

function R({ children }: { children: React.ReactNode }) {
  const [v, s] = useState(false); const r = useRef<HTMLDivElement>(null)
  useEffect(() => { const e = r.current; if (!e) return; const o = new IntersectionObserver(([i]) => { if (i.isIntersecting) { s(true); o.unobserve(e) } }, { threshold: 0.15 }); o.observe(e); return () => o.disconnect() }, [])
  return <div ref={r} className={`transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{children}</div>
}

export default function About() {
  const skills = [
    { n: 'AI漫剧制作全流程', l: 93 },
    { n: '剧本/分镜脚本编写与提示词工作流（OpenClaw、Codex）', l: 91 },
    { n: 'AI生图（ChatGPT、小云雀、即梦、豆包、可灵）', l: 90 },
    { n: 'AI视频生成（小云雀、即梦、可灵）', l: 89 },
    { n: '剧情、情绪、镜头、节奏与视听语言整体设计', l: 90 },
    { n: '摄影摄像、光线与构图', l: 84 },
    { n: '3D/2D画面风格细分与审美把控', l: 86 },
    { n: '关键词库与人物模板库沉淀、团队协作', l: 88 },
  ]
  const exps = [
    { p: '2025.07 — 2026.08', c: 'AI漫剧抽卡师 · 郑州新融欣数字科技有限公司', d: ['负责解读剧本和分镜、生成并优化提示词，根据提示词生成图片和视频；', '建立关键词库与素材筛选标准，迭代重抽废片，参与复盘优化抽卡流程。'] },
    { p: '2024.07 — 2025.05', c: '编剧 · 新乡市悦洋网络技术有限公司', d: ['根据导演的要求，完成符合要求的故事大纲、人物小传和完整的剧本；', '参与团队关于创意的讨论，提供剧本方向建议。'] },
  ]
  const edu = { p: '2021.09 — 2025.07', school: '河南科技学院', major: '信息管理与信息系统（主修）· 英语（辅修）', cert: '大学英语四级 / 大学英语六级 / 大学生英语竞赛校级一等奖' }
  const selfEval = [
    '具备良好的视觉审美与镜头叙事思维，能把控画面质感与角色一致性；',
    '熟练使用AI工具产出角色、场景、道具素材，掌握提示词与批量抽卡；',
    '学习能力强、认真负责，善于团队协作，能沉淀关键词库与人物模板库。',
  ]

  return (
    <main className="pt-24 pb-16 min-h-screen relative">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#e8a838]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-[#e8a838]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full mb-6 animate-float">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e8a838]" />
            <span className="text-xs uppercase tracking-[0.2em] text-gold-light font-semibold">关于我</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">个人<span className="gradient-gold">简历</span></h1>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        <R><div className="glass-card rounded-2xl p-8 mb-6">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#e8a838] to-[#d4952a] flex items-center justify-center flex-shrink-0 shadow-2xl shadow-[#e8a838]/30 animate-glow-warm">
              <span className="text-4xl font-black text-[#0d0d1a]">{siteConfig.name[0]}</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-black text-white mb-1">{siteConfig.name}</h2>
              <p className="text-gold-light font-semibold mb-3">{siteConfig.description}</p>
              <p className="text-cream leading-relaxed mb-4">专注于生成式AI视觉创作与故事叙事，擅长从剧本构思出发，运用AI构建角色、场景与视觉世界，将文字创意转化为具有完整叙事性与视觉表现力的作品。</p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1.5 bg-white/5 text-cream rounded-full">年龄 23</span>
                <span className="px-3 py-1.5 bg-white/5 text-cream rounded-full">本科</span>
                <span className="px-3 py-1.5 bg-white/5 text-cream rounded-full">求职意向：AI漫剧抽卡</span>
                <span className="px-3 py-1.5 bg-white/5 text-cream rounded-full">{siteConfig.phone}</span>
                <span className="px-3 py-1.5 bg-white/5 text-cream rounded-full">{siteConfig.email}</span>
              </div>
            </div>
          </div>
        </div></R>

        <R><div className="glass-card rounded-2xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#e8a838]/10 flex items-center justify-center"><GraduationCap className="w-5 h-5 text-gold-light" /></div>
            <h3 className="text-xl font-bold text-white">教育背景</h3>
          </div>
          <div className="relative pl-8 border-l-2 border-white/10 group hover:border-[#e8a838]/40 transition-all">
            <div className="absolute left-0 top-0 w-3.5 h-3.5 rounded-full bg-[#e8a838] border-4 border-[#1a1a2e] -translate-x-1/2 shadow-lg shadow-[#e8a838]/30" />
            <span className="text-sm text-gold-light font-bold">{edu.p}</span>
            <h4 className="text-white font-bold text-lg mt-1">{edu.school}</h4>
            <p className="text-cream text-sm mt-1">{edu.major}</p>
            <div className="mt-3 flex items-start gap-2">
              <Award className="w-4 h-4 text-gold-light mt-0.5 flex-shrink-0" />
              <p className="text-cream text-sm">{edu.cert}</p>
            </div>
          </div>
        </div></R>

        <R><div className="glass-card rounded-2xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#e8a838]/10 flex items-center justify-center"><Calendar className="w-5 h-5 text-gold-light" /></div>
            <h3 className="text-xl font-bold text-white">工作经历</h3>
          </div>
          <div className="space-y-8">
            {exps.map((e, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-white/10 group last:border-transparent hover:border-[#e8a838]/40 transition-all">
                <div className="absolute left-0 top-0 w-3.5 h-3.5 rounded-full bg-[#e8a838] border-4 border-[#1a1a2e] -translate-x-1/2 shadow-lg shadow-[#e8a838]/30" />
                <span className="text-sm text-gold-light font-bold">{e.p}</span>
                <h4 className="text-white font-bold text-lg mt-1">{e.c}</h4>
                <div className="mt-1 space-y-1">
                  {e.d.map((t, j) => (
                    <p key={j} className="text-cream text-sm flex gap-2"><span className="text-gold-light flex-shrink-0">•</span><span>{t}</span></p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div></R>

        <R><div className="glass-card rounded-2xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#e8a838]/10 flex items-center justify-center"><Star className="w-5 h-5 text-gold-light" /></div>
            <h3 className="text-xl font-bold text-white">自我评价</h3>
          </div>
          <div className="space-y-2">
            {selfEval.map((t, i) => (
              <p key={i} className="text-cream text-sm flex gap-2"><span className="text-gold-light flex-shrink-0">•</span><span>{t}</span></p>
            ))}
          </div>
        </div></R>

        <R><div className="glass-card rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#e8a838]/10 flex items-center justify-center"><Award className="w-5 h-5 text-gold-light" /></div>
            <h3 className="text-xl font-bold text-white">专业技能</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map(s => (
              <div key={s.n} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-cream text-sm font-semibold">{s.n}</span>
                  <span className="text-gold-light text-sm font-black">{s.l}%</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#e8a838] via-[#f5c25a] to-[#e8a838] rounded-full transition-all duration-1000 shadow-sm shadow-[#e8a838]/30 relative overflow-hidden" style={{ width: `${s.l}%` }}>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div></R>
      </div>
    </main>
  )
}
