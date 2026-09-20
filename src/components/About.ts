import { about } from '../data'

export function About(): string {
  const focus = about.focus
    .map(
      (f) =>
        `<span class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-slate-300">${f}</span>`,
    )
    .join('')

  return `
    <section>
      <h2 class="mb-5 text-lg font-semibold text-white">关于我</h2>
      <div class="grid gap-4 md:grid-cols-2">
        <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div class="text-xs text-slate-500">兴趣方向</div>
          <div class="mt-1 text-slate-200">${about.interest}</div>
        </div>
        <div class="rounded-2xl border border-violet-500/40 bg-violet-500/10 p-6">
          <div class="text-xs text-violet-300">记忆点</div>
          <div class="mt-1 font-medium text-white">${about.highlight}</div>
        </div>
      </div>
      <div class="mt-4 flex flex-wrap gap-2">${focus}</div>
    </section>
  `
}
