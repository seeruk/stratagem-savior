import { GearIcon } from "@radix-ui/react-icons"

import { Button } from "~/components/ui/button"
import { VolumeControl } from "~/components/VolumeControl"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"

export const Header = () => {
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
            <VolumeControl />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
