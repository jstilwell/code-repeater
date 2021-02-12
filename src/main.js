import App from "./App.svelte"

const app = new App({
  target: document.body,
  props: {
    siteUrl: window.location.href.split("?")[0],
  },
})

export default app
