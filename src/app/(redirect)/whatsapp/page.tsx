import { env } from '~/env/server'
import { formatPhoneNumberForURL } from '~/lib/format-number-for-url'
import CountdownWhatsApp from './(countdown-whatsapp)'

export default function HomePage() {
  return (
    <CountdownWhatsApp
      whatsAppNumber={formatPhoneNumberForURL(env.WHATSAPP_NUMBER)}
      name="Matheus"
    />
  )
}
