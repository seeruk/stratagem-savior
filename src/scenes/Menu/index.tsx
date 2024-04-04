import { useCallback, useEffect } from "react"

import { Heading } from "~/components/Heading"
import { Message } from "~/components/Message"
import { keyToDirection } from "~/utils"
import { gameStartSound } from "~/sounds"

export type MenuProps = {
  onStart: () => void
}

export function Menu({ onStart }: MenuProps) {
  const onKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      const direction = keyToDirection(evt.key)
      if (direction) {
        onStart()
      }
    },
    [onStart],
  )

  // Register keydown event listener
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, false)
    gameStartSound.play()
    return () => document.removeEventListener("keydown", onKeyDown, false)
  }, [onKeyDown])

  return (
    <div className="flex flex-col items-center">
      <Heading>Stratagem Savior</Heading>
      <Message className="mb-1">Press any Stratagem Input to Start!</Message>
      <div className="text-xs text-gray-500">(WASD or arrow keys)</div>
    </div>
  )
}
