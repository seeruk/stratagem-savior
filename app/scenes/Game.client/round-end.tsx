import { PropsWithChildren } from "react"

export type RoundEndProps = {
  score: number
  roundBonus: number
  timeBonus: number
  perfectBonus: number
}

const Row = ({ children }: PropsWithChildren) => {
  return <div className="flex items-center justify-between w-full mb-1">{children}</div>
}

const Label = ({ children }: PropsWithChildren) => {
  return <div className="text-lg font-bold">{children}</div>
}

const Value = ({ children }: PropsWithChildren) => {
  return <div className="text-3xl text-yellow-300 font-bold">{children}</div>
}

export function RoundEnd({ score, roundBonus, timeBonus, perfectBonus }: RoundEndProps) {
  return (
    <div className="flex flex-col items-center w-[500px]">
      <Row>
        <Label>Round Bonus</Label>
        <Value>{roundBonus}</Value>
      </Row>
      <Row>
        <Label>Time Bonus</Label>
        <Value>{timeBonus}</Value>
      </Row>
      <Row>
        <Label>Perfect Bonus</Label>
        <Value>{perfectBonus}</Value>
      </Row>
      <Row>
        <Label>Total Score</Label>
        <Value>{score}</Value>
      </Row>
    </div>
  )
}
