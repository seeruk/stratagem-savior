import type { MetaFunction } from "@remix-run/cloudflare"
import { useCallback, useEffect } from "react"

export const meta: MetaFunction = () => {
  return [
    { title: "Subterfuge Savior" },
    {
      name: "description",
      content: "A shameless Stratagem Hero clone, with some extra fun modes!",
    },
  ]
}

// TODO: Move me
const keyToDirection = (key: string) => {
  switch (key) {
    case "ArrowUp":
    case "w":
      return "up"
    case "ArrowDown":
    case "s":
      return "down"
    case "ArrowLeft":
    case "a":
      return "left"
    case "ArrowRight":
    case "d":
      return "right"
    default:
      return ""
  }
}

// TODO: Not hard-coded
const sequence = ["up", "down", "down", "up"]

const directionSymbols = {
  up: "⬆",
  down: "⬇",
  left: "⬅",
  right: "⮕",
}

export default function Index() {
  const onKeyDown = useCallback((evt: KeyboardEvent) => {
    console.log(keyToDirection(evt.key))
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, false)
    return () => document.removeEventListener("keydown", onKeyDown, false)
  }, [onKeyDown])

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div
        style={{
          color: "white",
          background: "black",
          fontWeight: "bold",
          fontSize: "64px",
        }}
      >
        &#x2B05; &#x2B95; &#x2B06; &#x2B07;
      </div>
    </div>
  )
}
