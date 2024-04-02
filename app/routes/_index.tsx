import { useState } from "react"
import { ClientOnly } from "remix-utils/client-only"
import type { MetaFunction } from "@remix-run/cloudflare"

import { Game } from "~/scenes/Game.client"
import { Menu } from "~/scenes/Menu"

export const meta: MetaFunction = () => {
  return [
    { title: "Stratagem Savior" },
    {
      name: "description",
      content: "A shameless Stratagem Hero clone, with some fun extra modes!",
    },
  ]
}

export default function Index() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      {!playing && <Menu onStart={() => setPlaying(true)} />}
      {playing && <ClientOnly>{() => <Game onReset={() => setPlaying(false)} />}</ClientOnly>}
    </div>
  )
}
