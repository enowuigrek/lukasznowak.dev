import { ImageResponse } from 'next/og';
import { OgTemplate } from '../lib/og-template';

export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    <OgTemplate
      title="Łukasz Nowak"
      subtitle="Strony WWW · E-commerce · Aplikacje webowe"
      label="lukasznowak.dev"
    />,
    { ...size }
  );
}
