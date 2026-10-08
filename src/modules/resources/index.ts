import { renderResources } from './Resources'
import { resources as resourceList } from './content'
import type { SectionModule } from '../../core/types'

export const resources: SectionModule = {
  id: 'resources',
  render: renderResources,
  digest: [`常用网站：${resourceList.map((r) => r.name).join('、')}`],
}
