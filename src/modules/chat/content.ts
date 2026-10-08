/** 数字分身内容（人设 + 本地问答规则 + 兜底）：改这里即可 */

export const persona = {
  name: 'Octopus 数字分身',
  greeting:
    '你好，我是 Octopus 的数字分身。关于他的问题都可以问我，我只说实话，不清楚的会直接告诉你。',
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
      '我最近在忙两件事：一是 AI Safety；二是学习Jev。',
  },
  {
    keywords: ['作品', '项目', '做过', '产品', 'case', '作品集'],
    answer:
      '我的作品请看github：https://github.com/octpus1230216-alt',
  },
  {
    keywords: ['联系', '邮箱', '微信', 'mail', '合作'],
    answer:
      '最直接的方式是发邮件到 rzwlt@foxmail.com，看到一般都会回；往上一点就是「联系我」横幅，有一键发邮件和复制邮箱按钮，聊产品聊 AI 都欢迎 🤝',
  },
  {
    keywords: ['身份', '职业', '你是谁', '自我介绍', '简介'],
    answer:
      '我是 Octopus，我是一个好奇心很重的人，所以我总是在换新的探索角度',
  },
  {
    keywords: ['擅长', '方向', '关心', '兴趣', '技术'],
    answer:
      '我最长期关注的方向是 LLM 的发展与应用：模型怎么变强、怎么真正转换为规模化生产力，这块我一直盯着。',
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
  '这个我不太清楚，不想瞎编。我只了解 Octopus 的事：他最近在做 AI 漫剧和LLM部署。要确认的话，建议发邮件到 rzwlt@foxmail.com 问他本人。',
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
