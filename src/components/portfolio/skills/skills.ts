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
    section: 'Frontend',
    items: [
      {
        name: 'HTML & CSS',
        id: uuidv4(),
        level: 90,
        description: 'Strong foundation in modern semantic HTML and responsive CSS. Experience building scalable UI layouts and component-based interfaces for production environments.'
      },
      {
        name: 'React',
        id: uuidv4(),
        level: 85,
        description:
          'Primary framework used across professional projects. Built complex, scalable web apps with reusable components, hooks, context, performance optimization, and clean architecture principles.'
      },
      {
        name: 'Next.js',
        id: uuidv4(),
        level: 80,
        description:
          'Developed multiple production apps with server-side rendering, API routes, authentication, and optimized deployments. Experience with both Next 13+ App Router and legacy Pages Router.'
      },
      {
        name: 'React Native',
        id: uuidv4(),
        level: 60,
        description:
          'Built cross-platform mobile applications for iOS and Android, integrating native modules, secure auth flows, biometrics, and real-time features.'
      },
      {
        name: 'JavaScript (ES6+)',
        id: uuidv4(),
        level: 90,
        description:
          'Deep understanding of modern JavaScript features, async programming, and DOM manipulation in real-world production environments.'
      },
      {
        name: 'TypeScript',
        id: uuidv4(),
        level: 80,
        description:
          'Daily use of strongly typed components, custom types, generics, and improved DX practices to ensure scalability and maintainability.'
      },
    ]
  },
  {
    id: uuidv4(),
    section: 'Frameworks/Libraries',
    items: [
      {
        name: 'Material UI (MUI)',
        id: uuidv4(),
        level: 80,
        description:
          'Used MUI to build a production-ready UI experience, leveraging pre-built components, theme customization, responsive layouts, and accessibility-friendly design patterns. Integrated design tokens and component overrides to maintain a consistent visual identity while accelerating development.'
      },
      {
        name: 'Tailwind CSS',
        id: uuidv4(),
        level: 80,
        description: 'Used for rapid styling and consistent UI across web projects. Experience building component libraries and responsive UI systems.'
      },
      {
        name: 'Styled Components',
        id: uuidv4(),
        level: 80,
        description: 'Used for dynamic styles, theme-based UI systems, and creating scalable design structures in production apps.'
      },
      {
        name: 'Storybook',
        id: uuidv4(),
        level: 50,
        description:
          'Built reusable UI libraries and documented component behavior, improving design consistency and team collaboration.'
      }
    ]
  },
  {
    id: uuidv4(),
    section: 'Architecture & Principles',
    items: [
      {
        name: 'SOLID & Clean Code',
        id: uuidv4(),
        level: 70,
        description:
          'Applied SOLID, Clean Code, and modular design patterns across professional projects for reliability, testability, and long-term maintainability.'
      },
      {
        name: 'KISS & DRY',
        id: uuidv4(),
        level: 85,
        description:
          'Consistently apply simplicity and reusability principles to avoid complexity and improve code quality.'
      },
      {
        name: 'Component Reusability',
        id: uuidv4(),
        level: 90,
        description:
          'Created scalable UI systems and reusable components across web and mobile applications.'
      },
      {
        name: 'React Context',
        id: uuidv4(),
        level: 90,
        description:
          'Extensive use for global state, authentication flows, and shared business logic across React and Next.js apps.'
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
        level: 90,
        description:
          'Built and consumed REST APIs with secure data flows, error handling, and token-based authentication.'
      },
      {
        name: 'HTTP Requests',
        id: uuidv4(),
        level: 90,
        description: 'Deep experience managing async requests, retries, caching, and optimizing API communication in real projects.'
      },
      {
        name: 'React Query',
        id: uuidv4(),
        level: 80,
        description:
          'Used for real-time data fetching, caching, and optimistic updates in production environments.'
      },
      {
        name: 'Axios',
        id: uuidv4(),
        level: 80,
        description: 'Daily use to integrate and abstract API logic, handle interceptors, and manage secure API calls.'
      },
      {
        name: 'Node.js & NestJS',
        id: uuidv4(),
        level: 30,
        description:
          'Currently building foundations toward full-stack development. Hands-on experience with Node.js and actively learning NestJS.'
      },
    ]
  },
  {
    id: uuidv4(),
    section: 'Tooling',
    items: [
      {
        name: 'Git',
        id: uuidv4(),
        level: 75,
        description: 'Comfortable with branching strategies, code reviews, and collaborative workflows.'
      },
      {
        name: 'Github & Gitlab',
        id: uuidv4(),
        level: 80,
        description:
          'Experience in CI/CD workflows, version control, code reviews, and project collaboration.'
      },
      {
        name: 'Vercel',
        id: uuidv4(),
        level: 65,
        description:
          'Frequent deployments of production projects using Vercel’s build pipelines and serverless functions.'
      },
      {
        name: 'Agile/Scrum',
        id: uuidv4(),
        level: 85,
        description:
          'Experience working in iterative development cycles, sprint planning, daily stand-ups, and cross-team collaboration.'
      },
    ]
  },
  {
    id: uuidv4(),
    section: 'Soft Skills',
    items: [
      {
        name: 'Problem-solving',
        id: uuidv4(),
        level: 95,
        description:
          'Strong debugging mindset, proactive issue resolution, and ability to navigate unclear requirements.'
      },
      {
        name: 'Teamwork',
        id: uuidv4(),
        level: 90,
        description:
          'Collaborative approach, active communication, and willingness to support teammates.'
      },
      {
        name: 'Adaptability',
        id: uuidv4(),
        level: 90,
        description:
          'Ability to learn quickly, embrace new technologies, and adjust to evolving requirements.'
      },
      {
        name: 'Analytical Thinking',
        id: uuidv4(),
        level: 90,
        description:
          'Structured thinking for breaking down complex problems, optimizing workflows, and improving system architecture.'
      },
      {
        name: 'Communication',
        id: uuidv4(),
        level: 85,
        description:
          'Clear communicator able to explain technical concepts to both technical and non-technical audiences.'
      },
      {
        name: 'Continuous Learning',
        id: uuidv4(),
        level: 100,
        description:
          'Actively learning advanced backend, architecture patterns, and full-stack fundamentals to evolve tech capabilities.'
      },
    ]
  },
]
