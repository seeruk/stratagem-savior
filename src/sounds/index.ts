import { Howl } from "howler"

import bgm from "~/sounds/bgm.wav"
import gameOver from "~/sounds/game-over.wav"
import gameStart from "~/sounds/game-start.wav"
import keyFail from "~/sounds/key-fail.wav"
import keyPress from "~/sounds/key-press.wav"
import scoreLine from "~/sounds/score-line.wav"
import sequenceSuccess from "~/sounds/sequence-success.wav"

export const bgmSound = new Howl({
  src: [bgm],
  volume: 0.3,
  autoplay: false,
  loop: true,
})

export const gameOverSound = new Howl({
  src: [gameOver],
  volume: 0.5,
  autoplay: false,
})

export const gameStartSound = new Howl({
  src: [gameStart],
  volume: 0.3,
  autoplay: false,
})

export const keyFailSound = new Howl({
  src: [keyFail],
  volume: 0.3,
  autoplay: false,
})

export const keyPressSound = new Howl({
  src: [keyPress],
  volume: 0.5,
  autoplay: false,
})

export const scoreLineSound = new Howl({
  src: [scoreLine],
  volume: 0.1,
  autoplay: false,
})

export const sequenceSuccessSound = new Howl({
  src: [sequenceSuccess],
  volume: 0.2,
  autoplay: false,
})

export const loadSounds = () => {
  bgmSound.load()
  gameOverSound.load()
  gameStartSound.load()
  keyFailSound.load()
  keyPressSound.load()
  scoreLineSound.load()
  sequenceSuccessSound.load()
}
