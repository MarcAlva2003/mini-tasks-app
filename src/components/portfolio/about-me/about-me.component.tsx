import Image from 'next/image'
import profileImage from '@/assets/profile-images/profile-picture-gradiant-fit.png'

export const AboutMe = () => {
  return (
    <section className="w-full h-[calc(100vh-64px)] flex items-center justify-around">
      <div className="w-[700px]">
        <h3 className="text-[44px] font-semibold mb-8">About Me</h3>
        <p className='text-sm leading-[24px]'>{`I'm a Frontend Developer with over two years of experience. I've built and integrated numerous web applications using Next.js and Typescript as my primary tools, following the SCRUM methodology for project management. I'm a logical thinker, a quick learner, and highly adaptable to different work environments. I'm dedicated to delivering high-quality work and committed to seeing every task through to completion. When faced with challenges during development, I proactively research, consult documentation, and conduct thorough testing to find optimal and scalable solutions. While my expertise lies in Frontend development, I'm currently expanding my skillset into Backend technologies like Node.js and Express to become a MERN FullStack Web Developer.`}</p>
      </div>
      <div className="h-full">
        <div className="w-[420px] h-full flex items-center">
          <Image alt={`profile-picture`} objectFit="contain" width={350} src={profileImage} />
        </div>
      </div>
    </section>
  )
}
