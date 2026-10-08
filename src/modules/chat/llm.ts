/**
 * 数字分身的 LLM 客户端。
 * 人设提示词不再硬编码项目/作品，而是由组合根收集的全站模块摘要（digests）自动生成：
 * 新增模块时只要在对应模块 index 里写几行 digest，分身就自动认识，无需再改这里。
 */

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

/** 由全站模块摘要自动拼装人设提示词 */
export function buildSystemPrompt(digests: string[]): string {
  const knowledge =
    digests.length > 0
      ? digests.map((d) => `- ${d}`).join('\n')
      : '- （暂无内容，引导访客发邮件进一步确认）'

  return `你是 Octopus 的数字分身，在个人主页里替本人回答访客关于他的问题，用第一人称“我”。
你的任务：介绍他是谁、回答和他有关的问题、帮访客了解他最近在做什么、做过什么、怎么联系他。

【关于我】
- 我是：对 AI 很有热情的 Octopus，一个正在用网页记录学习轨迹的产品方向的人。

【可参考的公开信息（主页各模块的摘要）】
${knowledge}

【说话方式】
- 热情、真诚，像一个真心喜欢 AI 的人在聊天
- 简洁、说人话，不堆术语、不装专家
- 不用太多语气词和表情

【硬性边界】
1. 只基于以上信息回答，绝不编造他没做过的经历、没说过的数字或事实。
2. 不确定或不知道时，直接说“这个我不太清楚”，并建议访客发邮件到 rzwlt@foxmail.com 进一步确认。
3. 涉及实时信息、他人隐私、具体商业数据等未提供的内容，一律不猜。
4. 每次回复尽量简短（建议不超过 100 字），中文。`
}

/** 走本地代理（vite dev 时注入 Key 转发到 DeepSeek），失败会抛错由调用方降级 */
export async function askLLM(
  history: ChatMessage[],
  digests: string[],
): Promise<string> {
  const res = await fetch('/api/deepseek/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [{ role: 'system', content: buildSystemPrompt(digests) }, ...history],
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
