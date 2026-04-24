import { ImageResponse } from 'next/og';
import { OgTemplate } from '../../../lib/og-template';

export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    <OgTemplate
      title="Job Odyssey"
      subtitle="Osobisty CRM do szukania pracy — kanban aplikacji, generator CV, śledzenie linków."
      label="Aplikacja · React · Supabase"
    />,
    { ...size }
  );
}
