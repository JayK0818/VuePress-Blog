import { defineClientConfig } from '@vuepress/client'
import { createPinia } from 'pinia'
const pinia = createPinia()
import { createDiscreteApi } from 'naive-ui'
const { message } = createDiscreteApi(['message'])
window.$message = message
export default defineClientConfig({
  enhance({app}) {
    app.config.unwrapInjectedRef = true
    app.use(pinia)
  }
})
