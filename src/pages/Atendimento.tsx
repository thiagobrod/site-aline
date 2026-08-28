import { Link } from 'react-router'
import { ArrowRight, MessageCircle, CalendarCheck, Video, Route, Lamp } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/Reveal'

const passos = [
  {
    icon: MessageCircle,
    titulo: 'Primeiro contato',
    texto: 'Você entra em contato para tirar suas dúvidas e conhecer melhor o funcionamento do atendimento.',
  },
  {
    icon: CalendarCheck,
    titulo: 'Agendamento',
    texto: 'Após o primeiro contato, é definido um horário adequado para as sessões.',
  },
  {
    icon: Video,
    titulo: 'Atendimento on-line',
    texto: 'As sessões são realizadas por videochamada, em um ambiente reservado e seguro.',
  },
  {
    icon: Route,
    titulo: 'Processo terapêutico',
    texto: 'Ao longo das sessões, são identificadas as principais demandas e definidos, em conjunto, os objetivos do processo.',
  },
]

export default function Atendimento() {
  return (
    <div>
      <PageHeader
        eyebrow="Atendimento on-line"
        title="Psicoterapia onde você estiver"
        subtitle="Os atendimentos são realizados de forma on-line, permitindo que adultos de todo o Brasil façam seu acompanhamento psicológico sem precisar se deslocar até um consultório."
      />

      {/* passos */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="relative">
            <div className="absolute bottom-8 left-[27px] top-8 w-px bg-gradient-to-b from-primary/50 via-primary/25 to-transparent md:left-1/2 md:-translate-x-1/2" aria-hidden />
            <div className="space-y-10 md:space-y-0">
              {passos.map((p, i) => (
                <Reveal key={p.titulo} delay={i * 0.08}>
                  <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-10 md:py-8">
                    {/* card desktop: esquerda nos índices pares, direita nos ímpares */}
                    <div
                      className={`hidden md:block ${
                        i % 2 === 0 ? 'md:text-right md:pr-4' : 'md:col-start-3 md:pl-4'
                      }`}
                    >
                      <div className="rounded-3xl border border-border bg-white/85 p-6 shadow-sm backdrop-blur">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Passo {i + 1}</p>
                        <h2 className="mt-1 text-2xl font-semibold text-foreground">{p.titulo}</h2>
                        <p className="mt-2 leading-relaxed text-muted-foreground">{p.texto}</p>
                      </div>
                    </div>

                    {/* ícone central */}
                    <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center self-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg md:col-start-2 md:row-start-1">
                      <p.icon size={22} />
                    </div>

                    {/* card mobile */}
                    <div className="md:hidden">
                      <div className="rounded-3xl border border-border bg-white/85 p-6 shadow-sm backdrop-blur">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Passo {i + 1}</p>
                        <h2 className="mt-1 text-2xl font-semibold text-foreground">{p.titulo}</h2>
                        <p className="mt-2 leading-relaxed text-muted-foreground">{p.texto}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* dica */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-primary/20 bg-secondary/60 p-8 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary p-3 text-primary-foreground">
                  <Lamp size={22} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">Para aproveitar melhor a sessão</h2>
                  <p className="mt-3 leading-relaxed text-foreground/80">
                    Procure realizar o atendimento em um local tranquilo e reservado, no qual você tenha privacidade e
                    consiga se dedicar à sessão sem interrupções.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="mt-14 text-center">
            <p className="text-lg text-muted-foreground">
              Entre em contato para saber mais sobre o atendimento e verificar a disponibilidade de horários.
            </p>
            <Link
              to="/agendamento"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-1"
            >
              Agendar atendimento
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
