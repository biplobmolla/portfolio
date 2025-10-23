'use client'

import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Download, ExternalLink } from 'lucide-react'
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

  const keySkills = [
    'Next.js (App Router)',
    'React 19',
    'TypeScript',
    'TailwindCSS v4',
    'Redux Toolkit',
    'RTK Query'
  ]

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden w-full pt-16">
      {/* Animated Background */}
      <ParticleBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-slate-900/90 z-10"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-20 w-full max-w-7xl h-full flex items-center">
        <div className="text-center w-full">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <p className="text-base md:text-lg text-blue-400 font-medium drop-shadow-lg">
              Hello, I&apos;m
            </p>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                {personalInfo.name}
              </span>
            </h1>
          </motion.div>

          {/* Role & Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-3 drop-shadow-lg">
              <span className="text-gray-300">I&apos;m a </span>
              <Typewriter
                texts={[
                  'Frontend Developer',
                  'Next.js Specialist',
                  'React Expert',
                  'TypeScript Enthusiast',
                  'UI/UX Designer',
                  'Problem Solver'
                ]}
                speed={80}
                deleteSpeed={40}
                pauseTime={2500}
                className="text-gradient font-semibold"
              />
            </div>
          </motion.div>

          {/* Key Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-6"
          >
            <p className="text-sm md:text-base text-gray-300 mb-3 drop-shadow-lg">Specialized in:</p>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {keySkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.8 + (index * 0.1) 
                  }}
                  className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs md:text-sm text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:shadow-xl hover:border-blue-400/50"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center justify-center gap-2 text-gray-300 mb-6 drop-shadow-lg"
          >
            <MapPin className="h-3 w-3 md:h-4 md:w-4" />
            <span className="text-xs md:text-sm">{personalInfo.location}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToNext()}
              className="group px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 flex items-center gap-2 text-sm md:text-base"
            >
              <span>View My Work</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.querySelector('#contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="group px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-white/25 flex items-center gap-2 text-sm md:text-base"
            >
              <span>Get In Touch</span>
              <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col items-center"
          >
            <p className="text-xs text-gray-300 mb-2 drop-shadow-lg">Scroll to explore</p>
            <motion.button
              onClick={scrollToNext}
              className="text-white/70 hover:text-white transition-colors group"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex flex-col items-center">
                <ChevronDown className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <ChevronDown className="h-3 w-3 -mt-1 group-hover:scale-110 transition-transform" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  )
}
