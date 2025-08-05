"use client";

import { motion } from "framer-motion";
import AboutGlobeAnimate from "./AboutGlobeAnimate";
import AnimateParagraph from "./AnimateParagraph";
import AnimateHeading from "./AnimateHeading";
import AnimateBody from "./AnimateBody";
import GithubGraph from "./GithubGraph";
import SocialMedia from "./SocialMedia";
import ScrollGradientText from "./ScrollGradientText";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

// --- Tambahan: Tech Stack Data dan Animasi ---
const rawSkills = [
  "html5", "css3", "javascript", "typescript", "react", "threedotjs", "nextdotjs", "tailwindcss",
  "figma", "mysql", "postgresql", "nodedotjs", "visualstudiocode", "python",
  "laravel", "django", "bootstrap", "adobephotoshop", "adobeillustrator",
  "vuedotjs", "framer", "scikitlearn", "tensorflow", "flask", "googlebigquery",
  "rabbitmq", "docker", "git", "dbt", "postman", "canva", "capcut", "adobexd"
];


const skills = [...new Set(rawSkills)].map((skill) => ({
  name: skill.toUpperCase(),
  icon: `simple-icons:${skill}`,
}));

const marqueeVariants = (direction: "left" | "right") => ({
  animate: {
    x: direction === "left" ? ["0%", "-90%"] : ["-90%", "0%"],
    transition: {
      ease: "linear",
      duration: 100,
      repeat: Infinity,
    },
  },
});

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const MarqueeRow = ({ direction, extraClass }: { direction: "left" | "right"; extraClass?: string }) => (
  <motion.div
    variants={marqueeVariants(direction)}
    animate="animate"
    className={`flex flex-nowrap ${extraClass}`}
  >
    {skills.concat(skills).map((skill, index) => (
      <div key={index} className="flex items-center justify-center w-12 h-12">
        <Icon icon={skill.icon} className="text-white text-4xl opacity-80 hover:opacity-100 transition" />
      </div>
    ))}
  </motion.div>
);

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 20000;
    const intervalTime = 10;
    const steps = duration / intervalTime;
    const increment = target / steps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count.toLocaleString()} hrs</span>;
};

// --- Akhir Tambahan ---

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center bg-transparent py-10"
    >
      <div className="mx-auto w-[90%] max-w-[1212.8px]">
        {/* Header Section */}
        <div className="mb-12 flex w-full flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="text-left text-4xl font-bold text-black dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
            About Me
          </h2>
          <AboutGlobeAnimate />
        </div>

        {/* Description */}
        <div className="mb-16 flex flex-col gap-6">
          <ScrollGradientText
            text={`A recent graduate with a Bachelor's degree in Information Systems from Mercu Buana Yogyakarta University
            With a strong passion for graphic design, UI/UX design, digital marketing, web development, and AI development.

            I am accustomed to working in teams and take every task seriously, recognizing its importance. I am eager to gain new experiences that will allow me to grow and further enhance my skills.`}
            className="text-lg md:text-xl leading-relaxed"
          />

          {/* <motion.a
            href="/CV/cv-imambudiprakoso.pdf"
            download
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.1, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative mt-4 w-fit rounded-lg bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-yellow-300 p-[2px]"
          >
            <span className="block rounded-md bg-zinc-200 px-6 py-3 dark:bg-zinc-800">
              <span className="bg-[linear-gradient(90deg,#67e8f9,#e879f9,#fde68a,#67e8f9)] bg-[length:300%_300%] bg-clip-text text-sm font-semibold text-transparent animate-text-glow dark:text-transparent">
                Download My CV
              </span>
            </span>
          </motion.a> */}
        </div>

        {/* --- Tech Stack, Coding Hour, Fav Framework --- */}
        <div className="mb-20 grid grid-cols-1 gap-10">
          {/* Tech Stack */}
            <motion.div
              // className="bg-neutral-1000 border border-white/5 p-9 rounded-xl flex flex-col items-center justify-center overflow-hidden"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}  // Pastikan 'fadeInUp' sudah didefinisikan dengan benar di luar sini
              viewport={{ once: true }}
            >
              {/* Judul dipindahkan ke atas */}
              <h3 className="text-white text-xl font-semibold mb-5">Tech Stacks</h3>
              
              <div className="w-full overflow-hidden relative space-y-4">
                {/* MarqueeRow adalah komponen kustom, pastikan sudah diimpor dengan benar */}
                <MarqueeRow direction="left" extraClass="gap-4 md:gap-8" />
                <MarqueeRow direction="right" extraClass="gap-4 md:gap-8" />
              </div>
            </motion.div>



          {/* Coding Hours & Fav Framework */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Coding Hours */}
            {/* <motion.div
              className="bg-neutral-1000 border border-white/5 p-6 rounded-xl flex flex-col items-center justify-center min-h-[200px]"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <h3 className="text-white text-xl font-semibold mb-5">Coding Hours</h3>
              <p className="text-4xl font-bold text-white">
                <Counter target={13136} />
              </p>
            </motion.div> */}

            {/* Favorite Framework */}
            {/* <motion.div
              className="bg-neutral-1000 border border-white/5 p-6 rounded-xl flex flex-col items-center justify-center min-h-[200px]"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <h3 className="text-white text-xl font-semibold mb-5">Fav Framework</h3>
              <Icon icon="simple-icons:nextdotjs" className="text-white text-4xl opacity-80 hover:opacity-100 transition" />
            </motion.div> */}
          </div>
        </div>

        {/* Additional Widgets
        <div className="flex flex-col gap-10">
          <GithubGraph />
          <SocialMedia />
        </div> */}
      </div>
    </section>
  );
}
