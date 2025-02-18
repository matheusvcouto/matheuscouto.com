import { z } from 'zod'

export const formSchema = z.object({
  nome: z
    .string()
    .nonempty('Este campo é obrigatorio!')
    .min(3, 'No minimo 3 caracteres')
    .max(250, 'Maximo de 250 caracteres'),
  telefone: z
    .string()
    .nonempty('O número de telefone é obrigatório!')
    .and(
      z
        .string()
        .refine((val) => val.split('').length === 20, 'telefone inválido'),
    ),
  horario: z
    .string()
    .nonempty('O número de telefone é obrigatório!')
    .endsWith('0'),
  email: z.string().email(),
})

export type formSchema = z.infer<typeof formSchema>
