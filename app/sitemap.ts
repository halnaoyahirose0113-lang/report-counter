import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // 👇 ここをあなたのサイトのURL（https://〜）に書き換えてください！
  const baseUrl = 'https://report-counter.vercel.app/' 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}