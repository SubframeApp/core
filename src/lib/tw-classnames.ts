import classNames from "classnames"
import { createTailwindMerge, getDefaultConfig } from "tailwind-merge"

// HACK: keep this in sync with the default fonts
export const SUBFRAME_FONT_MIXINS = [
  // old font mixins
  "text-label",
  "text-label-bold",
  "text-body",
  "text-body-bold",
  "text-subheader",
  "text-section-header",
  "text-header",
  "text-monospace-body",

  // new font mixins
  "text-caption",
  "text-caption-bold",
  "text-heading-3",
  "text-heading-2",
  "text-heading-1",
]

const customTWMerge = createTailwindMerge(() => {
  const defaultConfig = getDefaultConfig()

  return {
    ...defaultConfig,
    classGroups: {
      ...defaultConfig.classGroups,
      // "subframe-colors": [{ text: [isTextColor] }],
      "subframe-font-mixins": SUBFRAME_FONT_MIXINS,
      // "font-size": [{ text: [isFontStyle] }, ...defaultConfig.classGroups["font-size"]],
      // leading: [{ text: [isFontStyle] }, ...defaultConfig.classGroups.leading],
      // "font-weight": [{ text: [isFontStyle] }, ...defaultConfig.classGroups["font-weight"]],
    },
    conflictingClassGroups: {
      // font colors
      // "text-color": ["subframe-colors"],

      // font mixins
      "subframe-font-mixins": ["font-size", "leading", "font-weight"],
      "font-size": ["subframe-font-mixins"],
      leading: ["subframe-font-mixins"],
      "font-weight": ["subframe-font-mixins"],
    },
  }
})

export function twClassNames(...args: Parameters<typeof classNames>): string {
  return customTWMerge(classNames(...args))
}

/**
 * Very janky "unit tests"
 */

// //  color related
// console.log(
//   "Testing that font colors are overridden",
//   twClassNames("text-gray-300", "text-brand-300") === "text-brand-300",
// )
// console.log(
//   "Testing that font colors are overridden",
//   twClassNames("text-brand-300", "text-gray-300") === "text-gray-300",
// )
// console.log(
//   "Testing that hard-coded font colors are overridden",
//   twClassNames("text-gray-300", "text-neutral-border") === "text-neutral-border",
// )
// console.log(
//   "Testing that hard-coded font colors are overridden",
//   twClassNames("text-neutral-border", "text-gray-300") === "text-gray-300",
// )
// console.log(
//   "Testing that background colors are overridden",
//   twClassNames("bg-gray-300", "bg-brand-300") === "bg-brand-300",
// )
// console.log(
//   "Testing that background colors are overridden",
//   twClassNames("bg-brand-300", "bg-gray-300") === "bg-gray-300",
// )

// // spacing
// console.log("Testing that custom spacing is overridden", twClassNames("pt-4", "pt-192") === "pt-192")

// // font mixins
// console.log(
//   "Testing that font sizes are overridden",
//   twClassNames("text-label", "text-[24px] font-[500] leading-[38px]") === "text-[24px] font-[500] leading-[38px]",
// )
// console.log(
//   "Testing that font sizes are overridden",
//   twClassNames("text-[24px] font-medium leading-[38px]", "text-label") === "text-label",
// )
// console.log(
//   "Testing that font sizes are overridden",
//   twClassNames("text-[24px] font-[500] leading-[38px]", "text-[14px] font-[400] leading-[16px]") ===
//     "text-[14px] font-[400] leading-[16px]",
// )

// // interactions between font mixins and colors
// console.log(
//   "Testing that text-label does not override any colors and vice-versa",
//   twClassNames("text-label", "text-brand-300") === "text-label text-brand-300",
// )
// console.log(
//   "Testing that text-label does not override any colors and vice-versa",
//   twClassNames("text-brand-300", "text-label") === "text-brand-300 text-label",
// )
