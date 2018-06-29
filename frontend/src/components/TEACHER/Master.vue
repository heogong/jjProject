<template>
  <div style="padding-top:25px;">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <TeacherTab></TeacherTab>  
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import TeacherTab from '@/components/TEACHER/Tab'

export default {
  name: 'Teacher_Master',
  components : {
    TeacherTab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
