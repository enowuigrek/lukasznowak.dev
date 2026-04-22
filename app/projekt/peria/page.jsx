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

export default function PeriaRoute() {
  return <PeriaPage />;
}
