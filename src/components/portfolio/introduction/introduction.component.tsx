import { Button } from '@mui/material'
import { IoIosArrowDown } from 'react-icons/io'
import Lottie from 'lottie-react'
import animation from '@/assets/lottie/intro-animation.json'

export const Introduction = () => {
  return (
    <section className="h-[calc(100vh-64px)] py-20 flex items-center justify-around relative">
      <div>
        <div className="font-semibold">
          <h1 className="text-[80px] leading-[60px]">FRONTEND</h1>
          <h1 className="text-[80px]">DEVELOPER</h1>
        </div>
        <div className="flex">
          <div className="mr-4">
            <Button variant="outlined">Download CV</Button>
          </div>
          <Button variant="contained">About Me</Button>
        </div>
      </div>
      <div className="h-full">
        <Lottie animationData={animation} loop={true} autoplay={true} style={{ width: 450 }} />
      </div>
      <div className="absolute bottom-4 text-slate-500">
        <IoIosArrowDown size={30} className="mb-[-20px] animate-pulse" />
        <IoIosArrowDown size={30} className="animate-pulse" />
      </div>
    </section>
  )
}
