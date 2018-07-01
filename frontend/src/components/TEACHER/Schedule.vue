<template>
  <h1>스케쥴</h1>
</template>

<script>

export default {
  name: 'Teacher_Schedule',
  props : ['parentData'],
  created : function() {
    console.log(this.parentData,'sch-Userid');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
