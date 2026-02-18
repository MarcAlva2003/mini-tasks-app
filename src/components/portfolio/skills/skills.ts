import { IconType } from 'react-icons'
import {
  SiHtml5, SiReact, SiNextdotjs, SiJavascript, SiTypescript,
  SiMui, SiTailwindcss, SiStyledcomponents, SiStorybook,
  SiGit, SiGithub, SiVercel, SiNodedotjs,
  SiClaude,
} from 'react-icons/si'
import {
  TbApi, TbWorldWww, TbBrandReactNative,
} from 'react-icons/tb'
import {
  FiLayers, FiRepeat, FiCpu, FiBox,
} from 'react-icons/fi'
import {
  HiOutlineLightBulb, HiOutlineUsers, HiOutlineAdjustmentsHorizontal,
  HiOutlineChatBubbleLeftRight, HiOutlineAcademicCap, HiOutlinePuzzlePiece,
} from 'react-icons/hi2'
import { TbTransferIn } from 'react-icons/tb'

export interface ISkill {
  name: string
  level: number
  description?: string
  id: string
  icon?: IconType
}

export interface ISkillSection {
  id: string
  section: string
  items: ISkill[]
}

export const skillsData: ISkillSection[] = [
  {
    id: 'frontend',
    section: 'Frontend',
    items: [
      {
        name: 'HTML & CSS',
        id: 'html-css',
        level: 90,
        icon: SiHtml5,
        description: 'Strong foundation in modern semantic HTML and responsive CSS. Experience building scalable UI layouts and component-based interfaces for production environments.'
      },
      {
        name: 'React',
        id: 'react',
        level: 85,
        icon: SiReact,
        description:
          'Primary framework used across professional projects. Built complex, scalable web apps with reusable components, hooks, context, performance optimization, and clean architecture principles.'
      },
      {
        name: 'Next.js',
        id: 'nextjs',
        level: 80,
        icon: SiNextdotjs,
        description:
          'Developed multiple production apps with server-side rendering, API routes, authentication, and optimized deployments. Experience with both Next 13+ App Router and legacy Pages Router.'
      },
      {
        name: 'React Native',
        id: 'react-native',
        level: 60,
        icon: TbBrandReactNative,
        description:
          'Built cross-platform mobile applications for iOS and Android, integrating native modules, secure auth flows, biometrics, and real-time features.'
      },
      {
        name: 'JavaScript (ES6+)',
        id: 'javascript',
        level: 90,
        icon: SiJavascript,
        description:
          'Deep understanding of modern JavaScript features, async programming, and DOM manipulation in real-world production environments.'
      },
      {
        name: 'TypeScript',
        id: 'typescript',
        level: 80,
        icon: SiTypescript,
        description:
          'Daily use of strongly typed components, custom types, generics, and improved DX practices to ensure scalability and maintainability.'
      },
    ]
  },
  {
    id: 'frameworks-libraries',
    section: 'Frameworks/Libraries',
    items: [
      {
        name: 'Material UI (MUI)',
        id: 'mui',
        level: 80,
        icon: SiMui,
        description:
          'Used MUI to build a production-ready UI experience, leveraging pre-built components, theme customization, responsive layouts, and accessibility-friendly design patterns.'
      },
      {
        name: 'Tailwind CSS',
        id: 'tailwind',
        level: 80,
        icon: SiTailwindcss,
        description: 'Used for rapid styling and consistent UI across web projects. Experience building component libraries and responsive UI systems.'
      },
      {
        name: 'Styled Components',
        id: 'styled-components',
        level: 80,
        icon: SiStyledcomponents,
        description: 'Used for dynamic styles, theme-based UI systems, and creating scalable design structures in production apps.'
      },
      {
        name: 'Storybook',
        id: 'storybook',
        level: 50,
        icon: SiStorybook,
        description:
          'Built reusable UI libraries and documented component behavior, improving design consistency and team collaboration.'
      }
    ]
  },
  {
    id: 'architecture-principles',
    section: 'Architecture & Principles',
    items: [
      {
        name: 'SOLID & Clean Code',
        id: 'solid-clean-code',
        level: 70,
        icon: FiLayers,
        description:
          'Applied SOLID, Clean Code, and modular design patterns across professional projects for reliability, testability, and long-term maintainability.'
      },
      {
        name: 'KISS & DRY',
        id: 'kiss-dry',
        level: 85,
        icon: FiRepeat,
        description:
          'Consistently apply simplicity and reusability principles to avoid complexity and improve code quality.'
      },
      {
        name: 'Component Reusability',
        id: 'component-reusability',
        level: 90,
        icon: FiBox,
        description:
          'Created scalable UI systems and reusable components across web and mobile applications.'
      },
      {
        name: 'React Context',
        id: 'react-context',
        level: 90,
        icon: FiCpu,
        description:
          'Extensive use for global state, authentication flows, and shared business logic across React and Next.js apps.'
      }
    ]
  },
  {
    id: 'apis-backend',
    section: 'APIs/Backend',
    items: [
      {
        name: 'REST APIs',
        id: 'rest-apis',
        level: 90,
        icon: TbApi,
        description:
          'Built and consumed REST APIs with secure data flows, error handling, and token-based authentication.'
      },
      {
        name: 'HTTP Requests',
        id: 'http-requests',
        level: 90,
        icon: TbWorldWww,
        description: 'Deep experience managing async requests, retries, caching, and optimizing API communication in real projects.'
      },
      {
        name: 'React Query',
        id: 'react-query',
        level: 80,
        icon: SiReact,
        description:
          'Used for real-time data fetching, caching, and optimistic updates in production environments.'
      },
      {
        name: 'Axios',
        id: 'axios',
        level: 80,
        icon: TbTransferIn,
        description: 'Daily use to integrate and abstract API logic, handle interceptors, and manage secure API calls.'
      },
      {
        name: 'Node.js & NestJS',
        id: 'nodejs-nestjs',
        level: 30,
        icon: SiNodedotjs,
        description:
          'Currently building foundations toward full-stack development. Hands-on experience with Node.js and actively learning NestJS.'
      },
    ]
  },
  {
    id: 'tooling',
    section: 'Tooling',
    items: [
      {
        name: 'Git',
        id: 'git',
        level: 75,
        icon: SiGit,
        description: 'Comfortable with branching strategies, code reviews, and collaborative workflows.'
      },
      {
        name: 'Github & Gitlab',
        id: 'github-gitlab',
        level: 80,
        icon: SiGithub,
        description:
          'Experience in CI/CD workflows, version control, code reviews, and project collaboration.'
      },
      {
        name: 'Vercel',
        id: 'vercel',
        level: 65,
        icon: SiVercel,
        description:
          'Frequent deployments of production projects using Vercel build pipelines and serverless functions.'
      },
      {
        name: 'Agile/Scrum',
        id: 'agile-scrum',
        level: 85,
        icon: HiOutlineAdjustmentsHorizontal,
        description:
          'Experience working in iterative development cycles, sprint planning, daily stand-ups, and cross-team collaboration.'
      },
    ]
  },
  {
    id: 'soft-skills',
    section: 'Soft Skills',
    items: [
      {
        name: 'Problem-solving',
        id: 'problem-solving',
        level: 95,
        icon: HiOutlineLightBulb,
        description:
          'Strong debugging mindset, proactive issue resolution, and ability to navigate unclear requirements.'
      },
      {
        name: 'Teamwork',
        id: 'teamwork',
        level: 90,
        icon: HiOutlineUsers,
        description:
          'Collaborative approach, active communication, and willingness to support teammates.'
      },
      {
        name: 'Adaptability',
        id: 'adaptability',
        level: 90,
        icon: HiOutlinePuzzlePiece,
        description:
          'Ability to learn quickly, embrace new technologies, and adjust to evolving requirements.'
      },
      {
        name: 'Analytical Thinking',
        id: 'analytical-thinking',
        level: 90,
        icon: FiCpu,
        description:
          'Structured thinking for breaking down complex problems, optimizing workflows, and improving system architecture.'
      },
      {
        name: 'Communication',
        id: 'communication',
        level: 85,
        icon: HiOutlineChatBubbleLeftRight,
        description:
          'Clear communicator able to explain technical concepts to both technical and non-technical audiences.'
      },
      {
        name: 'Continuous Learning',
        id: 'continuous-learning',
        level: 100,
        icon: HiOutlineAcademicCap,
        description:
          'Actively learning advanced backend, architecture patterns, and full-stack fundamentals to evolve tech capabilities.'
      },
    ]
  },
  {
    id: 'ai-implementations',
    section: 'AI',
    items: [
      {
        id: 'claude-code',
        name: 'Claude Code',
        level: 70,
        icon: SiClaude,
        description: 'Used Claude Code (and its agents & skills) to generate code, debug issues, and improve code quality.'
      }
    ],
  }
]
