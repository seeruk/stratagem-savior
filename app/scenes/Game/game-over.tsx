import { useLocalStorage } from "@uidotdev/usehooks"

import { Heading } from "~/components/Heading"
import { Message } from "~/components/Message"
import { useEffect } from "react"

export type GameOverProps = {
  score: number
}

export function GameOver({ score }: GameOverProps) {
  const [highScore, setHighScore] = useLocalStorage("ssgHighScoreV1", 0)

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
    }
  }, [highScore, score, setHighScore])

  return (
    <div className="flex flex-col items-center">
      <Heading>Game Over</Heading>

      <Heading className="mb-0" level={3} size="xs">
        High Score
      </Heading>
      <div className="mb-8 text-xl font-bold">{highScore}</div>

      <Heading className="mb-0" level={3} size="xs">
        Your Final Score
      </Heading>
      <Message className="text-3xl font-bold">{score}</Message>
    </div>
  )
}
