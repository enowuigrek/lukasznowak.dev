import { ImageResponse } from 'next/og';
import { OgTemplate } from '../../../lib/og-template';

export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    <OgTemplate
      title="Strzykawa"
      subtitle="Sklep online z kawą specialty — autorski frontend na Shopify z filtrowaniem i płatnościami."
      label="E-commerce · Shopify · React"
    />,
    { ...size }
  );
}
