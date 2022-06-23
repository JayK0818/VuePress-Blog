import { defineClientConfig } from '@vuepress/client'
import { createPinia } from 'pinia'
import { createDiscreteApi, create, NButton, NInput, NSelect, NCheckbox } from 'naive-ui'
const pinia = createPinia()

export default defineClientConfig({
  enhance({app}) {
    app.config.unwrapInjectedRef = true
    if(!__VUEPRESS_SSR__) {
      const { message } = createDiscreteApi(['message'])
      const naive = create({
        components: [NButton, NInput, NSelect, NCheckbox]
      })
      app.use(naive)
    }
    app.use(pinia)
  }
})
