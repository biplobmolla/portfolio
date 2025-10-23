'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, Star, GitFork } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { contributions } from '@/data/portfolio'

export default function ContributionsSection() {
  return (
    <section id="contributions" className="py-20 bg-background w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Open Source Contributions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My contributions to the open source community
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributions.map((contribution, index) => (
            <ScrollReveal key={contribution.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full hover-lift">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Github className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{contribution.repository}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {contribution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {contribution.language}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4" />
                          <span>{contribution.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork className="h-4 w-4" />
                          <span>{contribution.forks}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" asChild className="w-full">
                      <a href={contribution.url} target="_blank" rel="noopener noreferrer">
                        View Repository
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

