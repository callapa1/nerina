import footerMessages from '@/messages/en.json';
import {Footer} from '@/components/layout/Footer';
import {SiteShell} from '@/components/layout/SiteShell';
import {Hero} from '@/components/sections/Hero';

export default function LandingPage() {
  const footer = footerMessages.Footer;

  return (
    <SiteShell>
      <div id="landing-page-frame" className="flex h-screen flex-col">
        <main id="landing-main" className="flex w-full flex-1">
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
