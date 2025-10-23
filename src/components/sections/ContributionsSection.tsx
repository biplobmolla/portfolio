'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, Star, GitFork, ExternalLink, Code2 } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { contributions } from '@/data/portfolio'

export default function ContributionsSection() {
  const totalStars = contributions.reduce((sum, repo) => sum + repo.stars, 0)
  const totalForks = contributions.reduce((sum, repo) => sum + repo.forks, 0)

  return (
    <section id="contributions" className="py-20 bg-background w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Open Source Contributions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My contributions to the open source community and GitHub repositories
            </p>
          </div>
        </ScrollReveal>

        {/* GitHub Stats */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">{contributions.length}</div>
              <div className="text-sm text-muted-foreground">Repositories</div>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">{totalStars}</div>
              <div className="text-sm text-muted-foreground">Total Stars</div>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">{totalForks}</div>
              <div className="text-sm text-muted-foreground">Total Forks</div>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">TypeScript</div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contributions.map((contribution, index) => (
            <ScrollReveal key={contribution.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="h-full hover-lift group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Github className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {contribution.repository}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {contribution.language} Repository
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {contribution.language}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {contribution.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4" />
                          <span>{contribution.stars} stars</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork className="h-4 w-4" />
                          <span>{contribution.forks} forks</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="default" asChild className="flex-1">
                        <a href={contribution.url} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={contribution.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">More Contributions</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Check out my GitHub profile for more open source contributions and side projects
                </p>
                <Button asChild size="lg">
                  <a href="https://github.com/biplobmolla" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    View GitHub Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

