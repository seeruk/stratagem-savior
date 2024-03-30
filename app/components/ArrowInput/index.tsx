import { useCallback, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

import { Direction } from "~/types"
import { arraysEqual, keyToDirection, sleep } from "~/utils"

const directionSymbols: { [key in Direction]: string } = {
  up: "⬆",
  down: "⬇",
  left: "⬅",
  right: "⮕",
}

export type ArrowInputProps = {
  sequence: Direction[]
  onSuccess?: () => void
}

export function ArrowInput({ sequence, onSuccess }: ArrowInputProps) {
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
          return [...prev, direction]
        }
        setFailed(true)
        return [...prev]
      })
    },
    [sequence, shouldWait, setFailed, setGameState],
  )

  // Reset state on sequence change
  useEffect(() => {
    resetState()
  }, [resetState, sequence])

  // Reset game state on failure, informing player of ineptitude
  useEffect(() => {
    if (!failed) {
      return
    }
    setShouldWait(true)
    sleep(500).then(() => {
      resetState()
    })
  }, [failed, resetState, setShouldWait])

  // Register keydown event listener
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, false)
    return () => document.removeEventListener("keydown", onKeyDown, false)
  }, [onKeyDown])

  // Check if player has successfully completed the sequence
  useEffect(() => {
    if (sequence.length > 0 && arraysEqual(gameState, sequence)) {
      setShouldWait(true)
      sleep(150).then(() => onSuccess && onSuccess())
    }
  }, [gameState, sequence, onSuccess, setShouldWait])

  return (
    <div>
      <div className={twMerge("relative text-6xl text-gray-400", failed && "animate-shake")}>
        {sequence.map((direction) => directionSymbols[direction])}
        <div className={twMerge("absolute top-0 left-0 text-white", failed && "text-red-600")}>
          {gameState.map((direction) => directionSymbols[direction])}
        </div>
      </div>
    </div>
  )
}