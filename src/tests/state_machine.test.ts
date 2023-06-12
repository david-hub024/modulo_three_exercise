import { Definition } from '../types'
import StateMachine from '../utils/state_machine'

test('StateMachine the throws error when input is not correct', () => {
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

  const stateMachine = new StateMachine(def)

  expect(() => stateMachine.start('1324')).toThrow()
})

test('StateMachine the throws error when output is not correct', () => {
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

  const stateMachine = new StateMachine(def)

  expect(() => stateMachine.start('0000')).toThrow()
})

test('StateMachine start the correct result', () => {
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

  const stateMachine = new StateMachine(def)

  expect(stateMachine.start('1011')).toBe('c')
})
