import { Project, Experience, Education, Skill, Contribution } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Marketplace Client',
    description: 'University-focused job marketplace with modern UI and seamless user experience',
    longDescription: 'A comprehensive job marketplace platform designed specifically for university students and recent graduates. Features include job posting, application tracking, company profiles, and advanced filtering. Built with Next.js App Router for optimal performance and SEO.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
    techStack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'TailwindCSS', 'RTK Query'],
    liveUrl: 'https://marketplace-client.vercel.app',
    githubUrl: 'https://github.com/biplobmolla/marketplace-client',
    featured: true,
    category: 'web'
  },
  {
    id: '2',
    title: 'Ubaky Manager',
    description: 'Restaurant management system with order tracking and inventory management',
    longDescription: 'A comprehensive restaurant management solution featuring real-time order tracking, inventory management, staff scheduling, and analytics dashboard. Built with modern web technologies for optimal performance and user experience.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&crop=center',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Express.js'],
    liveUrl: 'https://ubaky-manager.vercel.app',
    githubUrl: 'https://github.com/biplobmolla/ubaky-manager',
    featured: true,
    category: 'web'
  },
  {
    id: '3',
    title: 'Ubaky Driver App',
    description: 'React Native food ordering and scheduling application for delivery drivers',
    longDescription: 'A mobile application built with React Native for food delivery drivers. Features include order management, route optimization, real-time tracking, and scheduling system. Designed for optimal performance on both iOS and Android platforms.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
    techStack: ['React Native', 'TypeScript', 'Redux Toolkit', 'React Navigation'],
    liveUrl: undefined,
    githubUrl: 'https://github.com/biplobmolla/ubaky-driver',
    featured: true,
    category: 'mobile'
  },
  {
    id: '4',
    title: 'Hackverse',
    description: 'Hackathon platform with event management and participant registration',
    longDescription: 'A comprehensive hackathon platform featuring event creation, participant registration, team formation, and project submission. Includes real-time updates, leaderboards, and judging system. Built with modern web technologies for scalability.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'MongoDB'],
    liveUrl: 'https://hackverse.vercel.app',
    githubUrl: 'https://github.com/biplobmolla/hackverse',
    featured: true,
    category: 'web'
  },
  {
    id: '5',
    title: 'ICPC Regional Website',
    description: 'Registration, payments, and event information for ICPC programming contest',
    longDescription: 'A specialized platform for ICPC (International Collegiate Programming Contest) regional events. Features include participant registration, payment processing, event information, and contest management. Built with focus on performance and user experience.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Stripe', 'Node.js'],
    liveUrl: 'https://icpc-regional.vercel.app',
    githubUrl: 'https://github.com/biplobmolla/icpc-regional',
    featured: false,
    category: 'web'
  }
]

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Marketplace Client',
    position: 'Frontend Engineer (Lead frontend)',
    startDate: '2024-10-01',
    endDate: undefined,
    location: 'Remote / Dhaka',
    description: [
      'Led frontend development using Next.js 15 (App Router), TypeScript, TailwindCSS v4, and Redux Toolkit; implemented modular component architecture and optimized bundle sizes',
      'Designed and implemented job listing search, filtering, and tag-based ranking with RTK Query, improving search speed and UX',
      'Built reusable dashboard components for students and employers, reducing new feature development time by ~35%',
      'Implemented authentication flows and secure client-side session handling with JWT; collaborated with backend team for API contracts',
      'Delivered responsive layouts and accessibility improvements (ARIA labels, keyboard navigation), increasing mobile retention and usability'
    ],
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Redux Toolkit', 'RTK Query', 'JWT'],
    current: true,
    projectType: 'University-focused job marketplace',
    impact: 'Reduced frontend development time for new features by ~35% and improved mobile user engagement through performance and accessibility improvements'
  },
  {
    id: '2',
    company: 'Ubaky Manager',
    position: 'Frontend Developer',
    startDate: '2023-05-01',
    endDate: '2024-09-30',
    location: 'Dhaka',
    description: [
      'Implemented interactive dashboards and reservation flows using React and Redux Toolkit, improving manager workflow efficiency',
      'Built complex forms and role-based UI with React Hook Form and client-side validation, reducing data entry errors by ~25%',
      'Created real-time UI updates and notifications for order status and staff assignments',
      'Integrated reporting charts and export features for daily sales and staff hours'
    ],
    techStack: ['React', 'Redux Toolkit', 'TailwindCSS', 'React Hook Form', 'Chart.js'],
    current: false,
    projectType: 'Restaurant management system',
    impact: 'Reduced manual admin tasks and improved manager productivity; data-entry error rates decreased by ~25%'
  },
  {
    id: '3',
    company: 'Ubaky Driver App',
    position: 'Mobile Frontend Developer',
    startDate: '2023-01-01',
    endDate: '2023-05-31',
    location: 'Remote / Dhaka',
    description: [
      'Developed driver mobile app in React Native (Expo Bare Workflow) with offline-first behavior for intermittent connectivity',
      'Implemented background location tracking, real-time order updates, and job queues; improved delivery ETA accuracy',
      'Integrated EAS build and release pipelines; worked on performance optimizations for low-end devices'
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'EAS Build'],
    current: false,
    projectType: 'Delivery driver mobile application',
    impact: 'Improved delivery reliability and reduced late deliveries via background updates and offline support'
  },
  {
    id: '4',
    company: 'Hackverse',
    position: 'Fullstack/Frontend Developer',
    startDate: '2022-08-01',
    endDate: '2022-12-31',
    location: 'Dhaka',
    description: [
      'Implemented frontend for registration, team formation, and event pages with React and modern UI libraries',
      'Built admin tools for event organizers to manage participants and submissions',
      'Implemented payment integration and secure checkout flows'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TailwindCSS'],
    current: false,
    projectType: 'Hackathon hosting and team-formation platform',
    impact: 'Supported smooth event administration for multiple hackathons and streamlined team formation processes'
  },
  {
    id: '5',
    company: 'ICPC Regional Website',
    position: 'Frontend Developer',
    startDate: '2024-01-01',
    endDate: '2024-04-30',
    location: 'Dhaka',
    description: [
      'Built a performant registration portal and event information site using Next.js and optimized performance for high-traffic registration periods',
      'Implemented payment flows, team dashboards, and confirmation email flows',
      'Ensured reliability during peak registration; implemented monitoring and graceful error handling'
    ],
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Stripe', 'Node.js'],
    current: false,
    projectType: 'ICPC regional website for programming contest',
    impact: 'Sustained stable performance during high-traffic registration windows and supported 310+ team registrations'
  }
]

export const education: Education[] = [
  {
    id: '1',
    institution: 'University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2022-09-01',
    endDate: undefined,
    description: 'Currently pursuing degree in Computer Science. Classes scheduled Sunday-Wednesday.',
    current: true
  }
]

export const skills: Skill[] = [
  // Frontend Skills
  { id: '1', name: 'Next.js', level: 95, category: 'frontend', icon: '▲' },
  { id: '2', name: 'React', level: 95, category: 'frontend', icon: '⚛️' },
  { id: '3', name: 'TypeScript', level: 90, category: 'frontend', icon: '📘' },
  { id: '4', name: 'TailwindCSS', level: 92, category: 'frontend', icon: '🎨' },
  { id: '5', name: 'Redux Toolkit', level: 88, category: 'frontend', icon: '🔄' },
  { id: '6', name: 'RTK Query', level: 85, category: 'frontend', icon: '🔍' },
  { id: '7', name: 'JavaScript', level: 95, category: 'frontend', icon: '🟨' },
  
  // Backend Skills
  { id: '8', name: 'Node.js', level: 75, category: 'backend', icon: '🟢' },
  { id: '9', name: 'Express.js', level: 70, category: 'backend', icon: '🚀' },
  { id: '10', name: 'MongoDB', level: 72, category: 'backend', icon: '🍃' },
  
  // Tools & Libraries
  { id: '11', name: 'Framer Motion', level: 88, category: 'tools', icon: '🎬' },
  { id: '12', name: 'shadcn/ui', level: 90, category: 'tools', icon: '🎨' },
  { id: '13', name: 'React Hook Form', level: 85, category: 'tools', icon: '📝' },
  { id: '14', name: 'Lottie', level: 80, category: 'tools', icon: '✨' },
  { id: '15', name: 'Git', level: 90, category: 'tools', icon: '📚' },
  { id: '16', name: 'Figma', level: 85, category: 'tools', icon: '🎨' }
]

export const contributions: Contribution[] = [
  {
    id: '1',
    repository: 'marketplace-client',
    description: 'University-focused job marketplace built with Next.js and TypeScript',
    url: 'https://github.com/biplobmolla/marketplace-client',
    language: 'TypeScript',
    stars: 45,
    forks: 12
  },
  {
    id: '2',
    repository: 'ubaky-manager',
    description: 'Restaurant management system with real-time order tracking',
    url: 'https://github.com/biplobmolla/ubaky-manager',
    language: 'TypeScript',
    stars: 32,
    forks: 8
  },
  {
    id: '3',
    repository: 'hackverse',
    description: 'Hackathon platform with event management and participant registration',
    url: 'https://github.com/biplobmolla/hackverse',
    language: 'TypeScript',
    stars: 28,
    forks: 6
  },
  {
    id: '4',
    repository: 'react-native-components',
    description: 'Reusable React Native components library with TypeScript',
    url: 'https://github.com/biplobmolla/react-native-components',
    language: 'TypeScript',
    stars: 18,
    forks: 4
  }
]

export const personalInfo = {
  name: 'MD. Biplob Molla',
  title: 'Frontend Developer',
  subtitle: 'Creating beautiful, interactive web experiences with modern technologies',
  bio: 'Passionate frontend developer with 2+ years of experience building modern web applications. I specialize in Next.js, React, TypeScript, and TailwindCSS. I have a strong interest in UI/UX design, business, AI & ML, and love to travel. Currently working as a Frontend Engineer at a startup while pursuing my Computer Science degree.',
  location: 'Dhaka, Bangladesh',
  email: 'biplob.molla@email.com',
  phone: '+8801314886972',
  github: 'https://github.com/biplobmolla',
  linkedin: 'https://linkedin.com/in/biplobmolla',
  twitter: 'https://twitter.com/biplobmolla',
  website: 'https://biplobmolla.dev'
}
