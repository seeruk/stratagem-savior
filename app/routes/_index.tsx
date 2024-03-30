import React, { useCallback, useEffect, useState } from "react"
import type { MetaFunction } from "@remix-run/cloudflare"

import { ArrowInput } from "~/components/ArrowInput"
import { Direction, Phase } from "~/types"
import { keyToDirection, randomIntBetween, randomSequence } from "~/utils"

export const meta: MetaFunction = () => {
  return [
    { title: "Subterfuge Savior" },
    {
      name: "description",
      content: "A shameless Stratagem Hero clone, with some fun extra modes!",
    },
  ]
}

const Heading = ({ children }: React.PropsWithChildren) => {
  return <h1 className="text-4xl font-bold text-white uppercase mb-8">{children}</h1>
}

const Message = ({ children }: React.PropsWithChildren) => {
  return <p className="text-lg text-yellow-300 mb-8">{children}</p>
}

export default function Index() {
  const [end, setEnd] = useState(0)
  const [phase, setPhase] = useState<Phase>(Phase.Waiting)
  const [score, setScore] = useState(0)
  const [sequence, setSequence] = useState<Direction[]>([])
  const [timer, setTimer] = useState(10000)

  console.log(phase)

  const reset = useCallback(() => {
    setPhase(Phase.Waiting)
    setScore(0)
    setSequence([])
    setTimer(10000)
  }, [setPhase, setScore, setSequence, setTimer])

  const start = useCallback(() => {
    const end = Date.now() + 10000

    reset()
    setPhase(Phase.Playing)
    setEnd(end) // TODO: Configurable duration
    setSequence(randomSequence(randomIntBetween(3, 9)))

    const intervalId = setInterval(() => {
      console.log("tick")
      const now = Date.now()
      if (now >= end) {
        console.log("lost")
        clearInterval(intervalId)
        setPhase(Phase.Lost)
        setTimer(0)
        return
      }
      setTimer(end - now)
    }, 1000 / 60) // 60 FPS?
  }, [reset, setEnd, setPhase, setSequence])

  const onSuccess = useCallback(() => {
    setScore((score) => score + 1)
    setSequence(randomSequence(randomIntBetween(3, 9)))
  }, [setScore, setSequence])

  const onKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      if (phase !== Phase.Waiting) {
        return
      }

      const direction = keyToDirection(evt.key)
      if (direction) {
        start()
      }
    },
    [phase, start],
  )

  // Register keydown event listener
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, false)
    return () => document.removeEventListener("keydown", onKeyDown, false)
  }, [onKeyDown])

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex flex-col items-center">
        <Heading>Subterfuge Savior</Heading>

        {phase === Phase.Waiting && <Message>Press any Stratagem Input to Start!</Message>}

        {phase === Phase.Playing && (
          <>
            <ArrowInput sequence={sequence} onSuccess={onSuccess} />
            <div>
              Score: {score}, Time: {timer}
            </div>
          </>
        )}

        {phase === Phase.Lost && (
          <>
            <Message>Game Over!</Message>
            <div>
              Score: {score}, Time: {timer}
            </div>
            <button className="mt-8" onClick={reset}>
              Play Again
            </button>
          </>
        )}
      </div>
    </div>
  )
}
