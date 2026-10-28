import { GA4_ID, ADS_ID, ADS_LEAD_LABEL } from './site'

// Google tag (gtag.js) com Consent Mode v2: tudo começa negado e só libera após o aceite no banner.
type Gtag = (...args: unknown[]) => void
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: Gtag
  }
}

const CONSENT_KEY = 'cookie-consent'
export type Consent = 'granted' | 'denied'

export function getStoredConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

const consentState = (c: Consent) => ({
  ad_storage: c,
  ad_user_data: c,
  ad_personalization: 'denied', // saúde: sem personalização de anúncios
  analytics_storage: c,
})

export function setConsent(c: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, c)
  } catch {
    /* sem armazenamento: vale só para esta visita */
  }
  window.gtag?.('consent', 'update', consentState(c))
}

const enabled = () => typeof window !== 'undefined' && Boolean(GA4_ID || ADS_ID)

export function initAnalytics() {
  if (!enabled()) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // gtag exige o objeto arguments, não um array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
  window.gtag('consent', 'default', { ...consentState('denied'), wait_for_update: 500 })
  const stored = getStoredConsent()
  if (stored) window.gtag('consent', 'update', consentState(stored))

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID || ADS_ID}`
  document.head.appendChild(s)

  window.gtag('js', new Date())
  if (GA4_ID) window.gtag('config', GA4_ID, { send_page_view: false })
  if (ADS_ID) window.gtag('config', ADS_ID)

  // cliques em WhatsApp e e-mail em qualquer lugar do site
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest?.('a')
    if (!a) return
    if (a.href.startsWith('https://wa.me/')) trackLead('whatsapp')
    else if (a.href.startsWith('mailto:')) trackLead('email')
  })
}

export function trackPageView(path: string) {
  if (!enabled() || !GA4_ID) return
  window.gtag('event', 'page_view', { page_path: path, page_location: location.href, page_title: document.title })
}

// Um "lead" = alguém que iniciou contato (WhatsApp, e-mail ou formulário)
export function trackLead(method: 'whatsapp' | 'email' | 'formulario') {
  if (!enabled()) return
  window.gtag('event', 'generate_lead', { method })
  if (ADS_ID && ADS_LEAD_LABEL) window.gtag('event', 'conversion', { send_to: `${ADS_ID}/${ADS_LEAD_LABEL}` })
}

export const analyticsEnabled = enabled
