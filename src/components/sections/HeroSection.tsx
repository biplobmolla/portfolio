'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Typewriter from '@/components/animations/Typewriter'
import ParticleBackground from '@/components/animations/ParticleBackground'
import { personalInfo } from '@/data/portfolio'

export default function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              {personalInfo.name}
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-2">
              <Typewriter
                texts={[
                  personalInfo.title,
                  'React Developer',
                  'TypeScript Enthusiast',
                  'UI/UX Designer',
                  'Problem Solver'
                ]}
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
                className="text-gradient"
              />
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              {personalInfo.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToNext()}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.querySelector('#contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={scrollToNext}
              className="text-white hover:text-primary transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="h-8 w-8" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
