import { GoogleGenerativeAI } from '@google/generative-ai';

export async function generateGeminiResponse(message: string): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey || '');
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-lite' });

  try {
    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error generating content:', error);
    throw new Error(error.message || 'Internal Server Error');
  }
}