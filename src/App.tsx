import { useState } from "react"

import { Menu } from "~/scenes/Menu"
import { Game } from "~/scenes/Game"

export function App() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      {!playing && <Menu onStart={() => setPlaying(true)} />}
      {playing && <Game onReset={() => setPlaying(false)} />}
    </div>
  )
}
