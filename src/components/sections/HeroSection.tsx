'use client'

import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Download, ExternalLink, Terminal, Code2, Zap, Cpu } from 'lucide-react'
import Typewriter from '@/components/animations/Typewriter'
import { personalInfo } from '@/data/portfolio'

export default function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const keySkills = [
    'Next.js',
    'React 19',
    'TypeScript',
    'TailwindCSS',
    'Redux Toolkit',
    'RTK Query'
  ]

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden w-full pt-16 dark:bg-[#0a0a0a] light:bg-[#fafafa] transition-colors duration-300">
      {/* Floating Code Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['{', '}', '[', ']', '(', ')', '<', '>', ';', '=', '=>', '()'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute dark:text-green-500/10 light:text-blue-500/10 text-6xl font-bold font-mono"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${10 + (i * 6)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-20 w-full max-w-7xl h-full flex items-center">
        <div className="text-center w-full">
          {/* Terminal Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 rounded-lg font-mono text-sm">
              <Terminal className="h-4 w-4 dark:text-green-400 light:text-blue-600" />
              <span className="dark:text-green-500/70 light:text-blue-500/70">biplob@portfolio</span>
              <span className="dark:text-green-500/50 light:text-blue-500/50">:</span>
              <span className="dark:text-green-400 light:text-blue-600">~</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="w-2 h-4 dark:bg-green-400 light:bg-blue-600 inline-block ml-2"
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <p className="text-base md:text-lg dark:text-green-500/70 light:text-blue-500/70 font-mono">
              $ echo &quot;Hello, I&apos;m&quot;
            </p>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold dark:text-green-400 light:text-blue-600 mb-2 leading-tight font-mono terminal-text">
              {personalInfo.name}
            </h1>
          </motion.div>

          {/* Role & Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <div className="text-xl md:text-2xl lg:text-3xl dark:text-green-500/70 light:text-blue-500/70 mb-4 font-mono">
              <span className="dark:text-green-500/50 light:text-blue-500/50">const role = </span>
              <Typewriter
                texts={[
                  '"Frontend Developer"',
                  '"Next.js Specialist"',
                  '"React Expert"',
                  '"TypeScript Enthusiast"',
                  '"UI/UX Designer"',
                  '"Problem Solver"'
                ]}
                speed={80}
                deleteSpeed={40}
                pauseTime={2500}
                className="dark:text-green-400 light:text-blue-600 font-semibold"
              />
              <span className="dark:text-green-500/50 light:text-blue-500/50">;</span>
            </div>
          </motion.div>

          {/* Key Skills - Terminal Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <p className="text-sm md:text-base dark:text-green-500/60 light:text-blue-500/60 mb-4 font-mono">{'//'} Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {keySkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1 + (index * 0.1) 
                  }}
                  className="px-4 py-2 dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 rounded text-xs md:text-sm dark:text-green-400 light:text-blue-600 dark:hover:bg-green-500/10 light:hover:bg-blue-500/10 dark:hover:border-green-500/50 light:hover:border-blue-500/50 transition-all duration-300 font-mono terminal-glow"
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
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center justify-center gap-2 dark:text-green-500/70 light:text-blue-500/70 mb-8 font-mono text-sm"
          >
            <MapPin className="h-4 w-4" />
            <span>{personalInfo.location}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToNext()}
              className="group px-6 py-3 dark:bg-green-500/10 light:bg-blue-500/10 border-2 dark:border-green-500/50 light:border-blue-500/50 dark:text-green-400 light:text-blue-600 rounded-lg font-mono dark:hover:bg-green-500/20 light:hover:bg-blue-500/20 dark:hover:border-green-500 light:hover:border-blue-500 transition-all duration-300 terminal-glow flex items-center gap-2 text-sm md:text-base"
            >
              <span>$ view-work</span>
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
              className="group px-6 py-3 border-2 dark:border-green-500/30 light:border-blue-500/30 dark:text-green-400 light:text-blue-600 rounded-lg font-mono dark:hover:bg-green-500/10 light:hover:bg-blue-500/10 dark:hover:border-green-500/50 light:hover:border-blue-500/50 transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
            >
              <span>$ contact</span>
              <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Animated Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex justify-center gap-8 mb-8"
          >
            {[
              { Icon: Code2, darkColor: 'text-blue-400', lightColor: 'text-blue-600', delay: 0 },
              { Icon: Zap, darkColor: 'text-yellow-400', lightColor: 'text-yellow-600', delay: 0.2 },
              { Icon: Cpu, darkColor: 'text-purple-400', lightColor: 'text-purple-600', delay: 0.4 },
              { Icon: Terminal, darkColor: 'text-green-400', lightColor: 'text-blue-600', delay: 0.6 },
            ].map(({ Icon, darkColor, lightColor, delay }, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut"
                }}
              >
                <Icon className={`w-6 h-6 ${darkColor} ${lightColor}`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-col items-center"
          >
            <p className="text-xs dark:text-green-500/50 light:text-blue-500/50 mb-2 font-mono">{'//'} scroll to explore</p>
            <motion.button
              onClick={scrollToNext}
              className="dark:text-green-500/50 light:text-blue-500/50 dark:hover:text-green-400 light:hover:text-blue-600 transition-colors group"
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
    </section>
  )
}
