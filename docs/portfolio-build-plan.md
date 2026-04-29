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

- `SiteShell`: wrapper general de pagina y padding vertical base; padding horizontal del sitio vive en layout interior para permitir footer full-bleed.
- `Header`: logo/nombre, navegacion principal y switch EN/ES.
- `Footer`: links y copyright.
- `SectionHeading`: titulo/subtitulo reutilizable.
- `Hero`: bloque principal de Home.
- `PageIntro`: encabezado estandar para paginas internas.
- `RichTextBlock`: bloque de texto largo (About/Contact intro).
- `ProjectCard`: item de portfolio.
- `ProjectGrid`: grilla/lista de proyectos.
- `ContactLinks`: email/redes/CTA.
- `WorkFeature`: bloque de Home localizado con proyecto destacado e imagenes hover.
- `WorkCaseStudy`: pagina de caso dedicada para `/{locale}/work`.
- `SmoothHashLink`: enlace hash con scroll animado manual para evitar saltos instantaneos del navegador.

Contenido:

- Los textos no se hardcodean en componentes.
- Se separan en archivos de traducciones EN/ES.

## Estructura de carpetas

```txt
app/
  page.tsx
  [locale]/
    (site)/
      page.tsx
      about/page.tsx
      work/page.tsx
      contact/page.tsx
    layout.tsx

components/
  layout/
    SiteShell.tsx
    Header.tsx
    Footer.tsx
  sections/
    Hero.tsx
    PageIntro.tsx
    ProjectGrid.tsx
    ContactLinks.tsx
    WorkFeature.tsx
    WorkCaseStudy.tsx
    ContactForm.tsx
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

## Decision de routing actual

- `/` funciona como landing root sin header superior.
- `/{locale}` funciona como pagina localizada principal (actual contenido tipo "Hi").
- `/{locale}/work` funciona como pagina de case study dedicada basada en `screenshots/Work.PNG`.
- El hero de `/{locale}/work` usa imagen full-bleed, mantiene ratio 3:2, se superpone bajo los botones EN/ES y muestra logo ABC blanco + blurb card.
- El contenido del case study vive en `messages/*.json` bajo `Work.caseStudy.sections[]`, con bloques tipados para texto, listas, definiciones y destacados.
- Las imagenes del case study viven en `public/images/work`: diagramas IA localizados (`01_*` a `04_*`), flujo localizado (`05_*`), capturas compartidas (`07.png`, `08.png`) y concept board (`Concept_board.png`).
- El boton de CV del header abre `/documents/NerinaCV.pdf` en una nueva pestana.
- `/{locale}`, `/{locale}/about`, `/{locale}/work` y `/{locale}/contact` comparten layout de `app/[locale]/(site)/layout.tsx`.

## Estado actual de referencias visuales

Capturas disponibles en `screenshots/`:

- `home.png`
- `Hi.png`
- `About.png`
- `Contact.png`
- `Work.PNG`
- `Work1.png` a `Work9.png`
- `navButtonStates.png`

Especificaciones de diseno implementadas: `docs/design.md`.

Nota: para fidelidad completa responsive, sumar versiones mobile de cada pantalla.
