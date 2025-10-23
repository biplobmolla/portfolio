'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, GraduationCap, Briefcase, Heart, Plane } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { personalInfo, education, experiences } from '@/data/portfolio'

export default function AboutSection() {
  const interests = [
    { icon: Heart, label: 'Frontend Development', color: 'text-red-500' },
    { icon: Briefcase, label: 'Business', color: 'text-blue-500' },
    { icon: GraduationCap, label: 'AI & ML', color: 'text-purple-500' },
    { icon: Plane, label: 'Travel', color: 'text-green-500' }
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
              Passionate about creating beautiful, functional, and user-centered digital experiences
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {personalInfo.name}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{personalInfo.phone}</span>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Interests</h4>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2 px-4 py-2 bg-muted rounded-full"
                    >
                      <interest.icon className={`h-4 w-4 ${interest.color}`} />
                      <span className="text-sm font-medium">{interest.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              {/* Experience */}
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <Briefcase className="h-5 w-5 mr-2 text-primary" />
                  Experience
                </h4>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="hover-lift">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{exp.position}</CardTitle>
                            <Badge variant={exp.current ? "default" : "secondary"}>
                              {exp.current ? "Current" : "Past"}
                            </Badge>
                          </div>
                          <CardDescription className="text-base font-medium">
                            {exp.company}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-3">
                            {exp.startDate} - {exp.endDate || 'Present'}
                          </p>
                          <ul className="space-y-2 mb-4">
                            {exp.description.map((desc, descIndex) => (
                              <li key={descIndex} className="text-sm text-muted-foreground flex items-start">
                                <span className="text-primary mr-2">•</span>
                                {desc}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  Education
                </h4>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="hover-lift">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{edu.degree}</CardTitle>
                            <Badge variant={edu.current ? "default" : "secondary"}>
                              {edu.current ? "Current" : "Completed"}
                            </Badge>
                          </div>
                          <CardDescription className="text-base font-medium">
                            {edu.institution}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-2">
                            {edu.field} • {edu.startDate} - {edu.endDate || 'Present'}
                          </p>
                          {edu.description && (
                            <p className="text-sm text-muted-foreground">
                              {edu.description}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

