import { ComponentType } from "react";
import { icons } from "../assets/icons/final";

// A runtime cache for already loaded icons
const iconCache = new Map<keyof typeof icons, ComponentType>();

export async function loadIcon(iconName: keyof typeof icons) {
  if (iconCache.has(iconName)) {
    // if the icon is already loaded, return it
    return iconCache.get(iconName);
  } else {
    // otherwise, load the icon and cache it
    const { default: Icon } = await icons[iconName]();
    iconCache.set(iconName, Icon);
    return Icon;
  }
}
