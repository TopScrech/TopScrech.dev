import App from './App.svelte'
import "./main.css"
new App({
    target: document.body,
    hydrate: import.meta.env.ROUTIFY_SSR_ENABLE,
})