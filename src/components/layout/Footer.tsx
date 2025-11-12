'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart, Code, Terminal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/portfolio'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: personalInfo.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="dark:bg-[#0a0a0a] light:bg-[#fafafa] dark:text-green-400 light:text-blue-600 border-t dark:border-green-500/20 light:border-blue-500/20 w-full overflow-hidden relative transition-colors duration-300">
      {/* Terminal Grid Background */}
      <div className="absolute inset-0 dark:opacity-5 light:opacity-3" style={{
        backgroundImage: `
          linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="container mx-auto px-4 py-16 w-full max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="h-6 w-6 dark:text-green-400 light:text-blue-600" />
                <h3 className="text-2xl font-bold dark:text-green-400 light:text-blue-600 font-mono">{personalInfo.name}</h3>
              </div>
              <p className="dark:text-green-500/70 light:text-blue-500/70 leading-relaxed mb-4 font-mono text-sm">
                // {personalInfo.title} passionate about creating beautiful, interactive web experiences 
                with modern technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-3 rounded-lg dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/20 light:border-blue-500/20 dark:hover:bg-green-500/10 light:hover:bg-blue-500/10 dark:hover:border-green-500/50 light:hover:border-blue-500/50 transition-all duration-300 group terminal-glow"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 dark:text-green-400 light:text-blue-600 group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold dark:text-green-400 light:text-blue-600 mb-4 font-mono">// Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="dark:text-green-500/70 light:text-blue-500/70 dark:hover:text-green-400 light:hover:text-blue-600 transition-colors flex items-center group font-mono text-sm"
                    >
                      <span className="dark:text-green-500/50 light:text-blue-500/50 mr-2">$</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold dark:text-green-400 light:text-blue-600 mb-4 font-mono">// Contact</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="dark:text-green-500/70 light:text-blue-500/70 dark:hover:text-green-400 light:hover:text-blue-600 transition-colors block font-mono text-sm"
                >
                  {personalInfo.email}
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="dark:text-green-500/70 light:text-blue-500/70 dark:hover:text-green-400 light:hover:text-blue-600 transition-colors block font-mono text-sm"
                >
                  {personalInfo.phone}
                </a>
                <p className="dark:text-green-500/70 light:text-blue-500/70 font-mono text-sm">{personalInfo.location}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t dark:border-green-500/20 light:border-blue-500/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 dark:text-green-500/60 light:text-blue-500/60 text-sm font-mono">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>and</span>
              <Code className="h-4 w-4 dark:text-green-400 light:text-blue-600" />
              <span>in Bangladesh</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="group dark:border-green-500/30 light:border-blue-500/30 dark:text-green-400 light:text-blue-600 dark:hover:bg-green-500/10 light:hover:bg-blue-500/10 dark:hover:text-green-300 light:hover:text-blue-500 dark:hover:border-green-500/50 light:hover:border-blue-500/50 font-mono"
              >
                <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                $ back-to-top
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button - Fixed Position */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="sm"
            className="rounded-full shadow-lg hover:shadow-xl transition-shadow dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 dark:text-green-400 light:text-blue-600 dark:hover:bg-green-500/10 light:hover:bg-blue-500/10 terminal-glow"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
    </footer>
  )
}
