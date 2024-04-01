import { useCallback, useEffect, useState } from "react"

import { ArrowInput } from "~/components/ArrowInput"
import { ProgressBar } from "~/components/ProgressBar"
import { Stratagem } from "~/stratagems"
import { asPercentage } from "~/utils"
import { twMerge } from "tailwind-merge"

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

  const icons = stratagems.slice(sequenceIdx, sequenceIdx + 5).map((stratagem, i) => {
    const Icon = stratagem.icon
    return (
      <Icon
        key={i}
        className={twMerge("w-[100px] h-[100px] p-3", i === 0 && "border-yellow-300 border-[2px]")}
      />
    )
  })

  return (
    <div className="flex">
      <div className="w-[100px] font-bold">
        <p>Round</p>
        <p className="text-yellow-300 text-3xl">{round}</p>
      </div>

      <div className="flex flex-col items-center w-[500px]">
        <div className="flex mb-1 w-full">{icons}</div>

        <div className="mb-4 h-6 w-full bg-yellow-300 font-bold leading-6 text-black text-center text-xl uppercase">
          {stratagems[sequenceIdx].name}
        </div>

        <ArrowInput
          sequence={stratagems[sequenceIdx].sequence}
          onSuccess={onInputSuccessCb}
          onFailure={onInputFailure}
        />

        <ProgressBar className="mt-4" progress={asPercentage(end - now, roundLength)} />
      </div>

      <div className="w-[100px] font-bold text-right">
        <p>&nbsp;</p>
        <p className="text-yellow-300 text-3xl">{score}</p>
        <p>Score</p>
      </div>
    </div>
  )
}
