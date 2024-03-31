import { twMerge } from "tailwind-merge"

export type ProgressBarProps = {
  className?: string
  progress: number
}

export function ProgressBar({ className, progress }: ProgressBarProps) {
  progress = Math.max(0, Math.min(100, progress))

  return (
    <div className={twMerge("w-full", className)}>
      <div className="h-6 bg-yellow-300" style={{ width: `${progress}%` }}></div>
    </div>
  )
}
