"use client"

import React from "react"
import { DayPicker, DayPickerProps } from "react-day-picker"
import { Icon } from "./icon"

export const Calendar = React.forwardRef<HTMLDivElement, DayPickerProps>(function CalendarRoot(
  { classNames, className, showOutsideDays = true, ...otherProps },
  ref,
) {
  return (
    <div className={className} ref={ref}>
      <DayPicker
        components={{
          Chevron: (props) => {
            if (props.orientation === "left") {
              return <Icon name="FeatherChevronLeft" {...props} />
            }
            return <Icon name="FeatherChevronRight" {...props} />
          },
        }}
        showOutsideDays={showOutsideDays}
        classNames={classNames}
        {...otherProps}
      />
    </div>
  )
})
