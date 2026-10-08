export interface Work {
  title: string
  desc: string
  /** 类型徽章：漫剧 / 软件 / 链接 */
  kind: '漫剧' | '软件' | '链接'
  tags: string[]
  /** 替换成真实链接（视频地址 / 下载地址 / 主页等） */
  url: string
}

/** 作品展示：新增作品只改这里，页面自动多一张卡片 */
export const works: Work[] = [
  {
    title: 'AI 漫剧・第一部',
    desc: '用 AIGC 工具链从剧本到成片的第一次完整实践，分镜、配音、画面全链路跑通。',
    kind: '漫剧',
    tags: ['AIGC', '成片'],
    url: '#', // TODO: 替换成漫剧视频链接
  },
  {
    title: 'AI 应用 APP',
    desc: '独立设计 + Vibe Coding 落地的 AI 应用，从模糊需求到一个能装进手机的产品。',
    kind: '软件',
    tags: ['Vibe Coding', 'App'],
    url: '#', // TODO: 替换成下载页或体验链接
  },
  {
    title: '本主页 · 数字分身',
    desc: '这个页面本身就是作品：原生 TS + Vite 构建，底部聊天区是本地知识库驱动的数字分身。',
    kind: '软件',
    tags: ['Vite', '数字分身'],
    url: '#chat',
  },
  {
    title: '学习笔记与拆解',
    desc: 'LLM 部署、RAG、Prompt 工程的实践笔记，持续更新。',
    kind: '链接',
    tags: ['笔记'],
    url: '#', // TODO: 替换成笔记/社区主页链接
  },
]
