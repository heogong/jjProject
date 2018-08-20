<template>
  <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <h1 class="text-sm-left"><v-icon large>create</v-icon> CREATE</h1>
          <v-divider></v-divider>
          <v-form v-model="valid">

            <v-text-field
              v-model="userId"
              :rules="nameRules"
              :counter="10"
              label="사용자 ID"
              required
            ></v-text-field>

            <v-text-field
              v-model="userNm"
              :rules="nameRules"
              :counter="10"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="password1"
              :append-icon="show1 ? 'visibility_off' : 'visibility'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="패스워드 입력"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
              ref="password1"
              data-vv-delay="300"
              :error-messages="errors.collect('password1')"
              data-vv-name="password1"
            ></v-text-field>
            <v-text-field
              v-model="password2"
              :append-icon="show2 ? 'visibility_off' : 'visibility'"
              :rules="[rules.required, rules.min]"
              :type="show2 ? 'text' : 'password'"
              name="input-10-2"
              label="패스워드 확인"
              hint="At least 8 characters"
              counter
              @click:append="show2 = !show2"
              :error-messages="errors.collect('password2')"
              v-validate="'required|confirmed:password1'"
              data-vv-name="password2"
              data-vv-delay="300"
            ></v-text-field>

            <!-- <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field> -->
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
          </v-form>
        </v-flex>
      </v-layout>
      <div class="text-sm-right">
        <v-btn slot="activator" outline dark class="mb-2" @click="writeUser">저장</v-btn>
        <v-btn slot="activator" outline dark class="mb-2" :to="{ name : 'CompanyInfo', params:{compSeq : compSeq}}">취소</v-btn>
      </div>
  </v-container>
</template>
<script>
const USER_LV = 2;

export default {
  name: 'Company_User_Write',
  data: () => ({
      date: null,
      menu: false,
      valid: false,
      show1: false,
      show2: false,
      userNm: '',
      userId: '',
      password1: '',
      password2: '',
      //email: '',
      userTel: '',
      rules: {
        required: v => !!v || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      // emailRules: [
      //   v => !!v || 'E-mail is required',
      //   v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      // ],
      phoneRules : [
        v => !!v || '전화번호는 필수 입력 입니다.',
        v => v.length <= 13 || '13자 내외로 입력해 주세요.',
        v => /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/.test(v) || '번호가 유효하지 않습니다.'
      ],
      dictionary: {
        custom: {
          password2: {
            required: () => '패스워드 확인은 비워 둘 수 없습니다.',
            confirmed: '입력하신 패스워드가 일치하지 않습니다.'
            // custom messages
          }
        }
      }
  }),
  created : function() {
    this.compSeq = this.$route.params.compSeq
  },
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    },
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
    writeUser : function() {
      const baseURI ='http://localhost:8080/user/writeUser';
      this.$http.get(`${baseURI}`,{
        params : {
          compSeq : this.compSeq,
          userId : this.userId,
          userNm : this.userNm,
          userPasswd : this.password,
          userBirth : this.date,
          userTel : this.userTel,
          userLv : USER_LV
        }
      }).then((result) => {
        //alert("등록완료")
        //this.$router.push({ name: 'CompanyList', params: { snackbar: true } }) 
        console.log(result)
        
      }).catch(error => {
        alert(error.response.status)
        console.log(error.response)
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
