import { useState } from "react"

import { Menu } from "~/scenes/Menu"
import { Game } from "~/scenes/Game"
import { loadSounds } from "~/sounds"

export function App() {
  const [playing, setPlaying] = useState(false)

  // Prepare assets
  loadSounds()

  return (
    <>
      <div className="flex h-[calc(100dvh-4rem)] w-dvw justify-center items-center">
        {!playing && <Menu onStart={() => setPlaying(true)} />}
        {playing && <Game onReset={() => setPlaying(false)} />}
      </div>
      <div className="flex h-16 justify-center items-center text-gray-500 text-sm">
        <div className="text-center">
          <p>
            Stratagem Savior is not affiliated with Arrowhead Game Studios or Sony Interactive
            Entertainment
          </p>
        </div>
      </div>
    </>
  )
}
