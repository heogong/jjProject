import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestAxios from '@/components/TestAxios'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/testAxios',
      name: 'TestAxios',
      component: TestAxios
    }
  ]
})
