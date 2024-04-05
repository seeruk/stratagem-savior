import { PropsWithChildren, useEffect, useState } from "react"

import { sleep } from "~/utils"
import { twMerge } from "tailwind-merge"

export type RoundEndProps = {
  score: number
  roundBonus: number
  timeBonus: number
  perfectBonus: number
}

const Row = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={twMerge("flex items-center justify-between w-full mb-1", className)}>
      {children}
    </div>
  )
}

const Label = ({ children }: PropsWithChildren) => {
  return <div className="text-lg font-bold">{children}</div>
}

const Value = ({ children }: PropsWithChildren) => {
  return <div className="text-3xl text-yellow-300 font-bold">{children}</div>
}

export function RoundEnd({ score, roundBonus, timeBonus, perfectBonus }: RoundEndProps) {
  const [row, setRow] = useState(0)

  useEffect(() => {
    sleep(350).then(() => setRow(1))
    sleep(950).then(() => setRow(2))
    sleep(1450).then(() => setRow(3))
  }, [setRow])

  return (
    <div className="flex flex-col items-center w-[500px]">
      <Row>
        <Label>Round Bonus</Label>
        <Value>{roundBonus}</Value>
      </Row>
      <Row className={twMerge(row < 1 && "opacity-0")}>
        <Label>Time Bonus</Label>
        <Value>{timeBonus}</Value>
      </Row>
      <Row className={twMerge(row < 2 && "opacity-0")}>
        <Label>Perfect Bonus</Label>
        <Value>{perfectBonus}</Value>
      </Row>
      <Row className={twMerge(row < 3 && "opacity-0")}>
        <Label>Total Score</Label>
        <Value>{score}</Value>
      </Row>
    </div>
  )
}
