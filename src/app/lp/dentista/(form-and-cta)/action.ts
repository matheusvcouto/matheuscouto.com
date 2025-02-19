'use server'

import { redirect } from 'next/navigation'
import { env } from '~/env/server'
import { mail, renderToHtml } from '~/lib/mail'
import { tw } from '~/lib/tw'
import { formSchema } from './form-schema'

import { headers } from 'next/headers'
import { formatPhoneNumberForURL } from '~/lib/format-number-for-url'
import DynamicFormResponseEmail from '~/lib/mail/templates/form-response.mail'

// -----------------------------
// Rate limiting (exemplo simples)
// -----------------------------
/**
 * _Store_ em memória para rate limit.
 * Obs.: Não use este método em produção para aplicações escaláveis.
 */
const rateLimitStore = new Map()

const RATE_LIMIT_WINDOW = 60 * 1000 // Janela de 1 minuto
const RATE_LIMIT_MAX_REQUESTS = 5 // Máximo de 5 requisições por IP nesse período

async function checkRateLimit(ip: string) {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  if (entry) {
    const { count, firstRequestTime } = entry
    if (now - firstRequestTime < RATE_LIMIT_WINDOW) {
      if (count >= RATE_LIMIT_MAX_REQUESTS) {
        throw new Error(
          'Muitas requisições. Por favor, tente novamente mais tarde.',
        )
      }
      rateLimitStore.set(ip, { count: count + 1, firstRequestTime })
    } else {
      // Reinicia a contagem se a janela expirou
      rateLimitStore.set(ip, { count: 1, firstRequestTime: now })
    }
  } else {
    rateLimitStore.set(ip, { count: 1, firstRequestTime: now })
  }
}

export const actionDentista = async (_: unknown, formData: FormData) => {
  const reqHeaders = await headers()
  const ip =
    reqHeaders.get('x-forwarded-for') || reqHeaders.get('host') || 'unknown'

  try {
    await checkRateLimit(ip)
  } catch (error: any) {
    return { error: error.message }
  }

  const { data, error } = formSchema.safeParse(
    Object.fromEntries(formData.entries()),
  )

  if (error) {
    return { error: error.flatten().fieldErrors }
  }

  await mail.send({
    html: await renderToHtml(DynamicFormResponseEmail, {
      fields: data,
      buttons: [
        {
          href: `https://wa.me/${formatPhoneNumberForURL(data.telefone)}`,
          text: 'Enviar mensagem para o cliente.',
          classname: tw`bg-green-500`,
        },
      ],
    }),
    subject: `Novo cliente - ${data.nome}`,
    to: env.SEND_TO_EMAIL,
  })
  return redirect(`/whatsapp?name=${data.nome}`)
}

// export const submitform = createServerAction()
//   .input(formSchema)
//   .handler(async ({ input }) => {
//     console.log(input)
//     return redirect(`https://google.com/?q=${input.telefone}`)
//   })
