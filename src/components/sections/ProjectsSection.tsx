'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ExternalLink, Terminal, FolderOpen } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { projects } from '@/data/portfolio'

export default function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20 dark:bg-[#0a0a0a] light:bg-[#fafafa] w-full overflow-hidden relative transition-colors duration-300">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 rounded-lg font-mono text-sm mb-4">
              <Terminal className="h-4 w-4 dark:text-green-400 light:text-blue-600" />
              <span className="dark:text-green-500/70 light:text-blue-500/70">$</span>
              <span className="dark:text-green-400 light:text-blue-600">git show projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold dark:text-green-400 light:text-blue-600 mb-4 font-mono terminal-text">
              Featured Projects
            </h2>
            <p className="text-xl dark:text-green-500/70 light:text-blue-500/70 max-w-3xl mx-auto font-mono">
              {'//'} A showcase of my recent work and side projects
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="h-full dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 dark:hover:border-green-500/50 light:hover:border-blue-500/50 group cursor-pointer terminal-glow transition-all duration-300">
                  <CardHeader>
                    <div className="aspect-video dark:bg-[#0a0a0a] light:bg-gray-50 border dark:border-green-500/20 light:border-blue-500/20 rounded-lg mb-4 flex items-center justify-center dark:group-hover:border-green-500/40 light:group-hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 dark:bg-green-500/5 light:bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="text-center relative z-10">
                        <FolderOpen className="h-12 w-12 dark:text-green-400/50 light:text-blue-600/50 mx-auto mb-2" />
                        <span className="text-sm dark:text-green-500/70 light:text-blue-500/70 font-mono">project-preview</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl dark:group-hover:text-green-400 light:group-hover:text-blue-600 transition-colors font-mono dark:text-green-400 light:text-blue-600">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base dark:text-green-500/80 light:text-blue-600/80 font-mono">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs dark:border-green-500/30 light:border-blue-500/30 dark:text-green-400 light:text-blue-600 font-mono">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge variant="outline" className="text-xs dark:border-green-500/30 light:border-blue-500/30 dark:text-green-500/70 light:text-blue-500/70 font-mono">
                          +{project.techStack.length - 3} more
                        </Badge>
                      )}
                    </div>
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        asChild 
                        className="w-full hover:scale-105 transition-transform duration-200 dark:border-green-500/30 light:border-blue-500/30 dark:text-green-400 light:text-blue-600 dark:hover:bg-green-500/10 light:hover:bg-blue-500/10 font-mono"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          $ open-live
                        </a>
                      </Button>
                    )}
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full dark:bg-[#0a0a0a] light:bg-gray-50 border dark:border-green-500/30 light:border-blue-500/30 dark:text-green-400 light:text-blue-600 dark:hover:bg-green-500/10 light:hover:bg-blue-500/10 dark:hover:border-green-500/50 light:hover:border-blue-500/50 transition-all duration-200 hover:scale-105 font-mono"
                        >
                          $ view-details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/30 light:border-blue-500/30 dark:text-green-400 light:text-blue-600">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-mono">{project.title}</DialogTitle>
                          <DialogDescription className="text-base dark:text-green-500/80 light:text-blue-600/80 font-mono">
                            {project.description}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold mb-2 dark:text-green-400 light:text-blue-600 font-mono">{'//'} Description</h4>
                            <p className="dark:text-green-500/80 light:text-blue-600/80 text-sm leading-relaxed font-mono">
                              {project.longDescription}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3 dark:text-green-400 light:text-blue-600 font-mono">{'//'} Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech) => (
                                <Badge key={tech} variant="outline" className="dark:border-green-500/30 light:border-blue-500/30 dark:text-green-400 light:text-blue-600 font-mono">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          {project.liveUrl && (
                            <Button asChild className="w-full hover:scale-105 transition-transform duration-200 dark:bg-green-500/10 light:bg-blue-500/10 border dark:border-green-500/30 light:border-blue-500/30 dark:text-green-400 light:text-blue-600 dark:hover:bg-green-500/20 light:hover:bg-blue-500/20 font-mono">
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                $ open-live
                              </a>
                            </Button>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Project Stats */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center p-4 dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/20 light:border-blue-500/20 rounded-lg">
                <div className="text-3xl font-bold dark:text-green-400 light:text-blue-600 mb-2 font-mono">5+</div>
                <div className="text-sm dark:text-green-500/70 light:text-blue-500/70 font-mono">Projects</div>
              </div>
              <div className="text-center p-4 dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/20 light:border-blue-500/20 rounded-lg">
                <div className="text-3xl font-bold dark:text-green-400 light:text-blue-600 mb-2 font-mono">3</div>
                <div className="text-sm dark:text-green-500/70 light:text-blue-500/70 font-mono">Mobile Apps</div>
              </div>
              <div className="text-center p-4 dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/20 light:border-blue-500/20 rounded-lg">
                <div className="text-3xl font-bold dark:text-green-400 light:text-blue-600 mb-2 font-mono">2</div>
                <div className="text-sm dark:text-green-500/70 light:text-blue-500/70 font-mono">Web Apps</div>
              </div>
              <div className="text-center p-4 dark:bg-[#1a1a1a] light:bg-white border dark:border-green-500/20 light:border-blue-500/20 rounded-lg">
                <div className="text-3xl font-bold dark:text-green-400 light:text-blue-600 mb-2 font-mono">100%</div>
                <div className="text-sm dark:text-green-500/70 light:text-blue-500/70 font-mono">TypeScript</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
