import UknutaMagiaPage from '../../../components/UknutaMagiaPage';

export const metadata = {
  title: 'Uknuta Magia — Autorski sklep z książką',
  description: 'Prosty sklep internetowy dla autora książki dla dzieci. Supabase, EmailJS, zero kosztów miesięcznych. Zamówienie, płatność, potwierdzenie na maila.',
  alternates: { canonical: 'https://lukasznowak.dev/projekt/uknuta-magia' },
  openGraph: {
    url: 'https://lukasznowak.dev/projekt/uknuta-magia',
    title: 'Uknuta Magia — Autorski sklep z książką',
    description: 'Sklep z jednym produktem dla autora książki dla dzieci. Supabase + EmailJS, tylko koszt domeny.',
  },
};

export default function UknutaMagiaRoute() {
  return <UknutaMagiaPage />;
}
