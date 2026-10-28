// Páginas de destino por tema (usadas nos anúncios do Google e na busca orgânica).
// Regras do CFP: não prometer resultados, não diagnosticar, não anunciar preço/desconto.
export type Tema = {
  slug: string
  eyebrow: string
  titulo: string
  seoTitle: string
  seoDescription: string
  intro: string
  sinaisTitulo: string
  sinais: string[]
  comoAjuda: string[]
  waMensagem: string
  faqs: { q: string; a: string }[]
}

export const TEMAS: Tema[] = [
  {
    slug: 'terapia-online-ansiedade',
    eyebrow: 'Terapia on-line · Ansiedade',
    titulo: 'Terapia on-line para ansiedade',
    seoTitle: 'Terapia On-line para Ansiedade | Psicóloga Aline Alves (TCC)',
    seoDescription:
      'Psicoterapia on-line para ansiedade com base na Terapia Cognitivo-Comportamental. Atendimento para adultos de todo o Brasil. Psicóloga Aline Alves — CRP 06/120263.',
    intro:
      'Preocupação constante, pensamentos acelerados e dificuldade para relaxar podem tornar o dia a dia mais pesado. A psicoterapia oferece um espaço seguro para compreender o que está acontecendo e encontrar formas mais saudáveis de lidar com a ansiedade.',
    sinaisTitulo: 'Você se identifica com algum destes pontos?',
    sinais: [
      'Preocupação excessiva e difícil de controlar',
      'Pensamentos acelerados, principalmente à noite',
      'Tensão muscular, inquietação ou sensação de alerta constante',
      'Dificuldade para dormir ou para se concentrar',
      'Evitar situações por medo ou insegurança',
    ],
    comoAjuda: [
      'Identificar os gatilhos e os pensamentos que alimentam a ansiedade',
      'Aprender estratégias práticas para lidar com sensações e preocupações',
      'Desenvolver novas formas de responder às situações que hoje são evitadas',
      'Construir, no seu ritmo, mais autonomia e equilíbrio emocional',
    ],
    waMensagem: 'Olá, Aline! Vim pelo seu site e gostaria de saber mais sobre a terapia on-line para ansiedade.',
    faqs: [
      {
        q: 'Preciso ter diagnóstico de ansiedade para buscar terapia?',
        a: 'Não. Você pode buscar psicoterapia sempre que sentir que a ansiedade está atrapalhando sua rotina, seus relacionamentos ou seu bem-estar.',
      },
      {
        q: 'A TCC é indicada para ansiedade?',
        a: 'A Terapia Cognitivo-Comportamental é uma abordagem com amplo respaldo científico no trabalho com ansiedade. Na primeira conversa, avaliamos juntos se ela é adequada para a sua demanda.',
      },
    ],
  },
  {
    slug: 'terapia-online-estresse-trabalho',
    eyebrow: 'Terapia on-line · Trabalho',
    titulo: 'Terapia on-line para estresse e esgotamento no trabalho',
    seoTitle: 'Terapia On-line para Estresse e Esgotamento no Trabalho | Aline Alves',
    seoDescription:
      'Psicoterapia on-line para estresse, sobrecarga e esgotamento profissional, com base na TCC e experiência em Psicologia Organizacional. Psicóloga Aline Alves — CRP 06/120263.',
    intro:
      'Excesso de cobrança, sobrecarga e a sensação de estar sempre no limite afetam não só o trabalho, mas toda a vida. Com experiência em Psicologia Organizacional, Aline oferece um espaço para olhar para essas questões com cuidado e construir uma relação mais saudável com a vida profissional.',
    sinaisTitulo: 'Isso tem feito parte da sua rotina?',
    sinais: [
      'Cansaço que não passa, mesmo depois de descansar',
      'Dificuldade para se desligar do trabalho',
      'Irritabilidade, desânimo ou sensação de estar no limite',
      'Conflitos no ambiente profissional ou excesso de cobrança',
      'Dificuldade para conciliar trabalho e vida pessoal',
    ],
    comoAjuda: [
      'Identificar as principais fontes de estresse e sobrecarga',
      'Trabalhar a autocobrança e os pensamentos ligados ao desempenho',
      'Desenvolver estratégias para estabelecer limites e se organizar',
      'Recuperar espaço para descanso, lazer e relações pessoais',
    ],
    waMensagem:
      'Olá, Aline! Vim pelo seu site e gostaria de saber mais sobre a terapia on-line para estresse e esgotamento no trabalho.',
    faqs: [
      {
        q: 'A terapia substitui o afastamento ou o acompanhamento médico?',
        a: 'Não. A psicoterapia é complementar. Quando necessário, pode ser indicado também o acompanhamento com outros profissionais de saúde.',
      },
      {
        q: 'Consigo encaixar a terapia na minha rotina de trabalho?',
        a: 'Como o atendimento é on-line, a sessão pode acontecer de onde você estiver, em um ambiente reservado. O horário é combinado de acordo com a disponibilidade.',
      },
    ],
  },
  {
    slug: 'terapia-online-depressao',
    eyebrow: 'Terapia on-line · Depressão e desânimo',
    titulo: 'Terapia on-line para depressão e desânimo',
    seoTitle: 'Terapia On-line para Depressão e Desânimo | Psicóloga Aline Alves',
    seoDescription:
      'Psicoterapia on-line para tristeza persistente, desânimo e depressão, com base na Terapia Cognitivo-Comportamental. Adultos de todo o Brasil. Psicóloga Aline Alves — CRP 06/120263.',
    intro:
      'Quando a tristeza persiste, a energia diminui e as coisas parecem ter perdido o sentido, buscar ajuda é um passo importante. A psicoterapia oferece acolhimento e um espaço sem julgamentos para compreender o que você está vivendo.',
    sinaisTitulo: 'Você tem sentido algo assim?',
    sinais: [
      'Tristeza ou vazio que persistem por semanas',
      'Falta de energia e de vontade para atividades do dia a dia',
      'Perda de interesse no que antes trazia prazer',
      'Isolamento, culpa ou autocrítica intensa',
      'Alterações no sono ou no apetite',
    ],
    comoAjuda: [
      'Compreender os fatores envolvidos no que você está sentindo',
      'Trabalhar pensamentos negativos sobre si, o mundo e o futuro',
      'Retomar gradualmente atividades significativas para você',
      'Fortalecer recursos emocionais e a rede de apoio',
    ],
    waMensagem:
      'Olá, Aline! Vim pelo seu site e gostaria de saber mais sobre a terapia on-line para depressão e desânimo.',
    faqs: [
      {
        q: 'E se eu estiver em crise agora?',
        a: 'Se você está pensando em tirar a própria vida ou corre risco imediato, ligue para o CVV no 188 (gratuito, 24 horas) ou procure o pronto-socorro mais próximo. A psicoterapia on-line não é um serviço de emergência.',
      },
      {
        q: 'A terapia substitui o tratamento com medicação?',
        a: 'Não. Em alguns casos, o acompanhamento psiquiátrico é indicado em conjunto com a psicoterapia. Isso pode ser conversado ao longo do processo.',
      },
    ],
  },
]
