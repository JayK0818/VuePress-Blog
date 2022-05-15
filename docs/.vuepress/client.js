import { defineClientConfig } from '@vuepress/client'
import { createPinia } from 'pinia'
const pinia = createPinia()

export default defineClientConfig({
  enhance({app}) {
    app.config.unwrapInjectedRef = true
    app.use(pinia)
  }
})
