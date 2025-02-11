'use client'
import React from 'react'

export interface PropsCTASection {
  /** Título da seção de CTA */
  title: string
  /** Descrição da seção de CTA */
  description: string
  /** Componente que será renderizado dentro do formulário */
  formComponent: React.ReactNode
  /** (Opcional) Função de submit do formulário */
  onFormSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

const CTASection: React.FC<PropsCTASection> = ({
  title,
  description,
  formComponent,
}) => {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-4xl font-bold">{title}</h2>
          <p className="mb-12 text-xl">{description}</p>
          {/* <form
            className="rounded-xl bg-white p-8 text-left"
            onSubmit={onFormSubmit}
          > */}
          {formComponent}
          {/* </form> */}
        </div>
      </div>
    </section>
  )
}

export default CTASection
