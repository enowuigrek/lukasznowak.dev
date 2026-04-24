import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { getPost, getPostSlugs } from '../../../lib/sanity';
import Footer from '../../../components/Footer';
import '../../../styles/blog.css';

// Blog wyłączony — zobacz komentarz w app/blog/page.jsx
const BLOG_ENABLED = false;

export async function generateStaticParams() {
  if (!BLOG_ENABLED) return [];
  const slugs = await getPostSlugs();
  return slugs.map((s) => ({ slug: s.slug?.current ?? s.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    alternates: { canonical: `https://lukasznowak.dev/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  return dateStr.slice(0, 10);
}

// PortableText components — mapowanie bloków Sanity na HTML
const ptComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => <code>{children}</code>,
  },
};

// Statyczny format (data/posts.js) — array of {type, text}
function StaticContent({ body }) {
  return body.map((block, i) => {
    if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
    return <p key={i}>{block.text}</p>;
  });
}

export default async function PostPage({ params }) {
  if (!BLOG_ENABLED) notFound();
  const post = await getPost(params.slug);
  if (!post) return null;

  const isStatic = post._static;

  return (
    <div className="post-page">
      <nav className="blog-page-nav">
        <Link href="/blog" className="blog-page-back">← Wszystkie notatki</Link>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>
          {post.readTime}
        </span>
      </nav>

      <header className="post-hero">
        <div className="post-meta">
          <span className="post-date">{formatDate(post.publishedAt ?? post.date)}</span>
          <span className="post-read">{post.readTime}</span>
        </div>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-excerpt">{post.excerpt}</p>
      </header>

      <article className="post-content">
        {isStatic
          ? <StaticContent body={post.body} />
          : <PortableText value={post.body} components={ptComponents} />
        }
      </article>

      <div className="post-footer">
        <p className="post-footer-text">
          Masz pytanie albo chcesz porozmawiać o projekcie?
        </p>
        <Link href="/#kontakt" className="post-footer-cta">
          Napisz do mnie →
        </Link>
      </div>

      <Footer />
    </div>
  );
}
