import { Project, Experience, Education, Skill, Contribution } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI and payment integration',
    longDescription: 'A comprehensive e-commerce platform built with Next.js, featuring real-time inventory management, secure payment processing with Stripe, and an intuitive admin dashboard. The platform supports multiple payment methods and includes advanced features like wishlist, product reviews, and order tracking.',
    image: '/projects/ecommerce.jpg',
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
    liveUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/biplobmolla/ecommerce-platform',
    featured: true,
    category: 'web'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates and team features',
    longDescription: 'A modern task management application with real-time collaboration features, drag-and-drop functionality, and team management capabilities. Built with React and Socket.io for real-time updates, featuring Kanban boards, time tracking, and project analytics.',
    image: '/projects/taskmanager.jpg',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'Material-UI'],
    liveUrl: 'https://taskmanager-demo.vercel.app',
    githubUrl: 'https://github.com/biplobmolla/task-manager',
    featured: true,
    category: 'web'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with location-based forecasts',
    longDescription: 'A beautiful weather dashboard featuring interactive maps, detailed forecasts, and location-based weather data. Includes historical weather data, severe weather alerts, and customizable widgets for different weather parameters.',
    image: '/projects/weather.jpg',
    techStack: ['Vue.js', 'D3.js', 'OpenWeather API', 'PWA', 'Service Workers'],
    liveUrl: 'https://weather-dashboard.vercel.app',
    githubUrl: 'https://github.com/biplobmolla/weather-dashboard',
    featured: false,
    category: 'web'
  },
  {
    id: '4',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication',
    longDescription: 'A comprehensive mobile banking application with advanced security features including biometric authentication, transaction encryption, and fraud detection. Features include account management, money transfers, bill payments, and investment tracking.',
    image: '/projects/banking.jpg',
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Biometric Auth'],
    liveUrl: undefined,
    githubUrl: 'https://github.com/biplobmolla/mobile-banking',
    featured: true,
    category: 'mobile'
  }
]

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechCorp Solutions',
    position: 'Senior Frontend Developer',
    startDate: '2022-01-01',
    endDate: '2024-12-31',
    description: [
      'Led development of customer-facing web applications serving 100k+ users',
      'Implemented responsive designs and optimized performance by 40%',
      'Mentored junior developers and established coding standards',
      'Collaborated with UX/UI designers to create intuitive user experiences'
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'GraphQL'],
    current: false
  },
  {
    id: '2',
    company: 'StartupXYZ',
    position: 'Full Stack Developer',
    startDate: '2020-06-01',
    endDate: '2021-12-31',
    description: [
      'Built end-to-end web applications from scratch',
      'Designed and implemented RESTful APIs',
      'Integrated third-party services and payment gateways',
      'Optimized database queries and improved application performance'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS'],
    current: false
  },
  {
    id: '3',
    company: 'Freelance',
    position: 'Frontend Developer',
    startDate: '2019-01-01',
    endDate: '2020-05-31',
    description: [
      'Developed custom websites for small to medium businesses',
      'Created responsive designs and mobile-first applications',
      'Implemented SEO best practices and performance optimization',
      'Maintained and updated existing client websites'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    current: false
  }
]

export const education: Education[] = [
  {
    id: '1',
    institution: 'University of Technology',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2015-09-01',
    endDate: '2019-06-01',
    description: 'Focused on software engineering, algorithms, and web development. Graduated with honors.',
    current: false
  },
  {
    id: '2',
    institution: 'Online Learning Platform',
    degree: 'Certification',
    field: 'Full Stack Web Development',
    startDate: '2020-01-01',
    endDate: '2020-06-01',
    description: 'Comprehensive course covering modern web development technologies and best practices.',
    current: false
  }
]

export const skills: Skill[] = [
  // Frontend Skills
  { id: '1', name: 'React', level: 95, category: 'frontend', icon: '⚛️' },
  { id: '2', name: 'TypeScript', level: 90, category: 'frontend', icon: '📘' },
  { id: '3', name: 'Next.js', level: 88, category: 'frontend', icon: '▲' },
  { id: '4', name: 'Vue.js', level: 85, category: 'frontend', icon: '💚' },
  { id: '5', name: 'TailwindCSS', level: 92, category: 'frontend', icon: '🎨' },
  { id: '6', name: 'JavaScript', level: 95, category: 'frontend', icon: '🟨' },
  
  // Backend Skills
  { id: '7', name: 'Node.js', level: 88, category: 'backend', icon: '🟢' },
  { id: '8', name: 'Python', level: 80, category: 'backend', icon: '🐍' },
  { id: '9', name: 'PostgreSQL', level: 85, category: 'backend', icon: '🐘' },
  { id: '10', name: 'MongoDB', level: 82, category: 'backend', icon: '🍃' },
  { id: '11', name: 'GraphQL', level: 78, category: 'backend', icon: '🔷' },
  
  // Tools
  { id: '12', name: 'Git', level: 90, category: 'tools', icon: '📚' },
  { id: '13', name: 'Docker', level: 75, category: 'tools', icon: '🐳' },
  { id: '14', name: 'AWS', level: 70, category: 'tools', icon: '☁️' },
  { id: '15', name: 'Figma', level: 85, category: 'tools', icon: '🎨' }
]

export const contributions: Contribution[] = [
  {
    id: '1',
    repository: 'react-awesome-components',
    description: 'A collection of reusable React components with TypeScript support',
    url: 'https://github.com/biplobmolla/react-awesome-components',
    language: 'TypeScript',
    stars: 245,
    forks: 32
  },
  {
    id: '2',
    repository: 'nextjs-boilerplate',
    description: 'Production-ready Next.js boilerplate with best practices',
    url: 'https://github.com/biplobmolla/nextjs-boilerplate',
    language: 'TypeScript',
    stars: 189,
    forks: 28
  },
  {
    id: '3',
    repository: 'tailwind-animations',
    description: 'Custom TailwindCSS animation utilities and components',
    url: 'https://github.com/biplobmolla/tailwind-animations',
    language: 'CSS',
    stars: 156,
    forks: 19
  },
  {
    id: '4',
    repository: 'portfolio-template',
    description: 'Modern portfolio website template with animations',
    url: 'https://github.com/biplobmolla/portfolio-template',
    language: 'TypeScript',
    stars: 98,
    forks: 15
  }
]

export const personalInfo = {
  name: 'Biplob Molla',
  title: 'Frontend Developer',
  subtitle: 'Creating beautiful, interactive web experiences',
  bio: 'Passionate frontend developer with 5+ years of experience building modern web applications. I love creating intuitive user interfaces and smooth user experiences. When I\'m not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.',
  location: 'Dhaka, Bangladesh',
  email: 'biplob.molla@email.com',
  phone: '+880 1234 567890',
  github: 'https://github.com/biplobmolla',
  linkedin: 'https://linkedin.com/in/biplobmolla',
  twitter: 'https://twitter.com/biplobmolla',
  website: 'https://biplobmolla.dev'
}
