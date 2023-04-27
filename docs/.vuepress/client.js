import { defineClientConfig } from '@vuepress/client'
import { createPinia } from 'pinia'
import Layout from './components/Layout/index.vue'
import { NButton, NSelect, NCheckbox, create, NInput, createDiscreteApi } from 'naive-ui'
const pinia = createPinia()

export default defineClientConfig({
  layouts: {
    Layout
  },
  enhance({app}) {
    app.config.unwrapInjectedRef = true
    if(!__VUEPRESS_SSR__) {
      const naive = create({
        components: [NButton, NSelect, NCheckbox, NInput]
      })
      app.use(naive)
      const { message } = createDiscreteApi(['message'])
      window.$message = message
    }
    app.use(pinia)
  }
})
