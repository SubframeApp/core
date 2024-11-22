"use client";

import classNames from "classnames";
import React, { ReactNode, useEffect, useState } from "react";
import styles from "./icon.module.css";
import { icons } from "../assets/icons/final";
import { loadIcon } from "../lib/load-icon";

// If empty, then renders as an empty icon, but takes up the same amount of space
// If null, then does not render anything.
export type IconName = keyof typeof icons | "empty" | null;

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName;
}

const IconFallback = () => <svg width="1em" height="1em"></svg>;

export const Icon = React.forwardRef<HTMLSpanElement, Props>(function Icon(
  props,
  ref
) {
  const [icon, setIcon] = useState<ReactNode | null>(<IconFallback />);
  const { className, name, ...otherProps } = props;

  async function getChildren(name: IconName) {
    if (name === "empty") {
      return <IconFallback />;
    } else if (name === null) {
      return null;
    } else {
      const Component = await loadIcon(name);
      if (!Component) {
        console.warn(`Icon rendered with invalid name: ${String(name)}`);
        return null;
      }
      return <Component />;
    }
  }

  useEffect(() => {
    if (name) {
      getChildren(name).then((children) => setIcon(children));
    }
  }, [name]);

  return name === null ? null : (
    <span
      className={classNames(className, styles.root)}
      ref={ref}
      {...otherProps}
    >
      {icon}
    </span>
  );
});
