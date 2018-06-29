<template>
  <v-list>
    <template v-for="item in items">
      <v-list-group 
        v-if="item.items" 
        v-model="item.active" 
        :key="item.title"
        :prepend-icon="item.action" 
        no-action
        active-class="white--text"
      >
        <v-list-tile slot="activator" :to="item.toUrl">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
        <v-list-tile v-for="subItem in item.items" :key="subItem.title" :to="subItem.toUrl" active-class="grey darken-1">
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>

      <v-list-tile v-else :to="item.toUrl" :key="item.title" active-class="grey darken-1">
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
        action: 'person',
        title: '선생님',
        items: [
          { 
            title: 'List Item',
            toUrl: '/TEACHER/Master'
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
  }),
  created: function () {
    for(var i = 0; i < this.items.length; i++) {
      if(typeof this.items[i].items != 'undefined')
        for(var j = 0 ; j < this.items[i].items.length; j++) {
         if(this.items[i].items[j].toUrl == this.$route.path) {
           this.items[i].active = true;  
         }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
