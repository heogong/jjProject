<template>
  <v-tabs left color="teal darken-4" slider-color="teal">
    <v-tab v-for="n in 3" :key="n"> 
      Item {{ n }} 
    </v-tab>
    <v-tab-item v-for="n in 3" :key="n">
      <TeacherList v-if="n == 1"></TeacherList>
      <TeacherSchedule v-if="n == 2"></TeacherSchedule>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import TeacherList from '@/components/TEACHER/List'
import TeacherSchedule from '@/components/TEACHER/Schedule'

export default {
  name: 'Teacher_Tab',
  components : {
    TeacherList,
    TeacherSchedule
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
