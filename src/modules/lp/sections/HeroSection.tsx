import React from 'react'
import { cn } from '~/lib/utils'
import { Button } from '../components/button'

export interface HeroSectionProps {
  top: {
    alertText: string
    /** Título principal da seção */
    title: string
    /** Subtítulo (parte do título com destaque) */
    subtitle: string
  }
  /** Texto do alerta exibido no início */
  /** Parágrafos explicativos exibidos abaixo do título */
  paragraphs: string[]
  /** Texto do botão */
  button: {
    text: string
  }
  /** Função a ser executada quando o botão for clicado */
  /** Texto de aviso sobre a disponibilidade de vagas. EX: Apenas 3 vagas disponíveis esta semana */
  availableText: string
}

interface Props {
  data: HeroSectionProps
  customButton?: React.ReactNode
  classNameIn?: {
    section?: string
    title?: string
    titleSpan?: string
    paragraphs?: string
  }
}

const HeroSection: React.FC<Props> = ({ data, customButton, classNameIn }) => {
  return (
    <section
      className={cn(
        'relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 px-4 text-white',
        classNameIn?.section,
      )}
    >
      {/* <div className="pattern-dots absolute inset-0 opacity-10"></div> */}

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <span className="mb-6 inline-block rounded-full bg-blue-800 px-4 py-2 text-sm font-semibold">
            {data.top.alertText}
          </span>

          <h1
            className={cn(
              'mb-8 text-3xl font-bold leading-tight md:text-5xl',
              classNameIn?.title,
            )}
          >
            {data.top.title} <br />
            <span className={cn('text-blue-300', classNameIn?.titleSpan)}>
              {data.top.subtitle}
            </span>
          </h1>

          <div
            className={cn(
              'mb-8 flex flex-col gap-2 text-base text-blue-100 text-opacity-85 md:w-3/4',
              classNameIn?.paragraphs,
            )}
          >
            {data.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {customButton ? (
            <>{customButton}</>
          ) : (
            <>
              <Button variant="default" size="md">
                {data.button.text}
              </Button>
            </>
          )}

          <div className="mt-6 flex items-center gap-2 text-sm text-blue-200">
            <div className="size-4 animate-pulse rounded-full bg-red-500"></div>
            <p className="text-sm">{data.availableText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
