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
  { id:'2', title:'作品标题 2', category:'video', description:'影视剪辑作品', videoUrl:'视频2地址', videoType:'direct', thumbnail:'/works-0715-github.io/placeholder-2.jpg', tags:['影视','调色'], year:'2024' },
  { id:'3', title:'作品标题 3', category:'video', description:'音乐剪辑作品', videoUrl:'视频3地址', videoType:'direct', thumbnail:'/works-0715-github.io/placeholder-3.jpg', tags:['音乐','MV'], year:'2024' },
  { id:'4', title:'作品标题 4', category:'image', description:'品牌宣传片', thumbnail:'/works-0715-github.io/placeholder-4.jpg', tags:['宣传片','品牌'], year:'2023' },
  { id:'5', title:'作品标题 5', category:'video', description:'短片电影剪辑', videoUrl:'视频5地址', videoType:'direct', thumbnail:'/works-0715-github.io/placeholder-5.jpg', tags:['短片','剧情'], year:'2023' },
  { id:'6', title:'作品标题 6', category:'video', description:'演唱会剪辑', videoUrl:'视频6地址', videoType:'direct', thumbnail:'/works-0715-github.io/placeholder-6.jpg', tags:['演唱会','现场'], year:'2023' },
  { id:'7', title:'作品标题 7', category:'script', description:'纪录片剪辑', thumbnail:'/works-0715-github.io/placeholder-7.jpg', content:'（剧本内容待补充）', tags:['纪录片','人文'], year:'2022' },
  { id:'8', title:'作品标题 8', category:'image', description:'产品广告剪辑', thumbnail:'/works-0715-github.io/placeholder-8.jpg', tags:['广告','产品'], year:'2022' },
  { id:'9', title:'作品标题 9', category:'script', description:'影视混剪作品', thumbnail:'/works-0715-github.io/placeholder-9.jpg', content:'（剧本内容待补充）', tags:['混剪','影视'], year:'2022' },
]
export const categories = [
  { key:'all', label:'全部' }, { key:'video', label:'视频' }, { key:'image', label:'图片' }, { key:'script', label:'剧本' },
] as const
