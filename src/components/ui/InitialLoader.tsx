'use client'

import { useEffect, useState } from 'react'
import PageLoader from './PageLoader'

interface InitialLoaderProps {
  children: React.ReactNode
}

export default function InitialLoader({ children }: InitialLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time and then hide loader
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <PageLoader />
  }

  return <>{children}</>
}
