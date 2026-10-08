import './style.css'
import { App } from './App'
import { sections } from './modules'

/**
 * 组合根：渲染整页，然后统一触发各模块的 init。
 * 收集全站模块摘要（digests）注入给需要“看见全站内容”的模块（如数字分身）。
 */
const app = document.querySelector<HTMLDivElement>('#app')
if (app) {
  app.innerHTML = App()

  const digests = sections.flatMap((s) => s.digest ?? [])
  sections.forEach((s) => s.init?.({ digests }))
}
