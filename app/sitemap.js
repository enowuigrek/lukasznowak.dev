export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://lukasznowak.dev';

  const projects = ['strzykawa', 'peria', 'job-odyssey', 'uknuta-magia'];

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...projects.map((slug) => ({
      url: `${base}/projekt/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];
}
