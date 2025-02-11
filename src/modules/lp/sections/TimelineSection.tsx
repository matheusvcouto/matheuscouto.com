import React from 'react'
import { cn } from '~/lib/utils'

interface Props {}

export interface TimelineData {
  title: string
  steps: {
    icon: string
    title: string
    description: string
    details: string[]
    bonus?: string
  }[]
}

interface Props {
  data: TimelineData
  classNameIn?: { section?: string; title?: string }
}

export const TimelineSection: React.FC<Props> = ({
  data: { steps, title },
  classNameIn,
}) => {
  return (
    <>
      <section
        className={cn(
          'overflow-hidden bg-zinc-50 py-20 text-black',
          classNameIn?.section,
        )}
      >
        <div className="container mx-auto px-4">
          <h2
            className={cn(
              'mb-16 text-center text-4xl font-bold',
              classNameIn?.title,
            )}
          >
            {title}
          </h2>

          <div className="relative mx-auto max-w-5xl">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative mb-16 flex h-full cursor-default gap-8"
              >
                {/* Timeline Line */}
                <div
                  className={cn(
                    'absolute inset-y-0 left-8 h-[115%] w-0.5 bg-blue-200 max-sm:hidden',
                    i === steps.length - 1 ? 'h-0 opacity-0' : '',
                  )}
                ></div>

                {/* Timeline Circle */}
                {/* <div className=""> */}
                <div className="relative flex h-16 w-16 transform items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-xl font-bold text-white shadow-lg transition-all hover:scale-110 max-sm:absolute max-sm:-left-6 max-sm:-top-6 max-sm:z-50 max-sm:scale-[.70]">
                  {i + 1}
                </div>
                {/* </div> */}

                {/* Content */}
                <div className="flex-1 transform rounded-2xl border-2 border-zinc-200 bg-white p-8 shadow-lg transition-all delay-300 duration-500 hover:border-blue-200 max-sm:p-6 max-sm:hover:border-blue-800 sm:hover:-translate-x-4">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="text-4xl max-sm:text-3xl">
                      {step.icon}
                    </span>
                    <h3 className="text-2xl font-bold text-blue-900 max-sm:text-xl">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mb-6 text-lg text-gray-600 max-sm:text-base">
                    {step.description}
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    {step.details.map((detail, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-lg bg-blue-50 p-4"
                      >
                        <span className="mt-1 text-green-500">✓</span>
                        <p className="text-gray-700 max-sm:text-sm">{detail}</p>
                      </div>
                    ))}
                  </div>

                  {step.bonus && (
                    <div className="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                      <div className="mb-2 flex items-center gap-2 font-semibold text-yellow-700 max-sm:text-sm">
                        <span>🎁</span>
                        <span>Bônus Exclusivo:</span>
                      </div>
                      <p className="text-yellow-800 max-sm:text-xs">
                        {step.bonus}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
