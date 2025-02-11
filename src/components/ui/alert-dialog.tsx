'use client'

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { buttonVariants } from '~/components/ui/button'
import { cn } from '~/lib/utils'

// Root e Trigger podem ser reutilizados diretamente
const DialogRoot: React.FC<
  React.ComponentProps<typeof AlertDialogPrimitive.Root>
> = ({ children, ...props }) => (
  <AlertDialogPrimitive.Root {...props}>{children}</AlertDialogPrimitive.Root>
)

const DialogTrigger: React.FC<
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Trigger>
> = ({ children, ...props }) => (
  <AlertDialogPrimitive.Trigger {...props}>
    {children}
  </AlertDialogPrimitive.Trigger>
)

const DialogPortal = AlertDialogPrimitive.Portal

const DialogOverlay: React.FC<
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
> = ({ className, ...props }) => {
  return (
    <AlertDialogPrimitive.Overlay
      {...props}
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50',
        className,
      )}
    />
  )
}

const DialogContent: React.FC<
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
> = ({ className, ...props }) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <AlertDialogPrimitive.Content
        {...props}
        className={twMerge(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg',
          className,
        )}
      />
    </DialogPortal>
  )
}

const DialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={twMerge(
      'flex flex-col space-y-2 text-center sm:text-left',
      className,
    )}
    {...props}
  />
)

const DialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={twMerge(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
)

const DialogTitle: React.FC<
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
> = ({ className, ...props }) => {
  return (
    <AlertDialogPrimitive.Title
      {...props}
      className={twMerge('text-lg font-semibold', className)}
    />
  )
}

const DialogDescription: React.FC<
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
> = ({ className, ...props }) => {
  return (
    <AlertDialogPrimitive.Description
      {...props}
      className={twMerge('text-muted-foreground text-sm', className)}
    />
  )
}

const DialogAction: React.FC<
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
> = ({ className, ...props }) => {
  return (
    <AlertDialogPrimitive.Action
      {...props}
      className={twMerge(buttonVariants(), className)}
    />
  )
}

const DialogCancel: React.FC<
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
> = ({ className, ...props }) => {
  return (
    <AlertDialogPrimitive.Cancel
      {...props}
      className={twMerge(
        buttonVariants({ variant: 'destructive' }),
        'mt-2 sm:mt-0',
        className,
      )}
    />
  )
}

export const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
  Action: DialogAction,
  Cancel: DialogCancel,
}
