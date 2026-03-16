import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { ServiceData } from '@/lib/services-data'

interface RelatedServicesProps {
  services: ServiceData[]
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          ДРУГИЕ НАШИ УСЛУГИ
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Полный спектр услуг по разработке и продвижению сайтов в Ташкенте
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.slug}
              className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{service.price}</p>
                <p className="text-xs text-muted-foreground mb-4">{service.timeline}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                  asChild
                >
                  <Link href={`/uslugi/${service.slug}`}>Подробнее</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
