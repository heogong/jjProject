<template>
  <div style="padding-top:20px">
    <div id='calendar'></div>
  </div>
</template>

<script>
import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.min.css'

export default {
  name: 'Teacher_Schedule',
  props: ['parentData'],
  mounted : function() {
    //console.log(this.parentData[0],'sch-Userid');
    //console.log(this.parentData[1],'openClick');
  },
  methods : {
    setSchedule : function() {
      var containerEl = $('#calendar');

      containerEl.fullCalendar({
        locale : 'ko',
        height : 730,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listWeek'
        },
        defaultDate: '2018-01-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: 'All Day Event',
            start: '2018-01-01',
          },
          {
            title: 'Long Event',
            start: '2018-01-07',
            end: '2018-01-10'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2018-01-09T16:00:00'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2018-01-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2018-01-11',
            end: '2018-01-13'
          },
          {
            title: 'Meeting',
            start: '2018-01-12T10:30:00',
            end: '2018-01-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2018-01-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2018-01-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2018-01-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2018-01-12T20:00:00'
          },
          {
            title: 'Birthday Party',
            start: '2018-01-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2018-01-28'
          }
        ]
      })
    }
  },
  watch: {
    parentData: function(val) { // 스케쥴 탭 클릭 시 값 체크
      if(val[1]) {
        this.setSchedule();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
