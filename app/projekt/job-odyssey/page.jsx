import JobOdysseyPage from '../../../components/JobOdysseyPage';

export const metadata = {
  title: 'Job Odyssey — osobisty CRM do rekrutacji',
  description: 'Webowa aplikacja do zarządzania procesem szukania pracy. Kanban aplikacji, generator CV z śledzeniem kliknięć, rozmowy kwalifikacyjne — wszystko w jednym miejscu.',
  keywords: ['CRM rekrutacja', 'generator CV', 'szukanie pracy', 'kanban', 'aplikacja webowa', 'Supabase', 'React', 'Łukasz Nowak'],
  alternates: { canonical: 'https://lukasznowak.dev/projekt/job-odyssey' },
  openGraph: {
    url: 'https://lukasznowak.dev/projekt/job-odyssey',
    title: 'Job Odyssey — osobisty CRM do rekrutacji',
    description: 'Webowy CRM do szukania pracy. Kanban, generator CV z tracking linkami, historia rozmów.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Job Odyssey — osobisty CRM do rekrutacji',
    description: 'Webowy CRM do szukania pracy. Kanban, generator CV z tracking linkami, historia rozmów.',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Job Odyssey',
  url: 'https://job-odyssey.netlify.app',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Webowy CRM do zarządzania procesem szukania pracy. Kanban aplikacji, generator CV z śledzeniem kliknięć, historia rozmów kwalifikacyjnych.',
  author: { '@type': 'Person', name: 'Łukasz Nowak', url: 'https://lukasznowak.dev' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
};

export default function JobOdysseyRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <JobOdysseyPage />
    </>
  );
}
