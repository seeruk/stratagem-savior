import { Heading } from "~/components/Heading"
import { Message } from "~/components/Message"

export type GameOverProps = {
  score: number
}

export function GameOver({ score }: GameOverProps) {
  return (
    <div className="flex flex-col items-center">
      <Heading>Game Over</Heading>

      <Heading className="mb-0" level={3} size="xs">
        High Score
      </Heading>
      <div className="mb-8 text-xl font-bold">TODO</div>

      <Heading className="mb-0" level={3} size="xs">
        Your Final Score
      </Heading>
      <Message className="text-3xl font-bold">{score}</Message>
    </div>
  )
}
