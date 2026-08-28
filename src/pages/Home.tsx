import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, HeartHandshake, Video, ShieldCheck, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

export default function Home() {
  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-14 lg:pb-0">
        {/* animated organic background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="animate-blob absolute -left-32 top-[-10%] h-[34rem] w-[34rem] rounded-full bg-[#a9bc9a]/35 blur-3xl" />
          <div className="animate-blob-2 absolute right-[-12%] top-[30%] h-[30rem] w-[30rem] rounded-full bg-[#dccdb4]/45 blur-3xl" />
          <div className="animate-blob absolute bottom-[-15%] left-[30%] h-[26rem] w-[26rem] rounded-full bg-[#c3d1b6]/30 blur-3xl [animation-delay:-6s]" />
          {/* fine grain line pattern */}
          <svg className="absolute inset-0 h-full w-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grain" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M0 60 Q30 40 60 60 T120 60" fill="none" stroke="#3e3a34" strokeWidth="1" />
                <path d="M0 20 Q30 0 60 20 T120 20" fill="none" stroke="#3e3a34" strokeWidth="0.6" />
                <path d="M0 100 Q30 80 60 100 T120 100" fill="none" stroke="#3e3a34" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grain)" />
          </svg>
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur"
            >
              <Sparkles size={14} />
              Psicoterapia on-line · Todo o Brasil
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance text-4xl font-normal leading-[1.18] tracking-[0.01em] text-foreground sm:text-5xl lg:text-[3.6rem]"
            >
              Cuidar da sua <em className="font-medium italic text-primary">saúde emocional</em> também é uma forma de
              cuidar de si.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Atendimento psicológico on-line para adultos, com base na Terapia Cognitivo-Comportamental (TCC) — um
              espaço seguro, acolhedor e livre de julgamentos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/agendamento"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40"
              >
                Agende seu atendimento
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/tcc"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/50 px-7 py-4 text-base font-medium text-foreground backdrop-blur transition-all hover:border-primary/40 hover:text-primary"
              >
                Entenda como funciona a TCC
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary" /> CRP 06/120263
              </span>
              <span className="flex items-center gap-2">
                <Video size={16} className="text-primary" /> 100% on-line
              </span>
              <span className="flex items-center gap-2">
                <Brain size={16} className="text-primary" /> Abordagem TCC
              </span>
            </motion.div>
          </motion.div>

          {/* photo */}
          <motion.div className="relative mx-auto w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="animate-breathe absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary/25 via-[#dccdb4]/40 to-transparent blur-2xl" />
              <div className="animate-float-slow relative overflow-hidden rounded-[2.5rem] sm:rounded-b-[3rem] sm:rounded-t-[14rem] border-[6px] border-white/80 shadow-2xl shadow-foreground/20">
                <img
                  src="/images/aline.jpg"
                  alt="Aline Alves, psicóloga"
                  className="h-auto w-full lg:h-[76vh] lg:object-cover lg:object-top"
                />
              </div>
              <div className="relative z-10 mx-auto -mt-8 w-max rounded-2xl border border-border bg-white/90 px-6 py-3 text-center shadow-xl backdrop-blur">
                <p className="font-serif-display text-lg font-semibold text-foreground">Aline Alves</p>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  Psicóloga · CRP 06/120263
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ APRESENTAÇÃO ============ */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Bem-vindo(a)</p>
            <h2 className="text-balance text-4xl font-normal leading-tight text-foreground sm:text-5xl">
              Um espaço seguro para compreender o que você está vivendo
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              Buscar ajuda psicológica é um passo importante e, muitas vezes, pode ser difícil saber por onde começar.
              Meu trabalho é oferecer um espaço seguro, acolhedor e livre de julgamentos, no qual você possa falar
              sobre suas dificuldades, compreender melhor seus pensamentos e emoções e construir, de forma
              colaborativa, caminhos para lidar com aquilo que está causando sofrimento.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Cada pessoa possui uma história, uma realidade e necessidades diferentes. Por isso, o processo
              terapêutico é conduzido de maneira humanizada e personalizada, respeitando o momento e as
              particularidades de cada paciente.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <Link
              to="/sobre"
              className="group mt-9 inline-flex items-center gap-2 text-base font-semibold text-primary"
            >
              Conheça meu trabalho
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ JORNADA ============ */}
      <section className="bg-secondary/50 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mb-14 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Por onde começar</p>
            <h2 className="text-balance text-4xl font-normal text-foreground sm:text-5xl">
              Você não precisa lidar com tudo sozinho(a)
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Brain,
                title: 'Entenda a TCC',
                text: 'Descubra como pensamentos, emoções e comportamentos se relacionam — e como a Terapia Cognitivo-Comportamental trabalha isso.',
                to: '/tcc',
                cta: 'Como funciona a TCC',
              },
              {
                icon: HeartHandshake,
                title: 'Para quem é',
                text: 'Ansiedade, depressão, estresse, baixa autoestima, relacionamentos, luto e outras questões emocionais em adultos.',
                to: '/para-quem',
                cta: 'Veja quando a terapia ajuda',
              },
              {
                icon: Video,
                title: 'Atendimento on-line',
                text: 'Psicoterapia onde você estiver: sessões por videochamada, em ambiente reservado e seguro, para todo o Brasil.',
                to: '/atendimento',
                cta: 'Saiba como funciona',
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.12}>
                <Link
                  to={c.to}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-white/80 p-8 shadow-sm backdrop-blur transition-all hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary p-3.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <c.icon size={26} />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{c.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {c.cta}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FRASE-IMPACTO ============ */}
      <section className="relative overflow-hidden py-28 lg:py-36">
        <div className="animate-blob-2 pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <p className="font-serif-display text-balance text-4xl font-normal italic leading-snug text-foreground sm:text-5xl lg:text-[3.4rem]">
              “Cuidar da saúde emocional não significa que você é fraco. Significa reconhecer que{' '}
              <span className="text-primary">você merece ser cuidado</span>.”
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="bg-primary py-24 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <h2 className="text-balance text-4xl font-normal sm:text-5xl">Vamos conversar?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
              Se você sente que está passando por um momento difícil ou deseja cuidar mais da sua saúde emocional, a
              psicoterapia pode ser um espaço para você.
            </p>
            <Link
              to="/agendamento"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 text-base font-semibold text-primary shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              Agende seu atendimento
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
