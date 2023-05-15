<template>
  <!-- <n-config-provider :theme-overrides="themeOverrides"> -->
    <ParentLayout>
      <template #page-bottom>
        <div class="page-footer">
          <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">浙ICP备20001796号-1</a>
          <div style="padding-top: 8px;">
            <span>Powred by <a href="https://v2.vuepress.vuejs.org/zh/" target="_blank">VuePress v2.0.0</a></span>
            <i>|</i>
            <span><a href="https://www.naiveui.com/zh-CN/os-theme" target="_blank">Naive UI v2.34.3</a></span>
          </div>
        </div>
      </template>
    </ParentLayout>
  <!-- </n-config-provider> -->
</template>

<script lang="ts" setup>
// @ts-ignore
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import type { GlobalThemeOverrides } from 'naive-ui'
// import { NConfigProvider } from 'naive-ui'

const themeOverrides:GlobalThemeOverrides = {
  common: {
    "borderRadius": "0"
  }
}
</script>

<style lang="scss" scoped>
.page-footer{
  text-align: center;
  color: rgba(0,0,0,.55);
  font-size: 14px;
  a {
    font-weight: normal;
    &:hover {
      text-decoration:underline;
    }
  }
  i {
    font-style: normal;
    padding:0 10px;
    color: rgba(0, 0, 0,.4);
  }
}
html.dark {
  .page-footer {
    color: rgba(255, 255, 255, .75);
  }
  i {
    color: rgba(255, 255, 255, .75);
  }
}
</style>