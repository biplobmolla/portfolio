export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  category: 'web' | 'mobile' | 'desktop' | 'other'
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string[]
  techStack: string[]
  current: boolean
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  description?: string
  current: boolean
}

export interface Skill {
  id: string
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'other'
  icon?: string
}

export interface Contribution {
  id: string
  repository: string
  description: string
  url: string
  language: string
  stars: number
  forks: number
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface AnimationVariants {
  hidden: {
    opacity: number
    y?: number
    x?: number
    scale?: number
  }
  visible: {
    opacity: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      ease?: string
    }
  }
  [key: string]: unknown
}
