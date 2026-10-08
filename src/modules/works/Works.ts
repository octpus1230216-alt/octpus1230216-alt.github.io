import { works, type Work } from './content'

/** 类型徽章配色：漫剧=紫、软件=青、链接=灰 */
const kindMap = {
  漫剧: 'bg-violet-500/15 text-violet-300',
  软件: 'bg-cyan-400/15 text-cyan-300',
  链接: 'bg-white/10 text-slate-300',
} as const

function WorkCard(w: Work): string {
  const tags = w.tags
    .map(
      (t) =>
        `<span class="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-slate-400">${t}</span>`,
    )
    .join('')
  const external = w.url.startsWith('#') ? '' : ' target="_blank" rel="noopener"'

  return `
    <a href="${w.url}"${external}
       class="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-500/40 hover:bg-white/[0.05]">
      <div class="flex items-center justify-between">
        <span class="inline-block rounded-lg px-2.5 py-1 text-xs font-medium ${kindMap[w.kind]}">${w.kind}</span>
        <span class="text-sm text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-violet-300">去看看 →</span>
      </div>
      <h3 class="mt-4 text-lg font-semibold text-white">${w.title}</h3>
      <p class="mt-2 text-sm leading-relaxed text-slate-400">${w.desc}</p>
      <div class="mt-4 flex flex-wrap gap-2">${tags}</div>
    </a>
  `
}

export function renderWorks(): string {
  const cards = works.map(WorkCard).join('')

  return `
    <section>
      <h2 class="mb-5 text-lg font-semibold text-white">作品 / 可以看的</h2>
      <div class="grid gap-5 sm:grid-cols-2">${cards}</div>
    </section>
  `
}
