"use client"

import Link from "next/link"
import { projects } from "@/lib/projectData"
import ProjectCard from "@/components/projects/ProjectCard"
import ProjectTitleAnimate from "@/components/projects/ProjectTitleAnimate"

export default function Projects() {
  const visibleProjects = projects.slice(0, 3)

  return (
    <section
      id="projects"
      className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px] z-[20] mt-24"
    >
      <ProjectTitleAnimate />

      <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 md:px-0">
        {visibleProjects.map((project, index) => (
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

      {/* Tombol Show More menuju halaman /projects dengan gradient border & animated text */}
      <div className="flex justify-center">
        <Link
          href="/projects"
          className="relative mt-4 w-fit rounded-lg bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-yellow-300 p-[2px]"
        >
          {/* Inner background layer */}
          <span className="block rounded-md bg-zinc-200 px-6 py-3 dark:bg-zinc-800">
            {/* Animated gradient text shimmer */}
            <span className="bg-[linear-gradient(90deg,#67e8f9,#e879f9,#fde68a,#67e8f9)] bg-[length:300%_300%] bg-clip-text text-transparent font-semibold animate-text-glow dark:text-transparent">
              See All Projects
            </span>
          </span>
        </Link>
      </div>
    </section>
  )
}

// Note:
// Pastikan animasi teks sudah didefinisikan di global CSS atau Tailwind config:
// @keyframes text-glow {
//   0% { background-position: 0% 50%; }
//   100% { background-position: 100% 50%; }
// }
// .animate-text-glow { animation: text-glow 8s ease-in-out infinite; }
