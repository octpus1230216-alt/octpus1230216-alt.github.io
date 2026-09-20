import './style.css'
import { App } from './App'
import { initChat } from './components/Chat'
import { matchAnswer } from './data'

const app = document.querySelector<HTMLDivElement>('#app')
if (app) {
  app.innerHTML = App()
  initChat(matchAnswer)
}
