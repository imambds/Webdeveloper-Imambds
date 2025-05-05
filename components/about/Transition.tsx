"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
  viewport?: { once?: boolean }
}

export default function Transition({
  children,
  className,
  viewport = { once: true },
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  )
}
