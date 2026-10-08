import { resources, type Resource } from './content'

function ResourceRow(r: Resource): string {
  const external = r.url.startsWith('#') ? '' : ' target="_blank" rel="noopener"'

  return `
    <a href="${r.url}"${external}
       class="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-violet-500/40 hover:bg-white/[0.05]">
      <div>
        <div class="font-semibold text-white">${r.name}</div>
        <div class="mt-0.5 text-sm text-slate-400">${r.desc}</div>
      </div>
      <span class="shrink-0 text-sm text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-violet-300">打开 →</span>
    </a>
  `
}

export function renderResources(): string {
  return `
    <section>
      <h2 class="mb-5 text-lg font-semibold text-white">常用网站 / 资源</h2>
      <div class="space-y-3">${resources.map(ResourceRow).join('')}</div>
    </section>
  `
}
