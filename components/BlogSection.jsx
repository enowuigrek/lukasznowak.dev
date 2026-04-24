import Link from 'next/link';
import '../styles/blog.css';

function formatDate(dateStr) {
  if (!dateStr) return '';
  return dateStr.slice(0, 10);
}

export default function BlogSection({ posts = [] }) {
  const latest = posts.slice(0, 3);

  return (
    <section className="section blog-teaser" id="notatki" data-guide="Notatki">
      <div className="blog-teaser-header fade-in">
        <p className="label">Notatki</p>
        <h2 className="blog-teaser-heading">Piszę o tym, o co pytają klienci.</h2>
      </div>

      <div className="blog-teaser-grid">
        {latest.map((post) => (
          <Link key={post.slug?.current ?? post.slug} href={`/blog/${post.slug?.current ?? post.slug}`} className="blog-card">
            <div className="blog-card-meta">
              <span className="blog-card-date">{formatDate(post.publishedAt ?? post.date)}</span>
              <span className="blog-card-read">{post.readTime}</span>
            </div>
            <h3 className="blog-card-title">{post.title}</h3>
            <p className="blog-card-excerpt">{post.excerpt}</p>
            <span className="blog-card-cta">Czytaj →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
