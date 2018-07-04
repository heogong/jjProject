<template>
  <v-toolbar app fixed clipped-left>
    <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
    <v-toolbar-side-icon @click.stop="toggleDrawer(drawer = !drawer)"></v-toolbar-side-icon>
    <v-toolbar-title> <router-link to="/">Application</router-link></v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  props : ['toggleFlag'],
  data: () => ({
     drawer: true
  }),
  methods: {
    toggleDrawer: function(toggle){
      this.$emit('menu-toggle', toggle);
    }
  },
  watch: {
    toggleFlag: function() { // watch it
        this.drawer = this.toggleFlag
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color : #fff;
  text-decoration: none;
}
</style>
