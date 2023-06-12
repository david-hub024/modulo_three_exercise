import StateMachine from '../utils/state_machine'
import { Definition } from '../types'

export default function moduloThree(input: string): number {
  const moduloThreeDef: Definition = {
    states: ['S0', 'S1', 'S2'],
    inputAlphabets: ['0', '1'],
    initialState: 'S0',
    finalStates: ['S0', 'S1', 'S2'],
    transitions: [
      // [current_state, input, output_state]
      ['S0', '0', 'S0'],
      ['S0', '1', 'S1'],
      ['S1', '0', 'S2'],
      ['S1', '1', 'S0'],
      ['S2', '0', 'S1'],
      ['S2', '1', 'S2'],
    ],
  }

  // initialize state machine
  const stateMachine = new StateMachine(moduloThreeDef)

  // process the input into state machine
  const finalState = stateMachine.start(input)

  // determine output from the result state
  const resultMap: any = {
    S0: 0,
    S1: 1,
    S2: 2,
  }
  const output = resultMap[finalState]

  return output
}
