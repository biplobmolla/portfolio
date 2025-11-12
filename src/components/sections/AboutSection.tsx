'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Mail, Phone, Github, Linkedin, Twitter, Code, Palette, Plane, Heart, BookOpen, Terminal } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { personalInfo } from '@/data/portfolio'

export default function AboutSection() {
  const interests = [
    { icon: Code, label: 'Frontend Development', description: 'Building modern web applications with React & Next.js' },
    { icon: Palette, label: 'UI/UX Design', description: 'Creating beautiful, accessible user experiences' },
    { icon: BookOpen, label: 'Learning', description: 'Always curious about new technologies and methodologies' },
    { icon: Plane, label: 'Travel', description: 'Discovering new places, cultures, and experiences' },
  ]

  const stats = [
    { label: 'Years of Experience', value: '2+', command: 'experience --years' },
    { label: 'Projects Completed', value: '15+', command: 'projects --count' },
    { label: 'Technologies Mastered', value: '20+', command: 'tech --list' },
    { label: 'Happy Clients', value: '10+', command: 'clients --satisfied' }
  ]

  return (
    <section id="about" className="py-20 dark:bg-[#0a0a0a] light:bg-[#fafafa] w-full overflow-hidden relative transition-colors duration-300">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 rounded-lg font-mono text-sm mb-4">
              <Terminal className="h-4 w-4 dark:text-green-400 light:text-blue-600" />
              <span className="dark:text-green-500/70 light:text-blue-500/70">$</span>
              <span className="dark:text-green-400 light:text-blue-600">cat about.txt</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold dark:text-green-400 light:text-blue-600 mb-4 font-mono terminal-text">
              About Me
            </h2>
            <p className="text-xl dark:text-green-500/70 light:text-blue-500/70 max-w-3xl mx-auto font-mono">
              // Passionate frontend developer crafting digital experiences
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info & Contact */}
          <div className="space-y-8">
            {/* Personal Story */}
            <ScrollReveal>
              <Card className="dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 dark:hover:border-green-500/50 light:hover:border-blue-500/50 transition-all terminal-glow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 dark:text-green-400 light:text-blue-600 font-mono">
                    <Heart className="h-6 w-6 dark:text-green-400 light:text-blue-600" />
                    <span>$ about.bio</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="dark:text-green-500/80 light:text-blue-600/80 leading-relaxed font-mono text-sm">
                    I&apos;m a passionate frontend developer from Dhaka, Bangladesh, with over 2 years of experience 
                    building modern web applications. My journey began with curiosity about how websites work, 
                    and it has evolved into a deep love for creating beautiful, functional user experiences.
                  </p>
                  <p className="dark:text-green-500/80 light:text-blue-600/80 leading-relaxed font-mono text-sm">
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, traveling to discover 
                    different cultures, or enjoying a good cup of coffee while brainstorming my next project. 
                    I believe in continuous learning and staying updated with the latest trends in web development.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal delay={0.1}>
              <Card className="bg-[#1a1a1a] border border-green-500/30 hover:border-green-500/50 transition-all terminal-glow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-green-400 font-mono">
                    <Mail className="h-6 w-6 text-green-400" />
                    <span>$ contact.info</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 font-mono text-sm">
                      <MapPin className="h-4 w-4 dark:text-green-400 light:text-blue-600" />
                      <span className="dark:text-green-500/80 light:text-blue-600/80">{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 font-mono text-sm">
                      <Mail className="h-4 w-4 dark:text-green-400 light:text-blue-600" />
                      <a href={`mailto:${personalInfo.email}`} className="dark:text-green-500/80 light:text-blue-600/80 dark:hover:text-green-400 light:hover:text-blue-600 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 font-mono text-sm">
                      <Phone className="h-4 w-4 dark:text-green-400 light:text-blue-600" />
                      <a href={`tel:${personalInfo.phone}`} className="dark:text-green-500/80 light:text-blue-600/80 dark:hover:text-green-400 light:hover:text-blue-600 transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t dark:border-green-500/20 light:border-blue-500/20">
                    <h4 className="font-semibold dark:text-green-400 light:text-blue-600 mb-3 font-mono">// Status</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs dark:border-green-500/30 light:border-blue-500/30 dark:text-green-400 light:text-blue-600 font-mono">Available for Work</Badge>
                      <Badge variant="outline" className="text-xs dark:border-green-500/30 light:border-blue-500/30 dark:text-green-400 light:text-blue-600 font-mono">Open to Collaboration</Badge>
                      <Badge variant="outline" className="text-xs dark:border-green-500/30 light:border-blue-500/30 dark:text-green-400 light:text-blue-600 font-mono">Remote Friendly</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Right Column - Stats & Interests */}
          <div className="space-y-8">
            {/* Achievements & Stats */}
            <ScrollReveal delay={0.2}>
              <Card className="dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 dark:hover:border-green-500/50 light:hover:border-blue-500/50 transition-all terminal-glow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 dark:text-green-400 light:text-blue-600 font-mono">
                    <Code className="h-6 w-6 dark:text-green-400 light:text-blue-600" />
                    <span>$ stats</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center p-4 dark:bg-[#0a0a0a] light:bg-gray-50 border dark:border-green-500/20 light:border-blue-500/20 dark:hover:border-green-500/40 light:hover:border-blue-500/40 transition-all"
                      >
                        <div className="text-2xl font-bold dark:text-green-400 light:text-blue-600 mb-1 font-mono">{stat.value}</div>
                        <div className="text-xs dark:text-green-500/70 light:text-blue-500/70 font-mono">{stat.label}</div>
                        <div className="text-xs dark:text-green-500/50 light:text-blue-500/50 font-mono mt-1">// {stat.command}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Interests & Values */}
            <ScrollReveal delay={0.3}>
              <Card className="dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 dark:hover:border-green-500/50 light:hover:border-blue-500/50 transition-all terminal-glow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 dark:text-green-400 light:text-blue-600 font-mono">
                    <Palette className="h-6 w-6 dark:text-green-400 light:text-blue-600" />
                    <span>$ interests</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={interest.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 p-3 dark:bg-[#0a0a0a] light:bg-gray-50 border dark:border-green-500/20 light:border-blue-500/20 rounded-lg dark:hover:bg-green-500/5 light:hover:bg-blue-500/5 dark:hover:border-green-500/40 light:hover:border-blue-500/40 transition-colors"
                      >
                        <interest.icon className="h-5 w-5 dark:text-green-400 light:text-blue-600 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-medium dark:text-green-400 light:text-blue-600 text-sm font-mono">{interest.label}</p>
                          <p className="text-xs dark:text-green-500/70 light:text-blue-500/70 font-mono">{interest.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>

        {/* Social Links */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold dark:text-green-400 light:text-blue-600 mb-8 font-mono">// Let&apos;s Connect</h3>
            <div className="flex justify-center space-x-6">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 dark:hover:bg-green-500/10 light:hover:bg-blue-500/10 dark:hover:border-green-500/50 light:hover:border-blue-500/50 transition-colors group terminal-glow"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 dark:text-green-400 light:text-blue-600 group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 dark:hover:bg-green-500/10 light:hover:bg-blue-500/10 dark:hover:border-green-500/50 light:hover:border-blue-500/50 transition-colors group terminal-glow"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 dark:text-green-400 light:text-blue-600 group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 dark:hover:bg-green-500/10 light:hover:bg-blue-500/10 dark:hover:border-green-500/50 light:hover:border-blue-500/50 transition-colors group terminal-glow"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6 dark:text-green-400 light:text-blue-600 group-hover:scale-110 transition-transform" />
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
