import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import element from 'element-ui'
import router1 from "@/routers/myRouter";

Vue.use(VueRouter)
Vue.use(element)

new Vue({
  render: h => h(App),
  router: router1
}).$mount('#app')
