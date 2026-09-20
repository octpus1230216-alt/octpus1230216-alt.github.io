import './style.css'
import { App } from './App'
import { initChat } from './components/Chat'
import { initContact } from './components/Contact'
import { askLLM } from './llm'
import { matchAnswer } from './data'

const app = document.querySelector<HTMLDivElement>('#app')
if (app) {
  app.innerHTML = App()
  initChat(async (question, history) => {
    try {
      return await askLLM(history)
    } catch {
      // 未配 Key / 断网 / 限流：静默降级到本地关键词知识库
      return matchAnswer(question)
    }
  })
  initContact()
}
