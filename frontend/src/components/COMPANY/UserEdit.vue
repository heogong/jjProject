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
          <v-btn dark flat @click.native="dialog = false" @click="editUser" :disabled="!valid">Save</v-btn>
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

          <v-menu
            ref="menu"
            :close-on-content-click="false"
            v-model="menu"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="date"
              label="Birthday date"
              prepend-icon="event"
              readonly
            ></v-text-field>
            <v-date-picker
              ref="picker"
              v-model="date"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="save"
              locale="euc-kr"
            ></v-date-picker>
          </v-menu>

        <v-text-field
          v-model="userTel"
          :rules="phoneRules"
          :counter="13"
          @keydown="isNumber"
          @change="setHippen"
          label="전화번호"
          required
          prepend-icon="phone"
        ></v-text-field>

         <v-select
          v-model="select"
          :items="items"
          item-text="state"
          item-value="abbr"
          label="권한"
        ></v-select>

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
      date: '',
      menu: false,
      dialog: false,
      valid: false,
      userSeq: '',
      userId: '',
      userNm: '',
      userTel: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      phoneRules : [
        v => !!v || '전화번호는 필수 입력 입니다.',
        v => v.length <= 13 || '13자 내외로 입력해 주세요.',
        v => /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/.test(v) || '번호가 유효하지 않습니다.'
      ],
      select: {},
      items: []
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
      this.userTel = this.userTel.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
    },
    editUser : function() {

      const baseURI ='http://localhost:8080/user/editUser';
      this.$http.get(`${baseURI}`,{
        params : {
          seq : this.userSeq,
          userId : this.userId,
          userNm : this.userNm,
          userBirth : this.date,
          userTel : this.userTel,
          userLv : this.select
        }
      }).then((result) => {
        this.successNoti()
      }).catch(error => {
        alert(error.response.status)
        console.log(error.response)
      });
    },
    save (date) {
      this.$refs.menu.save(date)
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

      let userInfo = newVal[1].user
      let userRole = newVal[1].role

      this.userSeq = userInfo.seq 
      this.userId = userInfo.userId
      this.userNm = userInfo.userNm
      this.date = userInfo.userBirth
      this.userTel = userInfo.userTel

      this.select = userInfo.roles[0].roleLv
      
      for(var i in userRole) {
        this.items.push({ state: userRole[i].role, abbr: userRole[i].roleLv })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
