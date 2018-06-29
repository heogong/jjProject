import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestAxios from '@/components/TestAxios'

import TeacherMaster from '@/components/TEACHER/Master'
import TeacherList from '@/components/TEACHER/List'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/axios',
      name: 'TestAxios',
      component: TestAxios
    },
    {
      path: '/TEACHER/Master',
      name: 'Teacher_Mster',
      component: TeacherMaster
    }
  ]
})
