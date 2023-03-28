import { defineClientConfig } from '@vuepress/client'
import { createPinia } from 'pinia'
import { Button, Select, Checkbox, Input, message } from 'ant-design-vue'
import 'ant-design-vue/es/message/style/css'
const pinia = createPinia()

export default defineClientConfig({
  enhance({app}) {
    app.config.unwrapInjectedRef = true
    app.use(Button).use(Select).use(Checkbox).use(Input)
    window.$message = message
    if(!__VUEPRESS_SSR__) {
    }
    app.use(pinia)
  }
})
