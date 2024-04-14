import { useCallback, useEffect } from "react"
import { GearIcon, SpeakerLoudIcon, SpeakerOffIcon } from "@radix-ui/react-icons"
import { useLocalStorage } from "@uidotdev/usehooks"

import { Button } from "~/components/ui/button"
import { Slider } from "~/components/ui/slider"
import { soundMutedKey, soundVolumeKey } from "~/consts"
import { setVolume as setGlobalVolume } from "~/sounds"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"
import { twMerge } from "tailwind-merge"

export const Header = () => {
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
    <div className="flex h-16 p-3 justify-end items-center">
      <Sheet>
        <SheetTrigger asChild={true}>
          <Button variant="secondary">
            <GearIcon className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
            <SheetDescription>Customise your Stratagem Savior experience</SheetDescription>
          </SheetHeader>

          <div className="mt-8">
            <div className="mb-1">Volume</div>
            <div className="mb-2 text-xs text-muted-foreground">Set or mute your volume here</div>
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
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
