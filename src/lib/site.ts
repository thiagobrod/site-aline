// Dados centrais do site — troque o número do WhatsApp aqui (somente dígitos, com DDI 55)
export const WHATSAPP_NUMBER = '5511914520017'

export const EMAIL = 'aline.saudepsi@gmail.com'

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const DEFAULT_WA_MESSAGE =
  'Olá, Aline! Vim pelo seu site e gostaria de saber mais sobre o atendimento psicológico on-line.'

export const NAV_LINKS = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/tcc', label: 'TCC' },
  { to: '/atendimento', label: 'Atendimento' },
  { to: '/para-quem', label: 'Para quem é' },
  { to: '/duvidas', label: 'Dúvidas' },
  { to: '/agendamento', label: 'Contato' },
]
