import './globals.css';
import type { Metadata } from 'next';
import { Inter, Raleway, Open_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GIVE ME.ART',
  description:
    'Generate your ART by typing in field below any words that comes to your mind!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
      //className={raleway.className}
      >
        {children}
      </body>
    </html>
  );
}
