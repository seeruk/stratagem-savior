import { twMerge } from "tailwind-merge"

export type ProgressBarProps = {
  className?: string
  danger: boolean
  progress: number
}

export function ProgressBar({ className, danger, progress }: ProgressBarProps) {
  progress = Math.max(0, Math.min(100, progress))

  return (
    <div className={twMerge("w-full", className)}>
      <div
        className={twMerge("h-6 bg-yellow-300", danger && "bg-red-500")}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}
