import { useCallback, useEffect } from "react"
import { twMerge } from "tailwind-merge"
import { SpeakerLoudIcon, SpeakerOffIcon } from "@radix-ui/react-icons"
import { useLocalStorage } from "@uidotdev/usehooks"

import { Button } from "~/components/ui/button"
import { Slider } from "~/components/ui/slider"
import { soundMutedKey, soundVolumeKey } from "~/consts"
import { setVolume as setGlobalVolume } from "~/sounds"

export const VolumeControl = () => {
  const [volume, setVolume] = useLocalStorage(soundVolumeKey, 0.5)
  const [muted, setMuted] = useLocalStorage(soundMutedKey, false)

  const handleVolumeChange = useCallback(
    (volume: number[]) => {
      setVolume(volume[0])
    },
    [setVolume],
  )

  const toggleMute = useCallback(() => {
    setMuted((prev) => !prev)
  }, [setMuted])

  useEffect(() => {
    if (muted) {
      setGlobalVolume(0)
    } else {
      setGlobalVolume(volume)
    }
  }, [muted, volume])

  return (
    <div className="flex space-x-4">
      <Slider
        className={twMerge(muted && "opacity-30")}
        disabled={muted}
        defaultValue={[0.5]}
        max={1}
        step={0.1}
        value={[volume]}
        onValueChange={handleVolumeChange}
      />

      <Button className="flex-none" variant="secondary" size="icon" onClick={toggleMute}>
        {muted && <SpeakerOffIcon />}
        {!muted && <SpeakerLoudIcon />}
      </Button>
    </div>
  )
}
