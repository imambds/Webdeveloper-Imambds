"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "Hallo",
  "Olá",
  "Привет",
  "こんにちは",
  "안녕하세요",
  "你好"
]

interface IntroScreenProps {
  onFinish: () => void
}

const IntroScreen = ({ onFinish }: IntroScreenProps) => {
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setShow(false)
            onFinish()
          }, 1000)
          return prev
        }
      })
    }, 350) // tiap 800ms ganti bahasa

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen bg-black z-[9999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-white text-5xl md:text-7xl font-bold"
            key={greetings[greetingIndex]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {greetings[greetingIndex]}
            <span className="animate-blink"></span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroScreen
