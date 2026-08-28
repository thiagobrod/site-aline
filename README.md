# site-aline

Site institucional da psicóloga Aline Alves (CRP 06/120263).

## Stack

- **Framework:** React 19 + TypeScript
- **Build:** Vite 7
- **Estilos:** Tailwind CSS 3 + shadcn/ui
- **Deploy:** Cloudflare Pages

## Scripts

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção (output em dist/)
npm run preview  # pré-visualizar build localmente
npm run lint     # executar ESLint
```

## Deploy no Cloudflare Pages

1. Conecte o repositório GitHub no painel do Cloudflare Pages.
2. Configurações de build:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. O arquivo `public/_redirects` já configura o fallback para SPA (React Router).

## Estrutura

```
public/          # assets estáticos + _redirects
src/
  components/    # componentes reutilizáveis (Navbar, Footer, UI)
  pages/         # páginas das rotas
  hooks/         # hooks customizados
  lib/           # utilitários e dados do site
  App.tsx        # rotas
  main.tsx       # entry point
```

## Variáveis e dados

Dados centrais do site (WhatsApp, links de navegação) estão em `src/lib/site.ts`.
