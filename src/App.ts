import { Hero } from './components/Hero'
import { About } from './components/About'
import { ProjectCard } from './components/ProjectCard'
import { Works } from './components/Works'
import { Contact } from './components/Contact'
import { Chat } from './components/Chat'
import { projects } from './data'

export function App(): string {
  const cards = projects.map(ProjectCard).join('')

  return `
    <main class="mx-auto max-w-4xl space-y-10 px-6 py-12">
      ${Hero()}

      <section>
        <h2 class="mb-5 text-lg font-semibold text-white">项目 / 在做的事</h2>
        <div class="grid gap-5 sm:grid-cols-2">${cards}</div>
      </section>

      ${Works()}

      ${About()}

      ${Contact()}

      ${Chat()}

      <footer class="pt-4 text-center text-xs text-slate-600">
        © 2026 Octopus · 探索 AI 世界的产品经理
      </footer>
    </main>
  `
}
