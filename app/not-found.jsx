import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '1.5rem', fontFamily: 'var(--font-mono)' }}>
      <h1 style={{ fontSize: '4rem', margin: 0, letterSpacing: '0.1em' }}>404</h1>
      <p style={{ opacity: 0.6, margin: 0 }}>Nie znaleziono strony</p>
      <Link href="/" style={{ color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
        ← Wróć na stronę główną
      </Link>
    </div>
  );
}
