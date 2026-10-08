/**
 * 学习轨迹 · 正在钻研（内容源自「网站内容.docx」的各个模块）
 * 改内容只改这里；组件只读本文件。
 */

export type LearningStatus = '学习中' | '已完成' | '研究中' | '拓荒中' | '整理中' | '即将上线'

export interface LearningItem {
  title: string
  desc: string
  /** 状态徽章 */
  status: LearningStatus
  tags: string[]
  /** 指路链接（课件 / 社区 / 工具），暂无 URL 时为 '#' 占位 */
  url: string
}

export interface LearningGroup {
  name: string
  items: LearningItem[]
}

export const learningGroups: LearningGroup[] = [
  {
    name: '底层能力',
    items: [
      {
        title: 'Vibe Coding',
        desc: '内容非常清晰新手和有基础的都能找到切入角度',
        status: '已完成',
        tags: ['Vibe Coding'],
        url: 'https://www.vibevibe.cn/zh/', // TODO: 替换成课件/资源链接
      },
      {
        title: '数据工程',
        desc: '这块内容也是比较散，需要整理',
        status: '拓荒中',
        tags: ['数据采集', '数据处理'],
        url: '#', // TODO: 替换成链接
      },
      {
        title: '模型训练',
        desc: '这块内容太庞大，所以很多内容需要参考多个资源',
        status: '学习中',
        tags: ['pre-training', 'mid-training', 'post-training'],
        url: 'https://github.com/octpus1230216-alt/model-training', // TODO: 替换成课件链接
      },
      {
        title: '模型评测',
        desc: '这个其实可以配合模型发布的白皮书一起看',
        status: '整理中',
        tags: ['基准测试', '人工评估', '红队测试', '安全评估', 'Agent 任务评估', '压力测试'],
        url: 'https://github.com/octpus1230216-alt/LLM-evals-notebook', // TODO: 替换成评测课件链接
      },
    ],
  },
  {
    name: 'AI 工程',
    items: [
      {
        title: '推理与部署工程',
        desc: '时间来不及可以只看笔记，我自己看了之后很有启发。',
        status: '学习中',
        tags: ['Agent', 'Workflow'],
        url: 'https://github.com/octpus1230216-alt/Agent-Workflow-', // TODO: 替换成链接
      },
      {
        title: 'Agent / LLM 应用工程',
        desc: '这块内容现在发展很快，需要持续关注和学习',
        status: '整理中',
        tags: ['RAG 检索增强', 'Memory 记忆', 'Prompt 工程', '评估迭代'],
        url: 'https://github.com/octpus1230216-alt/agent', // TODO: 替换成链接
      },
      {
        title: 'AI 产品设计思路',
        desc: '不定期更新AI产品的建构方式的感悟。',
        status: '拓荒中',
        tags: ['API', 'PaaS', '云服务', 'MaaS'],
        url: '#', // TODO: 替换成链接
      },
      {
        title: '安全与治理工程',
        desc: '这个内容还有大量的工作要做',
        status: '学习中',
        tags: ['模型对齐安全', '红队测试', '越狱防护'],
        url: '#', // TODO: 替换成链接
      },
    ],
  },
  {
    name: '前沿探索',
    items: [
      {
        title: 'AIGC生成',
        desc: '还在欠债漫剧中，主要是图像和声线生成太贵，每天薅羊毛效率有点慢，正在想办法提效。',
        status: '学习中',
        tags: ['AIGC', '好贵！！'],
        url: '#', // TODO: 替换成链接
      },
      {
        title: '具身智能',
        desc: '具身智能拓荒中，正在狠狠补课，笔记看完再传！',
        status: '拓荒中',
        tags: ['具身智能', '补课'],
        url: 'https://github.com/octpus1230216-alt/embodied-AI', // TODO: 替换成链接
      },
    ],
  },
  {
    name: '效率工具',
    items: [
      {
        title: 'boss求职工具箱',
        desc: '牛人快爬仓库基础上加了一些自己的求职步骤。',
        status: '已完成',
        tags: ['求职', '爬虫'],
        url: 'https://github.com/octpus1230216-alt/job_hunter', // TODO: 替换成工具/仓库链接
      },
       {
        title: '官网求职工具箱',
        desc: 'careerops的基础上加了200+中国公司。',
        status: '已完成',
        tags: ['求职', '爬虫'],
        url: 'https://github.com/octpus1230216-alt/career-ops', // TODO: 替换成工具/仓库链接
      },
      {
        title: '思维导图',
        desc: '手敲用来理清思路，还没想好用什么方式呈现，即将上线。',
        status: '即将上线',
        tags: ['思维导图'],
        url: '#', // TODO: 上线后替换
      },
      {
        title: '最近看了什么',
        desc: '会把看了什么整理一下，写了什么还是会放到substack上',
        status: '研究中',
        tags: ['读书笔记', 'blog'],
        url: '#', // TODO: 上线后替换
      },
    ],
  },
]
