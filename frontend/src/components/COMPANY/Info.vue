<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-tabs left color="teal darken-4" slider-color="teal">
          <v-tab> 
            View
          </v-tab>
          <v-tab> 
            COMP_USER
          </v-tab>
          <v-tab-item>
            <CompanyView v-bind:parentData="compSeq"></CompanyView>
          </v-tab-item>
          <v-tab-item>
            <CompanyUserList v-bind:parentData="compSeq"></CompanyUserList>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CompanyView from '@/components/COMPANY/View'
import CompanyUserList from '@/components/COMPANY/UserList'

export default {
  name: 'Company_Tab',
  components : {
    CompanyView,
    CompanyUserList
  },
  data () {
    return {
      compSeq : ''
    }
  },
  created : function() {
    this.compSeq = this.$route.params.compSeq
  },
  methods : {
    scheduleClick : function() {
      this.openClick = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
