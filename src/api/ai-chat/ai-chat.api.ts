import { OpenAIStream, StreamingTextResponse } from "ai";

import OpenAI from "openai";

export const runtime = "edge";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY!, dangerouslyAllowBrowser: true });

export async function POST(req: Request) {
  const { messages } = await req.json();

  const res = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    stream: true,
    messages,
  });

  const stream = OpenAIStream(res);

  return new StreamingTextResponse(stream);
}