import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    GMAIL_USER: z.string().email(),
    GMAIL_PASS: z.string(),
    WHATSAPP_NUMBER: z.string(),
    SEND_TO_EMAIL: z.string(),
  },
  runtimeEnv: {
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_PASS: process.env.GMAIL_PASS,
    SEND_TO_EMAIL: process.env.SEND_TO_EMAIL,
    WHATSAPP_NUMBER: process.env.WHATSAPP_NUMBER,
  },
})
