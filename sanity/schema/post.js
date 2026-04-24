// Schema posta blogowego — skopiuj to do swojego Sanity Studio
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Data publikacji',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'excerpt',
      title: 'Skrót (lead)',
      type: 'text',
      rows: 3,
      description: 'Krótki opis — widoczny na liście i w meta tagach.',
      validation: (Rule) => Rule.required().max(300),
    },
    {
      name: 'body',
      title: 'Treść',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normalny', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt text', type: 'string' },
            { name: 'caption', title: 'Podpis', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'seoTitle',
      title: 'SEO — tytuł (opcjonalnie)',
      type: 'string',
      description: 'Jeśli puste, używany jest tytuł posta.',
    },
    {
      name: 'seoDescription',
      title: 'SEO — opis (opcjonalnie)',
      type: 'text',
      rows: 2,
      description: 'Jeśli puste, używany jest skrót.',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt' },
  },
  orderings: [
    {
      title: 'Data publikacji (najnowsze)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
};
