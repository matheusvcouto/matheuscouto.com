import { env } from '~/env/server'
import { formatPhoneNumberForURL } from '~/lib/format-number-for-url'
import CountdownWhatsApp from './(countdown-whatsapp)'

interface PageProps {
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  searchParams: Promise<{ name?: string }>
}

export default async function HomePage({ searchParams }: PageProps) {
  const queryParam = await searchParams
  return (
    <CountdownWhatsApp
      whatsAppNumber={formatPhoneNumberForURL(env.WHATSAPP_NUMBER)}
      name={queryParam.name}
    />
  )
}
