import { Link } from 'react-router'
import { ArrowRight, CheckCircle2, Briefcase, CloudRain, HeartCrack, Footprints } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/Reveal'

const aspectos = [
  'Identificação de pensamentos e padrões que geram sofrimento',
  'Compreensão das emoções e de como lidar melhor com elas',
  'Desenvolvimento de estratégias para enfrentar situações difíceis',
  'Mudança de comportamentos que podem estar mantendo determinados problemas',
  'Desenvolvimento de habilidades para lidar com situações futuras',
  'Construção de formas mais equilibradas e flexíveis de interpretar as experiências',
]

const ciclo = [
  { icon: Briefcase, label: 'Situação', texto: 'Você precisa fazer uma apresentação no trabalho.' },
  { icon: CloudRain, label: 'Pensamento', texto: '“Vou errar e todos vão perceber que não sou competente.”' },
  { icon: HeartCrack, label: 'Emoção', texto: 'Ansiedade, medo e insegurança.' },
  { icon: Footprints, label: 'Comportamento', texto: 'Evitar a apresentação ou passar dias pensando no que pode dar errado.' },
]

export default function TCC() {
  return (
    <div>
      <PageHeader
        eyebrow="A abordagem"
        title="Como funciona a Terapia Cognitivo-Comportamental?"
        subtitle="A TCC é uma abordagem da psicologia que entende que existe uma relação entre aquilo que pensamos, sentimos e fazemos."
      />

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Isso significa que a maneira como interpretamos determinadas situações pode influenciar nossas emoções e
              nossos comportamentos. A TCC possui uma abordagem{' '}
              <strong className="text-foreground">estruturada, colaborativa e orientada para objetivos</strong>, sempre
              considerando a história e as necessidades individuais de cada paciente.
            </p>
          </Reveal>
        </div>
      </section>

      {/* exemplo prático */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Um exemplo prático</h2>
            <p className="mt-3 text-muted-foreground">
              Veja como uma mesma situação gera uma cadeia de pensamentos, emoções e comportamentos:
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ciclo.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.12}>
                <div className="relative h-full rounded-3xl border border-border bg-white/90 p-6 shadow-sm">
                  <span className="absolute right-5 top-5 font-serif-display text-4xl font-semibold text-primary/20">
                    {i + 1}
                  </span>
                  <div className="mb-4 inline-flex rounded-2xl bg-secondary p-3 text-primary">
                    <c.icon size={22} />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">{c.label}</p>
                  <p className="mt-2 leading-relaxed text-foreground/85">{c.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
              Na TCC, o objetivo não é simplesmente “pensar positivo”. O trabalho terapêutico busca ajudar o paciente
              a <strong className="text-foreground">identificar padrões de pensamento e comportamento</strong> que
              podem estar contribuindo para seu sofrimento, compreender esses padrões e desenvolver maneiras mais
              funcionais de lidar com as situações.
            </p>
          </Reveal>
        </div>
      </section>

      {/* aspectos trabalhados */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Durante o processo terapêutico, podemos trabalhar aspectos como:
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {aspectos.map((a, i) => (
              <Reveal key={a} delay={i * 0.08}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-white/80 p-5">
                  <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-primary" />
                  <p className="leading-relaxed text-foreground/85">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.25} className="mt-14 text-center">
            <p className="font-serif-display text-2xl italic text-foreground/80">
              “Você não precisa lidar com tudo sozinho(a).”
            </p>
            <Link
              to="/agendamento"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-1"
            >
              Agende seu atendimento
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
