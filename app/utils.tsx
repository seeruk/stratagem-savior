import { Direction, Maybe } from "~/types"
import React, { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

export const arraysEqual = <T,>(a: T[], b: T[]) =>
  a.length === b.length && a.every((element, index) => element === b[index])

export const keyToDirection = (key: string): Maybe<Direction> => {
  switch (key) {
    case "ArrowUp":
    case "w":
      return "up"
    case "ArrowDown":
    case "s":
      return "down"
    case "ArrowLeft":
    case "a":
      return "left"
    case "ArrowRight":
    case "d":
      return "right"
    default:
      return null
  }
}

export const min = (a: number, b: number) => (a < b ? a : b)

export const randomIntBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const randomSequence = (length: number): Direction[] => {
  const directions: Direction[] = ["up", "down", "left", "right"]
  return Array.from({ length }, () => directions[Math.floor(Math.random() * directions.length)])
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const styled = (Element: keyof React.JSX.IntrinsicElements, className: string) => {
  const result = ({ children, ...props }: PropsWithChildren<Element>) => (
    // @ts-expect-error: Can't figure out yet how to get the exact prop type.
    <Element {...props} className={twMerge(className, props.className)}>
      {children}
    </Element>
  )

  result.displayName = `Styled(${Element})`

  return result
}
