import { v4 as uuidv4 } from 'uuid'

export interface ISkill {
  name: string
  level: number
  description?: string
  id: string
}

export interface ISkillSection {
  id: string
  section: string
  items: ISkill[]
}

export const skillsData: ISkillSection[] = [
  {
    id: uuidv4(),
    section: 'Languages',
    items: [
      {
        name: 'TypeScript',
        id: uuidv4(),
        level: 95,
        description:
          'Experience in complex projects with TypeScript, including advanced typing, generics, and interface-oriented programming.'
      },
      {
        name: 'JavaScript (ES6+)',
        id: uuidv4(),
        level: 90,
        description:
          'Solid knowledge of modern JavaScript, including async, promises, object-oriented programming, and design patterns.'
      },
      {
        name: 'HTML',
        id: uuidv4(),
        level: 90,
        description: 'Mastery of HTML5 and semantics to create accessible and SEO-optimized web structures.'
      },
      {
        name: 'CSS',
        id: uuidv4(),
        level: 85,
        description:
          'Knowledge of CSS3 and preprocessors like Sass or Less. Experience in responsive design and style frameworks like Tailwind CSS and Styled Components.'
      }
    ]
  },
  {
    id: uuidv4(),
    section: 'Frontend Frameworks/Libraries',
    items: [
      {
        name: 'Next.js',
        id: uuidv4(),
        level: 95,
        description:
          'Experience in Next.js 13, 14, and 15, including Server-Side Rendering (SSR), Static Site Generation (SSG), API Routes, performance optimization, and deployment strategies.'
      },
      {
        name: 'React',
        id: uuidv4(),
        level: 90,
        description:
          'Extensive experience in developing reusable components, state management with React Hooks and Context API, and optimizing React application performance.'
      },
      {
        name: 'Material UI (MUI)',
        id: uuidv4(),
        level: 85,
        description:
          'Efficient use of Material UI components to create attractive and accessible user interfaces. Customization of themes and components.'
      },
      {
        name: 'Tailwind CSS',
        id: uuidv4(),
        level: 90,
        description:
          'Experience using Tailwind CSS to quickly style web applications with a utility-first approach.'
      },
      {
        name: 'Styled Components',
        id: uuidv4(),
        level: 85,
        description: 'Knowledge of Styled Components to create styled and reusable components in React.'
      },
      {
        name: 'Storybook',
        id: uuidv4(),
        level: 80,
        description:
          'Using Storybook to create and maintain reusable component libraries, facilitating development and documentation.'
      }
    ]
  },
  {
    id: uuidv4(),
    section: 'State Management',
    items: [
      {
        name: 'React Context',
        id: uuidv4(),
        level: 90,
        description:
          'Experience in managing state in React applications using the Context API for shared data across the application.'
      },
      {
        name: 'Redux',
        id: uuidv4(),
        level: 80,
        description:
          'Knowledge of Redux for global state management in complex React applications, including the use of actions, reducers, and selectors.'
      },
      {
        name: 'React Query',
        id: uuidv4(),
        level: 85,
        description:
          'Experience using React Query to manage and cache asynchronous data in React applications, optimizing performance and user experience.'
      }
    ]
  },
  {
    id: uuidv4(),
    section: 'APIs/Backend',
    items: [
      {
        name: 'REST APIs',
        id: uuidv4(),
        level: 85,
        description:
          'Understanding of REST API principles and their implementation. Experience in consuming RESTful APIs from the frontend.'
      },
      {
        name: 'HTTP Requests',
        id: uuidv4(),
        level: 90,
        description:
          'Mastery of HTTP requests and methods (GET, POST, PUT, DELETE). Handling responses and errors.'
      },
      {
        name: 'Axios',
        id: uuidv4(),
        level: 85,
        description:
          'Using the Axios library to make HTTP requests from the frontend easily and efficiently.'
      },
      {
        name: 'Node.js',
        id: uuidv4(),
        level: 60,
        description:
          'Basic knowledge of Node.js and its use for backend development. (Mention that you are in the process of learning and expanding your skills in this field).'
      },
      {
        name: 'Express',
        id: uuidv4(),
        level: 60,
        description:
          'Basic knowledge of Express.js and its use for creating APIs and web servers. (Mention that you are in the process of learning and expanding your skills in this field).'
      }
    ]
  },
  {
    id: uuidv4(),
    section: 'Authentication',
    items: [
      {
        name: 'Auth0',
        id: uuidv4(),
        level: 80,
        description:
          'Experience integrating Auth0 for user authentication and authorization in web applications.'
      },
      {
        name: 'JWT (JSON Web Tokens)',
        id: uuidv4(),
        level: 85,
        description:
          'Understanding how JWTs work and their use for authentication and authorization in web applications.'
      },
      {
        name: 'React Cookies',
        id: uuidv4(),
        level: 80,
        description: 'Using React Cookies to manage cookies in React applications.'
      }
    ]
  },
  {
    id: uuidv4(),
    section: 'Tools',
    items: [
      {
        name: 'Git',
        id: uuidv4(),
        level: 95,
        description: 'Mastery of Git for version control and collaboration on projects.'
      },
      {
        name: 'GitHub',
        id: uuidv4(),
        level: 95,
        description:
          'Using GitHub for repository management, pull requests, issues, and other collaboration features.'
      },
      {
        name: 'Vercel',
        id: uuidv4(),
        level: 90,
        description:
          'Experience deploying web applications on Vercel, including domain configuration and environment management.'
      },
      {
        name: 'Trello',
        id: uuidv4(),
        level: 80,
        description: 'Using Trello for project and task management, following the SCRUM methodology.'
      }
    ]
  },
  {
    id: uuidv4(),
    section: 'Others',
    items: [
      {
        name: 'Day.js',
        id: uuidv4(),
        level: 85,
        description: 'Using Day.js for date and time manipulation and formatting in web applications.'
      },
      {
        name: 'SwiperJS',
        id: uuidv4(),
        level: 80,
        description: 'Experience using SwiperJS to create sliders and carousels in web applications.'
      },
      {
        name: 'React Hook Form',
        id: uuidv4(),
        level: 90,
        description:
          'Using React Hook Form to create forms in React easily and efficiently, including validation and error handling.'
      },
      {
        name: 'React Icons',
        id: uuidv4(),
        level: 85,
        description: 'Using React Icons to integrate icons into React applications.'
      },
      {
        name: 'GSAP (GreenSock Animation Platform)',
        id: uuidv4(),
        level: 80,
        description: 'Basic knowledge of GSAP for creating animations in web applications.'
      },
      {
        name: 'React Charts',
        id: uuidv4(),
        level: 80,
        description: 'Using React Charts to create interactive charts and dashboards in web applications.'
      }
    ]
  },
  {
    id: uuidv4(),
    section: 'Methodologies',
    items: [
      {
        name: 'SCRUM',
        id: uuidv4(),
        level: 85,
        description:
          'Experience working with the SCRUM methodology for project management and team collaboration.'
      }
    ]
  },
  {
    id: uuidv4(),
    section: 'Soft Skills',
    items: [
      {
        name: 'Problem-solving',
        id: uuidv4(),
        level: 90,
        description:
          'Ability to analyze complex problems, identify root causes, and find effective and scalable solutions. Experience using problem-solving methodologies and debugging tools.'
      },
      {
        name: 'Teamwork',
        id: uuidv4(),
        level: 90,
        description:
          'Ability to collaborate in multidisciplinary teams, communicating ideas clearly and constructively. Experience using collaboration tools and agile methodologies.'
      },
      {
        name: 'Adaptability',
        id: uuidv4(),
        level: 90,
        description:
          'Ability to adapt to different work environments, technologies, and projects. Flexibility to learn new skills and tools as needed.'
      },
      {
        name: 'Fast Learning',
        id: uuidv4(),
        level: 95,
        description:
          'Ease of acquiring new skills and technical knowledge autonomously and efficiently. Motivation for continuous learning and knowledge updating.'
      },
      {
        name: 'Communication',
        id: uuidv4(),
        level: 85,
        description:
          'Ability to communicate clearly and effectively, both orally and in writing. Ability to explain technical concepts to non-technical audiences.'
      },
      {
        name: 'Organization',
        id: uuidv4(),
        level: 85,
        description:
          'Ability to organize tasks and projects efficiently, prioritizing activities and meeting deadlines. Use of project management tools and agile methodologies.'
      },
      {
        name: 'Creativity',
        id: uuidv4(),
        level: 80,
        description:
          'Ability to generate original ideas and innovative solutions. Focus on continuous improvement and finding new ways to solve problems.'
      },
      {
        name: 'Leadership',
        id: uuidv4(),
        level: 75,
        description:
          'Ability to lead teams and projects, motivating members and guiding them towards achieving common goals. Experience in decision-making and conflict management.'
      },
      {
        name: 'Critical Thinking',
        id: uuidv4(),
        level: 85,
        description:
          'Ability to analyze information objectively and evaluate different perspectives. Ability to identify biases and make informed decisions.'
      },
      {
        name: 'Time Management',
        id: uuidv4(),
        level: 80,
        description:
          'Ability to manage time effectively, prioritizing tasks and meeting deadlines. Use of time management techniques and productivity tools.'
      }
    ]
  }
]
