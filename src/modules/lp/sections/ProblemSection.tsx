// src/components/ProblemSection.tsx
import { CheckIcon, XIcon } from 'lucide-react'
import React from 'react'
import { cn } from '~/lib/utils'

export interface ProblemBlock {
  title: string
  description: string
  items: string[]
  icon?: 'check' | 'x'
}

export interface CostBlock {
  value: string
  description: string
}

export interface ProblemSectionData {
  title: string
  description: string
  problemBlocks: ProblemBlock[]
  costBlocks: CostBlock[]
}

interface Props {
  data: ProblemSectionData
  className?: {
    section?: string
    title?: string
    description?: string
  }
}

const ProblemSection: React.FC<Props> = ({ data, className }) => {
  return (
    <section className={cn('bg-white text-black', className?.section)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className={cn('mb-6 text-3xl font-bold', className?.title)}>
            {data.title}
          </h2>
          <p className={cn('text-base text-gray-600', className?.description)}>
            {data.description}
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <div className="space-y-12">
            {data.problemBlocks.map((block, index) => (
              <div key={index}>
                <h3 className="mb-4 text-2xl font-bold text-blue-900">
                  {block.title}
                </h3>

                <p className="mb-6 text-gray-600">{block.description}</p>

                <ul className="space-y-4">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {block.icon && block.icon === 'check' && (
                        <>
                          <CheckIcon className="rounded-full bg-green-100 stroke-green-800 p-1" />
                        </>
                      )}
                      {(!block.icon || block.icon === 'x') && (
                        <>
                          <XIcon className="rounded-full bg-red-100 stroke-red-800 p-1" />
                        </>
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <div className="rounded-xl border-2 bg-gray-100 p-8 transition-all hover:border-blue-800 hover:shadow-xl">
              <h3 className="mb-6 text-2xl font-bold text-blue-900">
                O Custo da Inação
              </h3>

              <div className="space-y-8">
                {data.costBlocks.map((block, index) => (
                  <div key={index}>
                    <div className="mb-2 text-4xl font-bold text-red-500">
                      {block.value}
                    </div>
                    <p className="text-gray-600">{block.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection

// move to modules/lp/dentis/data
