import { useCallback, useEffect, useState } from "react"

import { Footer } from "~/components/Footer"
import { Menu } from "~/scenes/Menu"
import { Game } from "~/scenes/Game"
import { loadSounds } from "~/sounds"
import { GameMode } from "~/types"
import { Header } from "~/components/Header"

export function App() {
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.Classic)
  const [playing, setPlaying] = useState(false)

  const onStart = useCallback(
    (gameMode: GameMode) => {
      setGameMode(gameMode)
      setPlaying(true)
    },
    [setGameMode, setPlaying],
  )

  useEffect(() => {
    // Prepare assets
    loadSounds()
  }, [])

  return (
    <>
      <Header />

      <div className="flex h-[calc(100dvh-8rem)] w-dvw justify-center items-center">
        {!playing && <Menu onStart={onStart} />}
        {playing && <Game mode={gameMode} onReset={() => setPlaying(false)} />}
      </div>

      <Footer />
    </>
  )
}
