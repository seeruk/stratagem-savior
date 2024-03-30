import React, { useCallback, useEffect, useState } from "react"
import type { MetaFunction } from "@remix-run/cloudflare"

import { ArrowInput } from "~/components/ArrowInput"
import { Direction } from "~/types"
import { randomIntBetween, randomSequence } from "~/utils"

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
  return <h1 className="text-4xl font-bold text-yellow-400 mb-8">{children}</h1>
}

export default function Index() {
  const [sequence, setSequence] = useState([] as Direction[])

  const onSuccess = useCallback(() => {
    setSequence(randomSequence(randomIntBetween(3, 10)))
  }, [setSequence])

  useEffect(() => {
    setSequence(randomSequence(randomIntBetween(3, 10)))
  }, [])

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex flex-col items-center">
        <Heading>Subterfuge Savior</Heading>
        <ArrowInput sequence={sequence} onSuccess={onSuccess} />
      </div>
    </div>
  )
}
