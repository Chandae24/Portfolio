import { Award, BadgeCheck, CalendarDays } from "lucide-react"


export default function CertificateCard({ certificate }) {
  return (
    <article className="group relative flex gap-4 rounded-2xl border border-(--color-border)
    p-5 transition-all duration-300 hover:-translate-y-1hover:border-(--color-brand-bright)/70">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-(--color-brand)/15
      text-(--color-brand-bright) ring-1 ring-(--color-brand)/30">
        <Award className="size-6" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold leading-tight text-pretty">{certificate.title}</h3>
          <BadgeCheck className="size-5 shrink-0 text-(--color-accent)" aria-label="Verified" />
        </div>

        <p className="mt-1 text-sm font-medium text-(--color-foreground)/80">{certificate.issuer}</p>

        <div className="mt-2 flex items-center gap-1.5 text-xs ext-(--color-muted)">
          <CalendarDays className="size-3.5" />
          <span>{certificate.date}</span>
          {certificate.credentialId && (
            <span className="truncate">· ID {certificate.credentialId}</span>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {certificate.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-(--color-surface-2) px-2 text-xs font-medium text-(--color-foreground)/70"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
