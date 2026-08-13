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
    },
    '/projects/quieren-taparme': {
      en: '/projects/quieren-taparme',
      es: '/proyectos/quieren-taparme'
    },
    '/projects/estetica-relacional': {
      en: '/projects/estetica-relacional',
      es: '/proyectos/estetica-relacional'
    }
  }
});
