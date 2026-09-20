import { persona } from '../data'

/** 聊天区骨架：数字分身 + 消息列表 + 快捷提问 + 输入框 */
export function Chat(): string {
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
            在线 · 由本地知识库驱动
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

/** 挂载后调用：绑定发送、快捷提问、关键词匹配应答 */
export function initChat(
  answer: (text: string) => string,
): void {
  const log = document.getElementById('chat-log')
  const form = document.getElementById('chat-form') as HTMLFormElement | null
  const input = document.getElementById('chat-input') as HTMLInputElement | null
  if (!log || !form || !input) return

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

  const reply = (question: string) => {
    // 先显示“正在输入”，再延时给出应答，模拟对话节奏
    const typing = document.createElement('div')
    typing.className = 'chat-msg chat-msg--bot'
    typing.innerHTML =
      '<div class="chat-bubble chat-bubble--bot chat-typing">正在输入<span>…</span></div>'
    log.appendChild(typing)
    scrollToEnd()

    window.setTimeout(() => {
      typing.remove()
      addMsg(answer(question), 'bot')
    }, 500)
  }

  const send = (text: string) => {
    const value = text.trim()
    if (!value) return
    addMsg(value, 'user')
    reply(value)
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
