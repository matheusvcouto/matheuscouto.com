// import Link from 'next/link'
import { Link } from 'next-view-transitions'
import type { CSSProperties } from 'react'
import React from 'react'
import { Button } from '~/components/ui/button'
import { tw } from '~/lib/tw'
import { cn } from '~/lib/utils'

interface ButtonProps {
  to?: string
  text: string
  icon?: {
    position: 'left' | 'right'
    size?: 'md' | 'lg'
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    css?: CSSProperties
    clasName?: string
  }
  className?: string
}

type IconSize = Exclude<NonNullable<ButtonProps['icon']>['size'], undefined>

const SimpleButton: React.FC<ButtonProps> = ({
  to,
  text,
  icon,
  className,
  ...props
}) => {
  const iconSizeMap: Record<IconSize, string> = {
    md: tw`size-4`,
    lg: tw`size-5`,
  }

  return (
    <Button
      asChild
      size="lg"
      variant="link"
      className={cn(
        className,
        'group text-zinc-400 transition-all duration-700 hover:text-white hover:no-underline',
      )}
      {...props}
    >
      <Link href={to ?? '/'}>
        {icon && icon.position === 'left' && (
          <icon.Icon
            className={cn(
              'mr-2',
              iconSizeMap[icon.size ?? 'md'],
              icon.clasName,
            )}
            style={icon.css}
          />
        )}
        <span className="relative">
          {text}
          <div
            className={cn(
              'absolute h-0.5 w-0 rounded-full bg-white transition-all delay-0 duration-700 group-hover:w-full',
            )}
          />
        </span>
        {icon && icon.position === 'right' && (
          <icon.Icon
            className={cn(
              'ml-2',
              iconSizeMap[icon.size ?? 'md'],
              icon.clasName,
            )}
            style={icon.css}
          />
        )}
      </Link>
    </Button>
  )
}

export { SimpleButton }
