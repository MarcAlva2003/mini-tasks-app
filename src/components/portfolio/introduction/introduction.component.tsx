import { Button } from '@mui/material'
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link'
import introAnimation from '@/assets/lottie/intro-animation.gif'

export const Introduction = () => {
  const downloadCV = () => {
    const link = document.createElement('a')
    const url = `/cv/CV_Alvarez_Marcos_Frontend_Developer.pdf`
    link.href = url
    link.download = 'CV_Alvarez_Marcos_Frontend_Developer.pdf'
    link.click()
  }

  return (
    <section className="h-[auto] md:h-[calc(100vh-64px)] py-20 lg:flex lg:items-center lg:justify-between relative">
      <div className="">
        <div className="font-semibold text-center lg:text-left">
          <h1 className="text-[50px] md:text-[80px] lg:leading-[60px]">FRONTEND</h1>
          <h1 className="text-[50px] md:text-[80px]">DEVELOPER</h1>
        </div>
        <div className="flex justify-center lg:justify-start mt-8 lg:mt-0">
          <div className="mr-4">
            <Button variant="outlined" onClick={downloadCV}>
              Download CV
            </Button>
          </div>
          <Link href={'#projects'}>
            <Button variant="contained">Projects</Button>
          </Link>
        </div>
      </div>
      <div className="h-fit lg:h-full w-full max-w-[450px] md:m-[0_auto] lg:m-0">
        <Image
          src={introAnimation}
          layout={'responsive'}
          height={175}
          width={175}
          alt={`Intro animation`}
          unoptimized={true}
        />
      </div>
      <div className="absolute bottom-4 text-slate-500 left-1/2 transform -translate-x-1/2">
        <IoIosArrowDown size={30} className="mb-[-20px] animate-pulse" />
        <IoIosArrowDown size={30} className="animate-pulse" />
      </div>
    </section>
  )
}
