export default function Logo({ className = '' }) {
  return (
    <span className={`logo-wordmark ${className}`}>
      <span className="logo-signature">Łukasz Nowak</span>
      <span className="logo-dev"><span className="logo-dev-dot">.</span>dev</span>
    </span>
  );
}
