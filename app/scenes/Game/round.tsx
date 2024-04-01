import { useCallback, useEffect, useState } from "react"

import { ArrowInput } from "~/components/ArrowInput"
import { ProgressBar } from "~/components/ProgressBar"
import { Stratagem } from "~/stratagems"
import { asPercentage } from "~/utils"
import { seq } from "yaml/dist/schema/common/seq"

export type RoundProps = {
  round: number
  roundLength: number
  score: number
  stratagems: Stratagem[]
  onInputSuccess: () => void
  onInputFailure: () => void
  onRoundSuccess: () => void
  onRoundFailure: () => void
}

export function Round({
  round,
  roundLength,
  score,
  stratagems,
  onInputSuccess,
  onInputFailure,
  onRoundSuccess,
  onRoundFailure,
}: RoundProps) {
  const [now, setNow] = useState(Date.now())
  const [end, setEnd] = useState(Date.now() + roundLength)
  const [sequenceIdx, setSequenceIdx] = useState(0)

  // This callback needs to remain quite stable, otherwise on each change
  // it'll get called multiple times by the ArrowInput component.
  const onInputSuccessCb = useCallback(() => {
    if (sequenceIdx === stratagems.length - 1) {
      onRoundSuccess()
      return
    }
    setSequenceIdx((idx) => idx + 1)
    setEnd((prev) => prev + 1000)
    onInputSuccess()
  }, [onInputSuccess, onRoundSuccess, sequenceIdx, stratagems.length])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = Date.now()
      setNow(now)
      if (now >= end) {
        clearInterval(intervalId)
        onRoundFailure()
        return
      }
    }, 1000 / 60) // 60 "FPS"?

    return () => clearInterval(intervalId)
  }, [end, roundLength, onRoundFailure])

  return (
    <div className="flex flex-col items-center max-w-[600px] w-full">
      <div className="mb-4 font-bold text-xl">{stratagems[sequenceIdx].name}</div>

      <ArrowInput
        sequence={stratagems[sequenceIdx].sequence}
        onSuccess={onInputSuccessCb}
        onFailure={onInputFailure}
      />

      <div className="mt-4">
        Round: {round}, Score: {score}
      </div>

      <ProgressBar className="mt-4" progress={asPercentage(end - now, roundLength)} />
    </div>
  )
}
