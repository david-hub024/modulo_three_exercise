import StateMachine from '../utils/state_machine'
import { Definition } from '../types'

export default function example1(input: string) {
  const def: Definition = {
    states: ['a', 'b', 'c'],
    inputAlphabets: ['0', '1'],
    initialState: 'a',
    finalStates: ['c'],
    transitions: [
      // [current_state, input, output_state]
      ['a', '1', 'b'],
      ['b', '0', 'c'],
      ['b', '1', 'a'],
      ['c', '0', 'b'],
    ],
  }

  // initialize state machine
  const stateMachine = new StateMachine(def)

  // process the input into state machine
  return stateMachine.start(input)
}
