import type {
  ChatCompletionContentPart,
  ChatCompletionContentPartRefusal,
  ChatCompletionContentPartText,
  ChatCompletionMessageParam
} from 'openai/resources/chat/completions'
import { useEffect, useRef, useState } from 'react'

import { DotsLoader } from '@/components/loaders/dots-loader.component'
import { IoSendSharp } from 'react-icons/io5'
import { OpenAI } from 'openai'
import { TextField } from '@mui/material'

export const AIChatbox = () => {
  const [responseLoading, setResponseLoading] = useState<boolean>(false)
  const [usageExpired, setUsageExpired] = useState<boolean>(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([
    { role: 'assistant', content: 'Hello! How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  })

  const setUserTokenExpired = () => {
    setUsageExpired(true)
    localStorage.setItem('userTokenExpired', JSON.stringify(true))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || usageExpired) return
    const userMessage: ChatCompletionMessageParam = { role: 'user', content: input }
    setMessages([...messages, userMessage])
    setInput('')
    setResponseLoading(true)
    setUserTokenExpired()
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [...messages, userMessage]
      })

      const aiResponse = completion.choices[0]?.message?.content

      if (aiResponse) {
        const assistantMessage: ChatCompletionMessageParam = { role: 'assistant', content: aiResponse }
        setMessages([...messages, userMessage, assistantMessage])
      } else {
        const errorMessage: ChatCompletionMessageParam = {
          role: 'assistant',
          content: 'Sorry, I encountered an error.'
        }
        setMessages([...messages, userMessage, errorMessage])
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('OpenAI API Error:', error)
      let errorMessage = 'An error occurred.'
      if (error.response) {
        errorMessage = `Error ${error.response.status}: ${error.response.data.error.message}`
      } else if (error.message) {
        errorMessage = error.message
      } else if (typeof error === 'string') {
        errorMessage = error
      }

      setMessages([...messages, { role: 'user', content: input }, { role: 'assistant', content: errorMessage }])
      setResponseLoading(false)
    }
  }

  const renderMessageContent = (
    content:
      | string
      | ChatCompletionContentPartText[]
      | ChatCompletionContentPart[]
      | (ChatCompletionContentPartText | ChatCompletionContentPartRefusal)[]
      | null
      | undefined
  ) => {
    if (typeof content === 'string') {
      return content
    } else if (Array.isArray(content)) {
      return content.map((part, index) => {
        if (part.type === 'text') {
          return <span key={index}>{part.text}</span>
        } else if (part.type === 'image_url') {
          return <img key={index} src={part.image_url.url} alt="User Uploaded Image" />
        }
        return null
      })
    }
    return null
  }

  useEffect(() => {
    if (messagesContainerRef) {
      messagesContainerRef.current?.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [messages])

  useEffect(() => {
    const storedItems = localStorage.getItem('userTokenExpired')
    if (storedItems) {
      setUsageExpired(true)
    }
  }, [])

  return (
    <div className="w-full border border-solid border-slate-700 rounded-[8px] p-3 h-full">
      <div className="flex flex-col h-full">
        <div className="flex-grow p-4 overflow-y-auto h-full max-h-[calc(100%-48px)]" ref={messagesContainerRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`my-2 p-3 rounded-lg text-slate-200 w-[calc(100%-20px)] ${
                message.role === 'user' ? 'bg-slate-800 text-right ml-auto' : 'bg-slate-700 mr-auto'
              }`}
            >
              {renderMessageContent(message.content)}
            </div>
          ))}
          {responseLoading && (
            <div className="my-2 p-3 rounded-lg text-slate-200 bg-slate-700 mr-auto w-fit">
              <DotsLoader></DotsLoader>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="">
          <div className="flex pt-1">
            <TextField
              value={!usageExpired ? input : 'You can send just one message'}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow border rounded-l-md p-2 focus:outline-none"
              placeholder="Type your message..."
              size="small"
              disabled={usageExpired}
              error={usageExpired}
            />
            <button
              disabled={usageExpired}
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 w-10 flex justify-center items-center focus:outline-none"
            >
              <IoSendSharp />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
