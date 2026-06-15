import { useMemo, useState } from "react"
import { projects } from "../data"
import ProjectCard from "./ProjectCard"

const categories = ["All", "Web App", "Website", "UI/UX"];

export default function ProjectsSection() {
  const [active, setActive] = useState("All")

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className='text-primary text-sm uppercase tracking-wider mb-2 font-semibold'>
                Project Experience
            </p>

            <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                Project.
            </h2><br/>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      

        <div className=" flex-wrap gap-2 hidden">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors " +
                (active === category
                  ? "bg-primary text-white"
                  : "border text-white hover:border-(--color-brand-bright) hover:text-(--color-foreground) ")
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
