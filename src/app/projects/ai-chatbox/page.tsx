'use client'

import { AIChatbox } from '@/components/projects/ai-chatbox/chatbox.component'

export default function AIChatPage() {
  return (
    <div className="text-slate-100 h-full">
      <h2 className="text-lg lg:text-2xl font-medium lg:font-bold mb-6 lg:mb-10">AI Chatbox with Gemini</h2>
      <p>Developer using Gemini Services API from Google. Model: Gemini 2.0 Flash Lite</p>
      <div className="h-[calc(100%_-_56px)] lg:h-[calc(100%_-_72px_-24px)]">
          <AIChatbox />
      </div>
    </div>
  )
}
