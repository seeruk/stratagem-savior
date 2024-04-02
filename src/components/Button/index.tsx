import { PropsWithChildren } from "react"

export type ButtonProps = {
  onClick: () => void
}

export function Button({ onClick, children }: PropsWithChildren<ButtonProps>) {
  return <button onClick={onClick}>{children}</button>
}
