import type { Definition, TransitionMap } from '../types'

export default class StateMachine {
  currentState
  definition
  transitionMap: TransitionMap

  constructor(definition: Definition) {
    this.definition = definition

    this.validateDefinition()

    this.currentState = definition.initialState

    this.transitionMap = definition.transitions.reduce((map, transition) => {
      const [current, input, output] = transition
      return {
        ...map,
        [current]: { ...map[current], [input]: output },
      }
    }, {} as TransitionMap)
  }

  validateDefinition() {
    if (!this.definition.states.includes(this.definition.initialState)) {
      throw new Error('Initial state must belong finite set of states')
    }

    this.definition.finalStates.forEach((state) => {
      if (!this.definition.states.includes(state)) {
        throw new Error('Final states must belong finite set of states')
      }
    })
  }

  validateInput(input: string) {
    const alphabets = this.definition.inputAlphabets
    const regex = new RegExp(`^[${alphabets.join('|')}]*\$`, 'g')
    if (!regex.test(input)) {
      throw new Error('Invalid character in input string')
    }
  }

  validateOutput(output: string) {
    const finalStates = this.definition.finalStates
    if (!finalStates.includes(output)) {
      throw new Error('Output is not a final state')
    }
  }

  start(inputSequence: string) {
    this.validateInput(inputSequence)

    for (let i = 0; i < inputSequence.length; i++) {
      const input = inputSequence[i]

      // find next state
      const nextState = this.transitionMap[this.currentState]?.[input]

      // if there is no transition for next state, then do not to move to the next state
      if (!nextState) break

      // move to next state
      this.currentState = nextState
    }

    this.validateOutput(this.currentState)

    return this.currentState
  }
}
