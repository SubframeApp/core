"use client"

import * as RadixDialog from "@radix-ui/react-dialog"
import classNames from "classnames"
import React from "react"
import styles from "./drawer.module.css"

interface RootProps extends RadixDialog.DialogProps, RadixDialog.DialogOverlayProps {}

export const Root = React.forwardRef<HTMLDivElement, RootProps>(function Drawer(
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

export const Content = React.forwardRef<HTMLDivElement, RadixDialog.DialogContentProps>(function Content(
  { ...otherProps },
  ref,
) {
  return <RadixDialog.Content ref={ref} asChild {...otherProps} />
})

export const Drawer = { Root, Content }
