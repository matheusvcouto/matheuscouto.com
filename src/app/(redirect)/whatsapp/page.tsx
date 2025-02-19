import { env } from '~/env/server'
import { formatPhoneNumberForURL } from '~/lib/format-number-for-url'
import CountdownWhatsApp from './(countdown-whatsapp)'

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function HomePage({ searchParams }: PageProps) {
  return (
    <CountdownWhatsApp
      whatsAppNumber={formatPhoneNumberForURL(env.WHATSAPP_NUMBER)}
      name={
        typeof searchParams.name === 'string' ? searchParams.name : undefined
      }
    />
  )
}
