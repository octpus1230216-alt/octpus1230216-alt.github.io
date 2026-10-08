import { persona, matchAnswer } from './content'
import { askLLM, type ChatMessage } from './llm'

/** 聊天区骨架：数字分身 + 消息列表 + 快捷提问 + 输入框 */
export function renderChat(): string {
  const quick = persona.quickQuestions
    .map(
      (q) =>
        `<button type="button" data-quick="${q}"
           class="quick-chip rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition hover:border-violet-500/50 hover:text-violet-200">
           ${q}
         </button>`,
    )
    .join('')

  return `
    <section id="chat" class="rounded-3xl border border-cyan-500/20 bg-white/[0.03] p-6 backdrop-blur">
      <div class="mb-4 flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-full
                    bg-gradient-to-br from-violet-500/40 to-cyan-400/40 text-lg font-bold text-white">
          O
        </div>
        <div>
          <h2 class="text-base font-semibold text-white">${persona.name}</h2>
          <p class="flex items-center gap-1.5 text-xs text-slate-400">
            <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
            在线 
          </p>
        </div>
      </div>

      <div id="chat-log" class="chat-log max-h-80 space-y-3 overflow-y-auto rounded-2xl border border-white/5 bg-black/20 p-4">
        <div class="chat-msg chat-msg--bot">
          <div class="chat-bubble chat-bubble--bot">${persona.greeting}</div>
        </div>
      </div>

      <div class="mt-3 flex flex-wrap gap-2">${quick}</div>

      <form id="chat-form" class="mt-4 flex items-center gap-2">
        <input
          id="chat-input"
          type="text"
          autocomplete="off"
          placeholder="问我关于 Octopus 的任何问题…"
          class="min-w-0 flex-1 rounded-full border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-slate-100
                 placeholder:text-slate-500 focus:border-cyan-400/60 focus:outline-none"
        />
        <button
          type="submit"
          class="shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white
                 transition hover:opacity-90 active:scale-95"
        >
          发送
        </button>
      </form>
    </section>
  `
}

/**
 * 挂载后调用：绑定发送、快捷提问，维护多轮对话历史。
 * LLM 优先，失败自动回退本地关键词知识库。
 * @param digests 组合根收集的全站模块摘要，用于拼装 LLM 人设。
 */
export function initChat(digests: string[]): void {
  const log = document.getElementById('chat-log')
  const form = document.getElementById('chat-form') as HTMLFormElement | null
  const input = document.getElementById('chat-input') as HTMLInputElement | null
  if (!log || !form || !input) return

  /** 完整对话历史（不含欢迎语），随每次问答增长，发给 LLM 时截取最近几轮 */
  const history: ChatMessage[] = []
  let busy = false

  /** 优先 LLM，失败（未配 Key / 断网 / 限流）回退本地知识库 */
  const ask = async (question: string, h: ChatMessage[]): Promise<string> => {
    try {
      return await askLLM(h, digests)
    } catch {
      return matchAnswer(question)
    }
  }

  const scrollToEnd = () => {
    log.scrollTop = log.scrollHeight
  }

  const addMsg = (text: string, role: 'bot' | 'user') => {
    const wrap = document.createElement('div')
    wrap.className = `chat-msg chat-msg--${role}`
    const bubble = document.createElement('div')
    bubble.className = `chat-bubble chat-bubble--${role}`
    bubble.textContent = text
    wrap.appendChild(bubble)
    log.appendChild(wrap)
    scrollToEnd()
  }

  const reply = async (question: string) => {
    if (busy) return
    busy = true
    // 等待期间显示“正在输入…”，真实 LLM 往返一般 1~3 秒
    const typing = document.createElement('div')
    typing.className = 'chat-msg chat-msg--bot'
    typing.innerHTML =
      '<div class="chat-bubble chat-bubble--bot chat-typing">正在输入<span>…</span></div>'
    log.appendChild(typing)
    scrollToEnd()

    try {
      // 只带最近 10 条，控制 token 消耗
      const text = await ask(question, history.slice(-10))
      addMsg(text, 'bot')
      history.push({ role: 'assistant', content: text })
    } finally {
      typing.remove()
      busy = false
    }
  }

  const send = (text: string) => {
    const value = text.trim()
    if (!value || busy) return
    addMsg(value, 'user')
    history.push({ role: 'user', content: value })
    void reply(value)
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    send(input.value)
    input.value = ''
    input.focus()
  })

  log.parentElement?.querySelectorAll<HTMLButtonElement>('.quick-chip').forEach((btn) => {
    btn.addEventListener('click', () => send(btn.dataset.quick ?? ''))
  })
}
