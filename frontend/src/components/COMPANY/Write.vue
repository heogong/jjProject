<template>
  <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <h1 class="text-sm-left"><v-icon large>create</v-icon> CREATE</h1>
          <v-divider></v-divider>
          <v-form v-model="valid">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="10"
              label="법인명"
              required
            ></v-text-field>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="10"
              label="대표"
              required
            ></v-text-field>

            <v-input
              v-model="phone"
              :rules="phoneRules"
              :counter="12"
              label="전화번호"
              required
            ></v-input>

          </v-form>
        </v-flex>
      </v-layout>
      <div class="text-sm-right">
        <v-btn slot="activator" color="grey darken-2" dark round class="mb-2">저장</v-btn>
        <v-btn slot="activator" color="grey darken-1" dark round class="mb-2" 
          to="/COMPANY">취소</v-btn>
      </div>
  </v-container>
  
</template>

<script>

export default {
  name: 'Company_Write',
  data: () => ({
      date: null,
      menu: false,
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      phone: '',
      phoneRules : [
        v => !!v || 'E-mail is required',
        v => /^[0-9]*$/ || 'E-mail must be valid'
      ]
  }),
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
