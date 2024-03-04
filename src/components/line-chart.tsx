"use client"

import classNames from "classnames"
import React from "react"
import AutoSizer from "react-virtualized-auto-sizer"
import {
  CartesianGrid,
  Dot,
  DotProps,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { ChartLegend, ChartTooltip, createColorMap, DEFAULT_COLORS } from "./chart-components"
import styles from "./line-chart.module.css"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  categories: string[]
  colors?: string[]
  dark?: boolean
  data: Array<object>
  index: string
}

export const LineChart = React.forwardRef<HTMLDivElement, Props>(function LineChart(
  { className, categories, colors = DEFAULT_COLORS, dark, data, index, ...otherProps },
  ref,
) {
  const colorMap = createColorMap({ categories, colors })
  const lines = categories.map((category, index) => {
    const color = colors[index % colors.length]
    return (
      <Line
        key={index}
        type="monotone"
        activeDot={(props: DotProps) => <Dot className={styles.dot} r={5} style={{ fill: color }} {...props} />}
        dot={false}
        dataKey={category}
        fill={color}
        isAnimationActive={false}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    )
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
          <RechartsLineChart className={classNames({ [styles.dark]: dark })} data={data} height={height} width={width}>
            <CartesianGrid className={styles.grid} horizontal={true} vertical={false} strokeWidth={1} />
            <XAxis axisLine={false} tickLine={false} padding={{ left: 20, right: 20 }} dataKey={index} />
            <YAxis axisLine={false} tickLine={false} width={30} />
            <Tooltip
              content={({ active, payload, label }) => (
                <ChartTooltip active={active} colorMap={colorMap} dark={dark} label={label} payload={payload} />
              )}
              cursor={{ stroke: "#D1D5DB", strokeWidth: 1 }}
              isAnimationActive={false}
            />
            <Legend
              content={({ payload }) => <ChartLegend colorMap={colorMap} dark={dark} payload={payload} />}
              verticalAlign="bottom"
            />
            {lines}
          </RechartsLineChart>
        )}
      </AutoSizer>
    </div>
  )
})
