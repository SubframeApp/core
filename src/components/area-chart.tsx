"use client"

import classNames from "classnames"
import React from "react"
import AutoSizer from "react-virtualized-auto-sizer"
import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  Dot,
  DotProps,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import styles from "./area-chart.module.css"
import { ChartTooltip, createColorMap, DEFAULT_COLORS } from "./chart-components"
import { ChartLegend } from "./chart-components"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  categories: string[]
  colors?: string[]
  dark?: boolean
  data: Array<object>
  index: string
}

export const AreaChart = React.forwardRef<HTMLDivElement, Props>(function AreaChart(
  { className, categories, colors = DEFAULT_COLORS, dark, data, index, ...otherProps },
  ref,
) {
  const colorMap = createColorMap({ categories, colors })
  const areas = categories.map((category, index) => {
    const color = colors[index % colors.length]
    return (
      <Area
        key={index}
        type="monotone"
        activeDot={(props: DotProps) => {
          const { cx, cy, stroke, strokeLinecap, strokeLinejoin, strokeWidth } = props
          return (
            <Dot
              className={styles.dot}
              cx={cx}
              cy={cy}
              r={5}
              fill={color}
              stroke={stroke}
              strokeLinecap={strokeLinecap}
              strokeLinejoin={strokeLinejoin}
              strokeWidth={strokeWidth}
            />
          )
        }}
        dataKey={category}
        fill={`url(#${color})`}
        isAnimationActive={false}
        stackId="a"
        stroke={color}
        strokeLinejoin={"round"}
        strokeLinecap={"round"}
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
          <RechartsAreaChart className={classNames({ [styles.dark]: dark })} data={data} height={height} width={width}>
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
            {categories.map((category) => {
              return (
                <defs key={category}>
                  <linearGradient
                    style={{ color: colorMap.get(category) }}
                    id={colorMap.get(category)}
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="currentColor" stopOpacity={0.7} />
                    <stop offset="98%" stopColor="currentColor" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
              )
            })}
            {areas}
          </RechartsAreaChart>
        )}
      </AutoSizer>
    </div>
  )
})
