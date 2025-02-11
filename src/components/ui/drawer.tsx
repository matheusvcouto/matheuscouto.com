'use client'

import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'
import { cn } from '~/lib/utils'

// Componente raiz do Drawer
const DrawerRoot: React.FC<
  React.ComponentProps<typeof DrawerPrimitive.Root>
> = ({ shouldScaleBackground = true, ...props }) => {
  return (
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    />
  )
}
DrawerRoot.displayName = 'Drawer'

// Trigger do Drawer
const DrawerTrigger: React.FC<
  React.ComponentProps<typeof DrawerPrimitive.Trigger>
> = (props) => {
  return <DrawerPrimitive.Trigger {...props} />
}

// Portal do Drawer
const DrawerPortal: React.FC<
  React.ComponentProps<typeof DrawerPrimitive.Portal>
> = (props) => {
  return <DrawerPrimitive.Portal {...props} />
}

// Botão de fechar o Drawer
const DrawerClose: React.FC<
  React.ComponentProps<typeof DrawerPrimitive.Close>
> = (props) => {
  return <DrawerPrimitive.Close {...props} />
}

// Overlay do Drawer
const DrawerOverlay: React.FC<
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
> = ({ className, ...props }) => {
  return (
    <DrawerPrimitive.Overlay
      className={cn('fixed inset-0 z-50 bg-black/80', className)}
      {...props}
    />
  )
}
DrawerOverlay.displayName = 'DrawerOverlay'

// Conteúdo do Drawer
const DrawerContent: React.FC<
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
> = ({ className, children, ...props }) => {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        className={cn(
          'bg-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border',
          className,
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 h-2 w-[100px] rounded-full" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}
DrawerContent.displayName = 'DrawerContent'

// Cabeçalho do Drawer
const DrawerHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)}
      {...props}
    />
  )
}
DrawerHeader.displayName = 'DrawerHeader'

// Rodapé do Drawer
const DrawerFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}
DrawerFooter.displayName = 'DrawerFooter'

// Título do Drawer
const DrawerTitle: React.FC<
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
> = ({ className, ...props }) => {
  return (
    <DrawerPrimitive.Title
      className={cn(
        'text-lg font-semibold leading-none tracking-tight',
        className,
      )}
      {...props}
    />
  )
}
DrawerTitle.displayName = 'DrawerTitle'

// Descrição do Drawer
const DrawerDescription: React.FC<
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
> = ({ className, ...props }) => {
  return (
    <DrawerPrimitive.Description
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}
DrawerDescription.displayName = 'DrawerDescription'

// Compondo o objeto Drawer com as propriedades desejadas:
// const Drawer = Object.assign(DrawerRoot, {
//   Trigger: DrawerTrigger,
//   Portal: DrawerPortal,
//   Close: DrawerClose,
//   Overlay: DrawerOverlay,
//   Content: DrawerContent,
//   Header: DrawerHeader,
//   Footer: DrawerFooter,
//   Title: DrawerTitle,
//   Description: DrawerDescription,
// })

export const Drawer = {
  Root: DrawerRoot,
  Trigger: DrawerTrigger,
  Portal: DrawerPortal,
  Close: DrawerClose,
  Overlay: DrawerOverlay,
  Content: DrawerContent,
  Header: DrawerHeader,
  Footer: DrawerFooter,
  Title: DrawerTitle,
  Description: DrawerDescription,
}
