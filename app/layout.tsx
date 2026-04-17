import './globals.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Nerina Portfolio',
  description: 'Bilingual portfolio scaffold built with Next.js'
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
