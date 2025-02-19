'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { cn } from '~/lib/utils'

const CountdownWhatsApp = ({
  whatsAppNumber,
  name,
}: {
  whatsAppNumber: string
  name?: string
}) => {
  const [count, setCount] = useState(7)
  const [isRedirecting, setIsRedirecting] = useState(false)

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else {
      setIsRedirecting(true)
      setTimeout(() => {
        window.location.href = `https://wa.me/${whatsAppNumber}`
      }, 2500)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="flex flex-col items-center justify-center text-center"
      >
        <AnimatePresence mode="wait">
          {!isRedirecting ? (
            <motion.div
              key="countdown"
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 180, scale: 0 }}
              className="relative flex h-48 w-48 items-center justify-center"
            >
              <svg className="absolute inset-0 h-full w-full">
                {/* <motion.circle
                  animate={{
                    strokeDasharray: 528,
                    strokeDashoffset: 528 * (1 - count / 10),
                    transform: 'rotate(-90 96 96)',
                  }}
                  cx="96"
                  cy="96"
                  r="84"
                  fill="none"
                  stroke="white"
                  strokeWidth="8"
                  // strokeDasharray="528"
                  // strokeDashoffset={528 * (1 - count / 10)}
                  // transform="rotate(-90 96 96)"
                  className="transition-all duration-1000 ease-linear"
                /> */}
              </svg>

              <motion.span
                key={count}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-6xl font-bold text-white"
              >
                {count}
              </motion.span>
            </motion.div>
          ) : (
            <motion.div
              key="redirect"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-4 text-white"
            >
              <FaWhatsapp className="animate-pulse text-8xl" />
              <h1 className="text-3xl font-bold">
                Redirecionando para o WhatsApp...
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {count !== 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              // exit={{ opacity: 0, scale: 0.1 }}
              className={cn(
                'mt-8 text-xl text-white/90 transition-all',
                count < 2 && 'translate-y-10 opacity-0 duration-500',
              )}
            >
              {name ? (
                <>
                  {name}, em {count} segundos você será redirecionado
                </>
              ) : (
                <>Você será redirecionado em {count} segundos</>
              )}
              <span>
                <br />
                para o WhatsApp
              </span>
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default CountdownWhatsApp
