import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  pathnames: {
    '/projects': {
      en: '/projects',
      es: '/proyectos'
    },
    '/projects/ABC-Comunidad': {
      en: '/projects/ABC-Comunidad',
      es: '/proyectos/ABC-Comunidad'
    }
  }
});
