import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  badges: string[]
  backgroundImage: string
  backgroundAlt: string
}

export default function ServiceHero({ title, subtitle, description, badges, backgroundImage, backgroundAlt }: ServiceHeroProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 z-[1]" />
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90 z-[2]" />
      </div>

      <div className="absolute top-10 left-5 w-64 h-64 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-15 animate-pulse" />
      <div className="absolute bottom-10 right-5 w-48 h-48 bg-gradient-to-br from-secondary to-primary rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          {title}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent mb-6">
          {subtitle}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-primary/20 text-primary border-primary/30 text-xs sm:text-sm"
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
