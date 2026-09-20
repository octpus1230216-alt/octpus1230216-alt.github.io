import { contact } from '../data'

/** 联系方式窄条：发邮件按钮 + 一键复制邮箱，挂载在 About 之后 */
export function Contact(): string {
  return `
    <section class="flex flex-col items-center justify-between gap-4 rounded-2xl
                    border border-violet-500/30 bg-gradient-to-r from-violet-500/10 to-cyan-400/10
                    px-6 py-5 sm:flex-row">
      <div class="text-center sm:text-left">
        <div class="text-sm font-medium text-white">想聊聊 AI、产品或合作？</div>
        <div class="mt-0.5 text-xs text-slate-400">${contact.email} · 看到就会回</div>
      </div>
      <div class="flex shrink-0 items-center gap-3">
        <a href="mailto:${contact.email}?subject=来自个人主页的留言"
           class="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white
                  transition hover:opacity-90 active:scale-95">
          ✉️ 发邮件
        </a>
        <button id="copy-email" type="button" data-email="${contact.email}"
                class="rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-300
                       transition hover:border-cyan-400/50 hover:text-cyan-200 active:scale-95">
          复制邮箱
        </button>
      </div>
    </section>
  `
}

/** 挂载后调用：复制邮箱到剪贴板，按钮短暂变为“已复制” */
export function initContact(): void {
  const btn = document.getElementById('copy-email')
  if (!btn) return

  const original = btn.textContent
  const done = () => {
    btn.textContent = '已复制 ✓'
    window.setTimeout(() => {
      btn.textContent = original
    }, 1600)
  }

  btn.addEventListener('click', async () => {
    const email = (btn as HTMLElement).dataset.email ?? ''
    try {
      await navigator.clipboard.writeText(email)
      done()
    } catch {
      // 老浏览器或无权限时退回临时输入框方案
      const tmp = document.createElement('textarea')
      tmp.value = email
      document.body.appendChild(tmp)
      tmp.select()
      document.execCommand('copy')
      tmp.remove()
      done()
    }
  })
}
