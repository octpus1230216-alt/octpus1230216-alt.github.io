import { renderProjects } from './Projects'
import { projects as projectList } from './content'
import type { SectionModule } from '../../core/types'

export const projects: SectionModule = {
  id: 'projects',
  render: renderProjects,
  digest: projectList.map((p) => `项目 ${p.title}：${p.desc}`),
}
