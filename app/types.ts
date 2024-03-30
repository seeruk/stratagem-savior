export type Direction = "up" | "down" | "left" | "right"
export type Maybe<T> = T | null

export enum Phase {
  Waiting,
  Playing,
  Lost,
}
