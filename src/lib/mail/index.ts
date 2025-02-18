import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { env } from '~/env/server'
export * from './render'
// https://medium.com/@abilsavio/email-contact-form-using-nextjs-app-router-60c29fe70644

const transport = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  port: 465,
  auth: {
    user: env.GMAIL_USER,
    pass: env.GMAIL_PASS,
  },
})

type RequiredFilds = Required<Pick<Mail.Options, 'to' | 'subject' | 'html'>>
interface SendOptions extends RequiredFilds, Pick<Mail.Options, 'cc' | 'from'> {
  extra?: Omit<Mail.Options, 'to' | 'subject' | 'html' | 'cc' | 'from'>
}

const mailjs = () => ({
  withTransport: (
    transport: nodemailer.Transporter<
      SMTPTransport.SentMessageInfo,
      SMTPTransport.Options
    >,
  ) => ({
    send: (options: SendOptions) =>
      transport.sendMail({ ...options, from: options.from ?? env.GMAIL_USER }),
  }),
})

export const mail = mailjs().withTransport(transport)
