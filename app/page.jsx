import HomePage from '../components/HomePage';
import { getPosts } from '../lib/sanity';

export const metadata = {
  title: 'Łukasz Nowak — Strony WWW, Sklepy, Aplikacje | Częstochowa',
  description: 'Projektuję i koduję strony internetowe, sklepy e-commerce i aplikacje webowe. Pracuję sam — rozmawiasz wprost z osobą, która zrealizuje Twój projekt od A do Z.',
  alternates: { canonical: 'https://lukasznowak.dev' },
  openGraph: {
    url: 'https://lukasznowak.dev',
    title: 'Łukasz Nowak — Strony WWW, Sklepy, Aplikacje',
    description: 'Projektuję i koduję strony internetowe, sklepy e-commerce i aplikacje webowe. Częstochowa i cała Polska.',
  },
};

export default async function Page() {
  const posts = await getPosts();
  return <HomePage posts={posts} />;
}
