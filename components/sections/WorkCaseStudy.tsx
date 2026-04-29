import Image from 'next/image';
import type {ReactNode} from 'react';
import {SmoothHashLink} from '@/components/ui/SmoothHashLink';

type WorkCaseStudyProps = {
  caseStudy: CaseStudyContent;
  locale: string;
};

type WorkCaseImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
};

type CaseStudyContent = {
  hero: {
    blurb: string;
  };
  topLabel: string;
  rail: Array<{
    label: string;
    items: string[];
  }>;
  sections: CaseStudySection[];
};

type CaseStudySection = {
  id: string;
  number: string;
  blocks: CaseStudyBlock[];
};

type TextBlock = {
  type: 'heading' | 'subheading' | 'paragraph' | 'callout';
  text: string;
};

type CaseStudyBlock =
  | TextBlock
  | {
      type: 'bullets';
      items: string[];
    }
  | {
      type: 'definitionList';
      items: Array<{
        title: string;
        text: string;
      }>;
    };

const localizedWorkImages = {
  es: {
    login: '/images/work/01_ES.png',
    inbox: '/images/work/02_ES.png',
    communities: '/images/work/03_ES.png',
    settings: '/images/work/04_ES.png',
    flows: '/images/work/05_ES.png'
  },
  en: {
    login: '/images/work/01_EN.png',
    inbox: '/images/work/02_EN.png',
    communities: '/images/work/03_EN.png',
    settings: '/images/work/04_EN.png',
    flows: '/images/work/05_EN.png'
  }
} as const;

const workImageDimensions = {
  es: {
    login: {width: 3016, height: 2182},
    inbox: {width: 3738, height: 2901},
    communities: {width: 3398, height: 3400},
    settings: {width: 3938, height: 3530},
    flows: {width: 5836, height: 1970}
  },
  en: {
    login: {width: 3016, height: 2288},
    inbox: {width: 3475, height: 3262},
    communities: {width: 3368, height: 3296},
    settings: {width: 4023, height: 3632},
    flows: {width: 5836, height: 1970}
  }
} as const;

function getImageLocale(locale: string): keyof typeof localizedWorkImages {
  return locale === 'en' ? 'en' : 'es';
}

function WorkImage({src, width, height, alt, className = ''}: WorkCaseImage) {
  return (
    <figure className={`work-case-image ${className}`.trim()}>
      <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 900px) 100vw, 980px" className="h-auto w-full" />
    </figure>
  );
}

function renderRichText(text: string): ReactNode {
  return text
    .split(/(<strong>.*?<\/strong>)/g)
    .filter(Boolean)
    .map((part, index) => {
      const match = part.match(/^<strong>(.*)<\/strong>$/);

      return match ? <strong key={index}>{match[1]}</strong> : part;
    });
}

function renderBlock(block: CaseStudyBlock, sectionId: string, index: number) {
  if (block.type === 'heading') {
    const isMvpScopeHeading = ['Imprescindible', 'Deseable', 'Essential', 'Desirable'].includes(block.text);

    return (
      <h3 key={index} className={`${isMvpScopeHeading ? 'ml-10 ' : ''}mt-6 w-fit border-b-2 border-[#075e65] pb-[4px] text-[length:var(--fs-4xl)] font-semibold leading-[120%] tracking-[-0.022em] text-[#075e65] first:mt-0`}>
        {block.text}
      </h3>
    );
  }

  if (block.type === 'subheading') {
    return (
      <h4 key={index} className="mb-0 ml-10 mt-6 text-[length:var(--fs-lg)] font-bold leading-[145%] text-black">
        {block.text}
      </h4>
    );
  }

  if (block.type === 'paragraph') {
    return <p key={index} className="whitespace-pre-line">{renderRichText(block.text)}</p>;
  }

  if (block.type === 'callout') {
    return (
      <p key={index} className="font-bold text-black">
        {renderRichText(block.text)}
      </p>
    );
  }

  if (block.type === 'bullets') {
    return (
      <ul key={index} className="list-disc space-y-1 pl-5">
        {block.items.map((item) => (
          <li key={item}>{renderRichText(item)}</li>
        ))}
      </ul>
    );
  }

  if (block.type === 'definitionList') {
    return (
    <div key={index} id={`${sectionId}-definition-list-${index + 1}`} className="my-10 ml-10 space-y-4">
      {block.items.map((item) => (
        <div key={item.title}>
          <p className="font-bold text-black">{item.title}</p>
          <p>{renderRichText(item.text)}</p>
        </div>
      ))}
    </div>
    );
  }

  return null;
}

function renderSectionImage(sectionId: string, blockIndex: number, locale: string) {
  const imageLocale = getImageLocale(locale);
  const images = localizedWorkImages[imageLocale];
  const dimensions = workImageDimensions[imageLocale];

  if (sectionId === 'information-architecture') {
    const imageByBlock = {
      2: {key: 'login', alt: locale === 'en' ? 'Login information architecture flow' : 'Flujo de arquitectura de información para ingreso al sistema'},
      4: {key: 'inbox', alt: locale === 'en' ? 'Inbox and students information architecture flow' : 'Flujo de arquitectura de información para bandeja de entrada y alumnos'},
      6: {key: 'communities', alt: locale === 'en' ? 'Communities information architecture flow' : 'Flujo de arquitectura de información para comunidades'},
      8: {key: 'settings', alt: locale === 'en' ? 'Settings information architecture flow' : 'Flujo de arquitectura de información para ajustes'}
    } as const;
    const image = imageByBlock[blockIndex as keyof typeof imageByBlock];

    if (image) {
      return <WorkImage key={`${sectionId}-image-${blockIndex}`} src={images[image.key]} alt={image.alt} {...dimensions[image.key]} className={`work-case-image-${image.key}`} />;
    }
  }

  if (sectionId === 'flows' && blockIndex === 0) {
    return <WorkImage key="flows-image" src={images.flows} alt={locale === 'en' ? 'User flow for sending a message' : 'Flujo de usuario para enviar un mensaje'} {...dimensions.flows} className="work-case-image-wide" />;
  }

  if (sectionId === 'interface' && blockIndex === 3) {
    return (
      <div key="interface-images" className="work-case-interface-images">
        <WorkImage src="/images/work/07.png" alt={locale === 'en' ? 'Mobile onboarding screens' : 'Pantallas móviles de onboarding'} width={1894} height={917} />
        <WorkImage src="/images/work/08.png" alt={locale === 'en' ? 'Mobile announcement board screens' : 'Pantallas móviles del tablero de anuncios'} width={2028} height={997} />
      </div>
    );
  }

  if (sectionId === 'interface' && blockIndex === 1) {
    return <WorkImage key="concept-board-image" src="/images/work/Concept_board.png" alt={locale === 'en' ? 'Visual direction concept board' : 'Concept board de dirección visual'} width={590} height={416} className="work-case-image-concept-board" />;
  }

  return null;
}

function renderInformationArchitectureBlocks(section: CaseStudySection, locale: string) {
  const rows = [
    {headingIndex: 1, paragraphIndex: 2, imageIndex: 2, layout: 'side'},
    {headingIndex: 3, paragraphIndex: 4, imageIndex: 4, layout: 'below'},
    {headingIndex: 5, paragraphIndex: 6, imageIndex: 6, layout: 'side-large'},
    {headingIndex: 7, paragraphIndex: 8, imageIndex: 8, layout: 'below'}
  ];

  return [
    renderBlock(section.blocks[0], section.id, 0),
    ...rows.map((row) => {
      const copy = (
        <div className="work-case-image-row-copy">
          {renderBlock(section.blocks[row.headingIndex], section.id, row.headingIndex)}
          {renderBlock(section.blocks[row.paragraphIndex], section.id, row.paragraphIndex)}
        </div>
      );

      if (row.layout === 'below') {
        return (
          <div key={`${section.id}-row-${row.headingIndex}`} className="work-case-image-stack">
            {copy}
            {renderSectionImage(section.id, row.imageIndex, locale)}
          </div>
        );
      }

      return (
        <div key={`${section.id}-row-${row.headingIndex}`} className={`work-case-image-row ${row.layout === 'side-large' ? 'work-case-image-row-large' : ''}`.trim()}>
          {copy}
          {renderSectionImage(section.id, row.imageIndex, locale)}
        </div>
      );
    })
  ];
}

export function WorkCaseStudy({caseStudy, locale}: WorkCaseStudyProps) {
  return (
    <section id="work-case-study" className="pb-8">
      <section id="work-case-hero" className="relative left-1/2 -mt-[89px] w-screen -translate-x-1/2 overflow-hidden">
        <Image src="/images/portfolio/aula.png" alt="" aria-hidden="true" width={1536} height={1024} priority className="h-auto w-full" />
        <div id="work-case-hero-overlay" className="absolute inset-0 bg-black/10" />

        <div id="work-case-hero-content" className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white">
          <Image src="/illustrations/abcComunidad.svg" alt="" aria-hidden="true" width={300} height={220} className="h-auto w-[300px]" />
          <div id="work-case-hero-blurb" className="mt-12 w-full max-w-[800px] rounded-[40px] bg-white px-8 py-4 text-[length:var(--fs-3xl)] font-normal leading-[140%] tracking-[0.01em] text-[#0b6f79] shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
            {caseStudy.hero.blurb}
          </div>
        </div>
      </section>

      <section id="work-case-content" className="flex w-full bg-white">
        <aside id="work-case-rail" className="box-border flex h-[661px] w-[198px] shrink-0 flex-col items-center justify-center gap-[60px] border-b border-r border-black bg-[#d7eeee] pb-[40px] pl-[36px] pr-[16px] pt-[20px] text-[length:var(--fs-sm)] leading-[140%] text-black/85 shadow-[3px_3px_3px_#075e65,3px_3px_3px_#075e65]">
          <div id="work-case-rail-content" className="flex h-[620px] flex-col justify-between pr-4">
            <div id="work-case-rail-items" className="space-y-4">
              {caseStudy.rail.map((item) => (
                <div id={`work-case-rail-${item.label.toLowerCase().replaceAll(' ', '-')}`} key={item.label}>
                  <p className="font-semibold">{item.label}</p>
                  {item.items.map((railItem) => (
                    <p key={railItem}>-{railItem}</p>
                  ))}
                </div>
              ))}
            </div>

            <SmoothHashLink id="work-case-rail-top-link" className="nav-button gap-2 text-black" href="#work-case-hero">
              {caseStudy.topLabel}
              <Image src="/icons/top.svg" alt="" aria-hidden="true" width={24} height={15} className="h-[15px] w-6" />
            </SmoothHashLink>
          </div>
        </aside>

        <div id="work-case-main" className="relative flex-1 overflow-hidden">
          <div id="work-case-body" className="relative z-10 space-y-12 px-16 py-4">
            {caseStudy.sections.map((section) => (
              <section id={`work-case-section-${section.id}`} key={section.id} className="relative max-w-[980px]">
                {section.id === 'users' ? <div id="work-case-maestra-illustration" className="work-case-maestra-illustration" aria-hidden="true" /> : null}
                <h2 className="relative z-10 mb-10 text-[length:var(--fs-5xl)] font-bold leading-[120%] text-[#424343]">{section.number}</h2>
                <div id={`work-case-text-block-${section.id}`} className="relative z-10 mt-4 space-y-5 text-[length:var(--fs-base)] leading-[150%] tracking-[0.01em] text-black/85">
                  {section.id === 'information-architecture'
                    ? renderInformationArchitectureBlocks(section, locale)
                    : section.blocks.flatMap((block, index) => [renderBlock(block, section.id, index), renderSectionImage(section.id, index, locale)])}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <div id="work-case-final-logo" className="flex w-full justify-center py-12">
        <div className="work-case-final-logo-mark" aria-hidden="true" />
      </div>
    </section>
  );
}
