import { Button } from '@mui/material'
import { IoIosArrowDown } from 'react-icons/io'
import Lottie from 'lottie-react'
import animation from '@/assets/lottie/intro-animation.json'

export const Introduction = () => {
  return (
    <section className="h-[auto] lg:h-[calc(100vh-64px)] py-20 lg:flex lg:items-center lg:justify-between relative">
      <div className="">
        <div className="font-semibold text-center lg:text-left">
          <h1 className="text-[50px] lg:text-[80px] lg:leading-[60px]">FRONTEND</h1>
          <h1 className="text-[50px] lg:text-[80px]">DEVELOPER</h1>
        </div>
        <div className="flex justify-center lg:justify-start mt-8 lg:mt-0">
          <div className="mr-4">
            <Button variant="outlined">Download CV</Button>
          </div>
          <Button variant="contained">About Me</Button>
        </div>
      </div>
      <div className="h-fit lg:h-full w-full max-w-[450px]">
        <Lottie animationData={animation} loop={true} autoplay={true} style={{ width: '100%' }} />
      </div>
      <div className="absolute bottom-4 text-slate-500 left-1/2 transform -translate-x-1/2">
        <IoIosArrowDown size={30} className="mb-[-20px] animate-pulse" />
        <IoIosArrowDown size={30} className="animate-pulse" />
      </div>
    </section>
  )
}
