import React, { useEffect, useRef, useState } from 'react'

import { BotMessageComponent } from './bot-message.component'
import { IoSend } from 'react-icons/io5'
import { TextField } from '@mui/material'
import { UserMessageComponent } from './user-message.component'
import { generateGeminiResponse } from '@/services/gemini.services'
import styles from './chat-box.module.css'

interface Message {
  text: string
  sender: 'user' | 'bot'
}

export const AIChatbox = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = input
    setMessages((prevMessages) => [...prevMessages, { text: userMessage, sender: 'user' }])
    setInput('')
    setIsLoading(true)

    try {
      const botResponse = await generateGeminiResponse(userMessage)
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }])
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error sending message:', error)
      setMessages((prevMessages) => [...prevMessages, { text: 'Error: ' + error.message, sender: 'bot' }])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="h-full flex flex-col">
      <div
        ref={chatContainerRef}
        className={`p-2 grow overflow-y-auto h-[calc(100%_-_56px_-24px_-68px)] lg:h-[calc(100%_-_72px_-24px_-68px)] ${styles['chat-box']}`}
      >
        {messages.map((message, index) =>
          message.sender === 'user' ? (
            <UserMessageComponent key={`user-message-item-${index}`} message={message.text} />
          ) : (
            <BotMessageComponent key={`bot-message-item-${index}`} message={message.text} />
          )
        )}
        {isLoading && <BotMessageComponent loading message={''} />}
      </div>
      <div style={{ padding: '10px', display: 'flex' }}>
        <TextField
          size="small"
          fullWidth
          type="text"
          value={input}
          onChange={handleInputChange}
          className="grow mr-2"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !isLoading) {
              sendMessage()
            }
          }}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading}
          className="h-10 w-10 flex justify-center items-center disabled:text-gray-700"
        >
          <IoSend size={22} />
        </button>
      </div>
    </div>
  )
}
