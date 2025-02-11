'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

// ====================
// SelectTrigger
// ====================
interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <SelectPrimitive.Trigger
      className={twMerge(
        'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-zinc-600 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-600 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

// ====================
// SelectScrollUpButton
// ====================
interface SelectScrollUpButtonProps
  extends React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.ScrollUpButton
  > {}

export const SelectScrollUpButton: React.FC<SelectScrollUpButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <SelectPrimitive.ScrollUpButton
      className={twMerge(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronUp className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

// ====================
// SelectScrollDownButton
// ====================
interface SelectScrollDownButtonProps
  extends React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.ScrollDownButton
  > {}

export const SelectScrollDownButton: React.FC<SelectScrollDownButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <SelectPrimitive.ScrollDownButton
      className={twMerge(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronDown className="h-4 w-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

// ====================
// SelectContent
// ====================
interface SelectContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
  position?: 'popper' | 'item-aligned'
}

export const SelectContent: React.FC<SelectContentProps> = ({
  className,
  children,
  position = 'popper',
  ...props
}) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={twMerge(
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-zinc-800 text-zinc-50 shadow-md',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={twMerge(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

// ====================
// SelectLabel
// ====================
interface SelectLabelProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {}

export const SelectLabel: React.FC<SelectLabelProps> = ({
  className,
  ...props
}) => {
  return (
    <SelectPrimitive.Label
      className={twMerge('px-2 py-1.5 text-sm font-semibold', className)}
      {...props}
    />
  )
}

// ====================
// SelectItem
// ====================
interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {}

export const SelectItem: React.FC<SelectItemProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <SelectPrimitive.Item
      className={twMerge(
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-zinc-700 focus:text-zinc-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

// ====================
// SelectSeparator
// ====================
interface SelectSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {}

export const SelectSeparator: React.FC<SelectSeparatorProps> = ({
  className,
  ...props
}) => {
  return (
    <SelectPrimitive.Separator
      className={twMerge('-mx-1 my-1 h-px bg-zinc-600', className)}
      {...props}
    />
  )
}

// ====================
// Exportação do Select
// ====================
export const Select = {
  Root: SelectPrimitive.Root,
  Group: SelectPrimitive.Group,
  Value: SelectPrimitive.Value,
  Content: SelectContent,
  Item: SelectItem,
  Label: SelectLabel,
  ScrollDownButton: SelectScrollDownButton,
  ScrollUpButton: SelectScrollUpButton,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
}
