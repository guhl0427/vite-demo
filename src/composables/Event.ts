import { onMounted, onUnmounted } from 'vue'

export function useEventlistener(target: any, event: string, callback: Function) {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}
