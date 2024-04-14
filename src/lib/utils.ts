import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Direction, Maybe } from "~/types.ts"
import { randomStratagem, Stratagem, stratagems } from "~/stratagems.ts"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const arraysEqual = <T>(a: T[], b: T[]) =>
  a.length === b.length && a.every((element, index) => element === b[index])

export const asPercentage = (value: number, total: number) => (value / total) * 100

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

export const randomIntBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const randomInTriangularDistribution = (min: number, max: number, peak: number) => {
  const init = Math.random()

  if (init < (peak - min) / (max - min)) {
    return min + Math.sqrt(init * (max - min) * (peak - min))
  }

  return max - Math.sqrt((1 - init) * (max - min) * (max - peak))
}

export const randomNumbersToSumTarget = (target: number, min: number, max: number): number[] => {
  const numbers: number[] = []
  let currentSum: number = 0

  while (currentSum < target) {
    const num: number = Math.floor(
      randomInTriangularDistribution(min, max + 0.99999, (max - min) / 3 + min),
    )

    if (currentSum + num > target) {
      // If we're go over the target, try again.
      continue
    }

    const remaining = target - (currentSum + num)

    if (remaining !== 0 && remaining < min) {
      // It wouldn't be possible to hit the target in this scenario, we'd go over on the next loop,
      // so don't use this number. e.g. target = 70, currentSum = 61, min = 3, max = 9, and we just
      // got 7; that would put us at 68, and no number could get us to 70.
      continue
    }

    numbers.push(num)
    currentSum += num
  }

  return shuffleArray(numbers)
}

export const randomSequence = (length: number): Direction[] => {
  const directions: Direction[] = ["up", "down", "left", "right"]
  return Array.from({ length }, () => directions[Math.floor(Math.random() * directions.length)])
}

export const randomStratagemWithLength = (length: number): Stratagem => {
  const selected = stratagems.filter((stratagem) => stratagem.sequence.length === length)
  if (!selected) {
    throw new Error(`No stratagem found with length ${length}`)
  }

  return selected[randomIntBetween(0, selected.length - 1)]
}

export const randomRandomStratagemsWithTotalLength = (length: number): Stratagem[] => {
  const [min, max] = stratagems.reduce(
    (agg, stratagem) => {
      const [currentMin, currentMax] = agg
      const length = stratagem.sequence.length

      return [currentMin < length ? currentMin : length, currentMax > length ? currentMax : length]
    },
    [Number.MAX_SAFE_INTEGER, 0],
  )

  const lengths = randomNumbersToSumTarget(length, min, max) // Bounded by min and max stratagem lengths

  return lengths.map((length) => {
    return {
      ...randomStratagem,
      name: `R-${length} Random`,
      sequence: randomSequence(length),
    }
  })
}

export const randomStratagemsWithTotalLength = (length: number): Stratagem[] => {
  const [min, max] = stratagems.reduce(
    (agg, stratagem) => {
      const [currentMin, currentMax] = agg
      const length = stratagem.sequence.length

      return [currentMin < length ? currentMin : length, currentMax > length ? currentMax : length]
    },
    [Number.MAX_SAFE_INTEGER, 0],
  )

  const lengths = randomNumbersToSumTarget(length, min, max) // Bounded by min and max stratagem lengths

  return lengths.map(randomStratagemWithLength)
}

export const shuffleArray = <T>(arr: T[]) => {
  const newArr = arr.slice()
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1))
    ;[newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
  }
  return newArr
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
