import Image from 'next/image'
import introAnimation from '@/assets/lottie/intro-animation.gif'

export const AboutMe = () => {

  const aboutMeText = [
    {
      title: 'Technical Stack & Experience',
      desc: '2+ years as a Frontend Developer building and integrating web apps with Next.js and TypeScript, using SCRUM.  Currently learning Node.js/Express for MERN FullStack development.'
    },
    {
      title: 'Goals & Aspirations',
      desc: 'Aspiring MERN FullStack Developer.  Actively learning Node.js and Express to complement frontend expertise. Passionate about building high-quality, scalable web applications.'
    },
    {
      title: 'Soft Skills & Approach',
      desc: 'Logical, quick learner, adaptable, and dedicated to delivering high-quality work. Proactive problem-solver: researches, consults documentation, and tests to find optimal solutions.'
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
        <div className="p-3 md:p-6 bg-[#90caf9] text-black rounded-[8px] h-fit md:w-[60%]">
          {aboutMeText.map((item, index) => (
            <div key={`about-me-subitem-${index}`} className="mb-4 md:mb-8 last:mb-0">
              <div>
                <div className="flex items-center">
                  <h4 className="font-bold text-lg mr-2">{item.title}</h4>
                </div>
              </div>
              <div>
                <p className="text-gray-700 text-sm pl-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
