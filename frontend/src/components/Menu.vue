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
        title: 'USER',
        items: [
          { 
            title: 'List Item',
            toUrl: '/TEACHER'
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
          { title: 'New American', toUrl: '/TEST' },
          { title: 'Sushi', toUrl: '/TEST'  }
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
          { 
            title: 'List Item',
            toUrl: '/2'
          }
        ]
      },
      {
        action: 'fingerprint',
        title: 'SYSTEM',
        items: [
          { 
            title: '회사',
            toUrl: '/COMPANY'
          },
          { 
            title: '관리자',
            toUrl: '/ADMIN'
          }
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
    const routerPath = this.$route.path.split('/');
    const items = this.items;

    for(var i = 0; i < items.length; i++) {
      if(typeof items[i].items != 'undefined') {
        for(var j = 0 ; j < items[i].items.length; j++) {
          if(items[i].items[j].toUrl.indexOf(routerPath[1]) == 1) {
            items[i].active = true;
          }
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
