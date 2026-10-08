import { renderLearning } from './Learning'
import { learningGroups } from './content'
import type { SectionModule } from '../../core/types'

export const learning: SectionModule = {
  id: 'learning',
  render: renderLearning,
  digest: learningGroups.map(
    (g) =>
      `${g.name}：${g.items.map((i) => `${i.title}（${i.status}）`).join('、')}`,
  ),
}
