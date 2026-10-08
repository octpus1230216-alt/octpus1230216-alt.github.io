/**
 * 模块化注册式架构的公共类型定义。
 * 每个页面区块 = 一个 SectionModule。
 */

export interface SectionInitCtx {
  /**
   * 由组合根（main.ts）收集的全站模块摘要。
   * 供需要"看见全站内容"的模块使用，例如数字分身聊天。
   */
  digests: string[]
}

export interface SectionModule {
  /** 唯一标识，如 'learning' */
  id: string
  /** 区块标题（Hero 这类无标题的模块可省略） */
  title?: string
  /** 渲染整块 HTML，只允许读取本模块的 content */
  render: () => string
  /** 可选：挂载到 DOM 后执行的初始化（绑定事件等），由组合根统一调用 */
  init?: (ctx: SectionInitCtx) => void
  /**
   * 可选：喂给数字分身的摘要。
   * 新增模块时在这里写几行，分身就自动认识它，无需再改 llm。
   */
  digest?: string[]
}
