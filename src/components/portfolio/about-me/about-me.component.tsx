import Image from 'next/image'
import introAnimation from '@/assets/lottie/intro-animation.gif'

export const AboutMe = () => {

  const aboutMeText = [
    {
      title: 'Technical Stack & Experience',
      desc: 'Frontend Developer with ~3 years of professional experience building scalable web and mobile applications using React, Next.js, and React Native with TypeScript. Strong focus on clean architecture, component reusability, and maintainable code following SOLID, KISS, and DRY principles. Hands-on experience integrating REST APIs, managing global state (Context, Redux), optimizing performance, and deploying on Vercel. Currently expanding full-stack capabilities by learning Node.js and NestJS to become a well-rounded engineer.'
    },
    {
      title: 'Goals & Aspirations',
      desc: 'Driven to grow into a Full-Stack Developer by deepening backend knowledge and building end-to-end applications prioritizing software quality, scalability, and improving both technical and product understanding. Motivated by challenging projects, clean code, and delivering real-world impact through technology.'
    },
    {
      title: 'Soft Skills & Approach',
      desc: 'Curious, analytical, and highly adaptable, with a strong learning mindset. Proactive problem-solver who enjoys debugging, researching, and validating solutions through testing. Clear communicator and team-oriented mindset — values collaboration, constructive feedback, and shared growth. Consistently focused on writing clean, scalable, and maintainable code while keeping a user-centric perspective.'
    }
  ]

  return (
    <section id={'about-me'} className="pt-20">
      <h3 className="text-left lg:text-left text-[44px] font-semibold">About Me</h3>
      <div className="md:flex md:flex-row-reverse md:items-center">
        <div className="w-full md:w-[40%] md:ml-12">
          <Image
            src={introAnimation}
            layout={'responsive'}
            height={220}
            width={220}
            alt={`Intro animation`}
            unoptimized={true}
          />
        </div>
        <div className="p-3 md:p-6 bg-slate-800 text-black rounded-[8px] h-fit md:w-[60%]">
          {aboutMeText.map((item, index) => (
            <div key={`about-me-subitem-${index}`} className="mb-4 md:mb-8 last:mb-0">
              <div>
                <div className="flex items-center">
                  <h4 className="text-[#90caf9] font-bold text-lg mr-2">{item.title}</h4>
                </div>
              </div>
              <div>
                <p className="text-gray-200 text-sm pl-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
