import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("JavaScriptAttribute", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\JavaScript\\Attribute.vue"))),
      app.component("JavaScriptInsertBefore", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\JavaScript\\InsertBefore.vue"))),
      app.component("JavaScriptDebounce", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\JavaScript\\Debounce.vue"))),
      app.component("ReactThrottleDelay", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\React\\ThrottleDelay.vue"))),
      app.component("ReactThrottleImmediate", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\React\\ThrottleImmediate.vue"))),
      app.component("JavaScriptObject", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\JavaScript\\Object.vue"))),
      app.component("JavaScriptModalButton", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\JavaScript\\ModalButton.vue"))),
      app.component("JavaScriptEvent", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\JavaScript\\Event.vue"))),
      app.component("JavaScriptEventDelegation", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\JavaScript\\EventDelegation.vue"))),
      app.component("VueEventBus", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\Vue\\EventBus\\EventBus.vue"))),
      app.component("JavaScriptAxiosCancel", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\JavaScript\\AxiosCancel.vue"))),
      app.component("PiniaState", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\Vue\\Pinia\\State.vue"))),
      app.component("PiniaTodo", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\Vue\\Pinia\\Todos.vue"))),
      app.component("VueHome", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\Vue\\Home\\index.vue"))),
      app.component("JavaScriptBoxSize", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\JavaScript\\BoxSize.vue"))),
      app.component("JavaScriptScrollBottom", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\JavaScript\\ScrollBottom.vue"))),
      app.component("VuePropFather", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\Vue\\Prop\\Father.vue"))),
      app.component("VueEmitFather", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\Vue\\Emit\\Father.vue"))),
      app.component("VueProvideFather", defineAsyncComponent(() => import("C:\\Users\\Admin\\Desktop\\VuePress-Blog\\docs\\.vuepress\\components\\Vue\\Provide\\Father.vue")))
  },
}
