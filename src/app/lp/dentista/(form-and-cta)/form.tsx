'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import IMask from 'imask'
import { startTransition, useActionState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Input, inputVariants } from '~/components/ui'
import { cn } from '~/lib/utils'
import { Button } from '~/modules/lp/components/button'
import { actionDentista } from './action'
import { formSchema } from './form-schema'

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchema>({
    resolver: zodResolver(formSchema),
  })
  const phoneRef = useRef<HTMLInputElement>(null)
  const telefoneRegister = register('telefone')

  useEffect(() => {
    if (phoneRef.current) {
      // Aplica a máscara ao elemento referenciado
      const mask = IMask(phoneRef.current, {
        mask: '+{55} (00) 9 0000-0000',
        lazy: true,
      })

      // Retorna uma função de limpeza para destruir a máscara ao desmontar o componente
      return () => mask.destroy()
    }
  }, [])

  const [data, action, isPending] = useActionState(actionDentista, null)

  // const { isPending, execute, ...rest } = useServerAction(actionDentista)

  // useEffect(() => {
  //   console.log(isPending, rest)
  // }, [isPending, rest])

  // const submit = (data: formSchema) => execute(data)

  const submit = async (data: formSchema) => {
    const formdata = new FormData()
    for (const [key, value] of Object.entries(data)) {
      formdata.append(key, value)
    }
    startTransition(() => action(formdata))
    return
  }

  function TextError<T extends keyof formSchema>({
    error,
    field,
  }: {
    error: Partial<Record<keyof formSchema, { message?: string }>>
    field: T
  }) {
    if (!error[field]) return null

    return (
      <div className="flex w-full items-center justify-start">
        <p className="text-sm text-red-500">{error[field].message}</p>
      </div>
    )
  }

  return (
    <form
      className="flex w-full flex-col items-center justify-center gap-2"
      // action={action}
      onSubmit={handleSubmit(submit)}
    >
      <Text content="Nome:" />
      <Input
        variant="outline"
        type="text"
        placeholder="Nome:"
        {...register('nome')}
      />

      <TextError error={errors} field="nome" />
      <Text content="Telefone:" />
      <Input
        variant="outline"
        type="text"
        placeholder="+55 (99) 9 9999-9999"
        {...telefoneRegister}
        ref={(e) => {
          telefoneRegister.ref(e)
          phoneRef.current = e
        }}
      />
      <TextError error={errors} field="telefone" />

      <Text content="Email:" />
      <Input
        variant="outline"
        type="text"
        placeholder="Email:"
        {...register('email')}
      />
      <TextError error={errors} field="email" />

      <Text content="Selecione o melhor horário para entrarmos em contato." />
      <select
        defaultValue=""
        {...register('horario')}
        className={cn(
          inputVariants({ variant: 'outline' }),
          'bg-white text-black',
        )}
      >
        <option value="" disabled>
          Selecione um horário
        </option>
        {Array.from({ length: 16 }, (_, index) => {
          const hora = 9 + Math.floor(index / 2)
          const minutos = index % 2 === 0 ? '00' : '30'
          const horario = `${hora.toString().padStart(2, '0')}:${minutos}`
          return (
            <option key={horario} value={horario}>
              {horario}
            </option>
          )
        })}
      </select>
      <TextError error={errors} field="horario" />

      <div className="flex w-full items-center justify-end">
        <Button
          size="sm"
          type="submit"
          className={cn(
            'mt-1 bg-blue-800 font-normal text-white max-md:w-full',
            isPending && 'bg-blue-800/50',
          )}
        >
          {isPending ? 'Enviando...' : 'Enviar'}
        </Button>
      </div>
    </form>
  )
}

function Text({ content }: { content: string }) {
  return (
    <div className="flex w-full items-center justify-start">
      <p className="text-sm text-black">{content}</p>
    </div>
  )
}
