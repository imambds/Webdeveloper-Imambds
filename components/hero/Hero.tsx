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
        <ParallaxText direction={1000} baseVelocity={-1}>
          <GradientText>Frontend Web Developer Frontend Web Developer</GradientText>
        </ParallaxText>
        <ParallaxText direction={-1000} baseVelocity={1}>
          <GradientText>UI/UX DESIGNER UI/UX DESIGNER</GradientText>
        </ParallaxText>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute left-0 top-[30%] hidden h-[121px] w-[244px] flex-col items-start justify-center rounded-br-full rounded-tr-full bg-zinc-800 px-5 dark:bg-zinc-100 lg:flex"
      >
        <p className="text-md font-medium text-zinc-200 dark:text-zinc-600">
          Locatad
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

// Komponen teks gradient dengan animasi
const GradientText = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.span
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
      className="bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-500 bg-[length:200%_200%] bg-clip-text text-transparent font-bold text-5xl sm:text-6xl md:text-8xl"
    >
      {children}
    </motion.span>
  )
}
