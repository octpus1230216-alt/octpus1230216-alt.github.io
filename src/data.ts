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

/** 数字分身：人设与知识库 */
export const persona = {
  name: 'Octopus 数字分身',
  greeting:
    '你好，我是 Octopus 的数字分身 👋 我是一名探索 AI 世界的产品经理，最近在做 AI 漫剧制作和 AI 应用 APP。有什么想问的，尽管开口。',
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
      '我最近在并行推进两件事：一是 AI 漫剧制作，用 AIGC 工具链把文字剧本快速变成分镜、配音与画面；二是 AI 应用 APP，从模糊需求出发，独立设计并用 Vibe Coding 落地成可用产品。',
  },
  {
    keywords: ['作品', '项目', '做过', '产品', 'case', '作品集'],
    answer:
      '我的作品主要有四个方向：🎬 AI 漫剧制作（AIGC 工作流）、📱 AI 应用 APP（Vibe Coding 独立开发）、📚 RAG 知识库（检索增强生成、降低幻觉）、⚙️ LLM 部署与应用（Prompt 工程与成本优化）。往上滑到「项目 / 在做的事」区块可以看到详细介绍。',
  },
  {
    keywords: ['联系', '邮箱', '微信', 'mail', '合作'],
    answer:
      '如果你想聊聊 AI 应用或产品合作，最方便的方式是邮件联系，也欢迎在 Datawhale 社区里找到我。看到消息一般都会回，聊产品聊 AI 都欢迎 🤝',
  },
  {
    keywords: ['身份', '职业', '你是谁', '自我介绍', '简介'],
    answer:
      '我是一名产品经理，标签是「探索 AI 世界」。和传统 PM 不太一样的是，我会自己动手用 Vibe Coding 把想法做成能跑的产品，喜欢把模糊语言转变成实际功能。',
  },
  {
    keywords: ['擅长', '方向', '关心', '兴趣', '技术'],
    answer:
      '我擅长也最关心的方向是技术迭代和 AI 应用：持续跟进大模型、AIGC、RAG 这些技术的演进，然后判断哪些能真正落到产品里，让用户用得爽。',
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
  '这个问题有点超出我的知识范围了 🤔 我比较了解 Octopus 的工作：他做的是产品经理相关的事，最近在推进 AI 漫剧和 AI 应用 APP。换个问题试试？',
  '我还说不出一个靠谱的答案，毕竟我只是数字分身。你可以问我「你有哪些作品？」或「怎么联系你？」这类问题，我答得很好。',
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
