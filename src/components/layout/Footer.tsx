'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart, Code } from 'lucide-react'
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
    { name: 'Contributions', href: '#contributions' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 w-full overflow-hidden relative">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
      
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
              <h3 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                {personalInfo.title} passionate about creating beautiful, interactive web experiences 
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
                    className="p-3 rounded-full bg-slate-800 hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-slate-300 group-hover:text-primary transition-colors" />
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
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
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
                      className="text-slate-300 hover:text-primary transition-colors flex items-center group"
                    >
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
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-300 hover:text-primary transition-colors block"
                >
                  {personalInfo.email}
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-slate-300 hover:text-primary transition-colors block"
                >
                  {personalInfo.phone}
                </a>
                <p className="text-slate-300">{personalInfo.location}</p>
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
          className="border-t border-slate-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>and</span>
              <Code className="h-4 w-4 text-primary" />
              <span>in Bangladesh</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="group border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-primary"
              >
                <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                Back to Top
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
            className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
    </footer>
  )
}

