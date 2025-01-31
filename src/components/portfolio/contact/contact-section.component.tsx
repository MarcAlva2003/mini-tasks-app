import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { contactInfo, links } from './contact-info'

import Link from 'next/link'
import { sendMessage } from './contac.services'
import { useForm } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

export const SectionComponent = () => {
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    clearErrors,
    reset
  } = useForm<Inputs>()

  // const [state, handleSubmit] = useFormSpree("myzkjwyb");
  const [successSubmit, setSuccessSubmit] = useState<boolean>(false)
  const [errorSubmit, setErrorSubmit] = useState<boolean>(false)

  const onSubmit = async () => {
    const isValid = await trigger()
    if (isValid) {
      sendMessage(getValues()).then((res) => {
        if (res?.ok) {
          setSuccessSubmit(true)
          reset()
          console.log(res)
        } else {
          setErrorSubmit(true)
          const errorData = res?.json()
          console.error('Error al enviar el mensaje:', errorData)
        }
      })
    } else {
      console.log('Error', errors.name)
    }
  }
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

  const nameTextPattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
  const simpleTextPattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s0-9]+$/

  return (
    <section className="mb-20">
      <h3 className="text-[44px] font-semibold mb-8">Contact Me</h3>
      <div className="flex justify-between w-full">
        <div>
          <div>
            {contactInfo.map((info, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-semibold">{info.title}</h4>
                <p className="text-slate-300">{info.value}</p>
              </div>
            ))}
          </div>
          <div className="flex">
            {links.map((link, index) => (
              <div key={index} className="mb-6 mr-6">
                <Link href={link.link} target="_blank" rel="noreferrer">
                  {link.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[60%]">
          <form>
            <div className="mb-3">
              <TextField
                id="outlined-basic"
                label="Name*"
                variant="outlined"
                size="small"
                fullWidth
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is required'
                  },
                  maxLength: {
                    value: 50,
                    message: 'Name must be less than 50 characters long'
                  },
                  minLength: {
                    value: 3,
                    message: 'Name must be at least 3 characters long'
                  },
                  pattern: { value: nameTextPattern, message: 'You can not use special characters or numbers' }
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
                onChange={() => {
                  clearErrors('name')
                }}
              />
            </div>
            <div className="mb-3">
              <TextField
                id="outlined-basic"
                label="Email*"
                variant="outlined"
                size="small"
                fullWidth
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required'
                  },
                  pattern: { value: emailPattern, message: 'Please, enter a valid email' }
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                onChange={() => {
                  clearErrors('email')
                }}
              />
            </div>
            <div className="mb-3">
              <TextField
                id="outlined-basic"
                label="Subject*"
                variant="outlined"
                size="small"
                fullWidth
                {...register('subject', {
                  required: {
                    value: true,
                    message: 'Subject is required'
                  },
                  maxLength: {
                    value: 250,
                    message: 'Subject must be less than 250 characters long'
                  },
                  minLength: {
                    value: 3,
                    message: 'Subject must be at least 3 characters long'
                  },
                  pattern: { value: simpleTextPattern, message: 'Please, check you are not using special characters' }
                })}
                error={!!errors.subject}
                helperText={errors.subject?.message}
                onChange={() => {
                  clearErrors('subject')
                }}
              />
            </div>
            <div className="mb-3">
              <TextField
                id="outlined-basic"
                label="Message*"
                variant="outlined"
                size="small"
                multiline
                rows={4}
                fullWidth
                {...register('message', {
                  required: {
                    value: true,
                    message: 'Message is required'
                  },
                  maxLength: {
                    value: 3000,
                    message: 'Message must be less than 3000 characters long'
                  },
                  minLength: {
                    value: 3,
                    message: 'Message must be at least 3 characters long'
                  },
                  pattern: { value: simpleTextPattern, message: 'Please, check you are not using special characters' }
                })}
                error={!!errors.message}
                helperText={errors.message?.message}
                onChange={() => {
                  clearErrors('message')
                }}
              />
            </div>
            {successSubmit && <p className="text-green-500 text-sm mb-2">Message sent successfully!</p>}
            {errorSubmit && <p className="text-red-500 text-sm mb-2">There was an error! Please, try again later</p>}
            <Button variant="contained" onClick={onSubmit}>
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
