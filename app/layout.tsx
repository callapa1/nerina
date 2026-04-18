import './globals.css';
import type {Metadata} from 'next';
import localFont from 'next/font/local';

const inter = localFont({
  src: [
    {
      path: '../public/fonts/inter/Inter-Variable.ttf',
      style: 'normal',
      weight: '100 900'
    },
    {
      path: '../public/fonts/inter/Inter-Italic-Variable.ttf',
      style: 'italic',
      weight: '100 900'
    }
  ],
  display: 'swap'
});

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
