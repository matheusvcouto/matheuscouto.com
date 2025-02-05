import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimationProps {
  children: ReactNode
}
export const Fadein = {
  Up: ({ children }: AnimationProps) => (
    <motion.div
      className="flex-shrink-0"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'anticipate', delay: 1 }}
    >
      {children}
    </motion.div>
  ),
  Down: ({ children }: AnimationProps) => (
    <motion.div
      className="flex-shrink-0"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'anticipate', delay: 1 }}
    >
      {children}
    </motion.div>
  ),
}
