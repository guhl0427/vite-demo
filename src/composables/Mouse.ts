import { ref } from 'vue'
import { useEventlistener } from './Event'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  useEventlistener(window, 'mousemove', (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  })
  return { x, y }
}
