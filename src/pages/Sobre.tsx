import { Link } from 'react-router'
import { ArrowRight, GraduationCap } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/Reveal'

const formacao = [
  {
    ano: '2013',
    titulo: 'Graduação em Psicologia',
    instituicao: 'Universidade Cruzeiro do Sul',
  },
  {
    ano: '2021',
    titulo: 'Especialização em Terapia Cognitivo-Comportamental',
    instituicao: 'CETCC — Centro de Estudos em Terapia Cognitivo-Comportamental',
  },
]

export default function Sobre() {
  return (
    <div>
      <PageHeader
        eyebrow="Sobre a profissional"
        title="Quem é Aline Alves?"
        subtitle="Mais de 12 anos de trajetória dedicados à compreensão do comportamento humano — da Psicologia Organizacional à Clínica, com especialização em Terapia Cognitivo-Comportamental."
      />

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <Reveal className="lg:sticky lg:top-32">
            <div className="relative mx-auto max-w-sm">
              <div className="animate-breathe absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-primary/20 to-[#dccdb4]/40 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border-[5px] border-white/80 shadow-2xl shadow-foreground/15">
                <img src="/images/aline.jpg" alt="Aline Alves" className="h-auto w-full" />
              </div>
              <div className="mt-6 rounded-2xl border border-border bg-white/80 p-5 text-center backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">CRP 06/120263</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Registro profissional ativo no Conselho Regional de Psicologia
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Sou Aline Alves, psicóloga, formada em Psicologia pela Universidade Cruzeiro do Sul, em 2013, e
                  especialista em Terapia Cognitivo-Comportamental (TCC) pelo CETCC – Centro de Estudos em Terapia
                  Cognitivo-Comportamental, em 2021.
                </p>
                <p>
                  Ao longo de mais de 12 anos de trajetória profissional, venho me dedicando ao estudo e à
                  compreensão do comportamento humano, construindo uma escuta atenta e sensível às diferentes
                  experiências, emoções e relações que fazem parte da vida adulta.
                </p>
                <p>
                  Minha experiência na Psicologia Organizacional ampliou meu olhar sobre os desafios enfrentados pelas
                  pessoas no cotidiano, especialmente diante das pressões profissionais, mudanças, cobranças,
                  conflitos, dificuldades nos relacionamentos e necessidade constante de conciliar diferentes áreas
                  da vida. Essa trajetória também me permitiu acompanhar de perto momentos de transição,
                  insegurança, esgotamento e busca por novos caminhos.
                </p>
                <p>
                  Hoje, levo essa experiência para a Psicologia Clínica, oferecendo atendimento psicológico on-line
                  para adultos que estejam enfrentando diferentes questões emocionais e buscando compreender melhor a
                  si mesmos e suas escolhas.
                </p>
                <p>
                  Acredito que a psicoterapia deve ser construída de forma individualizada, respeitando a história, o
                  momento e as necessidades de cada pessoa. Meu trabalho é pautado pela escuta, acolhimento e
                  respeito, buscando, por meio da Terapia Cognitivo-Comportamental, desenvolver junto ao paciente
                  recursos para compreender pensamentos, emoções e comportamentos, ampliar sua autonomia e encontrar
                  formas mais saudáveis de lidar com os desafios da vida.
                </p>
                <p>
                  Mais do que oferecer respostas prontas, creio na construção de um espaço seguro para que cada pessoa
                  possa se conhecer, refletir sobre sua trajetória e desenvolver novas possibilidades para viver de
                  maneira mais consciente e equilibrada.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-14 text-3xl font-semibold text-foreground">Formação</h2>
            </Reveal>
            <div className="mt-7 space-y-5">
              {formacao.map((f, i) => (
                <Reveal key={f.ano} delay={0.12 + i * 0.1}>
                  <div className="flex gap-5 rounded-3xl border border-border bg-white/80 p-6 shadow-sm backdrop-blur">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{f.ano}</p>
                      <p className="mt-1 text-lg font-semibold text-foreground">{f.titulo}</p>
                      <p className="text-muted-foreground">{f.instituicao}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <Link
                to="/agendamento"
                className="group mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-1"
              >
                Agende seu atendimento
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
