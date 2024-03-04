"use client"

import classNames from "classnames"
import React from "react"
import AutoSizer from "react-virtualized-auto-sizer"
import { Cell, Legend, Pie, PieChart as RechartsPieChart, Tooltip } from "recharts"
import { ChartTooltip, createColorMap, DEFAULT_COLORS } from "./chart-components"
import { ChartLegend } from "./chart-components"
import styles from "./pie-chart.module.css"

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  category: string
  colors?: string[]
  dark?: boolean
  data: Array<Record<string, string | number>>
  index: string
}

export const PieChart = React.forwardRef<HTMLDivElement, RootProps>(function PieChartRoot(
  { className, category, colors = DEFAULT_COLORS, dark, data, index, ...otherProps },
  ref,
) {
  const colorMap = createColorMap({ categories: data.map((obj) => obj[index] as string), colors })
  const cells = data.map((_, index) => {
    const color = colors[index % colors.length]
    return <Cell key={index} fill={color} />
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
          <RechartsPieChart className={classNames({ [styles.dark]: dark })} data={data} height={height} width={width}>
            <Tooltip
              content={({ active, payload, label }) => (
                <ChartTooltip active={active} colorMap={colorMap} dark={dark} label={label} payload={payload} />
              )}
              isAnimationActive={false}
            />
            <Legend
              content={({ payload }) => <ChartLegend colorMap={colorMap} dark={dark} payload={payload} />}
              verticalAlign="bottom"
            />
            <Pie
              className={styles.pie}
              data={data}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius="75%"
              isAnimationActive={false}
              outerRadius="100%"
              dataKey={category}
              nameKey={index}
            >
              {cells}
            </Pie>
          </RechartsPieChart>
        )}
      </AutoSizer>
    </div>
  )
})
