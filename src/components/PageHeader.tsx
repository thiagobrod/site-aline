import { Reveal } from './Reveal'

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <section className="relative overflow-hidden pb-14 pt-36 lg:pb-20 lg:pt-44">
      <div
        className="animate-blob pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-primary/12 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
          <h1 className="text-balance text-4xl font-normal leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  )
}
