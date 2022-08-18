import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Hello from '~/components/HelloWorld.vue'

test('hello world', () => {
  const wrapper = mount(Hello)

  wrapper.setProps({ msg: 'hello' })
  expect(wrapper.text()).toBe('Hello World')
})
