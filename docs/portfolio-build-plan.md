# Portfolio Plan (EN/ES)

## Objetivo

Construir un portfolio con:

- Home simple.
- 4 paginas por idioma (EN/ES): Home, About, Work, Contact.
- Estructura mantenible y sin duplicacion innecesaria.

## Stack propuesto

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- i18n con `next-intl` (rutas por locale: `/en/...`, `/es/...`)

## Enfoque de componentes

Regla: si algo se repite 2+ veces, se abstrae en componente.

Componentes compartidos:

- `SiteShell`: wrapper general con max-width, paddings y estructura base.
- `Header`: logo/nombre, navegacion principal y switch EN/ES.
- `MobileMenu`: menu responsive para mobile.
- `Footer`: links y copyright.
- `SectionHeading`: titulo/subtitulo reutilizable.
- `Hero`: bloque principal de Home.
- `PageIntro`: encabezado estandar para paginas internas.
- `RichTextBlock`: bloque de texto largo (About/Contact intro).
- `ProjectCard`: item de portfolio.
- `ProjectGrid`: grilla/lista de proyectos.
- `ContactLinks`: email/redes/CTA.

Contenido:

- Los textos no se hardcodean en componentes.
- Se separan en archivos de traducciones EN/ES.

## Estructura de carpetas

```txt
app/
  [locale]/
    (site)/
      page.tsx
      about/page.tsx
      work/page.tsx
      contact/page.tsx

components/
  layout/
    SiteShell.tsx
    Header.tsx
    MobileMenu.tsx
    Footer.tsx
  sections/
    Hero.tsx
    PageIntro.tsx
    ProjectGrid.tsx
    ContactLinks.tsx
  ui/
    SectionHeading.tsx
    ProjectCard.tsx
    RichTextBlock.tsx

messages/
  en.json
  es.json
```

## Plan de implementacion

1. Inicializar base Next + Tailwind + i18n por ruta (`/en`, `/es`).
2. Crear layout y componentes compartidos primero.
3. Maquetar Home, About, Work y Contact usando las capturas en `screenshots/`.
4. Cargar copy EN/ES en `messages/*.json`.
5. Ajustar responsive (mobile/tablet/desktop).
6. Hacer visual polish final (espaciados, tipografia, hover/focus).

## Estado actual de referencias visuales

Capturas disponibles en `screenshots/`:

- `home.png`
- `About.png`
- `Work.png`
- `Contact.png`

Nota: para fidelidad completa responsive, sumar versiones mobile de cada pantalla.
