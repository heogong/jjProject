<template>
  <v-card>
    <v-list two-line subheader>
      <v-subheader inset>Folders</v-subheader>
      <v-list-tile v-for="item in items" :key="item.title" avatar>
        <v-list-tile-avatar>
          <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
        </v-list-tile-content>
        
      </v-list-tile>
      <v-divider inset></v-divider>
      <v-subheader inset>Files</v-subheader>
      <v-list-tile v-for="item in items2" :key="item.title">
        <v-list-tile-avatar>
          <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">info</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>

export default {
  name: 'Teacher_View',
  props : ['parentData'],
  data () {
    return {
      items: [
        { icon: 'account_box', iconClass: 'grey lighten-1 white--text', title: '이름', subtitle: '박정진' },
        { icon: 'cake', iconClass: 'grey lighten-1 white--text', title: '생년월일', subtitle: '1986-07-09' },
        { icon: 'wc', iconClass: 'grey lighten-1 white--text', title: '성별', subtitle: '남성' },
        { icon: 'phone_iphone', iconClass: 'grey lighten-1 white--text', title: '전화번호', subtitle: '010-0000-0000' }
      ],
      items2: [
        { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
        { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
      ]
    }
  },
  created : function() {
    console.log(this.parentData,'view-Userid');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
