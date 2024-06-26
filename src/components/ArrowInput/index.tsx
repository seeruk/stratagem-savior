import { useCallback, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

import { arraysEqual, keyToDirection, sleep } from "~/lib/utils"
import { Direction } from "~/types"

import { keyFailSound, keyPressSound, sequenceSuccessSound } from "~/sounds"

export type ArrowInputProps = {
  blind?: boolean
  sequence: Direction[]
  onSuccess?: () => void
  onFailure?: () => void
}

export function ArrowInput({ blind, sequence, onSuccess, onFailure }: ArrowInputProps) {
  const [gameState, setGameState] = useState([] as Direction[])
  const [shouldWait, setShouldWait] = useState(false)
  const [failed, setFailed] = useState(false)

  const resetState = useCallback(() => {
    setFailed(false)
    setGameState([])
    setShouldWait(false)
  }, [setFailed, setGameState, setShouldWait])

  const onKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      if (shouldWait) {
        return
      }

      const direction = keyToDirection(evt.key)
      if (!direction) {
        return
      }

      setGameState((prev) => {
        const expected = sequence[prev.length]
        if (direction === expected) {
          keyPressSound.play()
          return [...prev, direction]
        }
        keyFailSound.play()
        setFailed(true)
        return [...prev]
      })
    },
    [shouldWait, sequence],
  )

  // Reset game state on failure, informing player of ineptitude
  useEffect(() => {
    if (!failed) {
      return
    }
    onFailure && onFailure()
    setShouldWait(true)
    sleep(200).then(() => {
      resetState()
    })
  }, [failed, resetState, onFailure, setShouldWait])

  // Register keydown event listener
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, false)
    return () => document.removeEventListener("keydown", onKeyDown, false)
  }, [onKeyDown])

  // Check if player has successfully completed the sequence
  useEffect(() => {
    if (sequence.length > 0 && arraysEqual(gameState, sequence)) {
      setShouldWait(true)
      sleep(80).then(() => {
        resetState()
        sequenceSuccessSound.play()
        onSuccess && onSuccess()
      })
    }
  }, [gameState, sequence, onSuccess, resetState, setShouldWait])

  return (
    <div>
      <div className={twMerge("relative text-6xl text-neutral-500", failed && "animate-shake")}>
        {sequence.map((direction, i) => (
          <span
            key={i}
            className={twMerge(`inline-block icon-arrow-${direction}`, blind && "opacity-0")}
          />
        ))}
        <div className={twMerge("absolute top-0 left-0 text-yellow-300", failed && "text-red-500")}>
          {gameState.map((direction, i) => (
            <span key={i} className={`inline-block icon-arrow-${direction}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
