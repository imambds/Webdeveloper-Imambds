"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { certifications } from "./certificationData";
import AboutGlobeAnimate from "../about/AboutGlobeAnimate";

// Animation Variants
const projectCardAnimation = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, duration: 1.8, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const projectCardImageAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1.2, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const projectCardTitleAnimation = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const projectCardDescriptionAnimation = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.4, duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const projectCardDateAnimation = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.6, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

export default function Certifications() {
  const visibleCerts = certifications.slice(0, 2); // tampilkan 2 sertifikasi saja

  return (
    <section
      id="certifications"
      className="mt-24 mb-12 w-[90%] max-w-[1212px] px-4 md:px-0 mx-auto"
    >
      {/* Moving Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full animate-moving-grid bg-[radial-gradient(circle,_#9993_1px,_transparent_1px)] bg-[length:20px_20px] opacity-20 dark:opacity-10"></div>
      </div>
      {/* Title and Icon */}
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-left text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
          My Certifications
        </h2>
        <AboutGlobeAnimate />
      </div>

      {/* Certification Cards */}
      <div className="flex flex-col gap-10">
        {visibleCerts.map((cert) => (
          <motion.div
            key={cert.id}
            className="flex flex-col md:flex-row items-center gap-6 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-6 shadow-md overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={projectCardAnimation}
          >
            <motion.img
              src={cert.image}
              alt={cert.title}
              className="w-full md:w-[40%] h-auto rounded-lg shadow-md"
              variants={projectCardImageAnimation}
            />
            <div className="flex flex-col w-full md:w-[60%]">
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
                variants={projectCardDateAnimation}
              >
                {cert.date}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* "See All Certifications" Button */}
      <div className="mt-16 flex justify-center">
        <Link
          href="/certification"
          className="relative w-fit rounded-lg bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-yellow-300 p-[2px]"
        >
          <span className="block rounded-md bg-zinc-200 dark:bg-[#1E1E21] px-6 py-3">
            <span className="bg-[linear-gradient(90deg,#67e8f9,#e879f9,#fde68a,#67e8f9)] bg-[length:300%_300%] bg-clip-text text-transparent font-semibold animate-text-glow dark:text-transparent">
              See All Certifications
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
