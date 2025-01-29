import { Button } from '@mui/material'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import profileImage from '@/assets/profile-images/profile-picture-gradiant-fit.png'

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
      <div className="bg-green- h-full">
        <div className="w-[420px] h-full flex items-center left-[100px]">
          <Image alt={`profile-picture`} objectFit="contain" width={400} src={profileImage} />
        </div>
      </div>
      <div className='absolute bottom-4 text-slate-500'>
        <IoIosArrowDown size={30} className='mb-[-20px] animate-pulse'/>
        <IoIosArrowDown size={30} className='animate-pulse'/>
      </div>
    </section>
  )
}
