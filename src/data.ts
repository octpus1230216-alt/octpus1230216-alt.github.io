export interface Project {
  title: string
  desc: string
  tags: string[]
  accent: 'purple' | 'cyan'
}

export const profile = {
  name: 'Octopus',
  role: '探索AI世界的产品经理',
  chips: ['产品经理', 'AI 应用'],
}

export const projects: Project[] = [
  {
    title: 'AI 漫剧制作',
    desc: '用 AIGC 工具链批量生成分镜、配音与画面，把文字剧本快速变成可看的漫剧。',
    tags: ['AIGC', '工作流'],
    accent: 'purple',
  },
  {
    title: 'AI 应用 APP',
    desc: '从模糊需求到可用产品：独立设计、Vibe Coding 落地一款 AI 应用。',
    tags: ['Vibe Coding', '产品'],
    accent: 'cyan',
  },
  {
    title: 'RAG 知识库',
    desc: '搭建检索增强生成流程，让大模型基于私有资料准确回答、降低幻觉。',
    tags: ['RAG', 'LLM'],
    accent: 'purple',
  },
  {
    title: 'LLM 部署与应用',
    desc: '关注模型部署、Prompt 工程与成本优化，持续跟进技术迭代并落地。',
    tags: ['LLM', '部署'],
    accent: 'cyan',
  },
]

export const about = {
  interest: 'AI 应用',
  highlight: '喜欢把模糊语言转变成实际功能和产品',
  focus: ['Vibe Coding', 'AIGC', 'RAG', 'LLM 部署及应用'],
}

/** 作品展示：新增作品只改这里，页面自动多一张卡片 */
export interface Work {
  title: string
  desc: string
  /** 类型徽章：漫剧 / 软件 / 链接 */
  kind: '漫剧' | '软件' | '链接'
  tags: string[]
  /** TODO: 替换成真实链接（视频地址 / 下载地址 / 主页等） */
  url: string
}

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

/** 联系方式 */
export const contact = {
  email: 'rzwlt@foxmail.com',
}

/** 数字分身：人设与知识库 */
export const persona = {
  name: 'Octopus 数字分身',
  greeting:
    '你好，我是 Octopus 的数字分身。他对 AI 很有热情，最近在做 AI 漫剧和一款工作效率 App。关于他的问题都可以问我，我只说实话，不清楚的会直接告诉你。',
  quickQuestions: ['你现在在做什么？', '你有哪些作品？', '怎么联系你？'],
}

interface QaRule {
  /** 命中关键词（任一出现即匹配） */
  keywords: string[]
  answer: string
}

/** 本地问答规则库：按顺序匹配，越具体的规则放前面 */
export const qaRules: QaRule[] = [
  {
    keywords: ['做什么', '在忙', '最近', '在搞', '干什么'],
    answer:
      '我最近在忙两件事：一是 AI 漫剧，用 AIGC 工具链把文字剧本变成能看的片子；二是一款工作效率 App，想把日常顺手的工作方法做成产品。',
  },
  {
    keywords: ['作品', '项目', '做过', '产品', 'case', '作品集'],
    answer:
      '我的作品主要有四个方向：🎬 AI 漫剧制作（AIGC 工作流）、📱 AI 应用 APP（Vibe Coding 独立开发）、📚 RAG 知识库（检索增强生成、降低幻觉）、⚙️ LLM 部署与应用（Prompt 工程与成本优化）。往上滑到「项目 / 在做的事」区块可以看到详细介绍。',
  },
  {
    keywords: ['联系', '邮箱', '微信', 'mail', '合作'],
    answer:
      '最直接的方式是发邮件到 rzwlt@foxmail.com，看到一般都会回；往上一点就是「联系我」横幅，有一键发邮件和复制邮箱按钮，聊产品聊 AI 都欢迎 🤝',
  },
  {
    keywords: ['身份', '职业', '你是谁', '自我介绍', '简介'],
    answer:
      '我是 Octopus，一个对 AI 很有热情的人，本职做产品。和他聊 AI 相关的话题会很合拍，特别是把 AI 想法真正落地成产品这件事。',
  },
  {
    keywords: ['擅长', '方向', '关心', '兴趣', '技术'],
    answer:
      '我最长期关注的方向是 LLM 的发展与应用：模型怎么变强、怎么真正用到产品里让人用得上，这块我一直盯着。',
  },
  {
    keywords: ['vibe', '编码', '编程', '开发'],
    answer:
      'Vibe Coding 是我很喜欢的开发方式：用自然语言把需求讲清楚，借助 AI 编程工具快速出原型，把产品经理的「想」和工程师的「做」压缩到同一个人身上，迭代速度非常快。',
  },
  {
    keywords: ['漫剧', 'aigc', '视频', '剧本'],
    answer:
      'AI 漫剧是我的在做的项目之一：用 AIGC 工具链批量生成分镜、配音与画面，把文字剧本快速变成可看的漫剧。核心难点在工作流编排和画风一致性，有兴趣可以深聊。',
  },
  {
    keywords: ['rag', '知识库', '幻觉'],
    answer:
      'RAG 知识库这块，我主要做检索增强生成流程：让大模型基于私有资料回答问题，答案更准、幻觉更少。对做垂直领域的 AI 产品来说基本是必备组件。',
  },
  {
    keywords: ['llm', '部署', '大模型', '模型'],
    answer:
      '在 LLM 部署上，我关注模型怎么低成本跑起来：推理部署、Prompt 工程、缓存与成本优化这些都会研究，目标是在效果和成本之间找到能上线的平衡点。',
  },
  {
    keywords: ['你好', 'hi', 'hello', '嗨', '在吗'],
    answer: '你好呀 👋 我是 Octopus 的数字分身。可以问问他现在在做什么、有哪些作品，或者怎么联系他。',
  },
]

/** 未命中规则时的兜底回答 */
export const fallbackAnswers = [
  '这个我不太清楚，不想瞎编。我只了解 Octopus 的事：他最近在做 AI 漫剧和一款工作效率 App。要确认的话，建议发邮件到 rzwlt@foxmail.com 问他本人。',
  '这个我没把握答对，替他不乱说。你可以问我他在做什么、有哪些作品、怎么联系，或者直接发邮件到 rzwlt@foxmail.com。',
]

/** 根据用户输入匹配最佳答案：命中首个含关键词的规则，否则随机兜底 */
export function matchAnswer(text: string): string {
  const q = text.toLowerCase()
  for (const rule of qaRules) {
    if (rule.keywords.some((k) => q.includes(k.toLowerCase()))) {
      return rule.answer
    }
  }
  return fallbackAnswers[Math.floor(Math.random() * fallbackAnswers.length)]
}
