import { Link } from 'react-router'
import { Logo } from './Logo'
import { Mail } from 'lucide-react'
import { NAV_LINKS, EMAIL } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 pb-24 lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3 text-primary">
            <Logo size={38} />
            <div>
              <p className="font-serif-display text-xl font-semibold text-foreground">Aline Alves</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Psicóloga</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            CRP 06/120263
            <br />
            Psicoterapia on-line para adultos de todo o Brasil
            <br />
            Abordagem: Terapia Cognitivo-Comportamental (TCC)
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail size={15} className="text-primary" />
            {EMAIL}
          </a>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/70">Navegação</p>
          <ul className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/70">Aviso importante</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            O conteúdo deste site possui caráter informativo e não substitui avaliação ou acompanhamento psicológico
            individualizado.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aline Alves — Psicóloga · Todos os direitos reservados
      </div>
      <div className="border-t border-border/60 py-3 text-center">
        <a
          href="https://thiagobernardo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[10px] text-muted-foreground/60 transition-colors hover:text-primary"
        >
          Desenvolvido por
          <img
            src="/images/AG9-LOGO-9-600x223.png"
            alt="AG9"
            width={44}
            height={16}
            className="h-3.5 w-auto object-contain opacity-70"
          />
        </a>
      </div>
    </footer>
  )
}
