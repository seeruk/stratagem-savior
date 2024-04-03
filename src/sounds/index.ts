import { Howl } from "howler"

import keyFail from "~/sounds/key-fail.wav"
import keyPress from "~/sounds/key-press.wav"
import sequenceSuccess from "~/sounds/sequence-success.wav"

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

export const sequenceSuccessSound = new Howl({
  src: [sequenceSuccess],
  volume: 0.5,
  autoplay: false,
})

export const loadSounds = () => {
  keyFailSound.load()
  keyPressSound.load()
  sequenceSuccessSound.load()
}
