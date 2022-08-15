import { expect, test } from 'vitest'
import { add } from '../src/composables/Add'

test('hello vitest', () => {
  expect(1 + 1).toBe(2)
})

test('add', () => {
  expect(add(1, 2)).toBe(3)
})
