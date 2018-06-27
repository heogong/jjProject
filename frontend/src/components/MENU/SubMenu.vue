<template>
  <v-list-tile slot="activator activator" :to="toUrl">
    <v-list-tile-action>
      <v-icon>{{ action }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ title }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: 'SubMenu',
  props: ['propsdata'],
  data: function() {
    return{
      toUrl : this.propsdata.toUrl,
      action : this.propsdata.action,
      title : this.propsdata.title
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
