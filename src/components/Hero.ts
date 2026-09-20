import { profile } from '../data'

export function Hero(): string {
  const chips = profile.chips
    .map(
      (c) =>
        `<span class="rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">${c}</span>`,
    )
    .join('')

  return `
    <section class="rounded-3xl border border-violet-500/20 bg-white/[0.03] px-8 py-16 text-center backdrop-blur">
      <div class="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full
                  bg-gradient-to-br from-violet-500/30 to-cyan-400/30
                  text-5xl font-bold text-white shadow-[0_0_45px_rgba(139,92,246,0.55)]">
        O
      </div>
      <h1 class="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent">
        ${profile.name}
      </h1>
      <p class="mt-3 text-slate-400">${profile.role}</p>
      <div class="mt-6 flex justify-center gap-3">${chips}</div>
    </section>
  `
}
