export type Definition<State = string> = {
  states: State[]
  inputAlphabets: string[]
  initialState: State
  finalStates: State[]
  transitions: [State, string, State][]
}

export type TransitionMap = Record<string, Record<string, string>>
