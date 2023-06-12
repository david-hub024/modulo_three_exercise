import moduloThree from '../examples/modulo_three'

test('moduloThree function returns the correct result', () => {
  expect(moduloThree('1000')).toBe(2)
  expect(moduloThree('1001')).toBe(0)
  expect(moduloThree('1010')).toBe(1)
  expect(moduloThree('1011')).toBe(2)
  expect(moduloThree('1100')).toBe(0)
  expect(moduloThree('1101')).toBe(1)
  expect(moduloThree('1110')).toBe(2)
  expect(moduloThree('1111')).toBe(0)

  expect(moduloThree('10000')).toBe(16 % 3)
  expect(moduloThree('10001')).toBe(17 % 3)
  expect(moduloThree('10010')).toBe(18 % 3)
  expect(moduloThree('10011')).toBe(19 % 3)
  expect(moduloThree('10100')).toBe(20 % 3)
  expect(moduloThree('10101')).toBe(21 % 3)
  expect(moduloThree('10110')).toBe(22 % 3)
  expect(moduloThree('10111')).toBe(23 % 3)
  expect(moduloThree('11000')).toBe(24 % 3)
  expect(moduloThree('11001')).toBe(25 % 3)
  expect(moduloThree('11010')).toBe(26 % 3)
  expect(moduloThree('11011')).toBe(27 % 3)
  expect(moduloThree('11100')).toBe(28 % 3)
  expect(moduloThree('11101')).toBe(29 % 3)
  expect(moduloThree('11110')).toBe(30 % 3)
  expect(moduloThree('11111')).toBe(31 % 3)
  expect(moduloThree('100000')).toBe(32 % 3)
  expect(moduloThree('1000000')).toBe(64 % 3)
  expect(moduloThree('10000000')).toBe(128 % 3)
  expect(moduloThree('100000000')).toBe(256 % 3)
})
