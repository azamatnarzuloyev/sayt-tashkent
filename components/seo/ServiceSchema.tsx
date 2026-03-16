import { BASE_URL } from '@/lib/services-data'

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  image: string
  priceFrom: number
}

export default function ServiceSchema({ name, description, url, image, priceFrom }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "NexWeb",
      "url": BASE_URL,
    },
    "areaServed": {
      "@type": "Place",
      "name": "Ташкент, Узбекистан"
    },
    "url": `${BASE_URL}${url}`,
    "image": `${BASE_URL}${image}`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "UZS",
      "price": String(priceFrom),
      "availability": "https://schema.org/InStock",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
