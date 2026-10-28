import { useEffect, useState } from 'react'
import { analyticsEnabled, getStoredConsent, setConsent } from '@/lib/analytics'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // decide só no navegador para não divergir do HTML pré-renderizado
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(analyticsEnabled() && getStoredConsent() === null)
  }, [])

  if (!visible) return null

  const choose = (c: 'granted' | 'denied') => {
    setConsent(c)
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-20 z-[60] mx-auto max-w-xl rounded-2xl border border-border bg-background/95 p-5 shadow-2xl shadow-foreground/15 backdrop-blur-lg lg:bottom-6"
    >
      <p className="text-sm leading-relaxed text-muted-foreground">
        Este site usa cookies para medir visitas e a eficácia dos anúncios. Nenhuma informação sobre sua saúde é
        coletada. Você aceita?
      </p>
      <div className="mt-4 flex justify-end gap-3">
        <button
          onClick={() => choose('denied')}
          className="rounded-full px-5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
        >
          Recusar
        </button>
        <button
          onClick={() => choose('granted')}
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25"
        >
          Aceitar
        </button>
      </div>
    </div>
  )
}
