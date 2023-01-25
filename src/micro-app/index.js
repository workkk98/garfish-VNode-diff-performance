import { vueBridge } from '@garfish/bridge-vue-v2';
import Vue from 'vue'
import App from './app'

Vue.config.performance = true

if (!window.Garfish) {
  new Vue({
    el: '#app',
    render(h) {
      return h(App)
    }
  })
}

export const provider = vueBridge({
  // 根组件
  rootComponent: App,
  // 可选，注册 vue-router或状态管理对象
  appOptions: ({ basename, dom, appName, props, appInfo }) => {
  // pass the options to Vue Constructor. check https://vuejs.bootcss.com/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE
    return {
      el: '#app',
    };
  },
});