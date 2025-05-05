"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { projects } from "@/lib/projectData"
import ProjectCard from "@/components/projects/ProjectCard"
import ProjectTitleAnimate from "@/components/projects/ProjectTitleAnimate"

const introTitles = ["Projects"]

export default function AllProjectsPage() {
  const [introDone, setIntroDone] = useState(false)
  const [introIndex, setIntroIndex] = useState(0)
  const [showIntro, setShowIntro] = useState(true)

  // Handle intro typing effect
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
          className="min-h-screen bg-gray-100 dark:bg-[#161616] transition-all duration-500 px-4 py-24"
        >
          <div className="mx-auto w-full max-w-[1212.8px]">
            <ProjectTitleAnimate />

            <div className="mb-12 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tech={project.tech}
                  projectLink={project.linkProject}
                />
              ))}
            </div>

            <div className="mt-20 flex justify-center min-h-[100px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <Link
                  href="/"
                  className="inline-block px-6 py-3 rounded-lg bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  Back to Home
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
