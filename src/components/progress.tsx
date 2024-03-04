"use client"

import * as RadixProgress from "@radix-ui/react-progress"
import classNames from "classnames"
import React from "react"
import styles from "./progress.module.css"

const DEFAULT_PROGRESS_VALUE = 0
const ProgressContext = React.createContext(DEFAULT_PROGRESS_VALUE)

interface RootProps extends RadixProgress.ProgressProps {}

export const Root = React.forwardRef<HTMLDivElement, RootProps>(function ProgressRoot(
  { className, children, value, ...otherProps },
  ref,
) {
  return (
    <ProgressContext.Provider value={value || DEFAULT_PROGRESS_VALUE}>
      <RadixProgress.Root ref={ref} {...otherProps} value={value}>
        {children}
      </RadixProgress.Root>
    </ProgressContext.Provider>
  )
})

export const Indicator = React.forwardRef<HTMLDivElement, RadixProgress.ProgressIndicatorProps>(function Indicator(
  { className, ...otherProps },
  ref,
) {
  const progress = React.useContext(ProgressContext)
  return (
    <RadixProgress.Indicator
      className={classNames(className, styles.indicator)}
      ref={ref}
      asChild
      style={{ transform: `translateX(-${100 - progress}%)` }}
      {...otherProps}
    />
  )
})

export const Progress = { Root, Indicator }
