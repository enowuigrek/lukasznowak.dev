import WhenPage from '../../../components/WhenPage';

export const metadata = {
  title: 'WHEN — System rezerwacji online dla salonów',
  description: 'WHEN to autorski system rezerwacji online — widget do osadzenia, grafiki pracowników, ceny per grupa. Mogę wdrożyć go u Ciebie w ramach projektu strony.',
  keywords: ['system rezerwacji', 'rezerwacje online', 'widget rezerwacji', 'salon', 'barber', 'kosmetyka', 'Next.js', 'SaaS', 'Łukasz Nowak'],
  alternates: { canonical: 'https://lukasznowak.dev/projekt/when' },
  openGraph: {
    url: 'https://lukasznowak.dev/projekt/when',
    title: 'WHEN — System rezerwacji online dla salonów',
    description: 'Klient rezerwuje sam, Ty otwierasz panel. Widget do osadzenia jedną linijką HTML.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WHEN — System rezerwacji online',
    description: 'Klient rezerwuje sam, Ty otwierasz panel. Widget do osadzenia jedną linijką HTML.',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WHEN',
  url: 'https://when-three.vercel.app',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Autorski system rezerwacji online dla salonów, gabinetów i studiów. Widget do osadzenia, grafiki pracowników, ceny per grupa.',
  author: { '@type': 'Person', name: 'Łukasz Nowak', url: 'https://lukasznowak.dev' },
};

export default function WhenRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <WhenPage />
    </>
  );
}
