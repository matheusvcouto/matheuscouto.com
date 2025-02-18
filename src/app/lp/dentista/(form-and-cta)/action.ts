'use server'

import { redirect } from 'next/navigation'
import { env } from '~/env/server'
import { mail, renderToHtml } from '~/lib/mail'
import { tw } from '~/lib/tw'
import { formSchema } from './form-schema'

import { formatPhoneNumberForURL } from '~/lib/format-number-for-url'
import DynamicFormResponseEmail from '~/lib/mail/templates/form-response.mail'

export const actionDentista = async (_: unknown, formData: FormData) => {
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
  return redirect(`/whatsapp`)
}

// export const submitform = createServerAction()
//   .input(formSchema)
//   .handler(async ({ input }) => {
//     console.log(input)
//     return redirect(`https://google.com/?q=${input.telefone}`)
//   })
