export interface Project {
  title: string
  desc: string
  tags: string[]
  accent: 'purple' | 'cyan'
}

/** 项目 / 在做的事：改这里即可，组件只读本文件 */
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
