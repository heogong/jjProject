<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-toolbar
          color="pink darken-1"
          dark
        >
          <v-btn icon :to="{ name : 'CompanyInfo', params:{compSeq : compSeq}}">
            <v-icon>keyboard_backspace</v-icon>
          </v-btn>
          <v-toolbar-title>법인 대표</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-card>
          <v-list two-line subheader>
            <v-subheader inset>사용자 정보</v-subheader>
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
            <v-subheader inset>권한 정보</v-subheader>

            <v-list-tile v-for="item in items2" :key="item.title" avatar>
              <v-list-tile-avatar>
                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

          </v-list>
        </v-card>
        <div class="text-sm-right">
          <v-btn v-on:click="dialog=!dialog" outline class="mb-2">수정</v-btn>
        </div>
      <TeacherEdit v-bind:parentData="dialog"></TeacherEdit>
     </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TeacherEdit from '@/components/TEACHER/Edit'

export default {
  
  name: 'Company_UserView',
  props : ['parentData'],
  components : {
    TeacherEdit
  },
  data () {
    return {
      dialog : false,
      userSeq : '',
      compSeq : '',
      items : [],
      items2 : []
    }
  },
  created : function() {
    this.viewCompanyUser()
    this.compSeq = this.$route.params.compSeq
  },
  methods : {
    viewCompanyUser : function() {
      this.userSeq = this.$route.params.userSeq

      //const baseURI = '/user/findUser';
      const baseURI ='http://localhost:8080/user/findUser';
      this.$http.get(`${baseURI}`, {
        params : {
          seq : this.userSeq 
        }
      }).then((result) => {
        this.data = result.data

        this.items = [
          { icon: 'account_box', iconClass: 'grey lighten-1 white--text', title: '사용자 ID', subtitle: result.data.userId },
          { icon: 'account_box', iconClass: 'grey lighten-1 white--text', title: '이름', subtitle: result.data.userNm },
          { icon: 'cake', iconClass: 'grey lighten-1 white--text', title: '생년월일', subtitle: result.data.userBirth },
          { icon: 'phone_iphone', iconClass: 'grey lighten-1 white--text', title: '전화번호', subtitle: result.data.userTel }
        ],
        this.items2 = [
          { icon: 'phone_iphone', iconClass: 'grey lighten-1 white--text', title: '권한', subtitle: result.data.roles[0].role }
        ]
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
