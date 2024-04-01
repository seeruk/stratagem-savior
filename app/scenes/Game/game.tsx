import { randomIntBetween } from "~/utils"
import { Round } from "~/scenes/Game/round"
import { useEffect, useState } from "react"
import { Heading } from "~/components/Heading"
import { Message } from "~/components/Message"
import { GameOver } from "~/scenes/Game/gameover"
import { stratagems } from "~/stratagems"

enum Phase {
  RoundIntro,
  Playing,
  GameOver,
}

export type GameProps = {
  onReset: () => void
}

export function Game({ onReset }: GameProps) {
  const [round, setRound] = useState(1)
  const [score, setScore] = useState(0)
  const [phase, setPhase] = useState(Phase.RoundIntro)

  const onInputSuccess = () => {
    setScore((score) => score + 1)
  }

  const onRoundSuccess = () => {
    setPhase(Phase.RoundIntro)
    setRound((round) => round + 1)
  }

  const onRoundFailure = () => {
    setPhase(Phase.GameOver)
  }

  useEffect(() => {
    if (phase === Phase.RoundIntro) {
      setTimeout(() => {
        setPhase(Phase.Playing)
      }, 2000)
    }

    if (phase === Phase.GameOver) {
      setTimeout(() => {
        onReset()
      }, 5000)
    }
  }, [phase, onReset])

  return (
    <>
      {phase === Phase.RoundIntro && (
        <div className="flex flex-col items-center">
          <Heading>Get Ready</Heading>
          <div className="font-bold">Round</div>
          <Message className="text-3xl font-bold">{round}</Message>
        </div>
      )}

      {phase === Phase.Playing && (
        <Round
          round={round}
          roundLength={10000}
          score={score}
          stratagems={generateRoundStratagems(round)}
          onInputSuccess={onInputSuccess}
          onInputFailure={() => {}}
          onRoundSuccess={onRoundSuccess}
          onRoundFailure={onRoundFailure}
        />
      )}

      {phase === Phase.GameOver && <GameOver score={score} />}
    </>
  )
}

const generateRoundStratagems = (round: number) => {
  return Array.from(
    { length: 5 + round },
    () => stratagems[randomIntBetween(0, stratagems.length - 1)],
  )
}
