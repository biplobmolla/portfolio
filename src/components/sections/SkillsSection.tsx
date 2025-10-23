'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Database, Wrench, Palette, Zap, Globe } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { skills } from '@/data/portfolio'

export default function SkillsSection() {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
  }

  const categoryIcons = {
    frontend: Code,
    backend: Database,
    tools: Wrench
  }

  const categoryDescriptions = {
    frontend: 'Modern frontend technologies for building responsive and interactive user interfaces',
    backend: 'Backend technologies and databases for server-side development and data management',
    tools: 'Development tools, libraries, and platforms that enhance productivity and workflow'
  }

  return (
    <section id="skills" className="py-20 bg-muted/30 w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
            return (
              <ScrollReveal key={category} delay={categoryIndex * 0.2}>
                <Card className="hover-lift h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <span className="capitalize">{category} Skills</span>
                        <p className="text-sm text-muted-foreground font-normal mt-1">
                          {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                        </p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {categorySkills.map((skill, index) => (
                        <motion.div
                          key={skill.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="group"
                        >
                          <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105">
                            <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                              {skill.icon}
                            </span>
                            <span className="text-sm font-medium text-foreground text-center">
                              {skill.name}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Skills Overview */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-primary" />
                  <span>Technical Expertise</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Frontend Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Modern React ecosystem, responsive design, and user experience optimization
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Database className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Backend Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Server-side logic, API development, and database management
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Palette className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">UI/UX Design</h3>
                    <p className="text-sm text-muted-foreground">
                      User interface design, accessibility, and design system implementation
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Wrench className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Development Tools</h3>
                    <p className="text-sm text-muted-foreground">
                      Version control, testing, deployment, and development workflow optimization
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.8}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

