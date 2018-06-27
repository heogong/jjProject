<template>
  <v-list>
    <template v-for="item in items">
      <v-list-group 
        v-if="item.items" 
        v-model="item.active" 
        :key="item.title"
        :prepend-icon="item.action" 
        no-action
      >
        <v-list-tile slot="activator" :to="item.toUrl" >
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
        <v-list-tile v-for="subItem in item.items" :key="subItem.title" :to="subItem.toUrl">
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>

      <v-list-tile v-else :to="item.toUrl" :key="item.title">
        <v-list-tile-action>
            <v-icon>{{ item.action }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
export default {
  name: 'Menu',
  data: () => ({
    items: [
      {
        action: 'local_activity',
        title: 'Attractions',
        items: [
          { 
            title: 'List Item',
            toUrl: '/1'
          }
        ]
      },
      {
        action: 'restaurant',
        title: 'Dining',
        items: [
          { 
            title: 'Breakfast & brunch',
            toUrl: '/2' 
          },
          { title: 'New American' },
          { title: 'Sushi' }
        ]
      },
      {
        action: 'school',
        title: 'Education',
        toUrl: '/3'
      },
      {
        action: 'directions_run',
        title: 'Family',
        items: [
          { title: 'List Item' }
        ]
      },
      {
        action: 'healing',
        title: 'Health',
        items: [
          { title: 'List Item' }
        ]
      },
      {
        action: 'content_cut',
        title: 'Office',
        toUrl: '/4'
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.abc{
  color: red;
}
</style>
