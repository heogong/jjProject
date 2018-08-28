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
    </div>
     <CompanyEdit v-bind:parentData="[dialog, data]" v-on:send-success="successSnackbar"></CompanyEdit>

    <v-snackbar
    v-model="snackbar"
    :bottom="y === 'bottom'"
    :left="x === 'left'"
    :multi-line="mode === 'multi-line'"
    :right="x === 'right'"
    :timeout="timeout"
    :top="y === 'top'"
    :vertical="mode === 'vertical'"
    >
      {{text}}
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import CompanyEdit from '@/components/COMPANY/Edit'

export default {
  
  name: 'Company_View',
  props : ['parentData'],
  data () {
    return {
      snackbar: false,
      y: 'bottom',
      x: null,
      mode: '',
      timeout: 6000,
      text: '수정이 완료 되었습니다.',

      dialog : false,
      items : [],
      data : ''
    }
  },
  created : function() {
    this.viewCompany()
  },
  components : {
    CompanyEdit
  },
  methods : {
    viewCompany : function() {
      this.compSeq = this.parentData

      //const baseURI = '/comp/viewCompany';
      const baseURI ='http://localhost:8080/comp/viewCompany';
      this.$http.get(`${baseURI}`, {
        params : {
          compSeq : this.compSeq 
        }
      }).then((result) => {
        this.data = result.data
        //console.log(result.data)
        this.items = [
          { icon: 'work', iconClass: 'grey darken-2 white--text', title: '법인명', subtitle: result.data.compNm},
          { icon: 'person', iconClass: 'grey darken-2 white--text', title: '대표', subtitle: result.data.compOwner },
          { icon: 'phone_iphone', iconClass: 'grey darken-2 white--text', title: '전화번호', subtitle: result.data.compTel },
          { icon: 'business', iconClass: 'grey darken-2 white--text', title: '주소', subtitle: result.data.compAddr },
          { icon: 'done', iconClass: 'grey darken-2 white--text', title: '등록일', subtitle: result.data.instDt }
        ]
      }).catch(error => {
        console.log(error)
      })
    },
    successSnackbar : function() {
      this.viewCompany()

      setTimeout(() => {
        this.snackbar = true
      }, 300)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
