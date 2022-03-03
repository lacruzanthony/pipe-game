type Command = {
  id: number,
  command: string,
  description: string
}

export interface MessageReducerState {
  message: string
}

export interface CommandReducerState {
  commands: Command[],
  command?: string,
  board: string,
  level: number,
  X: string,
  Y: string
}