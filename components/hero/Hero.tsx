"use client"

import { motion } from "framer-motion"
import HeroText from "./HeroText"
import ParallaxText from "./ParallaxText"
// import HeroGraphic from "./HeroGraphic"
import DigitalGlobe from "../DigitalGlobe"

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center"
      initial="initial"
      animate="animate"
    >
      {/* <HeroGraphic /> */}
      <HeroText />

      <div className="mt-10 w-full overflow-hidden">
        {/* Parallax Text for Frontend Developer */}
        <ParallaxText direction={1000} baseVelocity={-0.3}>
          <GradientText>Frontend Web Developer Frontend Web Developer</GradientText>
        </ParallaxText>

        {/* Parallax Text for UI/UX Designer */}
        <ParallaxText direction={-1000} baseVelocity={0.3}>
          <GradientText>UI/UX DESIGNER UI/UX DESIGNER</GradientText>
        </ParallaxText>
      </div>

      {/* Digital Globe Section */}
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute left-0 top-[30%] hidden h-[121px] w-[244px] flex-col items-start justify-center rounded-br-full rounded-tr-full bg-zinc-800 px-5 dark:bg-zinc-100 lg:flex"
      >
        <p className="text-md font-medium text-zinc-200 dark:text-zinc-600">
          Located
        </p>
        <p className="text-md font-medium text-zinc-200 dark:text-zinc-600">
          in Yogyakarta,
        </p>
        <p className="text-md font-medium text-zinc-200 dark:text-zinc-600">
          Indonesia.
        </p>
        <DigitalGlobe className="absolute right-3 top-[10%]" />
      </motion.div>
    </motion.section>
  )
}

// Komponen teks biasa tanpa gradient
const GradientText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="font-bold text-5xl sm:text-6xl md:text-8xl text-zinc-800 dark:text-zinc-100">
      {children}
    </span>
  )
}
