"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  MapPin,
  Phone,
  Send,
  Download,
  FileText,
  Star,
  CheckCircle,
  Users,
  Award,
  Clock,
  Shield,
  Loader2,
} from "lucide-react"

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string>("")
  const [serviceFormData, setServiceFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage(result.message)
        setFormData({ name: "", phone: "", email: "", service: "", message: "" })
      } else {
        setSubmitMessage(result.error || "Произошла ошибка при отправке")
      }
    } catch (error) {
      setSubmitMessage("Произошла ошибка при отправке заказа")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleServiceOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "service",
          service: selectedService,
          ...serviceFormData,
        }),
      })

      if (response.ok) {
        setIsServiceModalOpen(false)
        setServiceFormData({ name: "", phone: "", email: "", company: "", message: "" })
        // Show success message
        alert("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.")
      } else {
        alert("Произошла ошибка при отправке заявки. Попробуйте еще раз.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Произошла ошибка при отправке заявки. Попробуйте еще раз.")
    } finally {
      setIsSubmitting(false)
    }
  }
  const projects = [
  { id: 1, title: "E-commerce веб-сайт", category: "E-commerce", description: "Полнофункциональный интернет-магазин с каталогом товаров", image: "/portfolio/e-commerse-sts.webp", technologies: ["React", "Node.js", "MongoDB"], link: "http://stsmarket.uz/" },
  { id: 2, title: "Корпоративный сайт", category: "Веб-сайт", description: "Представительский сайт для бизнеса", image: "/portfolio/UMX.webp", technologies: ["Next.js", "PostgreSQL", "TypeScript"], link: "https://www.uvix.uz/" },
  { id: 3, title: "Админ панель", category: "Веб-сайт", description: "Административная панель для управления", image: "/portfolio/admin-sts-shop.webp", technologies: ["React", "Firebase"], link: "https://sts-shop.uz/admin/auth/login" },
  { id: 4, title: "Система учета посещаемости", category: "Веб-сайт", description: "Система для учета сотрудников", image: "/portfolio/davomat.webp", technologies: ["Next.js", "MongoDB"], link: "https://www.davomad-tizim.uz/sign-in" },
  { id: 5, title: "E-Bitim", category: "Мобильное приложение", description: "Мобильное приложение для сделок", image: "/portfolio/e-bitim.webp", technologies: ["React Native", "Stripe"], link: "https://www.ebitim.uz/" },
  { id: 6, title: "Minor Tovur", category: "Мобильное приложение", description: "Приложение для продажи товаров", image: "/portfolio/minor-tovur.webp", technologies: ["React Native", "Firebase"], link: "#" },
  { id: 7, title: "Система контроля", category: "Веб-сайт", description: "Система мониторинга процессов", image: "/portfolio/nazorat.webp", technologies: ["Next.js", "TypeScript"], link: "#" },
  { id: 8, title: "Программа для склада", category: "Десктоп", description: "Десктопное приложение для управления складом", image: "/portfolio/sklad.webp", technologies: ["Electron", "Node.js"], link: "#" },
  { id: 9, title: "E-commerce приложение", category: "Мобильное приложение", description: "Мобильный магазин для покупок", image: "/portfolio/stsmarket-mobil.webp", technologies: ["React Native", "MongoDB"], link: "https://apps.apple.com/uz/app/sts-market/id6702024082" },
  { id: 10, title: "СургПатЛаб", category: "Веб-сайт", description: "Медицинский веб-сайт", image: "/portfolio/12.png", technologies: ["React", "PostgreSQL"], link: "https://www.surgpath.org" },
  { id: 11, title: "Хумо Групп CRM", category: "Веб-сайт", description: "CRM система для бизнеса", image: "/portfolio/xumo-group.png", technologies: ["Next.js", "Firebase"], link: "https://humo-group.uz/" },
  { id: 12, title: "Пикник Тур", category: "Веб-сайт", description: "Туристический веб-сайт", image: "/portfolio/picnic-tour.png", technologies: ["React", "Node.js"], link: "https://www.picnic-tour.uz/" },
  { id: 13, title: "Ts service", category: "Веб-сайт", description: "Сервисный веб-сайт", image: "/portfolio/ts-service-sayt.png", technologies: ["Next.js", "TypeScript"], link: "https://ts-service.uz/" },
];


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-0">
        {/* Background with classical statue */}
        <div className="absolute inset-0" role="img" aria-label="Классическая статуя мыслителя - символ интеллектуального подхода к веб-разработке">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20"></div>
          <div className="absolute inset-0 bg-[url('/Razrabotka-sayta.jpg')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60"></div>
        </div>

        {/* Floating gradient shapes - responsive */}
        <div className="absolute top-10 left-2 w-48 h-48 sm:top-20 sm:left-10 sm:w-96 sm:h-96 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-2 w-40 h-40 sm:bottom-20 sm:right-10 sm:w-80 sm:h-80 bg-gradient-to-br from-secondary to-primary rounded-full blur-3xl opacity-15 animate-pulse delay-1000"></div>

        {/* Navigation - Mobile Optimized */}
        <nav className="absolute top-0 left-0 right-0 z-20 p-4 sm:p-6">
          <div className="container mx-auto flex items-center justify-between">
            <div className="text-lg sm:text-2xl font-bold text-foreground">
              <span className="text-primary">▲</span>INNOSOFT
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm text-muted-foreground">
              <a href="#services" className="hover:text-foreground transition-colors">
                РАЗРАБОТКА САЙТОВ
              </a>
              <a href="#portfolio" className="hover:text-foreground transition-colors">
                ПОРТФОЛИО
              </a>
              <a href="#prices" className="hover:text-foreground transition-colors">
                ЦЕНЫ
              </a>
              <a href="#advantages" className="hover:text-foreground transition-colors">
                ПРЕИМУЩЕСТВА
              </a>
              <a href="#reviews" className="hover:text-foreground transition-colors">
                ОТЗЫВЫ
              </a>
              <a href="#contact" className="hover:text-foreground transition-colors">
                КОНТАКТЫ
              </a>
            </div>

            {/* Contact info - responsive */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4 text-xs lg:text-sm">
              <span className="hidden lg:inline text-muted-foreground">+998 99 016 76 47 </span>
              <span className="text-muted-foreground lg:hidden">Звонить</span>
              <span className="hidden xl:inline text-muted-foreground">info@inosoft.uz</span>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-30">
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  <a 
                    href="#services" 
                    className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    РАЗРАБОТКА САЙТОВ
                  </a>
                  <a 
                    href="#portfolio" 
                    className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ПОРТФОЛИО
                  </a>
                  <a 
                    href="#prices" 
                    className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ЦЕНЫ
                  </a>
                  <a 
                    href="#advantages" 
                    className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ПРЕИМУЩЕСТВА
                  </a>
                  <a 
                    href="#reviews" 
                    className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ОТЗЫВЫ
                  </a>
                  <a 
                    href="#contact" 
                    className="text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    КОНТАКТЫ
                  </a>
                  
                  {/* Mobile contact info */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="space-y-2">
                      <a href="tel:+998990167647 " className="flex items-center text-primary font-medium">
                        <Phone className="h-4 w-4 mr-2" />
                        +998 99 016 76 47 
                      </a>
                      <a href="mailto:info@innosoft" className="flex items-center text-muted-foreground">
                        <Send className="h-4 w-4 mr-2" />
                        info@innosoft
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Main content - Mobile Optimized */}
       <header className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-4 text-center sm:text-left max-w-4xl mt-16 sm:mt-0">
  <div className="space-y-6 sm:space-y-8">
    <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight sm:leading-tight">
      <span className="block text-balance">РАЗРАБОТКА</span>
      <span className="block text-balance">САЙТОВ В</span>
      <span className="block text-balance text-primary">ТАШКЕНТЕ</span>
    </h1>

    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent">
        <a
          href="https://innosoft.uz/ru/razrabotka-sayt-tashkent"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-primary transition-colors duration-200"
        >
          ВЕБ-СТУДИЯ INNOSOFT
        </a>
      </h2>

      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto sm:mx-0 leading-relaxed">
        Профессиональная разработка сайтов в Ташкенте под ключ. Создаем современные веб-сайты для бизнеса любого
        масштаба. Веб-студия полного цикла с опытом более 10 лет и 500+ успешных проектов.
      </p>

      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
        <Badge variant="secondary" className="bg-primary text-primary-foreground border-primary text-xs sm:text-sm">
       
            Разработка сайтов Ташкент
        </Badge>
        <Badge variant="secondary" className="bg-accent text-accent-foreground border-accent text-xs sm:text-sm">
       
            Веб-студия под ключ
         
        </Badge>
        <Badge variant="secondary" className="bg-secondary text-secondary-foreground border-secondary text-xs sm:text-sm">
          
            Создание сайтов
          
        </Badge>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto sm:mx-0">
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border-2 border-primary w-full sm:w-auto"
      >
        <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        БРИФ ОНЛАЙН
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border-2 border-accent text-accent hover:bg-accent/10 bg-transparent w-full sm:w-auto"
      >
        <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        СКАЧАТЬ БРИФ
      </Button>
    </div>
  </div>
</header>

      </section>

      <section className="py-20 bg-card/30" id="advantages" aria-labelledby="advantages-title">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 id="advantages-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              ПОЧЕМУ ВЫБИРАЮТ НАШУ ВЕБ-СТУДИЮ В ТАШКЕНТЕ
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Мы — ведущая веб-студия в Ташкенте с многолетним опытом разработки сайтов. Наша команда создает
              эффективные веб-решения для бизнеса любого масштаба.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  number: "500+",
                  title: "Реализованных проектов",
                  description: "Успешно запущенных сайтов для бизнеса в Ташкенте и Узбекистане",
                },
                {
                  icon: <Clock className="h-8 w-8 text-accent" />,
                  number: "10+",
                  title: "Лет опыта",
                  description: "Профессиональной разработки сайтов и веб-приложений",
                },
                {
                  icon: <Award className="h-8 w-8 text-secondary" />,
                  number: "98%",
                  title: "Довольных клиентов",
                  description: "Рекомендуют нашу веб-студию своим партнерам",
                },
                {
                  icon: <Shield className="h-8 w-8 text-primary" />,
                  number: "24/7",
                  title: "Техподдержка",
                  description: "Круглосуточная поддержка и обслуживание сайтов",
                },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="text-center p-6 bg-card border-border/50 hover:border-primary/50 transition-colors"
                >
                  <CardContent className="pt-4">
                    <div className="flex justify-center mb-4">{stat.icon}</div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{stat.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="border border-border rounded-2xl p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">НАШИ КОНКУРЕНТНЫЕ ПРЕИМУЩЕСТВА</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <CheckCircle className="h-6 w-6 text-primary" />,
                    title: "Современные технологии",
                    description:
                      "Используем актуальный стек: React, Next.js, Node.js для создания быстрых и надежных сайтов",
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-primary" />,
                    title: "SEO-оптимизация",
                    description: "Каждый сайт оптимизируется для поисковых систем с первого дня разработки",
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-primary" />,
                    title: "Адаптивный дизайн",
                    description: "Все сайты корректно отображаются на мобильных устройствах и планшетах",
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-primary" />,
                    title: "Быстрая загрузка",
                    description: "Оптимизируем скорость загрузки для лучшего пользовательского опыта",
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-primary" />,
                    title: "Безопасность",
                    description: "Обеспечиваем высокий уровень защиты от взломов и атак",
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-primary" />,
                    title: "Гарантия качества",
                    description: "Предоставляем гарантию на все выполненные работы и техподдержку",
                  },
                ].map((advantage, index) => (
                  <Card key={index} className="p-4 bg-card border-border/50 hover:border-primary/50 transition-colors">
                    <CardContent className="pt-4">
                      <div className="flex items-start gap-3">
                        {advantage.icon}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{advantage.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="services" aria-labelledby="services-title">
        <div className="container mx-auto px-4">
          <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            УСЛУГИ ПО РАЗРАБОТКЕ САЙТОВ В ТАШКЕНТЕ
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Наша веб-студия предлагает полный спектр услуг по созданию сайтов под ключ. От простых визиток до сложных
            интернет-магазинов и корпоративных порталов.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="prices">
            {[
              {
                title: "САЙТ-ВИЗИТКА",
                description:
                  "Простые информационные сайты для представления компании в интернете. Идеально подходят для малого бизнеса в Ташкенте.",
                price: "от 500 000 сум",
                features: ["Адаптивный дизайн", "SEO-оптимизация", "Форма обратной связи", "Интеграция с соцсетями"],
                popular: false,
              },
              {
                title: "LANDING PAGE",
                description:
                  "Продающие страницы для конкретных товаров или услуг с высокой конверсией. Эффективный инструмент для привлечения клиентов.",
                price: "от 800 000 сум",
                features: ["Продающий дизайн", "A/B тестирование", "Аналитика", "Интеграция с CRM"],
                popular: true,
              },
              {
                title: "КОРПОРАТИВНЫЙ САЙТ",
                description:
                  "Представительские сайты для крупных компаний с расширенным функционалом и профессиональным дизайном.",
                price: "от 2 500 000 сум",
                features: ["Многоязычность", "Личный кабинет", "Новостная лента", "Интеграция с 1С"],
                popular: false,
              },
              {
                title: "ИНТЕРНЕТ-МАГАЗИН",
                description:
                  "Полнофункциональные интернет-магазины с системой управления товарами, заказами и платежами.",
                price: "от 2 000 000 сум",
                features: ["Каталог товаров", "Корзина и оплата", "Личный кабинет", "Система скидок"],
                popular: false,
              },
              {
                title: "САЙТ УСЛУГ",
                description:
                  "Многостраничные сайты для сферы услуг с удобной навигацией и детальным описанием предложений.",
                price: "от 1 200 000 сум",
                features: ["Каталог услуг", "Онлайн-запись", "Калькулятор стоимости", "Отзывы клиентов"],
                popular: false,
              },
              {
                title: "ВЕБ-ПОРТАЛ",
                description: "Сложные многофункциональные порталы с расширенными возможностями для крупного бизнеса.",
                price: "от 5 000 000 сум",
                features: ["Модульная архитектура", "API интеграции", "Высокие нагрузки", "Масштабируемость"],
                popular: false,
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`relative bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group ${
                  service.popular ? "border-primary shadow-lg scale-105" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">ПОПУЛЯРНО</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-2 pt-4">
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => {
                        setSelectedService(service.title)
                        setIsServiceModalOpen(true)
                      }}
                    >
                      ЗАКАЗАТЬ САЙТ
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-accent text-accent hover:bg-accent/10 bg-transparent"
                    >
                      УЗНАТЬ ПОДРОБНЕЕ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     <section className="py-20 bg-card/30" id="portfolio" aria-labelledby="portfolio-title">
      <div className="container mx-auto px-4">
        <h2 id="portfolio-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          ПОРТФОЛИО НАШЕЙ ВЕБ-СТУДИИ
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Примеры успешно реализованных проектов по разработке сайтов в Ташкенте. Каждый проект создавался с учетом
          специфики бизнеса клиента.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{project.category}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                  disabled={project.link === "#"}
                  asChild={project.link !== "#"}
                >
                  {project.link !== "#" ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      ПОСМОТРЕТЬ ПРОЕКТ
                    </a>
                  ) : (
                    "ПОСМОТРЕТЬ ПРОЕКТ"
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

      <section className="py-20" id="reviews">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            ОТЗЫВЫ О НАШЕЙ ВЕБ-СТУДИИ В ТАШКЕНТЕ
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Что говорят наши клиенты о качестве разработки сайтов и уровне сервиса в нашей веб-студии.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Азиз Каримов",
                company: "ООО 'Ташкент Строй'",
                rating: 5,
                text: "Отличная веб-студия! Создали корпоративный сайт точно в срок. Качество работы на высшем уровне, все пожелания учли. Рекомендую для разработки сайтов в Ташкенте.",
                avatar: "АК",
              },
              {
                name: "Дилноза Рахимова",
                company: "Салон красоты 'Венера'",
                rating: 5,
                text: "Заказывали лендинг для салона красоты. Результат превзошел ожидания! Красивый дизайн, удобная навигация. Количество клиентов увеличилось в 2 раза после запуска сайта.",
                avatar: "ДР",
              },
              {
                name: "Шерзод Усманов",
                company: "Интернет-магазин 'TechStore'",
                rating: 5,
                text: "Профессиональная команда разработчиков. Создали интернет-магазин с нуля, интегрировали с системой учета. Сайт работает стабильно, продажи выросли на 150%.",
                avatar: "ШУ",
              },
              {
                name: "Нигора Абдуллаева",
                company: "Медицинский центр 'Здоровье'",
                rating: 5,
                text: "Веб-студия выполнила все работы качественно и в срок. Сайт получился современным и функциональным. Особенно понравилась система онлайн-записи к врачам.",
                avatar: "НА",
              },
              {
                name: "Фаррух Турсунов",
                company: "Ресторан 'Бахтиёр'",
                rating: 5,
                text: "Заказывали сайт для ресторана с онлайн-меню и системой бронирования столиков. Работа выполнена на отлично! Клиенты довольны удобством сайта.",
                avatar: "ФТ",
              },
              {
                name: "Мадина Исмаилова",
                company: "Образовательный центр 'Знание'",
                rating: 5,
                text: "Создали образовательную платформу с личными кабинетами студентов и преподавателей. Функционал богатый, интерфейс интуитивно понятный. Спасибо за качественную работу!",
                avatar: "МИ",
              },
            ].map((review, index) => (
              <Card key={index} className="bg-card border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">ПРОЦЕСС РАЗРАБОТКИ САЙТОВ</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Как мы работаем: от первого звонка до запуска готового сайта. Прозрачный процесс разработки с контролем на
            каждом этапе.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Анализ и планирование",
                description:
                  "Изучаем ваш бизнес, целевую аудиторию и конкурентов. Составляем техническое задание и план проекта.",
                icon: <FileText className="h-8 w-8 text-primary" />,
              },
              {
                step: "02",
                title: "Дизайн и прототипирование",
                description: "Создаем уникальный дизайн сайта, учитывая фирменный стиль и пожелания клиента.",
                icon: <Users className="h-8 w-8 text-accent" />,
              },
              {
                step: "03",
                title: "Разработка и программирование",
                description: "Верстаем дизайн, программируем функционал, интегрируем с внешними сервисами.",
                icon: <Award className="h-8 w-8 text-secondary" />,
              },
              {
                step: "04",
                title: "Тестирование и запуск",
                description: "Тестируем сайт на всех устройствах, исправляем ошибки и запускаем проект в работу.",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
            ].map((process, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-card border-border/50 hover:border-primary/50 transition-colors relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">{process.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{process.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ГОТОВЫ ЗАКАЗАТЬ РАЗРАБОТКУ САЙТА В ТАШКЕНТЕ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Получите бесплатную консультацию и коммерческое предложение для вашего бизнеса. Наша веб-студия поможет
              создать эффективный сайт под ключ.
            </p>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Заказать разработку сайта</CardTitle>
                <CardDescription>Мы свяжемся с вами в течение 30 минут и предложим оптимальное решение</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-card-foreground">
                        Имя *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ваше имя"
                        className="bg-input border-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-card-foreground">
                        Телефон *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+998 99 016 76 47 "
                        className="bg-input border-border"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-card-foreground">
                      Тип сайта
                    </Label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-input border border-border rounded-md text-foreground"
                    >
                      <option value="">Выберите тип сайта</option>
                      <option value="Сайт-визитка">Сайт-визитка</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="Корпоративный сайт">Корпоративный сайт</option>
                      <option value="Интернет-магазин">Интернет-магазин</option>
                      <option value="Другое">Другое</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-card-foreground">
                      Описание проекта
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Расскажите подробнее о вашем проекте, целях и пожеланиях..."
                      className="bg-input border-border min-h-[100px]"
                    />
                  </div>

                  {submitMessage && (
                    <div
                      className={`p-4 rounded-md text-center ${
                        submitMessage.includes("успешно")
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Получить консультацию
                      </>
                    )}
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Landing Page Development Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              РАЗРАБОТКА ЛЕНДИНГА В ТАШКЕНТЕ
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Лендинг — это отдельная веб-страница, предназначенная для превращения посетителей в потенциальных клиентов
              или покупателей. В отличие от больших сайтов, где есть множество страниц и отвлекающих факторов, лендинг
              нацелен на одну конкретную цель — конверсию.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">ОСНОВНЫЕ ПРЕИМУЩЕСТВА LANDING PAGE</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Повышение конверсий",
                      description:
                        "Четко сфокусированная целевая страница может повысить коэффициент конверсии и обеспечить большую доходность для продаж.",
                    },
                    {
                      title: "Улучшение качества трафика",
                      description:
                        "С помощью различных целевых страниц Вы можете ориентироваться на определенную аудиторию, что может улучшить Ваши общие маркетинговые усилия.",
                    },
                    {
                      title: "Повышение эффективности",
                      description:
                        "С помощью аналитики Вы можете отслеживать эффективность Вашей целевой страницы и принимать решения по улучшению на основе данных.",
                    },
                  ].map((benefit, index) => (
                    <Card key={index} className="p-4 bg-card border-border/50">
                      <CardContent className="pt-2">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">ПОЧЕМУ СТОИТ ВЫБРАТЬ НАШУ КОМПАНИЮ</h3>
                <div className="space-y-4">
                  {[
                    "Опыт. Наша команда имеет многолетний опыт в разработке эффективных лендинг пейдж.",
                    "Персонализация. Мы не используем шаблоны - каждый Landing Page, который мы создаем, уникален и соответствует потребностям и целям Вашего бизнеса.",
                    "Оптимизация. Мы используем современные методы оптимизации, чтобы Ваша целевая страница была быстрой, удобной для пользователей и оптимизированной для поисковых систем.",
                    "Ориентированность на результат. Мы работаем в тесном сотрудничестве с нашими клиентами, чтобы понять ваши бизнес-цели и создать целевую страницу, которая поможет Вам их достичь.",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Websites Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              РАЗРАБОТКА САЙТА УСЛУГ В ТАШКЕНТЕ
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Мы специализируемся на создании индивидуальных сайтов услуг, отвечающих Вашим конкретным потребностям.
              Независимо от того, являетесь ли Вы владельцем малого бизнеса или крупной корпорации, мы поможем Вам
              создать веб-сайт под ключ, который будет привлекать и удерживать клиентов.
            </p>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">ЗАЧЕМ НУЖЕН САЙТ УСЛУГ</h3>
              <p className="text-muted-foreground text-center mb-8 max-w-4xl mx-auto leading-relaxed">
                В сегодняшнюю цифровую эпоху наличие веб-сайта необходимо для любого бизнеса. Это не просто цифровая
                витрина между Вами и Вашими потенциальными клиентами. Хорошо разработанный сайт услуг может помочь Вам
                создать авторитет, укрепить доверие и, в конечном итоге, увеличить продажи.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Повышение конверсий",
                    description:
                      "Четко структурированная целевая страница может повысить коэффициент конверсии и обеспечить большую доходность для продаж.",
                  },
                  {
                    title: "Улучшение качества трафика",
                    description:
                      "С помощью различных целевых страниц Вы можете ориентироваться на определенную аудиторию.",
                  },
                  {
                    title: "Повышение эффективности",
                    description:
                      "С помощью аналитики Вы можете отслеживать эффективность и принимать решения на основе данных.",
                  },
                  {
                    title: "Круглосуточная доступность",
                    description: "Ваш сайт работает 24/7, предоставляя информацию клиентам в любое время.",
                  },
                  {
                    title: "Расширение географии",
                    description: "Привлекайте клиентов не только из Ташкента, но и из других регионов Узбекистана.",
                  },
                  {
                    title: "Автоматизация процессов",
                    description: "Онлайн-запись, калькуляторы стоимости и другие инструменты экономят время.",
                  },
                ].map((advantage, index) => (
                  <Card key={index} className="p-4 bg-card border-border/50 hover:border-primary/50 transition-colors">
                    <CardContent className="pt-2">
                      <h4 className="font-semibold text-foreground mb-2">{advantage.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                ПРЕИМУЩЕСТВА СОЗДАНИЯ САЙТА УСЛУГ В НАШЕЙ КОМПАНИИ
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {[
                    "Выбрав наши услуги по разработке веб-сайта, Вы сможете воспользоваться знаниями и опытом нашей команды специалистов.",
                    "Мы понимаем важность создания веб-сайта, который не только выглядит великолепно, но и обеспечивает отличный пользовательский опыт.",
                    "Наши методы для обеспечения безопасности и оптимизации Вашего сайта для максимальной производительности.",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {[
                    "В дополнение к нашим техническим знаниям мы предлагаем индивидуальный подход к разработке веб-сайтов.",
                    "Мы понимаем, что каждый бизнес имеет уникальные потребности и цели, поэтому мы уделяем время тому, чтобы выслушать Ваши идеи и предложить решения.",
                    "Поэтому если вы ищете надежную и опытную компанию по разработке веб-сайтов, обратите внимание на нас.",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Website Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              РАЗРАБОТКА КОРПОРАТИВНОГО САЙТА В ТАШКЕНТЕ
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Получите профессиональную консультацию или узнайте стоимость интересующих вас услуг под ключ в нашей
              компании
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <div className="bg-card rounded-2xl p-6 border border-border/50 mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Корпоративный сайт</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    многофункциональный сайт, предназначенный как правило для представления крупной компании,
                    администрации. Универсальный инструмент для ведения успешного бизнеса в интернете.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <strong>Цена:</strong> веб-сайт показывает один из самых выгодных условий разработки
                    </p>
                    <p>
                      <strong>Стоимость:</strong> работ по созданию корпоративного сайта начинается от 50000 
                    </p>
                    <p>
                      <strong>По времени:</strong> разработка займет около 14-45 рабочих дней
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-6">
                  СОЗДАНИЕ КОРПОРАТИВНОГО САЙТА ЖИЗНЕННО НЕОБХОДИМО ВАМ, ЕСЛИ:
                </h3>
                <div className="space-y-4">
                  {[
                    "Вы планируете использовать сайт как бизнес-инструмент, а не просто как визитную карточку компании в Интернете.",
                    "Вы относитесь крупная компания или планируете стать таковой.",
                    "Вы хотите создать сайт основным каналом продвижения и одним из основных источников прибыли компании.",
                    "Вы хотите создать сайт для всех представительств компании.",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">ПРЕИМУЩЕСТВА СОБСТВЕННОГО САЙТА:</h3>
                <div className="space-y-4 mb-8">
                  {[
                    "Прозрачность и доступность сведений о компании являются необходимым плюсом в глазах клиентов и позволяют выделить данную фирму на фоне конкурентов.",
                    "На сайте каждый желающий может ознакомиться с предлагаемыми компанией товарами или услугами.",
                    "Повышается доверие к фирме – современно, увеличивается приток потенциальных клиентов и растет их лояльность.",
                  ].map((advantage, index) => (
                    <Card key={index} className="p-4 bg-card border-border/50">
                      <CardContent className="pt-2">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground leading-relaxed">{advantage}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Прежде чем создать корпоративный сайт, необходимо определить целевую аудиторию, на которую
                    направлена деятельность компании. Посетитель должен получить четкую и ясную информацию о том, что
                    предлагает компания, какие услуги оказывает или какие товары продает. Клиенту будет интересно
                    узнать, есть ли достижения, как организован сбыт и т.п.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Стоит уделить особое внимание и внешнему виду сайта. Правильно подобранные элементы дизайна могут
                    стать дополнительным фактором, который поможет человеку сделать выбор в пользу конкретной фирмы.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                ПРЕИМУЩЕСТВА РАЗРАБОТКИ КОРПОРАТИВНОГО САЙТА ПОД КЛЮЧ С НАМИ:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Более чем 10-летний опыт в разработке сайтов любой сложности.",
                  "Детальное знание рекламных технологий SEO-продвижения и огромный опыт в сфере интернет-маркетинга позволяют нам разрабатывать по-настоящему удобные и, что очень важно, сайты.",
                  "Наша компания имеет филиалы в городах России и Беларуси, что позволяет эффективно распределять нагрузку между подразделениями.",
                  "Вы можете в действии протестировать функционал, рассмотреть дизайн на прототипе сайта который создается до начала программирования.",
                  "Каждый проект программируется с нуля под конкретное техническое задание сопровождение сайта устраняется возможность возникновения ошибок под каждый проект.",
                  "Уникальный дизайн проекта разрабатывается визуализируется под каждый проект.",
                ].map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Card Website Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              РАЗРАБОТКА САЙТА-ВИЗИТКИ В ТАШКЕНТЕ
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Закажите современный и эффективный сайт под ключ
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <div className="bg-card rounded-2xl p-6 border border-border/50 mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Сайт-визитка</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    небольшой стильный сайт ограниченного всего несколькими страницами. Подходит для малого и среднего
                    бизнеса и частных лиц. Является самым простым и доступным способом представления информации в
                    интернете. Такой тип сайта предназначен для того, чтобы представить ваш бизнес во всемирной сети,
                    является одним из самых важных маркетинговых инструментов.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <strong>Наша веб-студия предлагает:</strong> один из самых выгодных условий по созданию сайтов по
                      типу визитка.
                    </p>
                    <p>
                      <strong>Стоимость работ:</strong> по созданию сайта визитки составляет от 1500 000.
                    </p>
                    <p>
                      <strong>По времени:</strong> разработка займет от 7 рабочих дней.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-6">
                  САЙТ ВИЗИТКА «ПОД КЛЮЧ» - ЭТО ОГРОМНЫЕ ВОЗМОЖНОСТИ ДЛЯ ВАШЕГО БИЗНЕСА, А ИМЕННО:
                </h3>
                <div className="space-y-4">
                  {[
                    "Современное и эффективное представление вашего бизнеса в сети Интернет;",
                    "Привлечение потенциальных клиентов из Интернета;",
                    "Возможности круглосуточного контакта с клиентами в форме обратной связи;",
                    "Рассылка новостной и коммерческой информации, информация о акциях и специальных предложениях своим клиентам;",
                    "Вас найдут тысячи и миллионы пользователей сети Интернет;",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">ПРЕИМУЩЕСТВА РАЗРАБОТКИ С НАМИ</h3>
                <div className="space-y-4 mb-8">
                  {[
                    "Многолетний опыт в разработке и создании сайтов любой сложности;",
                    "Использование только проверенных и удобных систем управления сайтом;",
                    "Современный дизайн;",
                    "Короткие сроки выполнения заказа на разработку сайта и низкие цены;",
                    "Нам доверяют крупные компании России;",
                  ].map((advantage, index) => (
                    <Card key={index} className="p-4 bg-card border-border/50">
                      <CardContent className="pt-2">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground leading-relaxed">{advantage}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 mb-8">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Сайт-визитка - это не просто небольшой сайт компании. Вы должны знать, что даже самый маленький сайт
                    может работать на ваш бизнес и приносить клиентов. Для этого достаточно обратиться к нашим
                    специалистам и они определят и настроят поисковые страницы, разместят ваш сайт в каталогах рекламных
                    поисковых систем Яндекс и Google, зарегистрируют в справочниках. Тогда ваш сайт обязательно найдут
                    клиенты и партнеры, покупатели и заказчики.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-6">
                  В КАКИХ СЛУЧАЯХ САЙТ ВИЗИТКА, ЭТО ТО, ЧТО ВАМ НУЖНО
                </h3>
                <div className="space-y-3">
                  {[
                    "Ваш бизнес не велик и делает первые шаги;",
                    "Вы хотите что бы сайт нес информационный характер;",
                    "Ваш бюджет не подразумевает больших затрат на рекламу в интернете;",
                    "Вы молодой специалист и Вам нужно портфолио;",
                    "Не стандартные, личностные решения;",
                    "Вы фрилансер.",
                  ].map((case_item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{case_item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <p className="text-muted-foreground text-center leading-relaxed">
                Как видите возможности достаточно много. Мы так же поможем разработать вам уникальное имя на стандартных
                доменах для Вашего сайта. Любое направление деятельности, бизнес не проблема. Звоните прямо сейчас и
                сайт в кратчайшие сроки новых клиентов и партнеров, покупателей и заказчиков, людей, которым интересно
                ваше направление.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                <span className="text-primary">▲</span>innosoft
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
                >
                  Telegram
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-accent text-accent hover:bg-accent/10 bg-transparent"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Услуги веб-студии</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Разработка сайтов в Ташкенте
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Создание интернет-магазинов
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Корпоративные сайты
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Landing Page под ключ
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    SEO продвижение сайтов
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Техподдержка сайтов
                  </a>
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
                  <span>+998 99 016 76 47 </span>
                </div>
                <div className="flex items-center gap-2">
                  <Send className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>info@innosoft</span>
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
                <p>&copy; 2024 innosoft. Все права защищены.</p>
                <p className="mt-1">Разработка сайтов в Ташкенте | Веб-студия полного цикла</p>
              </div>
              <div className="text-sm text-muted-foreground md:text-right">
                <p>Лицензия на разработку ПО №123456</p>
                <p className="mt-1">ИНН: 123456789 | ОКЭД: 62010</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {isServiceModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-lg p-6 w-full max-w-md border border-border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-card-foreground">Заказать: {selectedService}</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsServiceModalOpen(false)}
                className="text-muted-foreground hover:text-card-foreground"
              >
                ✕
              </Button>
            </div>

            <form onSubmit={handleServiceOrder} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1">Имя *</label>
                <input
                  type="text"
                  required
                  value={serviceFormData.name}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1">Телефон *</label>
                <input
                  type="tel"
                  required
                  value={serviceFormData.phone}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+998 99 016 76 47 "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1">Email</label>
                <input
                  type="email"
                  value={serviceFormData.email}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1">Компания</label>
                <input
                  type="text"
                  value={serviceFormData.company}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, company: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Название компании"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1">Дополнительная информация</label>
                <textarea
                  value={serviceFormData.message}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, message: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary h-20 resize-none"
                  placeholder="Опишите ваши требования к сайту..."
                />
              </div>

              <div className="flex gap-2 pt-2">
                <Button type="button" variant="outline" onClick={() => setIsServiceModalOpen(false)} className="flex-1">
                  Отмена
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
