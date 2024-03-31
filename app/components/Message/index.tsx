import React from "react"
import { twMerge } from "tailwind-merge"

export type MessageProps = {
  className?: string
}

export function Message({ className, children }: React.PropsWithChildren<MessageProps>) {
  return <p className={twMerge("text-lg text-yellow-300 mb-8", className)}>{children}</p>
}
