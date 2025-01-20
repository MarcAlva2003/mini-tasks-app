'use client'

import { AIChatbox } from "@/components/projects/ai-chatbox/chatbox.component";

export default function AIChatPage() {
  return (
    <div className="text-slate-100 p-4 w-full">

      <h2>AI Chatbox with OpenAI API</h2>
      <AIChatbox/>
    </div>
  );
}