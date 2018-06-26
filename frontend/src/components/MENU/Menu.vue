<template>
  <v-list>
    
    <!-- 2레벨 이상 메뉴 -->
    <v-list-group
      v-for="item in items" 
      v-model="item.active" 
      :key="item.title" 
      no-action>
      
      <!-- 1 레벨 메뉴 (비슷한거 제거) -->
      <!-- <v-list-tile slot="activator" :to="item.toUrl">
        <v-list-tile-action>
          <v-icon>{{ item.action }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile> -->

      <SubMenu v-bind:propsdata="item"></SubMenu>

      <!--2 레벨 메뉴 -->
      <v-list-tile v-for="subItem in item.items" :key="subItem.title" :to="subItem.toUrl">
        <v-list-tile-content>
          <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list-group>

    <!-- 1레벨 메뉴 (비슷한거 제거)-->
    <!-- <SubMenu></SubMenu> -->

  </v-list>
</template>

<script>
import SubMenu from './SubMenu'

export default {
  name: 'Menu',
  components : {
    SubMenu
  },
  data: function() {
    return{
       items: [
        {
          action: 'local_activity',
          title: 'Attractions',
          active: true,
          items: [
            { 
              title: 'List Item',
              toUrl: '/'
            }
          ]
        },
        {
          action: 'restaurant',
          title: 'Dining',
          items: [
            { 
              title: 'Breakfast & brunch',
              toUrl: '/axios' 
            },
            { title: 'New American' },
            { title: 'Sushi' }
          ]
        },
        {
          action: 'school',
          title: 'Education',
          items: [
            { title: 'List Item' }
          ]
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
          items: [
            { title: 'List Item' }
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.abc{
  color: red;
}
</style>
