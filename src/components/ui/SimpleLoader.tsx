'use client'

import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

export default function SimpleLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-[#0a0a0a] light:bg-[#fafafa] dark:text-green-400 light:text-blue-600 font-mono transition-colors duration-300">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 dark:opacity-10 light:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 text-center">
        {/* Terminal Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className="mb-6"
        >
          <Terminal className="w-16 h-16 mx-auto dark:text-green-400 light:text-blue-600" />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-2"
        >
          <motion.p
            className="dark:text-green-400 light:text-blue-600 text-lg"
            animate={{ 
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading...
          </motion.p>
          
          {/* Dots Animation */}
          <div className="flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full dark:bg-green-400 light:bg-blue-600"
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
          background: 'linear-gradient(transparent 50%, rgba(34, 197, 94, 0.02) 50%)',
          backgroundSize: '100% 4px',
        }}
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}
