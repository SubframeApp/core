"use client"

import * as RadixDialog from "@radix-ui/react-dialog"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import classNames from "classnames"
import React, { useCallback } from "react"
import styles from "./dialog.module.css"

interface RootProps extends RadixDialog.DialogProps, RadixDialog.DialogOverlayProps {}

export const Root = React.forwardRef<HTMLDivElement, RootProps>(function Dialog(
  { className, defaultOpen, open, onOpenChange, modal, title = "", ...otherProps },
  ref,
) {
  return (
    <RadixDialog.Root defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange} modal={modal}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay ref={ref} asChild className={classNames(className, styles.root)} {...otherProps} />
      </RadixDialog.Portal>
      {/* Silence Dialog.Title warning: https://github.com/radix-ui/primitives/blob/dae8ef4920b45f736e2574abf23676efab103645/packages/react/dialog/src/Dialog.tsx#L506 */}
      <VisuallyHidden.Root asChild>
        <RadixDialog.Title>{title}</RadixDialog.Title>
      </VisuallyHidden.Root>
    </RadixDialog.Root>
  )
})

interface ContentProps extends RadixDialog.DialogContentProps {
  // technique taken from https://headlessui.com/react/dialog#managing-initial-focus
  initialFocusRef?: React.MutableRefObject<HTMLElement | null>
}

export const Content = React.forwardRef<HTMLDivElement, ContentProps>(function Content(
  // Silence Dialog.Description warning:
  // https://github.com/radix-ui/primitives/blob/dae8ef4920b45f736e2574abf23676efab103645/packages/react/dialog/src/Dialog.tsx#L532
  { "aria-describedby": ariaDescribedBy = undefined, onOpenAutoFocus, initialFocusRef, ...otherProps },
  ref,
) {
  const onOpenAutoFocusCallback = useCallback(
    (e: Event) => {
      if (initialFocusRef) {
        e.preventDefault()
        initialFocusRef.current?.focus()
      }
      onOpenAutoFocus?.(e)
    },
    [initialFocusRef, onOpenAutoFocus],
  )

  return (
    <RadixDialog.Content
      aria-describedby={ariaDescribedBy}
      ref={ref}
      asChild
      onOpenAutoFocus={onOpenAutoFocusCallback}
      {...otherProps}
    />
  )
})

export const Dialog = { Root, Content }
