import Image from 'next/image';

type WorkCaseStudyProps = {
  heroBlurb: string;
  rail: {
    context: string;
    contextItems: string[];
    users: string;
    usersItems: string[];
    mvp: string;
    structure: string;
    structureItems: string[];
  };
  sectionNumber: string;
  sectionQuestion: string;
  sectionParagraph1: string;
  sectionParagraph2: string;
};

export function WorkCaseStudy({
  heroBlurb,
  rail,
  sectionNumber,
  sectionQuestion,
  sectionParagraph1,
  sectionParagraph2
}: WorkCaseStudyProps) {
  return (
    <section id="work-case-study" className="pb-8">
      <section id="work-case-hero" className="relative left-1/2 -mt-[74px] w-screen -translate-x-1/2 overflow-hidden">
        <Image src="/images/portfolio/aula.png" alt="" aria-hidden="true" width={1536} height={1024} priority className="h-auto w-full" />
        <div id="work-case-hero-overlay" className="absolute inset-0 bg-black/10" />

        <div id="work-case-hero-content" className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white">
          <Image src="/illustrations/abcComunidad.svg" alt="" aria-hidden="true" width={300} height={220} className="h-auto w-[300px]" />
          <div id="work-case-hero-blurb" className="mt-12 w-full max-w-[800px] rounded-[28px] bg-white px-8 py-4 text-[28px] font-normal leading-[140%] tracking-[0.01em] text-[#0b6f79] shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
            {heroBlurb}
          </div>
        </div>
      </section>

      <section id="work-case-content" className="flex w-full bg-white">
        <aside id="work-case-rail" className="w-[180px] shrink-0 bg-[#d9ecef] px-6 py-4 text-[15px] leading-[140%] text-black/85">
          <div id="work-case-rail-content" className="space-y-4 border-r-2 border-[#0b6f79] pr-4">
            <div id="work-case-rail-context">
              <p className="font-semibold">{rail.context}</p>
              {rail.contextItems.map((item) => (
                <p key={item}>-{item}</p>
              ))}
            </div>

            <div id="work-case-rail-users">
              <p className="font-semibold">{rail.users}</p>
              {rail.usersItems.map((item) => (
                <p key={item}>-{item}</p>
              ))}
            </div>

            <p className="font-semibold">{rail.mvp}</p>

            <div id="work-case-rail-structure">
              <p className="font-semibold">{rail.structure}</p>
              {rail.structureItems.map((item) => (
                <p key={item}>-{item}</p>
              ))}
            </div>
          </div>
        </aside>

        <div id="work-case-body" className="flex-1 px-8 py-4">
          <h2 className="type-title-30 text-black">{sectionNumber}</h2>
          <h3 className="mt-6 text-[24px] font-bold leading-[140%] tracking-[0.01em] text-[#0b6f79] underline underline-offset-4">
            {sectionQuestion}
          </h3>

          <div id="work-case-text-block" className="mt-4 max-w-[980px] space-y-6 text-[20px] leading-[150%] tracking-[0.01em] text-black/85">
            <p>
              <span className="font-medium">{sectionParagraph1}</span>
            </p>
            <p>{sectionParagraph2}</p>
          </div>
        </div>
      </section>
    </section>
  );
}
