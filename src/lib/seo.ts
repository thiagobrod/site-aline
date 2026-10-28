import { TEMAS } from './temas'

export type PageMeta = { path: string; title: string; description: string }

export const PAGES: PageMeta[] = [
  {
    path: '/',
    title: 'Psicóloga On-line | Aline Alves — Terapia Cognitivo-Comportamental',
    description:
      'Aline Alves — Psicóloga CRP 06/120263. Atendimento psicológico on-line para adultos de todo o Brasil, com base na Terapia Cognitivo-Comportamental (TCC).',
  },
  {
    path: '/sobre',
    title: 'Sobre Aline Alves | Psicóloga CRP 06/120263',
    description:
      'Conheça a trajetória e a formação de Aline Alves, psicóloga com atuação em TCC e experiência em Psicologia Organizacional.',
  },
  {
    path: '/tcc',
    title: 'O que é a Terapia Cognitivo-Comportamental (TCC) | Aline Alves',
    description:
      'Entenda como funciona a Terapia Cognitivo-Comportamental, uma abordagem estruturada e com respaldo científico.',
  },
  {
    path: '/atendimento',
    title: 'Como funciona o atendimento on-line | Psicóloga Aline Alves',
    description:
      'Saiba como funcionam as sessões de psicoterapia on-line por videochamada, para adultos de todo o Brasil.',
  },
  {
    path: '/para-quem',
    title: 'Para quem é a terapia | Ansiedade, estresse, autoestima | Aline Alves',
    description:
      'Ansiedade, depressão, estresse, baixa autoestima, questões de trabalho e relacionamentos: veja como a psicoterapia pode ajudar.',
  },
  {
    path: '/duvidas',
    title: 'Dúvidas frequentes sobre terapia on-line | Aline Alves',
    description:
      'Respostas para as dúvidas mais comuns sobre o atendimento psicológico on-line com a psicóloga Aline Alves.',
  },
  {
    path: '/agendamento',
    title: 'Agende sua sessão de terapia on-line | Psicóloga Aline Alves',
    description:
      'Entre em contato pelo WhatsApp ou e-mail para agendar seu atendimento psicológico on-line com Aline Alves.',
  },
  ...TEMAS.map((t) => ({ path: `/${t.slug}`, title: t.seoTitle, description: t.seoDescription })),
]

export const metaFor = (path: string) => PAGES.find((p) => p.path === path) ?? PAGES[0]
