"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  text: string;
  className?: string;
}

export default function ScrollGradientText({ text, className }: Props) {
  const container = useRef<HTMLDivElement | null>(null);
  const refs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (!container.current) return;

    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
      opacity: 2,
      y: 0,
      ease: "none",
      stagger: 0.2,
    });
  }, []);

  return (
    <div
      ref={container}
      className={`relative overflow-hidden text-justify ${className}`}
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 97%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 97%, transparent 100%)",
      }}
    >
      {text
        .split("\n\n") // pisahkan berdasarkan paragraf
        .filter((p) => p.trim() !== "")
        .map((paragraph, index) => (
          <p
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className="opacity-0 translate-y-4 mb-5 text-zinc-700 dark:text-zinc-300"
          >
            {paragraph.trim()}
          </p>
        ))}
    </div>
  );
}
