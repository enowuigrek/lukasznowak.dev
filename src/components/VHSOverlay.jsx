import '../styles/vhs.css';

export default function VHSOverlay() {
  return (
    <>
      {/* CRT phosphor scanlines — na tle, za contentem */}
      <div className="crt-scanlines" />
      <div className="crt-vignette" />

      {/* VHS overlay — na wierzchu */}
      <div className="vhs-overlay">
        <div className="vhs-scanlines" />
        <div className="vhs-noise" />
        <div className="vhs-flicker" />
        <div className="vhs-glitch-bar" />

        {/* SVG noise filter */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
          <filter id="vhs-noise-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>
      </div>
    </>
  );
}
