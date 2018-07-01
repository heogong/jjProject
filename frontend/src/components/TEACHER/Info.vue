<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-tabs left color="teal darken-4" slider-color="teal">

          <v-tab v-for="n in 3" :key="n"> 
            Item {{ n }} 
          </v-tab>
          <!-- <v-tab-item v-for="n in 3" :key="n">
            <TeacherView v-if="n == 1" v-bind:parentData="userId"></TeacherView>
            <TeacherSchedule v-if="n == 2" v-bind:parentData="userId"></TeacherSchedule>
          </v-tab-item> -->
          <v-tab-item>
            <TeacherView v-bind:parentData="userId"></TeacherView>
          </v-tab-item>

        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TeacherView from '@/components/TEACHER/View'
import TeacherSchedule from '@/components/TEACHER/Schedule'

export default {
  name: 'Teacher_Tab',
  components : {
    TeacherView,
    TeacherSchedule
  },
  data () {
    return {
      userId : ''
    }
  },
  created : function() {
    this.userId = this.$route.params.userId
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
