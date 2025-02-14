"use client"

import classNames from "classnames"
import React from "react"
import styles from "./loader.module.css"

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(function Loader(props, ref) {
  const { className, ...otherProps } = props
  return <div ref={ref} className={classNames(className, styles.root)} {...otherProps} />
})
