import { renderAbout } from './About'
import { about as aboutInfo } from './content'
import type { SectionModule } from '../../core/types'

export const about: SectionModule = {
  id: 'about',
  render: renderAbout,
  digest: [
    `兴趣方向：${aboutInfo.interest}`,
    `记忆点：${aboutInfo.highlight}`,
    `长期关注的领域：${aboutInfo.focus.join('、')}`,
  ],
}
