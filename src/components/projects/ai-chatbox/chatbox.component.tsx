// components/Chat.tsx

import React, { useEffect, useRef, useState } from 'react';

import { generateGeminiResponse } from '@/services/gemini.services';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export const AIChatbox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add loading state.
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prevMessages) => [...prevMessages, { text: userMessage, sender: 'user' }]);
    setInput('');
    setIsLoading(true); // Set loading to true.

    try {
      const botResponse = await generateGeminiResponse(userMessage);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: 'bot' },
      ]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error sending message:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Error: ' + error.message, sender: 'bot' },
      ]);
    } finally {
      setIsLoading(false); // Set loading to false.
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className='bg-red-200 h-full flex flex-col'>
      <div
        ref={chatContainerRef}
        className='p-2'
        style={{ flexGrow: 1, overflowY: 'auto', padding: '10px' }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              textAlign: message.sender === 'user' ? 'right' : 'left',
              marginBottom: '5px',
            }}
          >
            <strong>{message.sender === 'user' ? 'You:' : 'Bot:'}</strong>{' '}
            {message.text}
          </div>
        ))}
      </div>
      <div style={{ padding: '10px', display: 'flex' }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          style={{ flexGrow: 1, marginRight: '10px' }}
        />
        <button onClick={sendMessage} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};