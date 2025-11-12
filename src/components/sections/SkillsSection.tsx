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
  Box,
  Terminal
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
    <section id="skills" className="py-20 dark:bg-[#0a0a0a] light:bg-[#fafafa] w-full overflow-hidden relative transition-colors duration-300">
      <div className="container mx-auto px-4 w-full max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 rounded-lg font-mono text-sm mb-4">
              <Terminal className="h-4 w-4 dark:text-green-400 light:text-blue-600" />
              <span className="dark:text-green-500/70 light:text-blue-500/70">$</span>
              <span className="dark:text-green-400 light:text-blue-600">ls skills/</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold dark:text-green-400 light:text-blue-600 mb-4 font-mono terminal-text">
              Skills & Technologies
            </h2>
            <p className="text-xl dark:text-green-500/70 light:text-blue-500/70 max-w-2xl mx-auto font-mono">
              // Technologies and tools I use to build modern applications
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
            return (
              <ScrollReveal key={category} delay={categoryIndex * 0.2}>
                <Card className="h-full dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 dark:hover:border-green-500/50 light:hover:border-blue-500/50 transition-all terminal-glow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-xl mb-2 dark:text-green-400 light:text-blue-600 font-mono">
                      <div className="p-3 dark:bg-green-500/10 light:bg-blue-500/10 border dark:border-green-500/30 light:border-blue-500/30 rounded-lg">
                        <IconComponent className="h-6 w-6 dark:text-green-400 light:text-blue-600" />
                      </div>
                      <span className="capitalize">$ {category}</span>
                    </CardTitle>
                    <p className="text-sm dark:text-green-500/70 light:text-blue-500/70 ml-12 font-mono">
                      // {category === 'frontend' 
                        ? 'Modern frontend technologies for building responsive UIs'
                        : 'Backend technologies for server-side development'
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
                            <div className="flex items-center space-x-3 p-3 dark:bg-[#0a0a0a] light:bg-gray-50 border dark:border-green-500/20 light:border-blue-500/20 rounded-lg dark:hover:bg-green-500/5 light:hover:bg-blue-500/5 dark:hover:border-green-500/40 light:hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                              <div className="p-2 dark:bg-green-500/10 light:bg-blue-500/10 border dark:border-green-500/20 light:border-blue-500/20 rounded-lg dark:group-hover:bg-green-500/20 light:group-hover:bg-blue-500/20 transition-colors duration-300">
                                <SkillIcon className="h-5 w-5 dark:text-green-400 light:text-blue-600" />
                              </div>
                              <span className="text-sm font-medium dark:text-green-400 light:text-blue-600 font-mono">
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
