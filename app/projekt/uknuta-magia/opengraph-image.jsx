import { ImageResponse } from 'next/og';
import { OgTemplate } from '../../../lib/og-template';

export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    <OgTemplate
      title="Uknuta Magia"
      subtitle="Autorski sklep z książką dla dzieci — zamówienia, płatności, panel zarządzania."
      label="E-commerce · React · Supabase"
    />,
    { ...size }
  );
}
