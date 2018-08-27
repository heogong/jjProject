import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import TestAxios from '@/components/TestAxios'

import TeacherList from '@/components/TEACHER/List'
import TeacherInfo from '@/components/TEACHER/Info'
import TeacherWrite from '@/components/TEACHER/Write'

import CompanyList from '@/components/COMPANY/List'
import CompanyInfo from '@/components/COMPANY/Info'
import CompanyWrite from '@/components/COMPANY/Write'
import CompanyUserWrite from '@/components/COMPANY/UserWrite'
import CompanyUserView from '@/components/COMPANY/UserView'

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
      path: '/TEACHER',
      name: 'TeacherList',
      component: TeacherList
    },
    {
      path: '/TEACHER/Info/:userId',
      name: 'TeacherInfo',
      component: TeacherInfo
    },
    {
      path: '/TEACHER/Write',
      name: 'TeacherWrite',
      component: TeacherWrite
    },
    {
      path: '/COMPANY',
      name: 'CompanyList',
      component: CompanyList
    },
    {
      path: '/COMPANY/Info/:compSeq',
      name: 'CompanyInfo',
      component: CompanyInfo
    },
    {
      path: '/COMPANY/Write',
      name: 'CompanyWrite',
      component: CompanyWrite
    },
    {
      path: '/COMPANY/UserWrite/:compSeq',
      name: 'CompanyUserWrite',
      component: CompanyUserWrite
    },
    {
      path: '/COMPANY/UserView/:userSeq',
      name: 'CompanyUserView',
      component: CompanyUserView
    },
  ]
})
