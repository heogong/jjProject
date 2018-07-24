<template>
  <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <h1 class="text-sm-left"><v-icon large>create</v-icon> CREATE</h1>
          <v-divider></v-divider>
          <v-form v-model="valid">
            <v-text-field
              v-model="compNm"
              :rules="nameRules"
              :counter="15"
              label="법인명"
              required
            ></v-text-field>

            <v-text-field
              v-model="compOwner"
              :rules="nameRules"
              :counter="10"
              label="대표"
              required
            ></v-text-field>

            <v-text-field
              v-model="compTel"
              :rules="phoneRules"
              :counter="12"
              @keypress="isNumber"
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
        </v-flex>
      </v-layout>
      <div class="text-sm-right">
        <v-btn slot="activator" color="grey darken-2" dark round class="mb-2" 
          :disabled="!valid" @click="createCompany">저장</v-btn>
        <v-btn slot="activator" color="grey darken-1" dark round class="mb-2" 
          to="/COMPANY">취소</v-btn>
      </div>

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
      aaaaa
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>

  </v-container>
  
</template>

<script>

export default {
  name: 'Company_Write',
  data: () => ({
      date: null,
      menu: false,
      valid: false,
      compNm: '',
      compOwner: '',
      compTel: '',
      compAddr: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 15 || 'Name must be less than 15 characters'
      ],
      phoneRules : [
        v => !!v || '전화번호는 필수 입력 입니다.',
        v => v.length <= 12 || '12자 내외로 입력해 주세요.'
      ],
      addressRules : [
        v => v.length <= 50 || '50자 내외로 입력해 주세요.'
      ]
  }),
  methods: {
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    },
    createCompany : function() {
      const baseURI ='http://localhost:8080/comp/createCompany';
      this.$http.get(`${baseURI}`,{
        params : {
          compNm : this.compNm,
          compOwner : this.compOwner,
          compTel : this.compTel,
          compAddr : this.compAddr
        }
      }).then((result) => {
        alert("등록완료")
        this.$router.push({ name: 'CompanyList' }) 
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
