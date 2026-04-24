import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPosts } from '../../lib/sanity';
import Footer from '../../components/Footer';
import '../../styles/blog.css';

// Blog wyłączony do czasu prawdziwych postów. Aby przywrócić: usuń notFound() poniżej
// + odkomentuj <BlogSection> w components/HomePage.jsx + dodaj link "Notatki" w Navbar/Footer.
const BLOG_ENABLED = false;

export const metadata = {
  title: 'Notatki — lukasznowak.dev',
  description: 'Piszę o stronach internetowych, e-commerce i narzędziach webowych. Praktycznie, bez lania wody.',
  alternates: { canonical: 'https://lukasznowak.dev/blog' },
};

function formatDate(dateStr) {
  if (!dateStr) return '';
  return dateStr.slice(0, 10);
}

export default async function BlogPage() {
  if (!BLOG_ENABLED) notFound();
  const posts = await getPosts();

  return (
    <div className="blog-page">
      <nav className="blog-page-nav">
        <Link href="/" className="blog-page-back">← Powrót</Link>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>
          Notatki
        </span>
      </nav>

      <header className="blog-list-header">
        <p className="label" style={{ marginBottom: '1.5rem', color: 'var(--text-dim)' }}>Notatki</p>
        <h1 className="blog-list-heading">Piszę o tym,<br />o co pytają klienci.</h1>
      </header>

      <div className="blog-list">
        {posts.map((post, i) => {
          const slug = post.slug?.current ?? post.slug;
          return (
            <Link key={post._id ?? slug} href={`/blog/${slug}`} className="blog-list-item">
              <span className="blog-list-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="blog-list-title">{post.title}</span>
              <div className="blog-list-right">
                <span className="blog-list-date">{formatDate(post.publishedAt ?? post.date)}</span>
                <span className="blog-list-read">{post.readTime}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
