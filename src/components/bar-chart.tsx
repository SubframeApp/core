"use client"

import classNames from "classnames"
import React from "react"
import AutoSizer from "react-virtualized-auto-sizer"
import { Bar, BarChart as RechartsBarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"
import styles from "./bar-chart.module.css"
import { ChartLegend, ChartTooltip, createColorMap, DEFAULT_COLORS } from "./chart-components"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  categories: string[]
  colors?: string[]
  dark?: boolean
  data: Array<object>
  index: string
}

export const BarChart = React.forwardRef<HTMLDivElement, Props>(function BarChart(
  { className, categories, colors = DEFAULT_COLORS, dark, data, index, ...otherProps },
  ref,
) {
  const colorMap = createColorMap({ categories, colors })
  const bars = categories.map((category, index) => {
    const color = colors[index % colors.length]
    return <Bar key={index} dataKey={category} fill={color} isAnimationActive={false} />
  })

  return (
    <div
      className={classNames(className, styles.root)}
      ref={ref}
      {...otherProps}
      style={{ ...otherProps.style, minHeight: 200, minWidth: 300 }}
    >
      <AutoSizer>
        {({ height, width }) => (
          <RechartsBarChart className={classNames({ [styles.dark]: dark })} data={data} height={height} width={width}>
            <CartesianGrid className={styles.grid} horizontal={true} vertical={false} strokeWidth={1} />
            <XAxis axisLine={false} tickLine={false} padding={{ left: 20, right: 20 }} dataKey={index} />
            <YAxis axisLine={false} tickLine={false} width={30} />
            <Tooltip
              content={({ active, payload, label }) => (
                <ChartTooltip active={active} colorMap={colorMap} dark={dark} label={label} payload={payload} />
              )}
              cursor={{ fill: "#D1D5DB", opacity: "0.15" }}
              isAnimationActive={false}
            />
            <Legend
              content={({ payload }) => <ChartLegend colorMap={colorMap} dark={dark} payload={payload} />}
              verticalAlign="bottom"
            />
            {bars}
          </RechartsBarChart>
        )}
      </AutoSizer>
    </div>
  )
})
