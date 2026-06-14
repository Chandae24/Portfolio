import { ArrowUpRight, Code2 } from "lucide-react"

export default function ProjectCard({ project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary bg-[#111a3e] text-white transition-all 
    duration-300 hover:-translate-y-1 hover:border-(--color-accent)/60 
    hover:shadow-[0_20px_50px_-20px_rgba(34,211,238,0.35)]">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-(--color-card) via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-(--color-border) bg-(--color-background)/80
                 px-3 py-1 text-xs font-medium text-(--color-accent) backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-tight text-pretty">{project.title}</h3>
          <span className="shrink-0 text-sm font-medium text-(--color-muted)">{project.year}</span>
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-(--color-muted)">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-(--color-surface-2) px-2.5 py-1 text-xs font-medium text-(--color-foreground)/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-(--color-border) pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="inline-flex items-center gap-1.5 rounded-lg bg-(--color-brand) px-3.5 py-2 text-sm font-semibold
               text-white transition-colors hover:bg-(--color-brand-bright)"
            >
              Live Demo
              <ArrowUpRight className="size-4" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              className="inline-flex items-center gap-1.5 rounded-lg border border-(--color-border) px-3.5 py-2 text-sm 
              font-semibold text-(--color-foreground) transition-colors hover:border-(--color-accent) 
              hover:text-(--color-accent)"
            >
              <Code2 className="size-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
