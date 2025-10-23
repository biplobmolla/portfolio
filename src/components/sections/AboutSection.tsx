'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Mail, Phone, Github, Linkedin, Twitter, Code, Palette, Plane, Brain, Heart, Coffee, BookOpen } from 'lucide-react'
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
    { label: 'Years of Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies Mastered', value: '20+' },
    { label: 'Happy Clients', value: '10+' }
  ]

  return (
    <section id="about" className="py-20 bg-background w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate frontend developer crafting digital experiences that make a difference
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info & Contact */}
          <div className="space-y-8">
            {/* Personal Story */}
            <ScrollReveal>
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Heart className="h-6 w-6 text-primary" />
                    <span>About Me</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I&apos;m a passionate frontend developer from Dhaka, Bangladesh, with over 2 years of experience 
                    building modern web applications. My journey began with curiosity about how websites work, 
                    and it has evolved into a deep love for creating beautiful, functional user experiences.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, traveling to discover 
                    different cultures, or enjoying a good cup of coffee while brainstorming my next project. 
                    I believe in continuous learning and staying updated with the latest trends in web development.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal delay={0.1}>
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <span>Get In Touch</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-primary" />
                      <a href={`tel:${personalInfo.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-foreground mb-3">Current Status</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="default" className="text-xs">Available for Work</Badge>
                      <Badge variant="secondary" className="text-xs">Open to Collaboration</Badge>
                      <Badge variant="outline" className="text-xs">Remote Friendly</Badge>
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
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Code className="h-6 w-6 text-primary" />
                    <span>Achievements</span>
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
                        className="text-center p-4 bg-muted/50 rounded-lg"
                      >
                        <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Interests & Values */}
            <ScrollReveal delay={0.3}>
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Palette className="h-6 w-6 text-primary" />
                    <span>Interests & Values</span>
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
                        className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <interest.icon className="h-5 w-5 text-primary flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-medium text-foreground text-sm">{interest.label}</p>
                          <p className="text-xs text-muted-foreground">{interest.description}</p>
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
            <h3 className="text-2xl font-semibold text-foreground mb-8">Let&apos;s Connect</h3>
            <div className="flex justify-center space-x-6">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}