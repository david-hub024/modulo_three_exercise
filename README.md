# Modulo Three Exercise

## Project Setup

Install dependencies and run:

```
yarn
yarn start
```

## Testing

To run the tests.

```
yarn test
```

## Mod-Three FA

moduloThree function is defined in `src/moduloThree.ts`. It takes a unsigned binary integer input and returns remainder of value divide by three.

```ts
moduloThree('1101')
// returns 1
```

## Finite Automation

Mod-Three FA be configured as follows:

#### Q = (S0, S1, S2)

#### Σ = (0, 1)

#### q0 = S0

#### F = (S0, S1, S2)

#### δ(S0,0) = S0; δ(S0,1) = S1; δ(S1,0) = S2; δ(S1,1) = S0; δ(S2,0) = S1; δ(S2,1) = S2

### How to define FA in system

```ts
const def: Definition = {
  states: ['S0', 'S1', 'S3'],
  inputAlphabets: ['0', '1'],
  initialState: 'S0',
  finalStates: ['S0', 'S1', 'S2'],
  transitions: [
    // [state, input, nextState]
    ['S0', '0', 'S0'],
    ['S0', '1', 'S1'],
    ['S1', '0', 'S2'],
    ['S1', '1', 'S0'],
    ['S2', '0', 'S1'],
    ['S2', '1', 'S2'],
  ],
}
```

This FA definition must passed to `StateMachine` in constructor

```ts
const sm = new StateMachine(def)
```
