import { useCallback, useEffect, useState } from "react"
import { keyToDirection } from "~/utils.tsx"
import { twMerge } from "tailwind-merge"
import { keyPressSound } from "~/sounds"

export type SelectorInputProps = {
  label: React.ReactNode
  focused?: boolean
  selected?: boolean
}

export const SelectorInput = ({ label, focused, selected }: SelectorInputProps) => {
  return (
    <div>
      <div className="text-center mb-1 text-yellow-300">
        {focused && <span className="icon-arrow-up text-3xl"></span>}
      </div>
      <div
        className={twMerge(
          "border-2 bg-red-900 h-[6rem] w-[4rem] mb-2",
          focused && "border-yellow-300",
          selected && "bg-green-700 border-yellow-300",
        )}
      />
      <div
        className={twMerge(
          "uppercase text-xs text-gray-300 text-center",
          focused && "text-yellow-300",
        )}
      >
        {label}
      </div>
    </div>
  )
}

export type SelectorProps<T> = {
  options: { value: T; label: React.ReactNode }[]
  onSelect: (value: T) => void
}

export const Selector = <T,>({ options, onSelect }: SelectorProps<T>) => {
  const [focusedIdx, setFocusedIdx] = useState(0)
  const [hasSelected, setHasSelected] = useState(false)

  const onKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      const direction = keyToDirection(evt.key)
      if (!direction) {
        return
      }

      if (direction !== "down") {
        keyPressSound.play()
      }

      switch (direction) {
        case "up":
          setHasSelected(true)
          setTimeout(() => {
            onSelect(options[focusedIdx].value)
          }, 80)
          break
        case "left":
          setFocusedIdx((prev) => (prev + options.length - 1) % options.length)
          break
        case "right":
          setFocusedIdx((prev) => (prev + 1) % options.length)
          break
      }
    },
    [focusedIdx, onSelect, options],
  )

  // Register keydown event listener
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, false)
    return () => document.removeEventListener("keydown", onKeyDown, false)
  }, [onKeyDown])

  return (
    <div className="flex items-end gap-4 mb-8">
      {options.map((opt, i) => (
        <SelectorInput
          key={i}
          label={opt.label}
          focused={focusedIdx === i}
          selected={focusedIdx === i && hasSelected}
        />
      ))}
    </div>
  )
}
