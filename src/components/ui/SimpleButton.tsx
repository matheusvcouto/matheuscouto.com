
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  to?: string
  text: string
  icon?: {
    position: 'left' | 'right'
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  } 
}

const SimpleButton: React.FC<ButtonProps> = ({ to, text, icon, className, ...props }) => {
  return (
    <Button
      asChild
      size="lg"
      variant="link"
      className={
        cn(className, "dark:text-zinc-400 text-zinc-400 transition-all duration-700 hover:text-white hover:no-underline group")
      }
      {...props}
    >
      <Link
        href={to ?? '/'}
      >
        {icon && icon.position === 'left' && <icon.Icon className='mr-2 size-4' />}
        <span className="relative">
          {text}
          <div className={cn('absolute w-0 h-0.5 bg-white transition-all delay-0 duration-700 group-hover:w-full rounded-full')} />
        </span>
        {icon && icon.position === 'right' && <icon.Icon className='ml-2 size-4' />}
      </Link>
    </Button>
  )
};

export { SimpleButton };