"use client"

import type React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Send, Loader2 } from 'lucide-react'

interface ContactFormProps {
  serviceName?: string
  title?: string
  subtitle?: string
}

export default function ContactForm({
  serviceName,
  title = 'Заказать разработку сайта',
  subtitle = 'Мы свяжемся с вами в течение 30 минут и предложим оптимальное решение',
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: serviceName || '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage(result.message)
        setFormData({ name: '', phone: '', email: '', service: serviceName || '', message: '' })
      } else {
        setSubmitMessage(result.error || 'Произошла ошибка при отправке')
      }
    } catch {
      setSubmitMessage('Произошла ошибка при отправке заказа')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" id="order-form">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {serviceName ? `ЗАКАЗАТЬ: ${serviceName.toUpperCase()}` : 'ГОТОВЫ ЗАКАЗАТЬ РАЗРАБОТКУ САЙТА?'}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Получите бесплатную консультацию и коммерческое предложение для вашего бизнеса.
          </p>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">{title}</CardTitle>
              <CardDescription>{subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="text-card-foreground">Имя *</Label>
                    <Input
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ваше имя"
                      className="bg-input border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone" className="text-card-foreground">Телефон *</Label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+998 XX XXX XX XX"
                      className="bg-input border-border"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-card-foreground">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="bg-input border-border"
                  />
                </div>
                {!serviceName && (
                  <div className="space-y-2">
                    <Label htmlFor="contact-service" className="text-card-foreground">Тип сайта</Label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-input border border-border rounded-md text-foreground"
                    >
                      <option value="">Выберите тип сайта</option>
                      <option value="Интернет-магазин">Интернет-магазин</option>
                      <option value="Корпоративный сайт">Корпоративный сайт</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="SEO продвижение">SEO продвижение</option>
                      <option value="Техподдержка">Техподдержка</option>
                      <option value="Другое">Другое</option>
                    </select>
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="text-card-foreground">Описание проекта</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Расскажите подробнее о вашем проекте..."
                    className="bg-input border-border min-h-[100px]"
                  />
                </div>

                {submitMessage && (
                  <div className={`p-4 rounded-md text-center ${
                    submitMessage.includes('успешно')
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}>
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
  )
}
