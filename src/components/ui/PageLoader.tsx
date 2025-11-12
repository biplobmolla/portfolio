'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Terminal, Code2, Cpu, Zap } from 'lucide-react'

const codeLines = [
  'const portfolio = {',
  '  name: "Biplob Molla",',
  '  role: "Frontend Developer",',
  '  skills: ["React", "Next.js", "TypeScript"],',
  '  status: "Loading..."',
  '};',
]

export default function PageLoader() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      setIsTyping(false)
      return
    }

    const line = codeLines[currentLine]
    let charIndex = 0
    setDisplayedText('')

    const typingInterval = setInterval(() => {
      if (charIndex < line.length) {
        setDisplayedText(line.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setCurrentLine((prev) => prev + 1)
        }, 500)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [currentLine])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center dark:bg-[#0a0a0a] light:bg-[#fafafa] dark:text-green-400 light:text-blue-600 font-mono overflow-hidden transition-colors duration-300">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 dark:opacity-10 light:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['{', '}', '[', ']', '(', ')', '<', '>', ';', '='].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute dark:text-green-500/20 light:text-blue-500/20 text-4xl font-bold"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${10 + (i * 7)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-2xl px-8">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 rounded-lg shadow-2xl overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 dark:bg-[#0f0f0f] light:bg-gray-50 border-b dark:border-green-500/20 light:border-blue-500/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full dark:bg-green-500/80 light:bg-blue-500/80" />
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Terminal className="w-4 h-4 dark:text-green-400 light:text-blue-600" />
              <span className="text-xs dark:text-green-400/70 light:text-blue-600/70">portfolio-terminal</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 min-h-[300px]">
            {/* Prompt */}
            <div className="flex items-center gap-2 mb-4">
              <span className="dark:text-green-400 light:text-blue-600">$</span>
              <span className="dark:text-green-400/70 light:text-blue-600/70">biplob@portfolio</span>
              <span className="dark:text-green-400/50 light:text-blue-600/50">:</span>
              <span className="dark:text-green-400/70 light:text-blue-600/70">~</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="w-2 h-5 dark:bg-green-400 light:bg-blue-600 inline-block"
              />
            </div>

            {/* Code Display */}
            <div className="space-y-2 font-mono text-sm">
              {codeLines.slice(0, currentLine).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="dark:text-green-400/90 light:text-blue-600/90"
                >
                  <span className="dark:text-green-500/50 light:text-blue-500/50 mr-2">{index + 1}</span>
                  {line}
                </motion.div>
              ))}
              
              {isTyping && currentLine < codeLines.length && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="dark:text-green-400 light:text-blue-600"
                >
                  <span className="dark:text-green-500/50 light:text-blue-500/50 mr-2">{currentLine + 1}</span>
                  {displayedText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-2 h-4 dark:bg-green-400 light:bg-blue-600 ml-1"
                  />
                </motion.div>
              )}

              {!isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex items-center gap-2 dark:text-green-400/70 light:text-blue-600/70"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Cpu className="w-4 h-4" />
                  </motion.div>
                  <span>Initializing portfolio...</span>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Animated Icons Below Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center gap-8 mt-8"
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

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex justify-center"
        >
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full dark:bg-green-400 light:bg-blue-600"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scanline Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(transparent 50%, rgba(34, 197, 94, 0.03) 50%)',
          backgroundSize: '100% 4px',
        }}
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}
