import type { Project } from '../data'

const accentMap = {
  purple: 'bg-violet-500/15 text-violet-300',
  cyan: 'bg-cyan-400/15 text-cyan-300',
} as const

export function ProjectCard(p: Project): string {
  const badge = accentMap[p.accent]
  const tags = p.tags
    .map(
      (t) =>
        `<span class="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-slate-400">${t}</span>`,
    )
    .join('')

  return `
    <article class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-500/40 hover:bg-white/[0.05]">
      <span class="inline-block rounded-lg px-2.5 py-1 text-xs font-medium ${badge}">${p.tags[0]}</span>
      <h3 class="mt-4 text-lg font-semibold text-white">${p.title}</h3>
      <p class="mt-2 text-sm leading-relaxed text-slate-400">${p.desc}</p>
      <div class="mt-4 flex flex-wrap gap-2">${tags}</div>
    </article>
  `
}
