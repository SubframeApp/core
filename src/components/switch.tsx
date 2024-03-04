"use client"

import * as RadixSwitch from "@radix-ui/react-switch"
import classNames from "classnames"
import React from "react"
import styles from "./switch.module.css"

export const Root = React.forwardRef<HTMLButtonElement, RadixSwitch.SwitchProps>(function Switch(
  { className, ...otherProps },
  ref,
) {
  return <RadixSwitch.Root ref={ref} className={classNames(className, styles.root)} {...otherProps} />
})

export const Thumb = React.forwardRef<HTMLButtonElement, RadixSwitch.SwitchThumbProps>(function Thumb(
  { className, ...otherProps },
  ref,
) {
  return <RadixSwitch.Thumb ref={ref} className={classNames(className, styles.thumb)} {...otherProps} />
})

export const Switch = { Root, Thumb }
