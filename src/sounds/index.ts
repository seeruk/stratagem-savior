import { Howl } from "howler"

import gameOver from "~/sounds/game-over.wav"
import keyFail from "~/sounds/key-fail.wav"
import keyPress from "~/sounds/key-press.wav"
import roundComplete from "~/sounds/round-complete.wav"
import sequenceSuccess from "~/sounds/sequence-success.wav"

export const gameOverSound = new Howl({
  src: [gameOver],
  volume: 0.5,
  autoplay: false,
})

export const keyFailSound = new Howl({
  src: [keyFail],
  volume: 0.5,
  autoplay: false,
})

export const keyPressSound = new Howl({
  src: [keyPress],
  volume: 0.5,
  autoplay: false,
})

export const roundCompleteSound = new Howl({
  src: [roundComplete],
  volume: 0.5,
  autoplay: false,
})

export const sequenceSuccessSound = new Howl({
  src: [sequenceSuccess],
  volume: 0.5,
  autoplay: false,
})

export const loadSounds = () => {
  gameOverSound.load()
  keyFailSound.load()
  keyPressSound.load()
  roundCompleteSound.load()
  sequenceSuccessSound.load()
}
