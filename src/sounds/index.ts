import { Howl } from "howler"

import bgm from "~/sounds/bgm.wav"
import gameOver from "~/sounds/game-over.wav"
import gameStart from "~/sounds/game-start.wav"
import keyFail from "~/sounds/key-fail.wav"
import keyPress from "~/sounds/key-press.wav"
import roundEnd1 from "~/sounds/round-end-1.wav"
import roundEnd2 from "~/sounds/round-end-2.wav"
import roundEnd3 from "~/sounds/round-end-3.wav"
import sequenceSuccess from "~/sounds/sequence-success.wav"

export const bgmSound = new Howl({
  src: [bgm],
  volume: 0.5,
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
  volume: 0.5,
  autoplay: false,
})

export const keyPressSound = new Howl({
  src: [keyPress],
  volume: 0.5,
  autoplay: false,
})

export const roundEnd1Sound = new Howl({
  src: [roundEnd1],
  volume: 0.5,
  autoplay: false,
})

export const roundEnd2Sound = new Howl({
  src: [roundEnd2],
  volume: 0.5,
  autoplay: false,
})

export const roundEnd3Sound = new Howl({
  src: [roundEnd3],
  volume: 0.5,
  autoplay: false,
})

export const sequenceSuccessSound = new Howl({
  src: [sequenceSuccess],
  volume: 0.5,
  autoplay: false,
})

export const loadSounds = () => {
  bgmSound.load()
  gameOverSound.load()
  gameStartSound.load()
  keyFailSound.load()
  keyPressSound.load()
  roundEnd1Sound.load()
  roundEnd2Sound.load()
  roundEnd3Sound.load()
  sequenceSuccessSound.load()
}
