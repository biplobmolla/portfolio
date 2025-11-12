'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { personalInfo } from '@/data/portfolio'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactForm = z.infer<typeof contactSchema>

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (formData: ContactForm) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      console.log('Form data:', formData)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      reset()
    } catch (err) {
      console.error('Error submitting form:', err)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
  ]

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: personalInfo.twitter, label: 'Twitter' },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/50 w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let&apos;s discuss your next project or just say hello
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollReveal>
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Send className="h-6 w-6 mr-3 text-primary" />
                  Send me a message
                </CardTitle>
                <CardDescription className="text-base">
                  I&apos;ll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Input
                        placeholder="Your Name"
                        {...register('name')}
                        className={errors.name ? 'border-destructive' : ''}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.name.message}
                        </p>
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Input
                        type="email"
                        placeholder="Your Email"
                        {...register('email')}
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.email.message}
                        </p>
                      )}
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Input
                      placeholder="Subject"
                      {...register('subject')}
                      className={errors.subject ? 'border-destructive' : ''}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.subject.message}
                      </p>
                    )}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Textarea
                      placeholder="Your Message"
                      rows={6}
                      {...register('message')}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.message.message}
                      </p>
                    )}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full group"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                  
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">Message sent successfully!</span>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-center space-x-2 text-destructive bg-destructive/10 p-3 rounded-lg"
                    >
                      <AlertCircle className="h-5 w-5" />
                      <span className="font-medium">Failed to send message. Please try again.</span>
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold dark:text-foreground light:text-purple-700 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 p-4 dark:bg-background/50 light:bg-gradient-to-br light:from-cyan-700 light:to-teal-700 dark:hover:bg-background/80 light:hover:from-cyan-600 light:hover:to-teal-600 rounded-lg transition-colors border dark:border-transparent light:border-cyan-800/40 shadow-sm light:shadow-cyan-900/30"
                    >
                      <div className="p-3 rounded-full dark:bg-primary/10 light:bg-black/20">
                        <info.icon className="h-6 w-6 dark:text-primary light:text-black" />
                      </div>
                      <div>
                        <p className="font-medium dark:text-foreground light:text-black">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="dark:text-muted-foreground light:text-black dark:hover:text-primary light:hover:text-gray-800 transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="dark:text-muted-foreground light:text-black font-medium">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold dark:text-foreground light:text-purple-700 mb-6">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 rounded-full dark:bg-primary/10 light:bg-purple-100 dark:hover:bg-primary/20 light:hover:bg-purple-200 transition-colors group border dark:border-transparent light:border-purple-200/50"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 dark:text-primary light:text-purple-600 group-hover:scale-110 transition-transform" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Response Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="dark:bg-gradient-to-r dark:from-primary/5 dark:to-purple-500/5 light:bg-gradient-to-r light:from-purple-50 light:to-pink-50 border dark:border-primary/20 light:border-purple-300/50 rounded-lg p-6"
              >
                <h4 className="font-semibold dark:text-foreground light:text-purple-800 mb-2">Quick Response</h4>
                <p className="text-sm dark:text-muted-foreground light:text-purple-700">
                  I typically respond to messages within 24 hours. For urgent matters, 
                  feel free to call me directly.
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
