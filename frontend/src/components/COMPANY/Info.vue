<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-tabs left color="teal darken-4" slider-color="teal" v-model="tabKey">
          <v-tab :target="'tab-1'"> 
            법인 정보
          </v-tab>
          <v-tab :target="'tab-2'">
            법인 대표
          </v-tab>
          <v-tab-item :id="'tab-1'">
            <CompanyView v-bind:parentData="compSeq"></CompanyView>
          </v-tab-item>
          <v-tab-item :id="'tab-2'">
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
      compSeq : '',
      tabKey : 'tab-2',
    }
  },
  created : function() {
    this.compSeq = this.$route.params.compSeq
    //this.tabKey = this.$route.params.tabKey
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
