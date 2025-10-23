'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Clock } from 'lucide-react'

export default function WorkInProgressBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-[76px] z-30 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 py-3 px-4 shadow-sm"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-center space-x-3 text-amber-800">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Clock className="h-5 w-5" />
          </motion.div>
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm font-medium">
              Portfolio Under Development
            </span>
          </div>
          <span className="text-sm text-amber-700">
            • Some information may be updated soon
          </span>
        </div>
      </div>
    </motion.div>
  )
}
