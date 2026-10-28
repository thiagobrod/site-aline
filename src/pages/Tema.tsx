import { Link } from 'react-router'
import { ArrowRight, Check, MessageCircle, ShieldCheck, Video, Brain } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/Reveal'
import { waLink } from '@/lib/site'
import type { Tema as TemaData } from '@/lib/temas'

export default function Tema({ tema }: { tema: TemaData }) {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tema.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div>
      <PageHeader eyebrow={tema.eyebrow} title={tema.titulo} subtitle={tema.intro} />

      <section className="pb-6">
        <div className="mx-auto flex max-w-4xl flex-wrap gap-4 px-6 lg:px-8">
          <a
            href={waLink(tema.waMensagem)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-1"
          >
            <MessageCircle size={18} />
            Conversar pelo WhatsApp
          </a>
          <Link
            to="/agendamento"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/50 px-7 py-4 text-base font-medium text-foreground backdrop-blur transition-all hover:border-primary/40 hover:text-primary"
          >
            Outras formas de contato
          </Link>
        </div>
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap gap-x-8 gap-y-3 px-6 text-sm text-muted-foreground lg:px-8">
          <span className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-primary" /> CRP 06/120263
          </span>
          <span className="flex items-center gap-2">
            <Video size={16} className="text-primary" /> 100% on-line, para todo o Brasil
          </span>
          <span className="flex items-center gap-2">
            <Brain size={16} className="text-primary" /> Terapia Cognitivo-Comportamental
          </span>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-white/85 p-8 backdrop-blur lg:p-10">
              <h2 className="text-2xl font-semibold text-foreground">{tema.sinaisTitulo}</h2>
              <ul className="mt-6 space-y-3">
                {tema.sinais.map((s) => (
                  <li key={s} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-secondary/60 p-8 lg:p-10">
              <h2 className="text-2xl font-semibold text-foreground">Como a terapia pode ajudar</h2>
              <ul className="mt-6 space-y-3">
                {tema.comoAjuda.map((s) => (
                  <li key={s} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <Check size={18} className="mt-1 shrink-0 text-primary" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-normal text-foreground">Como funciona o atendimento</h2>
            <ol className="mt-6 space-y-3 leading-relaxed text-muted-foreground">
              <li>1. Você entra em contato pelo WhatsApp ou e-mail e tira suas dúvidas;</li>
              <li>2. Definimos juntos um horário adequado à sua rotina;</li>
              <li>3. As sessões acontecem por videochamada, em ambiente reservado e com sigilo profissional.</li>
            </ol>
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <h2 className="text-3xl font-normal text-foreground">Dúvidas comuns</h2>
            <div className="mt-6 space-y-5">
              {tema.faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-border bg-white/85 p-6">
                  <h3 className="font-serif-display text-xl font-semibold text-foreground">{f.q}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-28 pt-10">
        <Reveal className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="font-serif-display text-2xl italic leading-relaxed text-foreground/85">
            Buscar ajuda é um passo importante. Vamos conversar?
          </p>
          <a
            href={waLink(tema.waMensagem)}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-1"
          >
            Agendar pelo WhatsApp
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-6 text-xs text-muted-foreground">
            Em situação de crise ou risco imediato, ligue 188 (CVV, 24h) ou procure o pronto-socorro.
          </p>
        </Reveal>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </div>
  )
}
