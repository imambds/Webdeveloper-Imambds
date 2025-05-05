"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    role: "Staff Administrations Intern",
    company: "Politeknik Keuangan Negara STAN",
    date: "Feb 2018 - July 2018",
    description: "Correspondence and Filing Management, Executive Activity Management, Meeting Coordination and Management.",
  },
  {
    role: "Frontend & Backend Developer",
    company: "PT. Solusi Dua Empat Tujuh",
    date: "March 2023 - July 2023",
    description: "Developed responsive web apps using Python, PHP, HTML/CSS; optimized UX and performed testing/debugging.",
  },
  {
    role: "Digital Marketing Intern",
    company: "Vocational Intern Kemnaker RI Disnakertrans DIY at Solusi247",
    date: "May 2023 - Oct 2023",
    description: "Executed digital marketing for retail; created content, visuals, and tech videos; optimized social media and e-commerce for engagement.",
  },
  {
    role: "Full-stack Website Developer",
    company: "Belajarkoding x BWA",
    date: "18 Okt 2022",
    description: "Developed full-stack web applications using Laravel; handled front-end integration, RESTful APIs, and database management.",
  },
]

const experienceItems = experiences.map(exp => ({
  quote: exp.description,
  name: exp.company,
  title: `${exp.role} — ${exp.date}`,
}))

export default function Experience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        scrollerRef.current?.appendChild(duplicatedItem)
      })
      containerRef.current.style.setProperty("--animation-direction", "reverse") // arah kanan
      containerRef.current.style.setProperty("--animation-duration", "150s")
      setStart(true)
    }
  }, [])

  return (
    <section
      id="experience"
      className="relative w-full bg-transparent py-10 flex items-center justify-center"
    >
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration) linear infinite;
          animation-direction: var(--animation-direction);
          animation-play-state: running;
        }
        .pause-on-hover:hover .animate-scroll {
          animation-play-state: paused !important;
        }
      `}</style>

      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto w-[90%] max-w-[1212.8px] overflow-hidden"
      >
        <h2 className="mb-10 text-left text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Experience
        </h2>
        <div
          ref={containerRef}
          className={cn(
            "scroller pause-on-hover relative z-20 max-w-7xl overflow-hidden",
            "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
          )}
        >
          <ul
            ref={scrollerRef}
            className={cn(
              "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
              start && "animate-scroll"
            )}
          >
            {experienceItems.map((item, idx) => (
              <li
                key={idx}
                className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
              >
                <blockquote>
                  <div
                    aria-hidden="true"
                    className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%+4px)] w-[calc(100%+4px)]"
                  />
                  <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                    {item.quote}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center">
                    <span className="flex flex-col gap-1">
                      <span className="text-sm font-normal text-neutral-500 dark:text-gray-400">
                        {item.name}
                      </span>
                      <span className="text-sm font-normal text-neutral-500 dark:text-gray-400">
                        {item.title}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
