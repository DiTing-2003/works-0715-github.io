export type VideoType = 'direct' | 'youtube' | 'bilibili' | 'vimeo' | '123pan'
export type PortfolioCategory = 'video' | 'image' | 'script'
export interface PortfolioItem {
  id: string; title: string; category: PortfolioCategory
  description: string; videoUrl?: string; videoType?: VideoType; thumbnail: string; content?: string; tags: string[]; year: string
}
export interface HeroBackground { type: 'image' | 'video'; url: string }
export interface SiteConfig {
  name: string; description: string; email: string; phone: string; location: string; heroBackground?: HeroBackground
}
export const siteConfig: SiteConfig = {
  name: '狄婷婷', description: '专业剪辑师 | 视频后期制作',
  email: 'dq20231216@163.com', phone: '18239866359', location: '地址',
  heroBackground: { type: 'image', url: 'https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AI/%E8%83%8C%E6%99%AF.jpg' },
}
export const portfolioItems: PortfolioItem[] = [
  { id:'1', title:'高考满分去当兵绝美校花求我别走', category:'video', description:'漫剧', videoUrl:'https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AIworks/other/%E9%AB%98%E8%80%83%E6%BB%A1%E5%88%86%E5%8E%BB%E5%BD%93%E5%85%B5%E7%BB%9D%E7%BE%8E%E6%A0%A1%E8%8A%B1%E6%B1%82%E6%88%91%E5%88%AB%E8%B5%B0.mp4', videoType:'direct', thumbnail:'/works-0715-github.io/cover-gaokao.jpg', tags:[], year:'2026' },
  { id:'2', title:'魔界打斗结尾', category:'video', description:'视觉', videoUrl:'https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AIworks/other/%E9%AD%94%E7%95%8C%E6%89%93%E6%96%97%E7%BB%93%E5%B0%BE.mp4', videoType:'direct', thumbnail:'/works-0715-github.io/cover-mojie.jpg', tags:['个人'], year:'2026' },
  { id:'3', title:'照片恋人', category:'video', description:'AI短片', videoUrl:'https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AIworks/other/%E7%85%A7%E7%89%87%E6%81%8B%E4%BA%BA.mp4', videoType:'direct', thumbnail:'/works-0715-github.io/cover-zhaopianlianren.jpg', tags:['个人'], year:'2026' },
  { id:'4', title:'疯批', category:'video', description:'漫剧', videoUrl:'https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AIworks/Crazy/33.mp4', videoType:'direct', thumbnail:'/works-0715-github.io/cover-fengpi.jpg', tags:[], year:'2026' },
  { id:'5', title:'礼貌捞个亿', category:'video', description:'漫剧素材', videoUrl:'https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AIworks/other/%E7%A4%BC%E8%B2%8C%E6%8D%9E%E4%B8%AA%E4%BA%BF_%E7%AC%AC%E4%B8%80%E9%9B%86.mp4', videoType:'direct', thumbnail:'/works-0715-github.io/cover-limao.jpg', tags:['个人'], year:'2026' },
  { id:'6', title:'礼貌捞个亿', category:'video', description:'漫剧素材', videoUrl:'https://dq20231216-1326435468.cos.ap-beijing.myqcloud.com/AIworks/other/%E7%A4%BC%E8%B2%8C%E6%8D%9E%E4%B8%AA%E4%BA%BF_%E7%AC%AC%E4%BA%8C%E9%9B%86.mp4', videoType:'direct', thumbnail:'/works-0715-github.io/cover-limao2.jpg', tags:['个人'], year:'2026' },
  { id:'7', title:'方寸之间女主三视图', category:'image', description:'AI 图片', thumbnail:'/works-0715-github.io/cover-fangcun.jpg', tags:['个人'], year:'2026' },
  { id:'8', title:'方寸之间女主表情', category:'image', description:'AI图片', thumbnail:'/works-0715-github.io/cover-fangcun-biaoqing.jpg', tags:['个人'], year:'2026' },
  { id:'9', title:'作品标题 9', category:'script', description:'影视混剪作品', thumbnail:'/works-0715-github.io/placeholder-9.jpg', content:'（剧本内容待补充）', tags:['混剪','影视'], year:'2022' },
]
export const categories = [
  { key:'all', label:'全部' }, { key:'video', label:'视频' }, { key:'image', label:'图片' }, { key:'script', label:'剧本' },
] as const
