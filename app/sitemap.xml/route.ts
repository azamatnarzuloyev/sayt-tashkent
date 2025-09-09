import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://sayt-tashkent.vercel.app'
  const currentDate = new Date().toISOString()

  const staticPages = [
    {
      url: '/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: '/#services',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: '/#portfolio',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/#advantages',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/#reviews',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: '/#contact',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: '/#prices',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
    <!-- Alternative language versions -->
    <xhtml:link rel="alternate" hreflang="ru-uz" href="${baseUrl}${page.url}" />
    <xhtml:link rel="alternate" hreflang="uz-uz" href="${baseUrl}/uz${page.url}" />
    <xhtml:link rel="alternate" hreflang="en-us" href="${baseUrl}/en${page.url}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page.url}" />
  </url>`
    )
    .join('')}
  
  <!-- Service-specific pages -->
  <url>
    <loc>${baseUrl}/services/website-development</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="ru-uz" href="${baseUrl}/services/website-development" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/services/website-development" />
  </url>
  
  <url>
    <loc>${baseUrl}/services/landing-page</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="ru-uz" href="${baseUrl}/services/landing-page" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/services/landing-page" />
  </url>
  
  <url>
    <loc>${baseUrl}/services/ecommerce</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="ru-uz" href="${baseUrl}/services/ecommerce" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/services/ecommerce" />
  </url>
  
  <url>
    <loc>${baseUrl}/services/corporate-website</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="ru-uz" href="${baseUrl}/services/corporate-website" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/services/corporate-website" />
  </url>
  
  <!-- Blog/News pages (if implemented in future) -->
  <!-- Dynamic content can be added here -->
  
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  })
}