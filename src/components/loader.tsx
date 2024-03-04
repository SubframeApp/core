"use client"

import classNames from "classnames"
import React from "react"
import styles from "./loader.module.css"

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const Loader = React.forwardRef<HTMLDivElement, Props>(function Loader(props: Props, ref) {
  const { className, ...otherProps } = props
  return <div ref={ref} className={classNames(className, styles.root)} {...otherProps} />
})
