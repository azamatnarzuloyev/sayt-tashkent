import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sayt-tashkent.uz'),
  title: {
    default: 'Разработка сайтов в Ташкенте | Веб-студия SAYT-TASHKENT - создание сайтов под ключ',
    template: '%s | SAYT-TASHKENT - разработка сайтов в Ташкенте'
  },
  description: 'Профессиональная разработка сайтов в Ташкенте под ключ ⭐ Создание корпоративных сайтов, интернет-магазинов, лендингов ⭐ Веб-студия полного цикла ⭐ 500+ успешных проектов ⭐ Опыт 10+ лет ⭐ SEO-оптимизация включена',
  keywords: [
    'разработка сайтов Ташкент',
    'веб студия Ташкент',
    'создание сайтов Ташкент',
    'сайт под ключ Ташкент',
    'корпоративный сайт Ташкент',
    'интернет магазин Ташкент',
    'лендинг Ташкент',
    'сайт визитка Ташкент',
    'веб разработка Узбекистан',
    'SEO продвижение Ташкент',
    'техподдержка сайтов',
    'адаптивный дизайн',
    'CMS разработка',
    'веб дизайн Ташкент'
  ],
  authors: [{ name: 'SAYT-TASHKENT', url: 'https://sayt-tashkent.uz' }],
  creator: 'Веб-студия SAYT-TASHKENT',
  publisher: 'SAYT-TASHKENT',
  category: 'technology',
  classification: 'Web Development Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://sayt-tashkent.uz',
    languages: {
      'ru-UZ': 'https://sayt-tashkent.uz',
      'uz-UZ': 'https://sayt-tashkent.uz/uz',
      'en-US': 'https://sayt-tashkent.uz/en'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'ru_UZ',
    url: 'https://sayt-tashkent.uz',
    siteName: 'SAYT-TASHKENT - Разработка сайтов в Ташкенте',
    title: 'Разработка сайтов в Ташкенте | Веб-студия SAYT-TASHKENT',
    description: 'Профессиональная разработка сайтов в Ташкенте под ключ. Создание корпоративных сайтов, интернет-магазинов, лендингов. Веб-студия полного цикла с опытом 10+ лет.',
    images: [
      {
        url: 'https://sayt-tashkent.uz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Разработка сайтов в Ташкенте - Веб-студия SAYT-TASHKENT',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@saytt_tashkent',
    creator: '@sayt_tashkent',
    title: 'Разработка сайтов в Ташкенте | Веб-студия SAYT-TASHKENT',
    description: 'Профессиональная разработка сайтов в Ташкенте под ключ. Создание корпоративных сайтов, интернет-магазинов, лендингов.',
    images: ['https://sayt-tashkent.uz/twitter-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    other: {
      'msvalidate.01': 'bing-verification-code',
    }
  },
  appleWebApp: {
    title: 'SAYT-TASHKENT',
    statusBarStyle: 'default',
    capable: true,
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sayt-tashkent.uz/#organization",
    "name": "SAYT-TASHKENT",
    "alternateName": "Веб-студия SAYT-TASHKENT",
    "description": "Профессиональная разработка сайтов в Ташкенте под ключ. Создание корпоративных сайтов, интернет-магазинов, лендингов.",
    "url": "https://sayt-tashkent.uz",
    "logo": "https://sayt-tashkent.uz/logo.png",
    "image": "https://sayt-tashkent.uz/og-image.jpg",
    "telephone": "+998901234567",
    "email": "info@sayt-tashkent.uz",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Амира Темура, 107Б",
      "addressLocality": "Ташкент",
      "addressCountry": "UZ",
      "postalCode": "100000"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.2995",
      "longitude": "69.2401"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Ташкент, Узбекистан"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "41.2995",
        "longitude": "69.2401"
      },
      "geoRadius": "100000"
    },
    "priceRange": "от 500,000 сум",
    "currenciesAccepted": "UZS",
    "paymentAccepted": ["Наличные", "Банковский перевод", "Онлайн оплата"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "15:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Услуги веб-разработки",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Разработка сайта-визитки",
            "description": "Создание простых информационных сайтов для представления компании"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Создание Landing Page",
            "description": "Разработка продающих страниц с высокой конверсией"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Корпоративный сайт",
            "description": "Представительские сайты для крупных компаний"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Интернет-магазин",
            "description": "Полнофункциональные интернет-магазины с системой управления"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "foundingDate": "2014",
    "numberOfEmployees": "10-50",
    "slogan": "Создаем сайты, которые работают на ваш бизнес",
    "sameAs": [
      "https://t.me/sayt_tashkent",
      "https://instagram.com/sayt.tashkent",
      "https://facebook.com/sayTtashkent"
    ]
  };

  return (
    <html lang="ru-UZ">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="canonical" href="https://sayt-tashkent.uz" />
        <meta name="geo.region" content="UZ-TK" />
        <meta name="geo.placename" content="Ташкент" />
        <meta name="geo.position" content="41.2995;69.2401" />
        <meta name="ICBM" content="41.2995, 69.2401" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="theme-color" content="#1a365d" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
