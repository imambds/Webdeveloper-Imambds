"use client"

import { GithubIcon, LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import {
  projectCardAnimation,
  projectCardDescriptionAnimation,
  projectCardImageAnimation,
  projectCardLinksAnimation,
  projectCardTechAnimation,
  projectCardTitleAnimation,
} from "./animationCard"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tech: string[]
  // repo: string
  projectLink: string
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  // repo,
  projectLink,
}: ProjectCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const ctrls = useAnimation()

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
  }, [ctrls, isInView])

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      variants={projectCardAnimation}
      className="relative flex h-full flex-col justify-between rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 shadow-md p-6 overflow-hidden"
    >
      {/* Links */}
      <motion.div
        animate={ctrls}
        initial="hidden"
        variants={projectCardLinksAnimation}
        className="absolute top-4 left-4 flex gap-3"
      >
        {/* <Link
          href={repo}
          target="_blank"
          className="rounded-full bg-foreground p-2 transition-all hover:bg-foreground/50"
          aria-label="Open Github Repo"
        >
          <GithubIcon className="h-6 w-6 text-zinc-100 dark:text-zinc-800" />
        </Link> */}
        <Link
          href={projectLink}
          target="_blank"
          className="rounded-full bg-foreground p-2 transition-all hover:bg-foreground/50"
          aria-label="Open Live Demo"
        >
          <LinkIcon className="h-6 w-6 text-zinc-100 dark:text-zinc-800" />
        </Link>
      </motion.div>

      {/* Title & Description */}
      <div className="mb-4 mt-14">
        <motion.h3
          animate={ctrls}
          initial="hidden"
          variants={projectCardTitleAnimation}
          className="text-xl md:text-2xl font-bold text-foreground"
        >
          {title}
        </motion.h3>
        <motion.p
          animate={ctrls}
          initial="hidden"
          variants={projectCardDescriptionAnimation}
          className="mt-2 text-sm text-foreground/60 leading-relaxed"
        >
          {description}
        </motion.p>
      </div>

      {/* Tech Stack */}
      <motion.div
        animate={ctrls}
        initial="hidden"
        variants={projectCardTechAnimation}
        className="flex flex-wrap gap-2 mb-4"
      >
        {tech.map((item, idx) => (
          <span
            key={idx}
            className="bg-zinc-300 dark:bg-zinc-700 px-2 py-1 text-xs rounded-md text-foreground/70"
          >
            {item}
          </span>
        ))}
      </motion.div>

      {/* Image */}
      <motion.div
        animate={ctrls}
        initial="hidden"
        variants={projectCardImageAnimation}
        className="w-full mt-auto"
      >
        <Image
          src={image}
          alt={title}
          width={1000}
          height={600}
          className="object-contain w-full max-h-[180px] mt-4"
        />
      </motion.div>
    </motion.div>
  )
}
