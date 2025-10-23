'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  variants?: Variants
  className?: string
  delay?: number
  duration?: number
}

export default function ScrollReveal({
  children,
  variants,
  className,
  delay = 0,
  duration = 0.6,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  }

  const animationVariants = variants || defaultVariants

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={animationVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
