import UknutaMagiaPage from '../../../components/UknutaMagiaPage';

export const metadata = {
  title: 'Uknuta Magia — Autorski sklep z książką',
  description: 'Prosty sklep internetowy dla autora książki dla dzieci. Supabase, EmailJS, zero kosztów miesięcznych. Zamówienie, płatność, potwierdzenie na maila.',
  keywords: ['sklep internetowy', 'sklep z książką', 'Supabase', 'EmailJS', 'React', 'e-commerce', 'Łukasz Nowak'],
  alternates: { canonical: 'https://lukasznowak.dev/projekt/uknuta-magia' },
  openGraph: {
    url: 'https://lukasznowak.dev/projekt/uknuta-magia',
    title: 'Uknuta Magia — Autorski sklep z książką',
    description: 'Sklep z jednym produktem dla autora książki dla dzieci. Supabase + EmailJS, tylko koszt domeny.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uknuta Magia — Autorski sklep z książką',
    description: 'Sklep z jednym produktem dla autora książki dla dzieci. Supabase + EmailJS, tylko koszt domeny.',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Uknuta Magia',
  url: 'https://uknutamagia.pl',
  description: 'Autorski sklep internetowy z książką dla dzieci. Supabase + EmailJS, zero kosztów miesięcznych, pełna kontrola nad sprzedażą.',
  author: { '@type': 'Person', name: 'Łukasz Nowak', url: 'https://lukasznowak.dev' },
};

export default function UknutaMagiaRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <UknutaMagiaPage />
    </>
  );
}
