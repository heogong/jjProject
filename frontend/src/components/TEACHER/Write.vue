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
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
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

            <v-combobox
              v-model="select"
              :items="items"
              chips
              label="성별"
            >
              <template slot="selection" slot-scope="data">
                <v-chip 
                  :selected="data.selected"
                  :disabled="data.disabled"
                  :key="JSON.stringify(data.item)"
                  class="v-chip--select-multi "
                  @input="data.parent.selectItem(data.item)"
                >
                  <v-avatar class="accent white--text">
                    <v-icon>account_circle</v-icon>
                  </v-avatar>
                  {{ data.item }}
                </v-chip>
              </template>
            </v-combobox>

            <v-select
              :items="states"
              v-model="e7"
              label="Select"
              multiple
              chips
              persistent-hint
            ></v-select>
          </v-form>
        </v-flex>
      </v-layout>
      <div class="text-sm-right">
        <v-btn slot="activator" color="grey darken-2" dark round class="mb-2">저장</v-btn>
        <v-btn slot="activator" color="grey darken-1" dark round class="mb-2" 
          to="/TEACHER">취소</v-btn>
      </div>
  </v-container>
  
</template>

<script>

export default {
  name: 'Teacher_Write',
  data: () => ({
      date: null,
      menu: false,
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      e7: [],
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia'
      ],
      select: '',
      items: [
        '남성', '여성'
      ]
  }),
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
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
