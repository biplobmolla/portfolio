'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { experiences } from '@/data/portfolio'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/50 w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey and the impact I&apos;ve made
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary"></div>
            
            {experiences.map((experience, index) => (
              <ScrollReveal key={experience.id} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card className="hover-lift">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">{experience.position}</CardTitle>
                          <Badge variant={experience.current ? "default" : "secondary"}>
                            {experience.current ? "Current" : "Past"}
                          </Badge>
                        </div>
                        <CardDescription className="text-lg font-medium">
                          {experience.company}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground">
                          {experience.startDate} - {experience.endDate || 'Present'}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-4">
                          {experience.description.map((desc, descIndex) => (
                            <li key={descIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {desc}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {experience.techStack.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
