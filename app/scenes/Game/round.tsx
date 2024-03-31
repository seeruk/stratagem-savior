import { useCallback, useEffect, useState } from "react"

import { ArrowInput } from "~/components/ArrowInput"
import { Direction } from "~/types"
import { ProgressBar } from "~/components/ProgressBar"
import { asPercentage } from "~/utils"

export type RoundProps = {
  round: number
  roundLength: number
  score: number
  sequences: Direction[][]
  onInputSuccess: () => void
  onInputFailure: () => void
  onRoundSuccess: () => void
  onRoundFailure: () => void
}

export function Round({
  round,
  roundLength,
  score,
  sequences,
  onInputSuccess,
  onInputFailure,
  onRoundSuccess,
  onRoundFailure,
}: RoundProps) {
  const [sequenceIdx, setSequenceIdx] = useState(0)
  const [timer, setTimer] = useState(roundLength)

  const onInputSuccessCb = useCallback(() => {
    if (sequenceIdx === sequences.length - 1) {
      onRoundSuccess()
      return
    }
    setSequenceIdx((idx) => idx + 1)
    setTimer((prev) => Math.min(roundLength, prev + 1000)) // Timer increase based on round length?
    onInputSuccess()
  }, [onInputSuccess, onRoundSuccess, roundLength, sequenceIdx, sequences.length])

  useEffect(() => {
    const end = Date.now() + timer

    const intervalId = setInterval(() => {
      const now = Date.now()
      if (now >= end) {
        clearInterval(intervalId)
        onRoundFailure()
        setTimer(0)
        return
      }
      setTimer(end - now)
    }, 1000 / 60) // 60 "FPS"?

    return () => clearInterval(intervalId)
  }, [roundLength, onRoundFailure, timer])

  return (
    <div className="flex flex-col items-center max-w-[600px] w-full">
      <ArrowInput
        sequence={sequences[sequenceIdx]}
        onSuccess={onInputSuccessCb}
        onFailure={onInputFailure}
      />

      <div className="mt-4">
        Round: {round}, Score: {score}
      </div>

      <ProgressBar className="mt-4" progress={asPercentage(timer, roundLength)} />
    </div>
  )
}
