import { ImageResponse } from 'next/og';
import { OgTemplate } from '../../../lib/og-template';

export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    <OgTemplate
      title="Peria"
      subtitle="Aplikacja do notatek głosowych z transkrypcją AI i inteligentnym asystentem."
      label="Aplikacja · React · AI"
    />,
    { ...size }
  );
}
