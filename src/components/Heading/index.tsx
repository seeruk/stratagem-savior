import React from "react"
import { twMerge } from "tailwind-merge"

export type HeadingProps = {
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  size?: "xs" | "sm" | "md" | "lg"
}

export function Heading({
  className,
  level,
  size,
  children,
}: React.PropsWithChildren<HeadingProps>) {
  const Tag = `h${level || 2}` as keyof React.JSX.IntrinsicElements

  return (
    <Tag className={twMerge("font-bold text-white uppercase", headingStyle(size), className)}>
      {children}
    </Tag>
  )
}

const headingStyle = (size: HeadingProps["size"]) => {
  switch (size) {
    case "xs":
      return "text-xl mb-4"
    case "sm":
      return "text-2xl mb-5"
    default:
    case "md":
      return "text-3xl mb-6"
    case "lg":
      return "text-4xl mb-8"
  }
}
