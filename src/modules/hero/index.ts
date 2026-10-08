import { renderHero } from './Hero'
import { profile } from './content'
import type { SectionModule } from '../../core/types'

export const hero: SectionModule = {
  id: 'hero',
  render: renderHero,
  digest: [
    `我是 ${profile.name}，${profile.role}`,
    `关注的标签：${profile.chips.join('、')}`,
  ],
}
