import { learningGroups, type LearningItem } from './content'

/** 状态徽章配色 */
const statusMap = {
  学习中: 'bg-cyan-400/15 text-cyan-300',
  已完成: 'bg-green-400/15 text-green-300',
  进行中: 'bg-violet-500/15 text-violet-300',
  研究中: 'bg-violet-500/15 text-violet-300',
  拓荒中: 'bg-amber-400/15 text-amber-300',
  制作中: 'bg-fuchsia-400/15 text-fuchsia-300',
  整理中: 'bg-white/10 text-slate-300',
  即将上线: 'bg-emerald-400/15 text-emerald-300',
} as const

function ItemCard(item: LearningItem): string {
  const badge = statusMap[item.status]
  const tags = item.tags
    .map(
      (t) =>
        `<span class="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-slate-400">${t}</span>`,
    )
    .join('')
  const external = item.url.startsWith('#') ? '' : ' target="_blank" rel="noopener"'

  return `
    <a href="${item.url}"${external}
       class="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-500/40 hover:bg-white/[0.05]">
      <div class="flex items-center justify-between gap-2">
        <span class="inline-block rounded-lg px-2.5 py-1 text-xs font-medium ${badge}">${item.status}</span>
        <span class="text-xs text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-cyan-300">指路 →</span>
      </div>
      <h4 class="mt-3 font-semibold text-white">${item.title}</h4>
      <p class="mt-1.5 text-sm leading-relaxed text-slate-400">${item.desc}</p>
      <div class="mt-3 flex flex-wrap gap-2">${tags}</div>
    </a>
  `
}

export function renderLearning(): string {
  const groups = learningGroups
    .map(
      (g) => `
        <div class="mb-5">
          <h3 class="mb-3 text-sm font-semibold text-slate-300">${g.name}</h3>
          <div class="grid gap-4 sm:grid-cols-2">${g.items.map(ItemCard).join('')}</div>
        </div>`,
    )
    .join('')

  return `
    <section>
      <h2 class="mb-1 text-lg font-semibold text-white">学习轨迹 · 正在钻研</h2>
      <p class="mb-5 text-sm text-slate-500">把学习资料进行了汇总，这样所有人找起来都方便。</p>
      ${groups}
    </section>
  `
}
