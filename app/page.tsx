import footerMessages from '@/messages/en.json';
import {Footer} from '@/components/layout/Footer';
import {SiteShell} from '@/components/layout/SiteShell';
import {Hero} from '@/components/sections/Hero';

export default function LandingPage() {
  const footer = footerMessages.Footer;

  return (
    <SiteShell>
      <div className="flex min-h-[calc(100vh-2rem)] flex-col">
        <main className="mx-auto flex-1 w-full max-w-[1440px]">
          <Hero title="Nerina Berthelot" role="UX/UI" />
        </main>
        <Footer
          text={footer.copyright}
          emailHref={footer.emailHref}
          emailLabel={footer.emailLabel}
          linkedInLabel={footer.linkedInLabel}
          linkedInHref={footer.linkedInHref}
        />
      </div>
    </SiteShell>
  );
}
