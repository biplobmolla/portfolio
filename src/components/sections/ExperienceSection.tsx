'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, Briefcase, TrendingUp, Code, Users, Terminal } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { experiences } from '@/data/portfolio'

export default function ExperienceSection() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  const getDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate)
    const end = endDate ? new Date(endDate) : new Date()
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30))
    
    if (diffMonths < 12) {
      return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`
    } else {
      const years = Math.floor(diffMonths / 12)
      const months = diffMonths % 12
      return months > 0 ? `${years}y ${months}m` : `${years}y`
    }
  }

  return (
    <section id="experience" className="py-20 dark:bg-[#0a0a0a] light:bg-[#fafafa] w-full overflow-hidden relative transition-colors duration-300">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 rounded-lg font-mono text-sm mb-4">
              <Terminal className="h-4 w-4 dark:text-green-400 light:text-blue-600" />
              <span className="dark:text-green-500/70 light:text-blue-500/70">$</span>
              <span className="dark:text-green-400 light:text-blue-600">history</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold dark:text-green-400 light:text-blue-600 mb-4 font-mono terminal-text">
              Professional Experience
            </h2>
            <p className="text-xl dark:text-green-500/70 light:text-blue-500/70 max-w-3xl mx-auto font-mono">
              // Building innovative solutions and leading frontend development
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 dark:bg-gradient-to-b dark:from-green-500 dark:via-green-500/50 dark:to-green-500/20 light:bg-gradient-to-b light:from-blue-500 light:via-blue-500/50 light:to-blue-500/20 hidden md:block" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 dark:bg-green-500 light:bg-blue-500 rounded-full border-4 dark:border-[#0a0a0a] light:border-[#fafafa] hidden md:block z-10 terminal-glow" />
                  
                  <div className="ml-0 md:ml-16">
                    <Card className="dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 dark:hover:border-green-500/50 light:hover:border-blue-500/50 group terminal-glow transition-all">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <CardTitle className="text-xl font-bold dark:text-green-400 light:text-blue-600 dark:group-hover:text-green-300 light:group-hover:text-blue-500 transition-colors font-mono">
                                {exp.position}
                              </CardTitle>
                              {exp.current && (
                                <Badge variant="outline" className="dark:bg-green-500/20 light:bg-blue-500/20 dark:text-green-400 light:text-blue-600 dark:border-green-500/30 light:border-blue-500/30 font-mono">
                                  Current
                                </Badge>
                              )}
                            </div>
                            <CardDescription className="text-lg font-semibold dark:text-green-500/80 light:text-blue-600/80 font-mono">
                              {exp.company}
                            </CardDescription>
                            <div className="flex items-center gap-4 text-sm dark:text-green-500/70 light:text-blue-500/70 font-mono">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {exp.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                              </div>
                              <div className="flex items-center gap-1">
                                <TrendingUp className="h-4 w-4" />
                                {getDuration(exp.startDate, exp.endDate)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        {/* Project Type */}
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 dark:text-green-400 light:text-blue-600" />
                          <span className="text-sm font-medium dark:text-green-500/70 light:text-blue-500/70 font-mono">
                            // {exp.projectType}
                          </span>
                        </div>

                        {/* Key Achievements */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold dark:text-green-400 light:text-blue-600 flex items-center gap-2 font-mono">
                            <Code className="h-4 w-4 dark:text-green-400 light:text-blue-600" />
                            // Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.description.map((desc, descIndex) => (
                              <li key={descIndex} className="text-sm dark:text-green-500/80 light:text-blue-600/80 flex items-start gap-3 font-mono">
                                <span className="dark:text-green-400 light:text-blue-600 font-bold mt-1">•</span>
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Impact */}
                        {exp.impact && (
                          <div className="dark:bg-green-500/5 light:bg-blue-500/5 border dark:border-green-500/20 light:border-blue-500/20 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                              <TrendingUp className="h-5 w-5 dark:text-green-400 light:text-blue-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="text-sm font-semibold dark:text-green-400 light:text-blue-600 mb-1 font-mono">// Impact</h4>
                                <p className="text-sm dark:text-green-500/80 light:text-blue-600/80 font-mono">{exp.impact}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Tech Stack */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold dark:text-green-400 light:text-blue-600 flex items-center gap-2 font-mono">
                            <Users className="h-4 w-4 dark:text-green-400 light:text-blue-600" />
                            // Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs dark:border-green-500/30 light:border-blue-500/30 dark:text-green-400 light:text-blue-600 dark:hover:bg-green-500/10 light:hover:bg-blue-500/10 dark:hover:border-green-500/50 light:hover:border-blue-500/50 transition-colors font-mono">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/20 light:border-blue-500/20 rounded-lg">
              <div className="text-3xl font-bold dark:text-green-400 light:text-blue-600 mb-2 font-mono">
                {experiences.length}+
              </div>
              <div className="text-sm dark:text-green-500/70 light:text-blue-500/70 font-mono">Projects Completed</div>
            </div>
            <div className="text-center p-6 dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/20 light:border-blue-500/20 rounded-lg">
              <div className="text-3xl font-bold dark:text-green-400 light:text-blue-600 mb-2 font-mono">
                2+
              </div>
              <div className="text-sm dark:text-green-500/70 light:text-blue-500/70 font-mono">Years Experience</div>
            </div>
            <div className="text-center p-6 dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/20 light:border-blue-500/20 rounded-lg">
              <div className="text-3xl font-bold dark:text-green-400 light:text-blue-600 mb-2 font-mono">
                5+
              </div>
              <div className="text-sm dark:text-green-500/70 light:text-blue-500/70 font-mono">Technologies Mastered</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
