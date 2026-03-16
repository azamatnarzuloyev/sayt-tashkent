import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://nexweb.uz'
  const currentDate = new Date().toISOString()

  const pages = [
    { url: '/', changeFrequency: 'weekly', priority: 1.0 },
    { url: '/uslugi/sozdanie-internet-magazinov', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/uslugi/korporativnye-sayty', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/uslugi/landing-page-pod-klyuch', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/uslugi/seo-prodvizhenie-saytov', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/uslugi/tehpodderzhka-saytov', changeFrequency: 'monthly', priority: 0.9 },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  })
}
