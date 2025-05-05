"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import CertificationCard from "@/components/certification/CertificationCard"
import { certifications } from "@/components/certification/certificationData"
import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"

const introTitles = ["Certifications"]

const projectCardAnimation = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, duration: 1.8, ease: [0.2, 0.65, 0.3, 0.9] },
  },
}

const projectCardImageAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1.2, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
  },
}

const projectCardTitleAnimation = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] },
  },
}

const projectCardDescriptionAnimation = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.4, duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] },
  },
}

const projectCardTechAnimation = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.6, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
  },
}

const CertificationPage = () => {
  const [introDone, setIntroDone] = useState(false)
  const [introIndex, setIntroIndex] = useState(0)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIntroIndex((prev) => {
        if (prev < introTitles.length - 1) {
          return prev + 1
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setShowIntro(false)
            setIntroDone(true)
          }, 800)
          return prev
        }
      })
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Intro Screen */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            className="fixed top-0 left-0 w-full h-full bg-black z-[9999] flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              key={introTitles[introIndex]}
              className="text-white text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {introTitles[introIndex]}
              <span className="animate-blink"></span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {introDone && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="min-h-screen bg-gray-100 dark:bg-[#161616] transition-all duration-500 px-4 py-12"
        >
          <div className="flex flex-col items-center w-full">
            {/* Title + Sparkles */}
            <div className="flex w-full max-w-6xl items-center justify-between mb-10 px-2">
              <h2 className="text-4xl font-bold md:text-5xl lg:text-7xl text-left">
                My Certification
              </h2>
              <Sparkles className="h-9 w-9 md:h-11 md:w-11 lg:h-16 lg:w-16" />
            </div>

            {/* Certification Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col justify-between h-full rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-6 shadow-md overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={projectCardAnimation}
                >
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto rounded-lg shadow-md mb-4"
                    variants={projectCardImageAnimation}
                  />
                  <motion.h3
                    className="text-2xl font-semibold text-zinc-900 dark:text-white mb-2"
                    variants={projectCardTitleAnimation}
                  >
                    {cert.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-zinc-600 dark:text-zinc-400 mb-1"
                    variants={projectCardDescriptionAnimation}
                  >
                    Issued by: {cert.issuedBy}
                  </motion.p>
                  <motion.span
                    className="text-xs text-zinc-500 dark:text-zinc-400"
                    variants={projectCardTechAnimation}
                  >
                    {cert.date}
                  </motion.span>
                </motion.div>
              ))}
            </div>

            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="mt-16"
            >
              <Link
                href="/"
                className="inline-block px-6 py-3 rounded-lg bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
              >
                Back to Home
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default CertificationPage
