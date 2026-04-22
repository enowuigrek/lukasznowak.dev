import PeriaPage from '../../../components/PeriaPage';

export const metadata = {
  title: 'Peria — Aplikacja do organizacji myśli głosem',
  description: 'Peria to aplikacja mobilna, w której mówisz jedno zdanie, a ona rozbija je na listę, notatkę i wydarzenie. Bez pisania, bez organizowania.',
  alternates: { canonical: 'https://lukasznowak.dev/projekt/peria' },
  openGraph: {
    url: 'https://lukasznowak.dev/projekt/peria',
    title: 'Peria — Aplikacja do organizacji myśli głosem',
    description: 'Mówisz jedno zdanie — Peria rozbija je na listę, notatkę i wydarzenie. Aplikacja mobilna na iOS i Android.',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Peria',
  url: 'https://peria.netlify.app',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'iOS, Android',
  description: 'Aplikacja PWA do organizacji myśli głosem. Mówisz jedno zdanie — Peria rozbija je na listę zadań, notatkę i wydarzenie w kalendarzu.',
  author: { '@type': 'Person', name: 'Łukasz Nowak', url: 'https://lukasznowak.dev' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
};

export default function PeriaRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <PeriaPage />
    </>
  );
}
