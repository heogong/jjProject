<template>
  <div>
    <v-card>
    <div id='calendar'></div>
    </v-card>
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
        //themeSystem: 'bootstrap4',
        locale : 'ko',
        //height : 730,
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
<style>

/* 캘린더 border(라인) 색 */
.fc-unthemed tbody, .fc-unthemed td, .fc-unthemed th, .fc-unthemed thead {
  border-color: #303030;
}

/* 이벤트 색 */
.fc-event {
  background-color : #5f4ebb; /*#004d40*/
  border: 1px solid #5f4ebb;
}

/* 날짜(일) 색 */
a {
  color : #ffffff;
}

/* 캘린더 최상단 영역 */
.fc-toolbar.fc-header-toolbar {
  padding : 18px 10px 10px 10px;
  border: 1px solid #303030;
}

/* 캘린더 최상단 활성된 버튼 header 뒤로 */
.fc-toolbar .fc-state-active {
  z-index: 0
}

.fc-toolbar button:focus {
  z-index: 0
}

.fc-toolbar.fc-header-toolbar {
  margin-bottom: 0;
}

.fc-unthemed .fc-popover {
  border-style : none;
}

/* more 클릭 팝오버 상단 색 */
.fc-unthemed .fc-popover .fc-header {
  background: #067d69;
}

/* 오늘날짜 활성화  */
.fc-unthemed td.fc-today {
  background: #757575;
}

/* list 화면 요일 타이틀 */
.fc-unthemed .fc-divider, .fc-unthemed .fc-list-heading td{
  background: #303030;
}

/* list 화면 border 색 */
.fc-unthemed .fc-list-view {
  border-color: #303030;
}

/* list 화면 hover 색 */
.fc-unthemed .fc-list-item:hover td {
  background-color: #525050; 
}

/* list 화면 일정 없을때 색 */
.fc-unthemed .fc-list-empty {
  background-color: #424242;
}

/* 토요일 */
.fc-day-top.fc-sat a { 
  color:#0000FF; 
}

/* 일요일 */
.fc-day-top.fc-sun a { 
  color:#FF0000; 
}

</style>