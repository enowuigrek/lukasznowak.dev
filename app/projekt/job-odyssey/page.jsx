import JobOdysseyPage from '../../../components/JobOdysseyPage';

export const metadata = {
  title: 'Job Odyssey — osobisty CRM do rekrutacji',
  description: 'Webowa aplikacja do zarządzania procesem szukania pracy. Kanban aplikacji, generator CV z śledzeniem kliknięć, rozmowy kwalifikacyjne — wszystko w jednym miejscu.',
  alternates: { canonical: 'https://lukasznowak.dev/projekt/job-odyssey' },
  openGraph: {
    url: 'https://lukasznowak.dev/projekt/job-odyssey',
    title: 'Job Odyssey — osobisty CRM do rekrutacji',
    description: 'Webowy CRM do szukania pracy. Kanban, generator CV z tracking linkami, historia rozmów.',
  },
};

export default function JobOdysseyRoute() {
  return <JobOdysseyPage />;
}
