<template>
  <div>
    <v-card>
      <v-list two-line subheader>
        <v-subheader>Folders</v-subheader>
        <v-list-tile v-for="item in items" :key="item.title" avatar>
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
      <v-btn to="/COMPANY" dark outline class="mb-2">취소</v-btn>
    </div>
     <TeacherEdit v-bind:parentData="dialog"></TeacherEdit>
  </div>
</template>

<script>
import TeacherEdit from '@/components/TEACHER/Edit'

export default {
  
  name: 'Teacher_View',
  props : ['parentData'],
  data () {
    return {
      dialog : false,
      items : []
    }
  },
  created : function() {
    this.compSeq = this.parentData

    //const baseURI = '/comp/viewCompany';
    const baseURI ='http://localhost:8080/comp/viewCompany';
    this.$http.get(`${baseURI}`, {
      params : {
        compSeq : this.compSeq 
      }
    }).then((result) => {
      console.log(result.data)
      this.items = [
        { icon: 'account_box', iconClass: 'grey lighten-1 white--text', title: '회사명', subtitle: result.data.compNm},
        { icon: 'cake', iconClass: 'grey lighten-1 white--text', title: '대표', subtitle: result.data.compOwner },
        { icon: 'phone_iphone', iconClass: 'grey lighten-1 white--text', title: '전화번호', subtitle: result.data.compTel },
        { icon: 'wc', iconClass: 'grey lighten-1 white--text', title: '주소', subtitle: result.data.compAddr },
        { icon: 'wc', iconClass: 'grey lighten-1 white--text', title: '등록일', subtitle: result.data.instDt }
        //{ icon: 'wc', iconClass: 'grey lighten-1 white--text', title: '등록일', subtitle: moment(result.data.instDt).format('YYYY.MM.DD') }
        
      ]

    }).catch(error => {
      console.log(error)
    })

  },
  components : {
    TeacherEdit
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
