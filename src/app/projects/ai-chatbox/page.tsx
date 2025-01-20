'use client'

import { AIChatbox } from "@/components/projects/ai-chatbox/chatbox.component";

export default function AIChatPage() {
  return (
    <div className="text-slate-100">
      <h2 className="text-2xl font-bold mb-10">AI Chatbox with OpenAI API</h2>
      <AIChatbox/>
    </div>
  );
}