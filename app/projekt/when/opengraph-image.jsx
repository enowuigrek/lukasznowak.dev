import { ImageResponse } from 'next/og';
import { OgTemplate } from '../../../lib/og-template';

export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    <OgTemplate
      title="WHEN"
      subtitle="Autorski system rezerwacji online — widget do osadzenia, grafiki pracowników, ceny per grupa."
      label="Narzędzie autorskie · Next.js · Supabase"
    />,
    { ...size }
  );
}
