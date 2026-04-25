import Image from 'next/image';

type WorkCaseStudyProps = {
  heroTagline: string;
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
  heroTagline,
  heroBlurb,
  rail,
  sectionNumber,
  sectionQuestion,
  sectionParagraph1,
  sectionParagraph2
}: WorkCaseStudyProps) {
  return (
    <section id="work-case-study" className="pb-8">
      <section id="work-case-hero" className="relative min-h-[560px] overflow-hidden">
        <Image src="/images/portfolio/aula.png" alt="" aria-hidden="true" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex min-h-[560px] flex-col items-center justify-center px-6 text-center text-white">
          <Image src="/illustrations/abcComunidad.svg" alt="" aria-hidden="true" width={300} height={220} className="h-auto w-[300px]" />
          <p className="mt-3 text-[18px] font-semibold leading-[140%] tracking-[0.01em]">{heroTagline}</p>
          <div className="mt-12 w-full max-w-[584px] rounded-[28px] bg-white px-8 py-4 text-[22px] font-normal leading-[140%] tracking-[0.01em] text-[#0b6f79] shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
            {heroBlurb}
          </div>
        </div>
      </section>

      <section id="work-case-content" className="flex w-full bg-white">
        <aside id="work-case-rail" className="w-[180px] shrink-0 bg-[#d9ecef] px-6 py-4 text-[15px] leading-[140%] text-black/85">
          <div className="space-y-4 border-r-2 border-[#0b6f79] pr-4">
            <div>
              <p className="font-semibold">{rail.context}</p>
              {rail.contextItems.map((item) => (
                <p key={item}>-{item}</p>
              ))}
            </div>

            <div>
              <p className="font-semibold">{rail.users}</p>
              {rail.usersItems.map((item) => (
                <p key={item}>-{item}</p>
              ))}
            </div>

            <p className="font-semibold">{rail.mvp}</p>

            <div>
              <p className="font-semibold">{rail.structure}</p>
              {rail.structureItems.map((item) => (
                <p key={item}>-{item}</p>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex-1 px-8 py-4">
          <h2 className="type-title-30 text-black">{sectionNumber}</h2>
          <h3 className="mt-6 text-[24px] font-bold leading-[140%] tracking-[0.01em] text-[#0b6f79] underline underline-offset-4">
            {sectionQuestion}
          </h3>

          <div className="mt-4 max-w-[980px] space-y-6 text-[20px] leading-[150%] tracking-[0.01em] text-black/85">
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
