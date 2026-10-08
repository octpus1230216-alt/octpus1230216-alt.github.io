/**
 * 常用网站 / 资源
 * 改内容只改这里；组件只读本文件。
 */

export interface Resource {
  name: string
  desc: string
  /** 暂无 URL 时为 '#' 占位 */
  url: string
}

export const resources: Resource[] = [
  {
    name: 'ARENA',
    desc: '常用的评测榜单网站，跟进大模型能力对比。',
    url: '#', // TODO: 替换成真实链接
  },
  {
    name: 'arxiv',
    desc: '可以找到各种最新的研究进展。',
    url: 'https://arxiv.org/', // TODO: 替换成真实链接
  },
]
