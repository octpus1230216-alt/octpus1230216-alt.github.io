import { renderContact, initContact } from './Contact'
import { contact as contactInfo } from './content'
import type { SectionModule } from '../../core/types'

export const contact: SectionModule = {
  id: 'contact',
  render: renderContact,
  init: () => initContact(),
  digest: [`联系方式：邮箱 ${contactInfo.email}（看到就会回）`],
}
