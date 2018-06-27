<template>
  <div id="app">
    <v-app id="inspire" dark>
      <v-navigation-drawer clipped fixed v-model="drawer" app>
        <!-- 리스트 -->
        <v-list>
          <Menu></Menu>
        </v-list>
      </v-navigation-drawer>

      <!-- header -->
      <Header v-on:menu-toggle="menuToggle"></Header>

      <!-- 컨텐츠 -->
      <v-content>
        <router-view></router-view>
      </v-content>

      <!-- footer -->
      <v-footer app fixed>
        <span>&copy; 2017</span>
      </v-footer>

    </v-app>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Menu from '@/components/MENU/Menu'

export default {
  name: 'App',
  components: {
    Header,
    Menu
  },
  data: () => ({
    drawer: true
  }),
  methods: {
    menuToggle: function(toggle){
      this.drawer = toggle;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
