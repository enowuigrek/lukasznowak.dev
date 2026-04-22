import StrzkawaPage from '../../../components/StrzkawaPage';

export const metadata = {
  title: 'Strzykawa — Sklep online z kawą specialty',
  description: 'Autorski sklep internetowy palarni Strzykawa — zbudowany na Shopify z własnym frontendem w React. Filtrowanie, koszyk, płatności BLIK i InPost.',
  alternates: { canonical: 'https://lukasznowak.dev/projekt/strzykawa' },
  openGraph: {
    url: 'https://lukasznowak.dev/projekt/strzykawa',
    title: 'Strzykawa — Sklep online z kawą specialty',
    description: 'Autorski sklep palarni kawy Strzykawa. React frontend na Shopify, płatności BLIK, dostawa InPost.',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Strzykawa — Kawa Specialty',
  url: 'https://strzykawa.com',
  description: 'Sklep internetowy częstochowskiej palarni kawy specialty. Autorski frontend w React na Shopify, płatności BLIK, dostawa InPost.',
  author: { '@type': 'Person', name: 'Łukasz Nowak', url: 'https://lukasznowak.dev' },
};

export default function StrzkawaRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <StrzkawaPage />
    </>
  );
}
