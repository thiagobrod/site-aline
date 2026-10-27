import { useState } from 'react'
import { MessageCircle, Mail, Send, CalendarHeart, Clock, ShieldCheck } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/Reveal'
import { waLink, DEFAULT_WA_MESSAGE, EMAIL } from '@/lib/site'

const periodos = ['Manhã', 'Tarde', 'Noite', 'Flexível']
const motivos = [
  'Ansiedade',
  'Depressão e desânimo',
  'Estresse e sobrecarga',
  'Baixa autoestima',
  'Questões de trabalho',
  'Relacionamentos',
  'Procrastinação',
  'Luto e mudanças de vida',
  'Medos e inseguranças',
  'Outro / Prefiro conversar',
]

export default function Agendamento() {
  const [nome, setNome] = useState('')
  const [motivo, setMotivo] = useState(motivos[0])
  const [periodo, setPeriodo] = useState(periodos[0])
  const [mensagem, setMensagem] = useState('')

  const enviar = (e: React.FormEvent) => {
    e.preventDefault()
    const texto = [
      `Olá, Aline! Meu nome é ${nome || '...'} e vim pelo seu site.`,
      `Gostaria de agendar um atendimento.`,
      `Motivo principal: ${motivo}.`,
      `Melhor período para mim: ${periodo}.`,
      mensagem.trim() ? `Mensagem: ${mensagem.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n')
    window.open(waLink(texto), '_blank', 'noopener')
  }

  return (
    <div>
      <PageHeader
        eyebrow="Agendamento"
        title="Vamos conversar?"
        subtitle="Se você sente que está passando por um momento difícil, enfrenta situações que gostaria de compreender melhor ou deseja cuidar mais da sua saúde emocional, a psicoterapia pode ser um espaço para você."
      />

      <section className="pb-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          {/* formulário */}
          <Reveal>
            <form
              onSubmit={enviar}
              className="rounded-3xl border border-border bg-white/85 p-7 shadow-xl shadow-foreground/5 backdrop-blur lg:p-10"
            >
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-foreground">
                <CalendarHeart className="text-primary" size={26} />
                Pré-agendamento
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Preencha abaixo e sua mensagem será enviada diretamente para o WhatsApp da Aline — é só confirmar o
                envio.
              </p>

              <label className="mt-7 block">
                <span className="mb-1.5 block text-sm font-semibold text-foreground">Seu nome</span>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Como você gostaria de ser chamado(a)?"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <label className="mt-5 block">
                <span className="mb-1.5 block text-sm font-semibold text-foreground">O que traz você até aqui?</span>
                <select
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  {motivos.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </label>

              <label className="mt-5 block">
                <span className="mb-1.5 block text-sm font-semibold text-foreground">Melhor período para sessões</span>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {periodos.map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setPeriodo(p)}
                      className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                        periodo === p
                          ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25'
                          : 'border-input bg-background text-foreground/75 hover:border-primary/40'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </label>

              <label className="mt-5 block">
                <span className="mb-1.5 block text-sm font-semibold text-foreground">
                  Mensagem <span className="font-normal text-muted-foreground">(opcional)</span>
                </span>
                <textarea
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  rows={4}
                  placeholder="Conte um pouco do que você gostaria de conversar, se quiser."
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <button
                type="submit"
                className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <Send size={18} className="transition-transform group-hover:translate-x-0.5" />
                Enviar pelo WhatsApp
              </button>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
                <ShieldCheck size={14} className="text-primary" />
                Suas informações seguem o sigilo profissional previsto no código de ética.
              </p>
            </form>
          </Reveal>

          {/* contato direto */}
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl bg-primary p-8 text-primary-foreground lg:p-10">
                <MessageCircle size={30} className="mb-5" />
                <h2 className="text-2xl font-semibold">Prefere falar diretamente?</h2>
                <p className="mt-3 leading-relaxed text-primary-foreground/85">
                  Entre em contato pelo WhatsApp ou por e-mail para saber mais sobre o atendimento e verificar a
                  disponibilidade de horários.
                </p>
                <a
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle size={17} />
                  Chamar no WhatsApp
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-5 flex items-center gap-2 break-all text-sm text-primary-foreground/90 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  <Mail size={16} className="shrink-0" />
                  {EMAIL}
                </a>
              </div>

              <div className="rounded-3xl border border-border bg-white/85 p-8 backdrop-blur">
                <div className="flex items-start gap-4">
                  <Clock size={22} className="mt-1 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Como funciona depois do contato?</h3>
                    <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                      <li>1. Você envia sua mensagem e tira suas dúvidas;</li>
                      <li>2. Definimos juntos um horário adequado;</li>
                      <li>3. As sessões acontecem por videochamada, em ambiente reservado e seguro.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-secondary/60 p-8">
                <p className="font-serif-display text-xl font-medium italic leading-relaxed text-foreground/85">
                  “Aqui você encontrará um espaço seguro, acolhedor e individualizado para compreender melhor o que
                  está vivendo.”
                </p>
                <p className="mt-4 text-sm font-semibold text-foreground">Aline Alves</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Psicóloga — CRP 06/120263
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
