import { renderWorks } from './Works'
import { works as workList } from './content'
import type { SectionModule } from '../../core/types'

export const works: SectionModule = {
  id: 'works',
  render: renderWorks,
  digest: workList.map((w) => `作品 ${w.title}（${w.kind}）：${w.desc}`),
}
