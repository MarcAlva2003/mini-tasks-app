import { Button } from '@mui/material'
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link'
import profilePicture from '@/assets/profile-images/profile-picture-background.jpeg'

export const Introduction = () => {
  const downloadCV = () => {
    const link = document.createElement('a')
    const url = `/cv/CV_Alvarez_Marcos_Frontend_Developer.pdf`
    link.href = url
    link.download = 'CV_Alvarez_Marcos_Frontend_Developer.pdf'
    link.click()
  }

  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col justify-center  md:h-[calc(100vh-64px)] py-5 lg:py-20 lg:flex-row lg:items-center lg:justify-between relative">
      <div className="lg:w-[50%]">
        <div className="text-center lg:text-left">
          <p className="text-3xl mb-4 hidden lg:block">
            ÁLVAREZ <b>MARCOS</b>
          </p>

          <h1 className="font-semibold leading-[56px] text-[50px] md:text-[80px] lg:leading-[60px]">FRONTEND</h1>
          <h1 className="font-semibold text-[50px] md:text-[80px]">DEVELOPER</h1>
          <p className="mb-10 text-ms md:text-xl">
            <span className="text-[#90caf9]">3 years</span> of experience creating clean <br /> and scalable code for
            web and mobile applications,
            <br />
            with <span className="text-[#90caf9]">Next.Js</span> and <span className="text-[#90caf9]">Typescript</span>
          </p>
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
      <div className="lg:w-[50%] flex justify-center items-center">
        <div className="mt-10 lg:mt-0 w-[220px] h-[300px] lg:w-[300px] lg:h-[350px] xl:w-[360px] xl:h-[420px] 3xl:w-[450px] 3xl:h-[580px] relative rounded-[12px] overflow-hidden rotate-[3deg]">
          <Image
            src={profilePicture}
            fill
            alt={`Intro animation`}
            sizes="100vw"
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
      <div className="absolute bottom-4 text-slate-500 left-1/2 transform -translate-x-1/2">
        <IoIosArrowDown size={30} className="mb-[-20px] animate-pulse" />
        <IoIosArrowDown size={30} className="animate-pulse" />
      </div>
    </section>
  )
}
