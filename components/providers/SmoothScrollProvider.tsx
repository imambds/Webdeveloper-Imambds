"use client"

import { createContext, useEffect, useState } from "react"

export const SmoothScrollContext = createContext({
  scroll: null as LocomotiveScroll | null,
})

interface SmoothScrollProviderProps {
  children: React.ReactNode
  options?: any
}

export const SmoothScrollProvider = ({
  children,
  options,
}: SmoothScrollProviderProps) => {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null)

  useEffect(() => {
    const initializeScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default

        const scrollContainer = document.querySelector("[data-scroll-container]")
        
        if (!scrollContainer) {
          console.error('[SmoothScrollProvider]: Scroll container not found.')
          return
        }

        const scrollInstance = new LocomotiveScroll({
          el: scrollContainer,
          ...options,
        })

        setScroll(scrollInstance)
      } catch (error) {
        console.error(`[SmoothScrollProvider]: Failed to initialize LocomotiveScroll:`, error)
      }
    }

    // Only initialize once when component mounts
    if (!scroll) {
      initializeScroll()
    }

    // Cleanup on unmount
    return () => {
      scroll?.destroy()
    }
  }, [options, scroll]) // Only rerun when options change, not scroll itself

  return (
    <SmoothScrollContext.Provider
      value={{
        scroll,
      }}
    >
      {children}
    </SmoothScrollContext.Provider>
  )
}
