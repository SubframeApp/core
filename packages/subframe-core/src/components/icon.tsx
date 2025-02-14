"use client"

import classNames from "classnames"
import React from "react"
import * as Icons from "../assets/icons/final"
import styles from "./icon.module.css"

// If empty, then renders as an empty icon, but takes up the same amount of space
// If null, then does not render anything.
export type IconName = keyof typeof Icons | "empty" | null

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName
}

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(function Icon(props, ref) {
  const { className, name, ...otherProps } = props

  if (name === null) {
    return null
  }

  let children
  if (name === "empty") {
    children = <svg width="1em" height="1em"></svg>
  } else {
    const Component = Icons[name]
    // TODO warn?
    if (!Component) {
      console.warn(`Icon rendered with invalid name: ${name}`)
      return null
    }
    children = <Component />
  }

  return (
    <span className={classNames(className, styles.root)} ref={ref} {...otherProps}>
      {children}
    </span>
  )
})
