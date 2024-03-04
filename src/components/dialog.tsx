"use client"

import * as RadixDialog from "@radix-ui/react-dialog"
import classNames from "classnames"
import React, { useCallback } from "react"
import styles from "./dialog.module.css"

interface RootProps extends RadixDialog.DialogProps, RadixDialog.DialogOverlayProps {}

export const Root = React.forwardRef<HTMLDivElement, RootProps>(function Dialog(
  { className, defaultOpen, open, onOpenChange, modal, ...otherProps },
  ref,
) {
  return (
    <RadixDialog.Root defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange} modal={modal}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay ref={ref} asChild className={classNames(className, styles.root)} {...otherProps} />
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
})

interface ContentProps extends RadixDialog.DialogContentProps {
  // technique taken from https://headlessui.com/react/dialog#managing-initial-focus
  initialFocusRef?: React.MutableRefObject<HTMLElement | null>
}

export const Content = React.forwardRef<HTMLDivElement, ContentProps>(function Content(
  { onOpenAutoFocus, initialFocusRef, ...otherProps },
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

  return <RadixDialog.Content ref={ref} asChild onOpenAutoFocus={onOpenAutoFocusCallback} {...otherProps} />
})

export const Dialog = { Root, Content }
