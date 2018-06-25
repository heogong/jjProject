<template>
  <v-toolbar app fixed clipped-left>
    <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
    <v-toolbar-side-icon @click="toggleDrawer(drawer = !drawer)"></v-toolbar-side-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    drawer: true
  }),
  methods: {
    toggleDrawer: function(toggle){
      this.$emit('menu-toggle', toggle);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
