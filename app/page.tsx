"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Chatbot from "@/components/chatbot/Chatbot";
// import Background from "@/components/ui/background";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Nav from "@/components/navbar/Nav";
import Preload from "@/components/preload/Preload";
import Projects from "@/components/projects/Projects";
import Certifications from "@/components/certification/Certifications";
import IntroScreen from "@/components/intro/IntroScreen";

// Grain overlay component for visual effect
const GrainOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-10 mix-blend-overlay opacity-20 bg-[url('/grain.png')] bg-repeat" />
);

export default function Home() {
  const [loadingPreloader, setLoadingPreloader] = useState<boolean>(false);
  const [endedLoading, setEndedLoading] = useState<boolean>(false);
  const [showIntro, setShowIntro] = useState(true);

  // Handling the preloader state and body overflow
  useEffect(() => {
    const body = document.querySelector("body");

    if (loadingPreloader) {
      body?.classList.add("overflow-hidden");
      setTimeout(() => setLoadingPreloader(false), 4000);
      setTimeout(() => setEndedLoading(true), 3000);
    } else {
      body?.classList.remove("overflow-hidden");
    }
  }, [loadingPreloader]);

  // Displaying the preloader while loading
  if (loadingPreloader) {
    return (
      <AnimatePresence mode="wait" initial={true}>
        {loadingPreloader && <Preload endedLoading={endedLoading} />}
      </AnimatePresence>
    );
  }

  return (
    <>
      {/* Intro screen shown initially */}
      {showIntro && <IntroScreen onFinish={() => setShowIntro(false)} />}

      {/* Main content after intro screen is finished */}
      {!showIntro && (
        <>
          <Chatbot />
          <Nav />
          {/* <Background /> */}
          <GrainOverlay />

          <main data-scroll-container className="flex flex-col items-center">
            <Hero />
            <About />
            <Experience />
            <Certifications />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}
