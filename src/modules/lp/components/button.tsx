'use client'

import React from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'
import { tw } from '~/lib/tw'

const buttonVariants = tv({
  base: tw`transform cursor-pointer rounded-lg text-lg font-bold transition-all`,
  variants: {
    variant: {
      default: tw`bg-white text-blue-900 hover:bg-opacity-85`,
      secondary: tw`bg-blue-900 text-white`,
    },
    size: {
      sm: tw`px-5 py-2 text-base`,
      md: tw`px-8 py-4`,
      lg: tw`px-12 py-5`,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ref,
  ...props
}) => {
  return (
    <button
      ref={ref}
      {...props}
      className={twMerge(buttonVariants({ variant, size, className }))}
    />
  )
}

export { Button }
