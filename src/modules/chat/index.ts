import { renderChat, initChat } from './Chat'
import { persona } from './content'
import type { SectionModule } from '../../core/types'

export const chat: SectionModule = {
  id: 'chat',
  render: renderChat,
  init: ({ digests }) => initChat(digests),
  digest: [
    `我有个数字分身可以回答访客问题：${persona.greeting}`,
    `访客常问：${persona.quickQuestions.join(' / ')}`,
  ],
}
