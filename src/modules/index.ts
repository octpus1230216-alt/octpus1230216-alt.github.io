/**
 * ★ 模块注册表（唯一编排入口）
 *
 * 加模块 / 删模块 / 调整顺序，都只改这里的 sections 数组：
 *   - 新增模块：import 进来，在数组里加一项
 *   - 删除/隐藏：从数组移除一项
 *   - 排序：直接调整数组顺序
 * App 和数字分身都只认这个数组，无需再改其他地方。
 */
import type { SectionModule } from '../core/types'

import { hero } from './hero'
import { learning } from './learning'
//import { projects } from './projects'
//import { works } from './works'
import { resources } from './resources'
import { about } from './about'
import { contact } from './contact'
import { chat } from './chat'

export const sections: SectionModule[] = [
  hero,
  learning,
  //projects,
  //works,
  resources,
  about,
  contact,
  chat,
]
