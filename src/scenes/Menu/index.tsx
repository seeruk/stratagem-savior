import { useCallback } from "react"

import { Heading } from "~/components/Heading"
import { Message } from "~/components/Message"
import { Selector } from "~/components/Selector"
import { gameStartSound } from "~/sounds"
import { GameMode } from "~/types"
import { useLocalStorage } from "@uidotdev/usehooks"
import { highScoreKey } from "~/consts.ts"

type ModeLabelProps = {
  mode: GameMode
}

const ModeLabel = ({ mode }: ModeLabelProps) => {
  const [highScore] = useLocalStorage(`${highScoreKey}-${mode}`, 0)

  return (
    <>
      {mode}
      <br />
      <span className="text-gray-500">{highScore}</span>
    </>
  )
}

export type MenuProps = {
  onStart: (mode: GameMode) => void
}

export function Menu({ onStart }: MenuProps) {
  const onSelect = useCallback(
    (mode: GameMode) => {
      gameStartSound.play()
      onStart(mode)
    },
    [onStart],
  )

  return (
    <div className="flex flex-col items-center">
      <Heading>Stratagem Savior</Heading>

      <Selector<GameMode>
        onSelect={onSelect}
        options={[
          {
            value: GameMode.Classic,
            label: <ModeLabel mode={GameMode.Classic} />,
          },
          {
            value: GameMode.Blind,
            label: <ModeLabel mode={GameMode.Blind} />,
          },
          {
            value: GameMode.Random,
            label: <ModeLabel mode={GameMode.Random} />,
          },
        ]}
      />

      <Message className="mb-1">Use Stratagem Inputs to Start!</Message>
      <div className="text-xs text-gray-500">(WASD or arrow keys)</div>
    </div>
  )
}
