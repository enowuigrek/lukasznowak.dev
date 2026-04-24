import { createClient } from '@sanity/client';

const hasSanity = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

// ─── Klient Sanity (tworzony tylko gdy są credentials) ───────────────────────
// Ustaw zmienne w Netlify: NEXT_PUBLIC_SANITY_PROJECT_ID i NEXT_PUBLIC_SANITY_DATASET
export const sanityClient = hasSanity
  ? createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
      perspective: 'published',
    })
  : null;

// ─── Fallback — statyczne posty (development bez Sanity) ────────────────────
async function getStaticPosts() {
  const { posts } = await import('../data/posts.js');
  return posts.map((p) => ({
    _id: p.slug,
    slug: { current: p.slug },
    title: p.title,
    publishedAt: p.date,
    readTime: p.readTime,
    excerpt: p.excerpt,
    // body w statycznym formacie — obsługa w komponencie
    body: p.content,
    _static: true,
  })).reverse();
}

async function getStaticPost(slug) {
  const { getPostBySlug } = await import('../data/posts.js');
  const p = getPostBySlug(slug);
  if (!p) return null;
  return {
    _id: p.slug,
    slug: { current: p.slug },
    title: p.title,
    publishedAt: p.date,
    readTime: p.readTime,
    excerpt: p.excerpt,
    body: p.content,
    _static: true,
  };
}

// ─── Queries ─────────────────────────────────────────────────────────────────
const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  "readTime": round(length(pt::text(body)) / 200) + " min"
}`;

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  body,
  "readTime": round(length(pt::text(body)) / 200) + " min"
}`;

const SLUGS_QUERY = `*[_type == "post"]{ "slug": slug.current }`;

// ─── API publiczne ────────────────────────────────────────────────────────────
export async function getPosts() {
  if (!hasSanity) return getStaticPosts();
  try {
    return await sanityClient.fetch(POSTS_QUERY);
  } catch (e) {
    console.warn('[Sanity] getPosts failed, using static fallback:', e.message);
    return getStaticPosts();
  }
}

export async function getPost(slug) {
  if (!hasSanity) return getStaticPost(slug);
  try {
    return await sanityClient.fetch(POST_QUERY, { slug });
  } catch (e) {
    console.warn('[Sanity] getPost failed, using static fallback:', e.message);
    return getStaticPost(slug);
  }
}

export async function getPostSlugs() {
  if (!hasSanity) {
    const { posts } = await import('../data/posts.js');
    return posts.map((p) => ({ slug: p.slug }));
  }
  try {
    return await sanityClient.fetch(SLUGS_QUERY);
  } catch (e) {
    console.warn('[Sanity] getPostSlugs failed, using static fallback:', e.message);
    const { posts } = await import('../data/posts.js');
    return posts.map((p) => ({ slug: p.slug }));
  }
}
