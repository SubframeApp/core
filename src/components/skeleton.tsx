"use client"

import classNames from "classnames"
import React from "react"
import styles from "./skeleton.module.css"

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const Skeleton = React.forwardRef<HTMLDivElement, Props>(function Skeleton(props: Props, ref) {
  const { className, ...otherProps } = props
  return <div ref={ref} className={classNames(className, styles.root)} {...otherProps} />
})
