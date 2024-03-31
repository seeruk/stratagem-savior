import { useCallback, useEffect } from "react"

import { Heading } from "~/components/Heading"
import { Message } from "~/components/Message"
import { keyToDirection } from "~/utils"

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
    return () => document.removeEventListener("keydown", onKeyDown, false)
  }, [onKeyDown])

  return (
    <div className="flex flex-col items-center">
      <Heading>Subterfuge Savior</Heading>
      <Message>Press any Stratagem Input to Start!</Message>
    </div>
  )
}
