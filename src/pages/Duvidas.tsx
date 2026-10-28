import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/Reveal'

const faqs = [
  {
    q: 'A terapia on-line funciona?',
    a: 'A psicoterapia on-line permite realizar o acompanhamento psicológico por meio de videochamada, mantendo o espaço de escuta e acompanhamento profissional. É importante contar com um ambiente reservado e uma conexão adequada para as sessões.',
  },
  {
    q: 'Quanto tempo dura uma sessão?',
    a: 'A duração e a frequência dos atendimentos são definidas de acordo com as necessidades de cada paciente e as características do processo terapêutico.',
  },
  {
    q: 'Preciso ter um diagnóstico para fazer terapia?',
    a: 'Não. Você pode buscar psicoterapia por diferentes motivos, como dificuldades emocionais, problemas nos relacionamentos, questões profissionais, ansiedade, baixa autoestima, estresse ou simplesmente pelo desejo de se conhecer melhor e promover mudanças em sua vida.',
  },
  {
    q: 'A terapia é confidencial?',
    a: 'Sim. O atendimento psicológico segue as normas éticas e profissionais aplicáveis à atuação da Psicologia, incluindo os princípios relacionados ao sigilo profissional.',
  },
  {
    q: 'Aline atende pessoas de qualquer lugar?',
    a: 'Sim. O atendimento é realizado de forma on-line e é direcionado a adultos de todo o Brasil.',
  },
  {
    q: 'Como saber se a TCC é adequada para mim?',
    a: 'A melhor forma é conversar com uma profissional para compreender sua demanda e avaliar se a abordagem e o formato de atendimento são adequados às suas necessidades.',
  },
]

export default function Duvidas() {
  return (
    <div>
      <PageHeader
        eyebrow="Dúvidas frequentes"
        title="Perguntas frequentes"
        subtitle="Respostas para as dúvidas mais comuns sobre o atendimento psicológico on-line."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border bg-white/85 px-6 shadow-sm backdrop-blur data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="py-5 text-left font-serif-display text-xl font-semibold text-foreground hover:text-primary hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={0.15} className="mt-14 text-center">
            <p className="text-lg text-muted-foreground">Ficou com alguma dúvida? Vamos conversar.</p>
            <Link
              to="/agendamento"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-1"
            >
              Entrar em contato
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </div>
  )
}
