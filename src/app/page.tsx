'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import SimpleLoader from '@/components/ui/SimpleLoader'

// Lazy load sections for better performance
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), {
  loading: () => <SimpleLoader />
})

const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {
  loading: () => <div className="h-96 bg-muted animate-pulse" />
})

const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection'), {
  loading: () => <div className="h-96 bg-muted animate-pulse" />
})

const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), {
  loading: () => <div className="h-96 bg-muted animate-pulse" />
})

const ExperienceSection = dynamic(() => import('@/components/sections/ExperienceSection'), {
  loading: () => <div className="h-96 bg-muted animate-pulse" />
})

// const ContributionsSection = dynamic(() => import('@/components/sections/ContributionsSection'), {
//   loading: () => <div className="h-96 bg-muted animate-pulse" />
// })

// const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
//   loading: () => <div className="h-96 bg-muted animate-pulse" />
// })

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Suspense fallback={<SimpleLoader />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
        <AboutSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
        <SkillsSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
        <ProjectsSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
        <ExperienceSection />
      </Suspense>
      
      {/* <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
        <ContributionsSection />
      </Suspense> */}
      
      {/* <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
        <ContactSection />
      </Suspense> */}
    </div>
  )
}