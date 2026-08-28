import { Link } from 'react-router'
import {
  ArrowRight,
  Wind,
  CloudMoon,
  BatteryLow,
  UserRound,
  Briefcase,
  UsersRound,
  ListTodo,
  Heart,
  ShieldQuestion,
} from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/Reveal'

const temas = [
  {
    icon: Wind,
    titulo: 'Ansiedade',
    desc: 'Preocupação excessiva, pensamentos acelerados, tensão constante, medo e dificuldade para relaxar.',
    ajuda: 'A terapia ajuda a compreender os gatilhos da ansiedade e a desenvolver estratégias para lidar melhor com esses pensamentos e sensações.',
  },
  {
    icon: CloudMoon,
    titulo: 'Depressão e desânimo',
    desc: 'Tristeza persistente, falta de energia, perda de interesse, isolamento, culpa ou sensação de que as coisas perderam o sentido.',
    ajuda: 'O processo terapêutico ajuda a compreender os fatores envolvidos e trabalhar pensamentos, emoções e comportamentos associados ao quadro.',
  },
  {
    icon: BatteryLow,
    titulo: 'Estresse e sobrecarga',
    desc: 'Sensação de estar constantemente no limite, irritabilidade, excesso de responsabilidades e dificuldade para descansar.',
    ajuda: 'A terapia contribui para identificar fontes de estresse, estabelecer limites e desenvolver estratégias de enfrentamento.',
  },
  {
    icon: UserRound,
    titulo: 'Baixa autoestima e insegurança',
    desc: 'Comparação constante com outras pessoas, medo de críticas, necessidade de aprovação ou sensação de não ser suficientemente bom.',
    ajuda: 'O processo terapêutico ajuda a compreender e modificar padrões de pensamento que sustentam uma percepção negativa de si mesmo.',
  },
  {
    icon: Briefcase,
    titulo: 'Questões relacionadas ao trabalho',
    desc: 'Excesso de cobrança, conflitos no ambiente de trabalho, esgotamento e dificuldade em conciliar vida profissional e pessoal.',
    ajuda: 'A psicoterapia pode ser um espaço para compreender essas situações e desenvolver estratégias mais saudáveis para lidar com elas.',
  },
  {
    icon: UsersRound,
    titulo: 'Relacionamentos e dificuldades interpessoais',
    desc: 'Conflitos familiares, dificuldades amorosas, medo de abandono ou dificuldade em expressar necessidades e sentimentos.',
    ajuda: 'A terapia ajuda a compreender padrões de relacionamento e desenvolver formas mais assertivas de comunicação e interação.',
  },
  {
    icon: ListTodo,
    titulo: 'Procrastinação e dificuldade de organização',
    desc: 'Adiar tarefas importantes, dificuldade para iniciar ou concluir atividades e culpa por não cumprir o planejado.',
    ajuda: 'A TCC trabalha os pensamentos, emoções e comportamentos envolvidos nesse ciclo.',
  },
  {
    icon: Heart,
    titulo: 'Luto e mudanças de vida',
    desc: 'Términos, mudanças profissionais, perdas e transições importantes que provocam sofrimento emocional.',
    ajuda: 'A terapia oferece um espaço de acolhimento e elaboração dessas experiências.',
  },
  {
    icon: ShieldQuestion,
    titulo: 'Medos e inseguranças',
    desc: 'Medo excessivo de situações, preocupação com o julgamento dos outros ou evitar situações por receio de fracassar.',
    ajuda: 'A psicoterapia auxilia na compreensão desses medos e na construção gradual de novas formas de enfrentamento.',
  },
]

export default function ParaQuem() {
  return (
    <div>
      <PageHeader
        eyebrow="Para quem é o atendimento"
        title="Quando a psicoterapia pode ajudar?"
        subtitle="A terapia pode ser importante quando você percebe que determinadas dificuldades estão interferindo na sua vida pessoal, profissional, nos relacionamentos ou no seu bem-estar. O atendimento é voltado para adultos que estejam enfrentando questões emocionais e psicológicas."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {temas.map((t, i) => (
              <Reveal key={t.titulo} delay={(i % 3) * 0.1}>
                <div className="group h-full rounded-3xl border border-border bg-white/80 p-7 shadow-sm backdrop-blur transition-all hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                  <div className="mb-5 inline-flex rounded-2xl bg-secondary p-3.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <t.icon size={24} />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">{t.titulo}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{t.desc}</p>
                  <p className="mt-4 border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-foreground/75">
                    {t.ajuda}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-16 text-center">
            <p className="font-serif-display text-3xl font-medium italic text-foreground sm:text-4xl">
              Você não precisa passar por isso sozinho(a).
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Seu processo é único. Seu atendimento também deve ser.
            </p>
            <Link
              to="/agendamento"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-1"
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
