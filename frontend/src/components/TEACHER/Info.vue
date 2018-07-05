<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-tabs left color="teal darken-4" slider-color="teal">
          <!-- <v-tab v-for="n in 3" :key="n" > 
            Item {{ n }} 
          </v-tab> -->
          <v-tab> 
            View
          </v-tab>
          <v-tab @click="scheduleClick"> 
            Schedule
          </v-tab>
          <v-tab> 
            Etc
          </v-tab>
          <v-tab-item>
            <TeacherView v-bind:parentData="userId"></TeacherView>
          </v-tab-item>
          <v-tab-item>
            <TeacherSchedule v-bind:parentData="[userId, openClick]"></TeacherSchedule>
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
      userId : '',
      openClick : false
    }
  },
  created : function() {
    this.userId = this.$route.params.userId
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
