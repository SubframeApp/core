"use client"

import classNames from "classnames"
import React from "react"
import styles from "./text.module.css"

export type TextVariant =
  | "label"
  | "label-bold"
  | "body"
  | "body-bold"
  | "subheader"
  | "section-header"
  | "header"
  | "monospace-body"

// NOTE IMPORTANT: keep this in sync with DEFAULT_GLOBAL_FONT_TOKENS in default-data.ts
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "label" | "label-bold" | "body" | "body-bold" | "subheader" | "section-header" | "header" | "monospace-body"
  ellipsis?: boolean
  color?: "default" | "subtext"
}

export function Text(props: Props) {
  const { className, variant = "body", ellipsis, color = "default", ...otherProps } = props
  return (
    <span
      className={classNames(className, {
        [styles.label]: variant === "label",
        [styles.labelBold]: variant === "label-bold",
        [styles.body]: variant === "body",
        [styles.bodyBold]: variant === "body-bold",
        [styles.subheader]: variant === "subheader",
        [styles.sectionHeader]: variant === "section-header",
        [styles.monospaceBody]: variant === "monospace-body",
        [styles.header]: variant === "header",
        [styles.ellipsis]: ellipsis,
        [styles.colorSubtext]: color === "subtext",
      })}
      {...otherProps}
    />
  )
}
