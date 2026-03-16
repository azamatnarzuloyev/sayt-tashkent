import Link from 'next/link'
import { MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">
              <span className="text-primary">▲</span>NexWeb
            </h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Профессиональная разработка сайтов и веб-студия в Ташкенте. Создаем современные IT-решения для успешного
              бизнеса. Полный цикл разработки от идеи до запуска.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href="https://t.me/nexweb_uz" target="_blank" rel="noopener noreferrer">Telegram</a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-accent text-accent hover:bg-accent/10 bg-transparent"
                asChild
              >
                <a href="https://wa.me/998990167647" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Услуги веб-студии</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/uslugi/sozdanie-internet-magazinov" className="hover:text-primary transition-colors">
                  Создание интернет-магазинов
                </Link>
              </li>
              <li>
                <Link href="/uslugi/korporativnye-sayty" className="hover:text-primary transition-colors">
                  Корпоративные сайты
                </Link>
              </li>
              <li>
                <Link href="/uslugi/landing-page-pod-klyuch" className="hover:text-primary transition-colors">
                  Landing Page под ключ
                </Link>
              </li>
              <li>
                <Link href="/uslugi/seo-prodvizhenie-saytov" className="hover:text-primary transition-colors">
                  SEO продвижение сайтов
                </Link>
              </li>
              <li>
                <Link href="/uslugi/tehpodderzhka-saytov" className="hover:text-primary transition-colors">
                  Техподдержка сайтов
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-primary transition-colors">
                  Все услуги
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Контакты</h4>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  г. Ташкент, ул. Амира Темура, 107Б
                  <br />
                  Офис веб-студии
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+998990167647" className="hover:text-primary transition-colors">+998 99 016 76 47</a>
              </div>
              <div className="flex items-center gap-2">
                <Send className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@nexweb.uz" className="hover:text-primary transition-colors">info@nexweb.uz</a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Режим работы</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Пн-Пт: 9:00 - 18:00</div>
              <div>Сб: 10:00 - 15:00</div>
              <div>Вс: выходной</div>
              <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                <div className="text-primary font-semibold text-xs">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</div>
                <div className="text-xs">Звоните в любое время!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} NexWeb. Все права защищены.</p>
              <p className="mt-1">Разработка сайтов в Ташкенте | Веб-студия полного цикла</p>
            </div>
            <div className="text-sm text-muted-foreground md:text-right">
              <p>Разработано в <a href="https://innosoft.uz" target="_blank" rel="noopener" className="text-primary hover:underline transition-colors">Innosoft</a></p>
              <p className="mt-1">г. Ташкент, Узбекистан</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
