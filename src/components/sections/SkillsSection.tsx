'use client'

import { motion } from 'framer-motion'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { skills } from '@/data/portfolio'

export default function SkillsSection() {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
  }

  const getSkillDescription = (skill: { name: string }) => {
    const descriptions: { [key: string]: string } = {
      'Next.js': 'Full-stack React framework with App Router, Server Components, and optimized performance',
      'React': 'Component-based library for building user interfaces with hooks and context',
      'TypeScript': 'Strongly typed JavaScript for better development experience and code quality',
      'TailwindCSS': 'Utility-first CSS framework for rapid UI development and responsive design',
      'Redux Toolkit': 'Modern state management with simplified Redux logic and best practices',
      'RTK Query': 'Data fetching and caching solution built on top of Redux Toolkit',
      'JavaScript': 'Core programming language for web development and interactive features',
      'Node.js': 'JavaScript runtime for server-side development and backend APIs',
      'Express.js': 'Fast, unopinionated web framework for Node.js applications',
      'MongoDB': 'NoSQL database for flexible data storage and document-based queries',
      'Framer Motion': 'Animation library for React with declarative motion components',
      'shadcn/ui': 'Re-usable components built with Radix UI and Tailwind CSS',
      'React Hook Form': 'Performant, flexible forms with easy validation and error handling',
      'Lottie': 'Lightweight animation library for After Effects animations in web',
      'Git': 'Version control system for tracking changes and collaborative development',
      'Figma': 'Collaborative design tool for UI/UX design and prototyping'
    }
    return descriptions[skill.name] || 'Professional skill and expertise'
  }

  return (
    <section id="skills" className="py-20 bg-muted/50 w-full overflow-hidden">
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
          {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
            <ScrollReveal key={category} delay={categoryIndex * 0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground capitalize flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {category} Skills
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center justify-between cursor-help">
                              <div className="flex items-center space-x-3">
                                <span className="text-2xl">{skill.icon}</span>
                                <span className="font-medium text-foreground">{skill.name}</span>
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {skill.level}%
                              </Badge>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs text-sm">{getSkillDescription(skill)}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <div className="relative group">
                        <Progress 
                          value={skill.level} 
                          className="h-3 bg-muted-foreground/20" 
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="absolute top-0 left-0 h-3 bg-gradient-to-r from-primary to-primary/80 rounded-full shadow-lg group-hover:shadow-primary/25 transition-shadow duration-300"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Info */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 bg-background/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

