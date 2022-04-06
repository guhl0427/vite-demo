/* eslint-disable no-console */
import '~/style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

console.log(import.meta.url)
console.log(import.meta.env)
console.log(import.meta.env.VITE_APP_TITLE)

export function render() {
  app.innerHTML = `
    <h1>Hello Vite!</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  `
}

render()

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    newModule.render()
  })
}
