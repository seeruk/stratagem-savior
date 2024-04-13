import { useEffect } from "react"
import { useLocalStorage } from "@uidotdev/usehooks"

import { Heading } from "~/components/Heading"
import { Message } from "~/components/Message"
import { highScoreKey } from "~/consts"
import { GameMode } from "~/types"
import { twMerge } from "tailwind-merge"

export type GameOverProps = {
  mode: GameMode
  score: number
}

export function GameOver({ mode, score }: GameOverProps) {
  const [highScore, setHighScore] = useLocalStorage(`${highScoreKey}-${mode}`, 0)

  let message = "Outstanding Patriotism"
  if (score < 500) {
    message = "Disgraceful Conduct"
  } else if (score < 1000) {
    message = "Disappointing Service"
  } else if (score < 1500) {
    message = "Unremarkable Performance"
  } else if (score < 2000) {
    message = "Honorable Duty"
  } else if (score < 2500) {
    message = "Superior Valour"
  }

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
    }
  }, [highScore, score, setHighScore])

  return (
    <div className="flex flex-col items-center w-[500px]">
      <Heading>Game Over</Heading>

      <div className="flex w-[350px] justify-between">
        <div>
          <Heading className="mb-0" level={3} size="xs">
            Final Score
          </Heading>
          <Message className={twMerge("text-3xl font-bold", score < 500 && "text-red-500")}>
            {score}
          </Message>
        </div>

        <div className="text-right">
          <Heading className="mb-0" level={3} size="xs">
            High Score
          </Heading>
          <div className="mb-8 text-3xl font-bold">{highScore}</div>
        </div>
      </div>

      <div
        className={twMerge(
          "mb-6 p-6 w-full font-bold text-black text-xl text-center bg-yellow-300",
          score < 500 && "bg-red-500",
        )}
      >
        {message}
      </div>
    </div>
  )
}
