import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://report-counter.vercel.app', // あなたのURL
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}