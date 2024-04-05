import { useCallback, useEffect, useState } from "react"

import { Heading } from "~/components/Heading"
import { Message } from "~/components/Message"
import { GameOver } from "~/scenes/Game/game-over"
import { Round } from "~/scenes/Game/round"
import { RoundEnd } from "~/scenes/Game/round-end"
import { gameOverSound, roundEnd1Sound, roundEnd2Sound, roundEnd3Sound } from "~/sounds"
import { Stratagem } from "~/stratagems"
import { asPercentage, randomStratagemsWithTotalLength } from "~/utils"

// TODO: Configurable and passed in!
const roundInitialActions = 30
const roundActionsIncrement = 5
const roundLength = 10000
const scoreInitialRound = 75
const scoreInputSuccess = 5
const scorePerfectRound = 100
const scoreRoundIncrement = 25

enum Phase {
  RoundIntro,
  RoundEnd,
  Playing,
  GameOver,
}

export type GameProps = {
  onReset: () => void
}

export function Game({ onReset }: GameProps) {
  const [perfectRound, setPerfectRound] = useState(false)
  const [roundBonus, setRoundBonus] = useState(0)
  const [timeBonus, setTimeBonus] = useState(0)
  const [perfectBonus, setPerfectBonus] = useState(0)
  const [round, setRound] = useState(1)
  const [score, setScore] = useState(0)
  const [phase, setPhase] = useState(Phase.RoundIntro)
  const [stratagems, setStratagems] = useState<Stratagem[]>([])

  const onInputSuccess = (sequenceIdx: number) => {
    setScore((score) => score + stratagems[sequenceIdx].sequence.length * scoreInputSuccess)
  }

  const onInputFailure = () => {
    setPerfectRound(false)
  }

  const onRoundSuccess = useCallback(
    (timer: number) => {
      const sounds = [roundEnd3Sound, roundEnd1Sound, roundEnd2Sound] // Looks wrong, isn't
      const sound = sounds[round % sounds.length]
      sound.play()
      const roundBonus = scoreInitialRound + scoreRoundIncrement * (round - 1)
      const timeBonus = Math.floor(asPercentage(timer, roundLength))
      const perfectBonus = perfectRound ? scorePerfectRound : 0
      setRoundBonus(roundBonus)
      setTimeBonus(timeBonus)
      setPerfectBonus(perfectBonus)
      setScore((score) => score + roundBonus + timeBonus + perfectBonus)
      setPhase(Phase.RoundEnd)
      setRound((round) => round + 1)
    },
    [perfectRound, round],
  )

  const onRoundFailure = () => {
    gameOverSound.play()
    setPhase(Phase.GameOver)
  }

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    if (phase === Phase.RoundIntro) {
      // We reset the round here
      timeoutId = setTimeout(() => {
        setPerfectRound(true)
        setStratagems(generateRoundStratagems(round))
        setPhase(Phase.Playing)
      }, 2000)
    }

    if (phase === Phase.RoundEnd) {
      timeoutId = setTimeout(() => {
        setPhase(Phase.RoundIntro)
      }, 4000)
    }

    if (phase === Phase.GameOver) {
      timeoutId = setTimeout(() => {
        onReset()
      }, 5000)
    }

    return () => clearTimeout(timeoutId)
  }, [phase, onReset, round, perfectRound])

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
          roundLength={roundLength}
          score={score}
          stratagems={stratagems}
          onInputSuccess={onInputSuccess}
          onInputFailure={onInputFailure}
          onRoundSuccess={onRoundSuccess}
          onRoundFailure={onRoundFailure}
        />
      )}

      {phase === Phase.RoundEnd && (
        <RoundEnd
          score={score}
          roundBonus={roundBonus}
          timeBonus={timeBonus}
          perfectBonus={perfectBonus}
        />
      )}

      {phase === Phase.GameOver && <GameOver score={score} />}
    </>
  )
}

const generateRoundStratagems = (round: number) => {
  // TODO: Specific rounds have specific names and stratagems included?
  return randomStratagemsWithTotalLength(roundInitialActions + roundActionsIncrement * (round - 1))
}
