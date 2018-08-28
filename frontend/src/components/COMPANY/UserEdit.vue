<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card tile>
      
      <v-toolbar card dark color="primary">
        <v-btn icon dark @click.native="dialog = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Edit</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark flat @click.native="dialog = false" @click="editCompany" :disabled="!valid">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
            v-model="userId"
            disabled
            label="사용자 ID"
          ></v-text-field>

          <v-text-field
            v-model="userNm"
            :rules="nameRules"
            :counter="10"
            label="이름"
            required
          ></v-text-field>

          <v-text-field
            v-model="compTel"
            :rules="phoneRules"
            :counter="13"
            @keydown="isNumber"
            @change="setHippen"
            label="전화번호"
            required
            prepend-icon="phone"
          ></v-text-field>

          <v-text-field
            v-model="compAddr"
            :rules="addressRules"
            :counter="50"
            label="주소"
            required
            prepend-icon="business"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <div style="flex: 1 1 auto;"></div>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'Company_UserEdit',
  props: ['parentData'],
  data () {
    return {
      data : '',
      date: '2017-07-02',
      menu: false,
      dialog: false,
      valid: false,
      userId: '',
      userNm: '',
      compTel: '',
      compAddr: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      phoneRules : [
        v => !!v || '전화번호는 필수 입력 입니다.',
        v => v.length <= 13 || '13자 내외로 입력해 주세요.',
        v => /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/.test(v) || '번호가 유효하지 않습니다.'
      ],
      addressRules : [
        v => v.length <= 50 || '50자 내외로 입력해 주세요.'
      ]
    }
  },
  methods: {
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 95 || charCode > 106)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    },
    setHippen: function() {
      this.compTel = this.compTel.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
    },
    editCompany : function() {
      const baseURI ='http://localhost:8080/comp/editCompany';
      this.$http.get(`${baseURI}`,{
        params : {
          compSeq : this.compSeq,
          compNm : this.compNm,
          compOwner : this.compOwner,
          compTel : this.compTel,
          compAddr : this.compAddr
        }
      }).then((result) => {
        //alert("수정완료")
        //this.$router.push({ name: 'CompanyList', params: { snackbar: true } }) 
        this.successNoti()
      }).catch(error => {
        alert(error.response.status)
        console.log(error.response)
      });
    },
    successNoti : function() {
      this.$emit('send-success')
    }
  },
  watch: {
    parentData: function(newVal, oldVal) { // watch it
      if(newVal[0] != oldVal[0]) {
        this.dialog = true
      }
      console.log(newVal)
      this.userId = newVal[1].userId
      this.userNm = newVal[1].userNm
      // this.compOwner = newVal[1].compOwner
      // this.compTel = newVal[1].compTel
      // this.compAddr = newVal[1].compAddr
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
