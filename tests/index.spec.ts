import { expect, test } from 'vitest'
import { add } from '../src/composables/Add'
import A from '../src/views/A.vue'

test('hello vitest', () => {
  expect(1 + 1).toBe(2)
})

test('add', () => {
  expect(add(1, 2)).toBe(3)
})

test('vue', () => {
  console.log(A.template)
})
