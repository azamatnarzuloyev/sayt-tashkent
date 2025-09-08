import { type NextRequest, NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = "7785729507:AAFoohIH3fKhat80-amStmoLvYO9KNd27Z4"
const TELEGRAM_CHAT_ID = "@innosoft_2"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { type, name, phone, email, service, message, company } = body

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json({ error: "Имя и телефон обязательны для заполнения" }, { status: 400 })
    }

    let telegramMessage = ""

    if (type === "service") {
      // Service order format
      telegramMessage = `
🎯 ЗАКАЗ УСЛУГИ С САЙТА sayt-tashkent.uz

🔥 Услуга: ${service}
👤 Имя: ${name}
📞 Телефон: ${phone}
📧 Email: ${email || "Не указан"}
🏢 Компания: ${company || "Не указана"}
📝 Дополнительная информация: ${message || "Не указано"}

⏰ Время заказа: ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" })}
      `.trim()
    } else {
      // Regular order format
      telegramMessage = `
🔥 НОВЫЙ ЗАКАЗ С САЙТА sayt-tashkent.uz

👤 Имя: ${name}
📞 Телефон: ${phone}
📧 Email: ${email || "Не указан"}
🌐 Тип сайта: ${service || "Не выбран"}
📝 Описание проекта: ${message || "Не указано"}

⏰ Время заказа: ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" })}
      `.trim()
    }

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    })

    if (!telegramResponse.ok) {
      console.error("Telegram API error:", await telegramResponse.text())
      return NextResponse.json({ error: "Ошибка отправки сообщения" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.",
    })
  } catch (error) {
    console.error("Error sending order:", error)
    return NextResponse.json({ error: "Произошла ошибка при отправке заказа" }, { status: 500 })
  }
}
