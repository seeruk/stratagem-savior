import { useCallback, useEffect } from "react"
import { ClientOnly } from "remix-utils/client-only"

import { Heading } from "~/components/Heading"
import { Message } from "~/components/Message"
import { keyToDirection } from "~/utils"
import { useLocalStorage } from "@uidotdev/usehooks"

export type MenuProps = {
  onStart: () => void
}

const HighScore = () => {
  const [highScore] = useLocalStorage("ssgHighScoreV1", 0)

  return highScore > 0 ? (
    <div className="text-sm mt-6 text-gray-500">
      Your High Score: <span className="font-bold text-gray-400">{highScore}</span>
    </div>
  ) : null
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
    return () => document.removeEventListener("keydown", onKeyDown, false)
  }, [onKeyDown])

  return (
    <div className="flex flex-col items-center">
      <Heading>Subterfuge Savior</Heading>
      <Message className="mb-1 font-bold">Press any Stratagem Input to Start!</Message>
      <div className="text-xs text-gray-500">(WASD or arrow keys)</div>

      <ClientOnly>{() => <HighScore />}</ClientOnly>
    </div>
  )
}
