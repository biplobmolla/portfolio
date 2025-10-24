'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Code, 
  Database, 
  Palette, 
  GitBranch,
  Globe,
  Layers,
  Zap,
  Server,
  FileText,
  Box
} from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { skills } from '@/data/portfolio'

export default function SkillsSection() {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
  }

  const categoryIcons = {
    frontend: Code,
    backend: Database,
  }

  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
      'Next.js': Globe,
      'React': Zap,
      'TypeScript': FileText,
      'TailwindCSS': Palette,
      'Redux Toolkit': Layers,
      'RTK Query': GitBranch,
      'JavaScript': Code,
      'Node.js': Server,
      'Express.js': Box,
      'MongoDB': Database
    }
    return iconMap[skillName] || Code
  }

  return (
    <section id="skills" className="py-20 bg-background w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build modern applications
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
            return (
              <ScrollReveal key={category} delay={categoryIndex * 0.2}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-xl mb-2">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <span className="capitalize">{category} Development</span>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground ml-12">
                      {category === 'frontend' 
                        ? 'Modern frontend technologies for building responsive user interfaces'
                        : 'Backend technologies for server-side development and data management'
                      }
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {categorySkills.map((skill, index) => {
                        const SkillIcon = getSkillIcon(skill.name)
                        return (
                          <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                          >
                            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105 border border-transparent hover:border-primary/20">
                              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                                <SkillIcon className="h-5 w-5 text-primary" />
                              </div>
                              <span className="text-sm font-medium text-foreground">
                                {skill.name}
                              </span>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>

      </div>
    </section>
  )
}