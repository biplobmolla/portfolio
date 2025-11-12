'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal, Github, Linkedin, Mail, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/data/portfolio'
import ThemeToggle from '@/components/ui/ThemeToggle'

const navItems = [
  { name: 'Home', href: '#home', command: 'cd ~' },
  { name: 'About', href: '#about', command: 'cat about.txt' },
  { name: 'Skills', href: '#skills', command: 'ls skills/' },
  { name: 'Projects', href: '#projects', command: 'git show projects' },
  { name: 'Experience', href: '#experience', command: 'history' },
  { name: 'Contact', href: 'mailto:ahmedtamim317@gmail.com', command: 'mailto' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    // Check if it's a mailto link
    if (href.startsWith('mailto:')) {
      window.location.href = href
      setIsMobileMenuOpen(false)
      return
    }
    
    // Otherwise, scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const downloadResume = () => {
    // You can implement resume download functionality here
    console.log('Download resume')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full',
        isScrolled
          ? 'dark:bg-[#0a0a0a]/95 light:bg-[#fafafa]/95 backdrop-blur-xl dark:border-green-500/20 light:border-blue-500/20 border-b shadow-lg dark:shadow-green-500/5 light:shadow-blue-500/5'
          : 'dark:bg-[#0a0a0a]/90 light:bg-[#fafafa]/90 backdrop-blur-md'
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo & Brand - Terminal Style */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-[#1a1a1a] border border-green-500/30 rounded flex items-center justify-center terminal-glow dark:bg-[#1a1a1a] dark:border-green-500/30 light:bg-white light:border-blue-500/30">
                <Terminal className="h-5 w-5 text-green-400 dark:text-green-400 light:text-blue-600" />
              </div>
              <motion.div 
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full dark:bg-green-500 light:bg-blue-500"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <div className="text-lg font-bold text-green-400 font-mono dark:text-green-400 light:text-blue-600">$ biplob</div>
              <div className="text-xs text-green-500/70 font-mono dark:text-green-500/70 light:text-blue-500/70">frontend-dev</div>
            </div>
          </motion.div>

          {/* Desktop Navigation - Terminal Commands */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const isActive = item.href.startsWith('#') ? activeSection === item.href.replace('#', '') : false
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  className={cn(
                    'relative px-4 py-2 rounded text-sm font-mono transition-all duration-200',
                    isActive
                      ? 'dark:text-green-400 dark:bg-green-500/10 dark:border-green-500/30 light:text-blue-600 light:bg-blue-500/10 light:border-blue-500/30 border'
                      : 'dark:text-green-500/70 dark:hover:text-green-400 dark:hover:bg-green-500/5 dark:hover:border-green-500/20 light:text-blue-500/70 light:hover:text-blue-600 light:hover:bg-blue-500/5 light:hover:border-blue-500/20 border border-transparent'
                  )}
                >
                    <span className="flex items-center space-x-2">
                    <span className="dark:text-green-500/50 light:text-blue-500/50">$</span>
                    <span>{item.command}</span>
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 dark:bg-green-500/10 dark:border-green-500/30 light:bg-blue-500/10 light:border-blue-500/30 border rounded -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            
            <Button
              variant="outline"
              size="sm"
              onClick={downloadResume}
              className="flex items-center space-x-2 border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-500/50 font-mono dark:border-green-500/30 dark:text-green-400 light:border-blue-500/30 light:text-blue-600"
            >
              <Download className="h-4 w-4" />
              <span>resume.pdf</span>
            </Button>
            
            <div className="flex items-center space-x-2">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded bg-[#1a1a1a] border border-green-500/20 hover:border-green-500/50 hover:bg-green-500/10 transition-colors dark:bg-[#1a1a1a] dark:border-green-500/20 dark:text-green-400 light:bg-white light:border-blue-500/20 light:text-blue-600"
              >
                <Github className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded bg-[#1a1a1a] border border-green-500/20 hover:border-green-500/50 hover:bg-green-500/10 transition-colors dark:bg-[#1a1a1a] dark:border-green-500/20 dark:text-green-400 light:bg-white light:border-blue-500/20 light:text-blue-600"
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden relative border border-green-500/20 text-green-400 hover:bg-green-500/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>

        {/* Mobile Navigation - Terminal Style */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 border-t border-green-500/20 pt-4"
            >
              <div className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = item.href.startsWith('#') ? activeSection === item.href.replace('#', '') : false
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.3,
                        ease: "easeOut"
                      }}
                      className={cn(
                        'w-full flex items-center space-x-3 px-4 py-3 rounded text-left transition-all duration-200 font-mono border',
                        isActive
                          ? 'dark:text-green-400 dark:bg-green-500/10 dark:border-green-500/30 light:text-blue-600 light:bg-blue-500/10 light:border-blue-500/30'
                          : 'dark:text-green-500/70 dark:hover:text-green-400 dark:hover:bg-green-500/5 dark:hover:border-green-500/20 light:text-blue-500/70 light:hover:text-blue-600 light:hover:bg-blue-500/5 light:hover:border-blue-500/20 border-transparent'
                      )}
                    >
                      <span className="dark:text-green-500/50 light:text-blue-500/50">$</span>
                      <span>{item.command}</span>
                      {isActive && (
                        <Badge variant="secondary" className="ml-auto text-xs dark:bg-green-500/20 dark:text-green-400 dark:border-green-500/30 light:bg-blue-500/20 light:text-blue-600 light:border-blue-500/30">
                          active
                        </Badge>
                      )}
                    </motion.button>
                  )
                })}
                
                <div className="pt-4 border-t border-green-500/20 dark:border-green-500/20 light:border-blue-500/20">
                  <div className="flex items-center justify-center mb-4">
                    <ThemeToggle />
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadResume}
                    className="w-full flex items-center justify-center space-x-2 border-green-500/30 text-green-400 hover:bg-green-500/10 font-mono dark:border-green-500/30 dark:text-green-400 light:border-blue-500/30 light:text-blue-600"
                  >
                    <Download className="h-4 w-4" />
                    <span>resume.pdf</span>
                  </Button>
                  
                  <div className="flex justify-center space-x-4 mt-4">
                    <motion.a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded bg-[#1a1a1a] border border-green-500/20 hover:border-green-500/50 hover:bg-green-500/10 transition-colors dark:bg-[#1a1a1a] dark:border-green-500/20 dark:text-green-400 light:bg-white light:border-blue-500/20 light:text-blue-600"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded bg-[#1a1a1a] border border-green-500/20 hover:border-green-500/50 hover:bg-green-500/10 transition-colors dark:bg-[#1a1a1a] dark:border-green-500/20 dark:text-green-400 light:bg-white light:border-blue-500/20 light:text-blue-600"
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${personalInfo.email}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded bg-[#1a1a1a] border border-green-500/20 hover:border-green-500/50 hover:bg-green-500/10 transition-colors dark:bg-[#1a1a1a] dark:border-green-500/20 dark:text-green-400 light:bg-white light:border-blue-500/20 light:text-blue-600"
                    >
                      <Mail className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
