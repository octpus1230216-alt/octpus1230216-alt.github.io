/** Hero 首屏内容：改这里即可，组件只读本文件 */
export const profile = {
  name: 'Octopus',
  role: '当AI拥有了人类不可比拟的学习能力和速度，人类在竞争中还剩多少优势？',
  // chips 暂时保留数据但不渲染，之后想显示改回 Hero.ts 即可
  chips: ['Multi-Agent', 'AI安全'],
  // 头像图片：把图片放到项目的 public 目录，这里填「/文件名」即可
  // 例如 public/avatar.png → '/avatar.png'；public/avatar.jpg → '/avatar.jpg'
  avatar: '/avatar.png',
  // 社交主页链接：label 需与 Hero.ts 里的图标名对应；把 url 换成你自己的主页地址
  socials: [
    { label: 'github', url: 'https://github.com/octpus1230216-alt' },
    { label: 'substack', url: '#' },
    { label: 'x', url: '#' },
  ],
}
