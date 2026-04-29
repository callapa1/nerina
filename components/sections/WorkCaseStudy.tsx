import Image from 'next/image';
import type {ReactNode} from 'react';
import {SmoothHashLink} from '@/components/ui/SmoothHashLink';

type WorkCaseStudyProps = {
  caseStudy: CaseStudyContent;
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

export function WorkCaseStudy({caseStudy}: WorkCaseStudyProps) {
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
                  {section.blocks.map((block, index) => renderBlock(block, section.id, index))}
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
