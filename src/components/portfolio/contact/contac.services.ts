const FORM_LINK = 'https://formspree.io/f/myzkjwyb'

export const sendMessage = async (data: { name: string; email: string; subject: string; message: string }) => {
  try {
    const response = await fetch(FORM_LINK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response
  } catch (error) {
    console.error('Error al enviar el mensaje:', error)
  }
}
