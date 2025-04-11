import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Emergeny Portal',
  description: 'by DaVinci Team',
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
