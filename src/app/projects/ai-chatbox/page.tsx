'use client'

import { AIChatbox } from '@/components/projects/ai-chatbox/chatbox.component'

export default function AIChatPage() {
  return (
    <div className="text-slate-100 h-full">
      <h2 className="text-lg lg:text-2xl font-bold mb-6 lg:mb-10">AI Chatbox with OpenAI API</h2>
      <div className="h-[calc(100%_-_56px)] lg:h-[calc(100%_-_72px)]">
          <AIChatbox />
      </div>
    </div>
  )
}
