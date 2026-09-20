import { contact, projects, works } from './data'

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

/** 由现有页面数据自动拼装人设提示词：改 data.ts = 改分身记忆 */
const systemPrompt = `你是 Octopus 的数字分身，在个人主页里替本人回答访客关于他的问题，用第一人称“我”。
你的任务：介绍他是谁、回答和他有关的问题、帮访客了解他最近在做什么、做过什么、怎么联系他。

【关于我】
- 我是：对 AI 很有热情的 Octopus
- 最近在做：AI 漫剧，以及一款工作效率 App
- 擅长 / 长期关注：LLM 的发展与应用
- 联系方式：邮箱 ${contact.email}

【可参考的公开信息（主页上展示过的）】
- 项目：${projects.map((p) => p.title).join('、')}
- 作品：${works.map((w) => w.title).join('、')}

【说话方式】
- 热情、真诚，像一个真心喜欢 AI 的人在聊天
- 简洁、说人话，不堆术语、不装专家
- 不用太多语气词和表情

【硬性边界】
1. 只基于以上信息回答，绝不编造他没做过的经历、没说过的数字或事实。
2. 不确定或不知道时，直接说“这个我不太清楚”，并建议访客发邮件到 ${contact.email} 进一步确认。
3. 涉及实时信息、他人隐私、具体商业数据等未提供的内容，一律不猜。
4. 每次回复尽量简短（建议不超过 100 字），中文。`

/** 走本地代理（vite dev 时注入 Key 转发到 DeepSeek），失败会抛错由调用方降级 */
export async function askLLM(history: ChatMessage[]): Promise<string> {
  const res = await fetch('/api/deepseek/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [{ role: 'system', content: systemPrompt }, ...history],
      temperature: 1.3,
      max_tokens: 250,
      stream: false,
    }),
  })
  if (!res.ok) {
    throw new Error(`DeepSeek HTTP ${res.status}`)
  }
  const data = await res.json()
  const text: unknown = data?.choices?.[0]?.message?.content
  if (typeof text !== 'string' || !text.trim()) {
    throw new Error('DeepSeek 返回为空')
  }
  return text.trim()
}
