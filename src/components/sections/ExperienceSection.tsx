'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { experiences, education } from '@/data/portfolio'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/50 w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experience & Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey and academic background
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <ScrollReveal>
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-8">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Work Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover-lift group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Briefcase className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{experience.position}</CardTitle>
                              <CardDescription className="text-base font-medium">
                                {experience.company}
                              </CardDescription>
                            </div>
                          </div>
                          <Badge variant={experience.current ? "default" : "secondary"}>
                            {experience.current ? "Current" : "Past"}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.startDate} - {experience.endDate || 'Present'}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>Remote</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-6">
                          {experience.description.map((desc, descIndex) => (
                            <li key={descIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              {desc}
                            </li>
                          ))}
                        </ul>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.techStack.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Education Section */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-8">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover-lift group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <GraduationCap className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{edu.degree}</CardTitle>
                              <CardDescription className="text-base font-medium">
                                {edu.institution}
                              </CardDescription>
                            </div>
                          </div>
                          <Badge variant={edu.current ? "default" : "secondary"}>
                            {edu.current ? "Current" : "Completed"}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.startDate} - {edu.endDate || 'Present'}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4" />
                            <span>{edu.field}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {edu.description && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {edu.description}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Additional Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Key Achievements</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        Developed 5+ production applications using modern web technologies
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        Gained hands-on experience with Redux Toolkit and RTK Query
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        Built responsive mobile applications with React Native
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        Maintained flexible work schedule while pursuing education
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
