"use client"

import classNames from "classnames"
import React from "react"
import styles from "./chart-components.module.css"

/* Default palette is Blue */
export const DEFAULT_COLORS = ["3b82f6", "bfdbfe", "2563eb", "93c5fd", "1d4ed8", "60a5fa"]

export function createColorMap({ categories, colors }: { categories: string[]; colors: string[] }) {
  const colorMap = new Map<string, string>()
  for (let i = 0; i < categories.length; i++) {
    colorMap.set(categories[i], colors[i % colors.length])
  }
  return colorMap
}

interface Payload {
  name?: string | number
  value: string | number
}

interface LegendProps {
  colorMap: Map<string, string>
  dark?: boolean
  payload?: any
}

export function ChartLegend({ colorMap, dark, payload }: LegendProps) {
  return (
    <div className={classNames(styles.legend, { [styles.dark]: dark })}>
      {payload.map(({ value }: Payload, index: number) => (
        <div className={styles.row} key={index}>
          <span className={styles.dot} style={{ backgroundColor: colorMap.get(String(value)) }} />
          <span className={styles.name}>{value}</span>
        </div>
      ))}
    </div>
  )
}

interface TooltipProps {
  active?: boolean
  colorMap: Map<string, string>
  dark?: boolean
  payload?: any
  label: string
}

export function ChartTooltip({ active, colorMap, dark, payload, label }: TooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className={classNames(styles.tooltip, { [styles.dark]: dark })}>
        {label ? <div>{label}</div> : null}
        {payload.map(({ name, value }: Payload, index: number) => (
          <div className={styles.row} key={index}>
            <span className={styles.dot} style={{ backgroundColor: colorMap.get(String(name)) }} />
            <span className={styles.name}>{name ?? ""}</span>
            <span className={styles.value}>{value}</span>
          </div>
        ))}
      </div>
    )
  }

  return null
}
