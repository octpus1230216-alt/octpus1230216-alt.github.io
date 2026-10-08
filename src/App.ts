import { sections } from './modules'

/**
 * 页面主组装：只遍历注册表渲染，不再硬编码区块顺序。
 * 以后新增/删除/排序模块都不需要再改这个文件。
 */
export function App(): string {
  const body = sections.map((s) => s.render()).join('')

  return `
    <main class="mx-auto max-w-4xl space-y-10 px-6 py-12">
      ${body}

      <footer class="pt-4 text-center text-xs text-slate-600">
        © 2026 Octopus · AI海洋的数字章鱼
      </footer>
    </main>
  `
}
