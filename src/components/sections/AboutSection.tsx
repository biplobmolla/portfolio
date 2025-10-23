'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { personalInfo, education } from '@/data/portfolio'

export default function AboutSection() {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                {personalInfo.name}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-foreground">Location:</span>
                  <span className="text-sm text-muted-foreground">{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-foreground">Experience:</span>
                  <span className="text-sm text-muted-foreground">5+ Years</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
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
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-medium">
                        {edu.institution}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {edu.field} • {edu.startDate} - {edu.endDate || 'Present'}
                      </p>
                      {edu.description && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {edu.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

