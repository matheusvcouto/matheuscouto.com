import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'
import { tw } from '~/lib/tw'

export const inputVariants = tv({
  base: tw`border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
  variants: {
    variant: {
      default: tw`bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90`,
      outline: tw`border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-100`,
      secondary: tw`bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80`,
      ghost: tw`hover:bg-zinc-100 hover:text-zinc-900`,
      link: tw`text-zinc-900 underline-offset-4 hover:underline`,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface InputProps
  extends React.ComponentProps<'input'>,
    VariantProps<typeof inputVariants> {}

export const Input: React.FC<InputProps> = ({
  className,
  type,
  ref,
  variant,
  ...props
}) => (
  <input
    type={type}
    className={twMerge(inputVariants({ className, variant }))}
    ref={ref}
    {...props}
  />
)
