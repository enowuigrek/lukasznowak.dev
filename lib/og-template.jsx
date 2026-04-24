/**
 * Shared OG image template — returns JSX for ImageResponse
 */
export function OgTemplate({ title, subtitle, label, domain = 'lukasznowak.dev' }) {
  return (
    <div
      style={{
        width: '1200px',
        height: '630px',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 72px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle blue glow top-right */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          right: '-150px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(45,127,255,0.12) 0%, transparent 70%)',
          display: 'flex',
        }}
      />

      {/* Top row: LN mark + domain */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        {/* LN logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            border: '1.5px solid rgba(232,230,227,0.6)',
            color: '#e8e6e3',
            fontSize: '16px',
            fontWeight: '700',
            letterSpacing: '0.02em',
          }}
        >
          LN
        </div>

        {/* Domain */}
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: '14px',
            fontWeight: '500',
            letterSpacing: '0.12em',
            color: 'rgba(232,230,227,0.3)',
            textTransform: 'uppercase',
          }}
        >
          {domain}
        </div>
      </div>

      {/* Center content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {label && (
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(232,230,227,0.35)',
              display: 'flex',
            }}
          >
            {label}
          </div>
        )}

        {/* Glitch title — blue offset */}
        <div style={{ position: 'relative', display: 'flex' }}>
          <div
            style={{
              position: 'absolute',
              fontSize: '80px',
              fontWeight: '700',
              letterSpacing: '-0.03em',
              color: '#2d7fff',
              opacity: 0.35,
              lineHeight: 1.05,
              left: '3px',
              top: '2px',
              display: 'flex',
            }}
          >
            {title}
          </div>
          <div
            style={{
              position: 'absolute',
              fontSize: '80px',
              fontWeight: '700',
              letterSpacing: '-0.03em',
              color: '#ff2d2d',
              opacity: 0.25,
              lineHeight: 1.05,
              left: '-2px',
              top: '-1px',
              display: 'flex',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: '80px',
              fontWeight: '700',
              letterSpacing: '-0.03em',
              color: '#e8e6e3',
              lineHeight: 1.05,
              display: 'flex',
            }}
          >
            {title}
          </div>
        </div>

        {subtitle && (
          <div
            style={{
              fontSize: '22px',
              fontWeight: '400',
              color: 'rgba(232,230,227,0.5)',
              letterSpacing: '0',
              lineHeight: 1.4,
              marginTop: '8px',
              display: 'flex',
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      {/* Bottom border line */}
      <div
        style={{
          height: '1px',
          background: 'rgba(232,230,227,0.1)',
          display: 'flex',
        }}
      />
    </div>
  );
}
