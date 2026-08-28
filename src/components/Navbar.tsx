import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Menu, X, CalendarHeart } from 'lucide-react'
import { Logo } from './Logo'
import { NAV_LINKS } from '@/lib/site'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-background/85 backdrop-blur-lg shadow-[0_4px_30px_rgba(62,58,52,0.07)]' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3 text-primary">
            <Logo size={40} />
            <span className="leading-tight">
              <span className="font-serif-display block text-xl font-semibold tracking-wide text-foreground">
                Aline Alves
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Psicóloga · CRP 06/120263
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.slice(0, -1).map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-foreground/70'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/agendamento"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
            >
              Agende seu atendimento
            </Link>
          </nav>

          <button
            className="rounded-full p-2 text-foreground lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* mobile menu */}
        <div
          className={`overflow-hidden bg-background/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
            open ? 'max-h-[420px] border-b border-border' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive ? 'bg-secondary text-primary' : 'text-foreground/75'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* mobile sticky CTA */}
      <Link
        to="/agendamento"
        className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-2xl shadow-primary/40 lg:hidden"
      >
        <CalendarHeart size={18} />
        Agende seu atendimento
      </Link>
    </>
  )
}
