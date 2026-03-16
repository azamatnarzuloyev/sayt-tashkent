import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { services, getOtherServices, BASE_URL } from '@/lib/services-data'
import Breadcrumbs from '@/components/sections/Breadcrumbs'
import ServiceHero from '@/components/sections/ServiceHero'
import FAQSection from '@/components/sections/FAQSection'
import RelatedServices from '@/components/sections/RelatedServices'
import ContactForm from '@/components/forms/ContactForm'
import ServiceSchema from '@/components/seo/ServiceSchema'
import FAQSchema from '@/components/seo/FAQSchema'

const service = services.find(s => s.slug === 'korporativnye-sayty')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: {
    canonical: `${BASE_URL}/uslugi/${service.slug}`,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_UZ',
    url: `${BASE_URL}/uslugi/${service.slug}`,
    siteName: 'NexWeb - Разработка сайтов в Ташкенте',
    title: service.metaTitle,
    description: service.metaDescription,
    images: [{ url: `${BASE_URL}${service.ogImage}`, width: 1200, height: 630, alt: service.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: service.metaTitle,
    description: service.metaDescription,
    images: [`${BASE_URL}${service.ogImage}`],
  },
}

export default function KorporativnyeSaytyPage() {
  const otherServices = getOtherServices(service.slug)

  return (
    <>
      <ServiceSchema
        name={service.title}
        description={service.metaDescription}
        url={`/uslugi/${service.slug}`}
        image={service.ogImage}
        priceFrom={service.priceFrom}
      />
      <FAQSchema faqs={service.faqs} />

      <Breadcrumbs items={[
        { label: 'Главная', href: '/' },
        { label: 'Услуги', href: '/#services' },
        { label: service.title },
      ]} />

      <ServiceHero
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        description={service.heroDescription}
        badges={service.heroBadges}
        backgroundImage={service.images.hero.src}
        backgroundAlt={service.images.hero.alt}
      />

      {/* What is section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              {service.sections.whatIs.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {service.sections.whatIs.content}
            </p>
          </div>
        </div>
      </section>

      {/* Visual showcase */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50">
              <Image
                src={service.images.secondary.src}
                alt={service.images.secondary.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50">
              <Image
                src={service.images.tertiary.src}
                alt={service.images.tertiary.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            {service.sections.advantages.title}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Создаем корпоративные сайты, которые формируют доверие и усиливают позиции бизнеса
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.sections.advantages.items.map((item, index) => (
              <Card key={index} className="p-4 bg-card border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            {service.sections.process.title}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            От первого звонка до запуска готового корпоративного сайта
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {service.sections.process.steps.map((step, index) => (
              <Card key={index} className="text-center p-6 bg-card border-border/50 hover:border-primary/50 transition-colors relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <CardContent className="pt-8">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-card/30" id="prices">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            {service.sections.pricing.title}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {service.sections.pricing.description}
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.sections.pricing.packages.map((pkg, index) => (
              <Card
                key={index}
                className={`bg-card border-border/50 hover:border-primary/50 transition-all duration-300 ${
                  index === 1 ? 'border-primary shadow-lg scale-105 relative' : ''
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">ПОПУЛЯРНО</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-card-foreground">{pkg.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <Link href="#order-form">ЗАКАЗАТЬ</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices services={otherServices} />
      <FAQSection faqs={service.faqs} />
      <ContactForm serviceName={service.title} />
    </>
  )
}
