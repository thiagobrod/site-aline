import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'
import Home from '@/pages/Home'
import Sobre from '@/pages/Sobre'
import TCC from '@/pages/TCC'
import Atendimento from '@/pages/Atendimento'
import ParaQuem from '@/pages/ParaQuem'
import Duvidas from '@/pages/Duvidas'
import Agendamento from '@/pages/Agendamento'
import Tema from '@/pages/Tema'
import { TEMAS } from '@/lib/temas'
import { metaFor } from '@/lib/seo'
import { SITE_URL } from '@/lib/site'
import { trackPageView } from '@/lib/analytics'

// Atualiza título/descrição/canonical na navegação do lado do cliente e registra a visita
function RouteMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const meta = metaFor(pathname)
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', SITE_URL + meta.path)
    trackPageView(pathname)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen">
      <RouteMeta />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/tcc" element={<TCC />} />
          <Route path="/atendimento" element={<Atendimento />} />
          <Route path="/para-quem" element={<ParaQuem />} />
          <Route path="/duvidas" element={<Duvidas />} />
          <Route path="/agendamento" element={<Agendamento />} />
          {TEMAS.map((t) => (
            <Route key={t.slug} path={`/${t.slug}`} element={<Tema tema={t} />} />
          ))}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}
