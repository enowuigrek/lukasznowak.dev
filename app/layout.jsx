import './globals.css';
import CustomCursor from '../components/CustomCursor';
import CookieBanner from '../components/CookieBanner';

export const metadata = {
  metadataBase: new URL('https://lukasznowak.dev'),
  title: {
    default: 'Łukasz Nowak — Strony WWW, E-commerce, Automatyzacje | Częstochowa',
    template: '%s | Łukasz Nowak',
  },
  description: 'Łukasz Nowak — tworzenie stron internetowych, sklepów e-commerce, automatyzacji i projektów webowych. Częstochowa i cała Polska. lukasznowak.dev',
  keywords: ['strony www', 'strony internetowe', 'e-commerce', 'sklepy internetowe', 'automatyzacje', 'web developer', 'Częstochowa', 'Łukasz Nowak'],
  authors: [{ name: 'Łukasz Nowak' }],
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://lukasznowak.dev' },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    siteName: 'lukasznowak.dev',
    url: 'https://lukasznowak.dev',
    title: 'Łukasz Nowak — Strony WWW, E-commerce, Automatyzacje',
    description: 'Tworzenie stron internetowych, sklepów e-commerce i automatyzacji. Częstochowa i cała Polska.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Łukasz Nowak — Strony WWW, E-commerce, Automatyzacje' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Łukasz Nowak — Strony WWW, E-commerce, Automatyzacje',
    description: 'Tworzenie stron internetowych, sklepów e-commerce i automatyzacji. Częstochowa i cała Polska.',
    images: [{ url: '/og-image.svg', alt: 'Łukasz Nowak — Strony WWW, E-commerce, Automatyzacje' }],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Łukasz Nowak — Projekty Webowe',
  url: 'https://lukasznowak.dev',
  email: 'kontakt@lukasznowak.dev',
  description: 'Tworzenie stron internetowych, sklepów e-commerce, automatyzacji i projektów webowych.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Częstochowa',
    addressCountry: 'PL',
  },
  areaServed: 'PL',
  serviceType: ['Strony WWW', 'E-commerce', 'Automatyzacje', 'Projekty webowe'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Cinzel:wght@700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <CustomCursor />
        <CookieBanner />
        {children}
        {/* Hidden form for Netlify Forms detection */}
        <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
      </body>
    </html>
  );
}
