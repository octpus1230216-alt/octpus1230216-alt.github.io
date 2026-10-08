import { profile } from './content'

/** 品牌图标 SVG 路径（来自 simple-icons），label 需与 content.ts 的 socials 对应 */
const ICON_PATHS: Record<string, string> = {
  github:
    'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  substack:
    'M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z',
  x: 'M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z',
}

/** chips 暂时不渲染；如需恢复，把对应 .map 拼回 section 即可 */
function renderSocials(): string {
  return (profile.socials ?? [])
    .map((s) => {
      const path = ICON_PATHS[s.label]
      if (!path) return ''
      return `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer"
           aria-label="${s.label}" title="${s.label}"
           class="flex h-11 w-11 items-center justify-center rounded-full
                  border border-violet-500/30 bg-white/[0.04] text-slate-300
                  transition hover:-translate-y-0.5 hover:border-violet-400/60
                  hover:text-violet-200 hover:shadow-[0_0_20px_rgba(139,92,246,0.45)]">
          <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true">
            <path d="${path}"/>
          </svg>
        </a>`
    })
    .join('')
}

export function renderHero(): string {
  return `
    <section class="rounded-3xl border border-violet-500/20 bg-white/[0.03] px-8 py-16 text-center backdrop-blur">
      <img src="${profile.avatar}" alt="${profile.name}"
           class="mx-auto mb-6 h-28 w-28 rounded-full object-cover
                  bg-gradient-to-br from-violet-500/30 to-cyan-400/30
                  shadow-[0_0_45px_rgba(139,92,246,0.55)]" />
      <h1 class="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent">
        ${profile.name}
      </h1>
      <p class="mt-3 text-slate-400">${profile.role}</p>
      <div class="mt-8 flex justify-center gap-4">${renderSocials()}</div>
    </section>
  `
}
