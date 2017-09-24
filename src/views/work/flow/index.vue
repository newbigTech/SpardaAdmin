<template>
    <full-calendar class="test-fc" :events="fcEvents"
                   first-day='1' locale="zh-ch"
                   @changeMonth="changeMonth"
                   @eventClick="eventClick"
                   @dayClick="dayClick"
                   @moreClick="moreClick">
      <template slot="fc-event-card" scope="p">
        <p><i class="fa">aaa</i> {{ p.event.title }} test</p>
      </template>
    </full-calendar>
</template>
<script>
  const demoEvents = [
    {
      title: 'Sunny 725-727',
      start: '2017-09-27',
      end: '2017-09-27'
    },
    {
      title: 'Lunfel 726-727',
      start: '2017-08-27',
      end: '2017-08-27'
    },
    {
      title: 'Lunfel 2/27-2/28',
      start: '2017-09-28',
      end: '2017-09-28'
    },
    {
      title: 'Lunfel 2/27-2/28',
      start: '2017-08-28',
      end: '2017-08-28'
    },
    {
      title: 'Lunfel 2/27-2/28',
      start: '2017-09-28',
      end: '2017-09-28'
    },
    {
      title: 'Lunfel 2/26-3/05',
      start: '2017-08-05',
      end: '2017-08-05'
    },
    {
      title: 'Lunfel 1/27-1/28',
      start: '2017-06-27',
      end: '2017-06-28'
    },
    {
      title: 'Lunfel 1/27-2/2',
      start: '2017-08-02',
      end: '2017-08-02'
    },
    {
      title: 'Lunfel 1/27-2/2',
      start: '2017-08-02',
      end: '2017-08-02'
    },
    {
      title: 'Lunfel 1/27-2/2',
      start: '2017-08-02',
      end: '2017-08-02'
    },
    {
      title: 'Lunfel 1/27-2/2',
      start: '2017-08-02',
      end: '2017-08-02'
    },
    {
      title: 'Lunfel 1/27-2/2',
      start: '2017-08-02',
      end: '2017-08-02'
    },
    {
      title: 'Lunfel 1/27-2/2',
      start: '2017-08-02',
      end: '2017-08-02'
    },
    {
      title: 'Lunfel 1/27-2/2',
      start: '2017-08-02',
      end: '2017-08-02'
    },
    {
      title: 'Lunfel 1/27-2/2',
      start: '2017-08-23',
      end: '2017-08-23'
    },
    {
      title: 'Lunfel 1/27-2/2',
      start: '2017-08-23',
      end: '2017-08-23'
    },
    {
      title: 'Lunfel 1/27-2/2',
      start: '2017-08-23',
      end: '2017-08-23'
    },
    {
      title: 'Lunfel 1/27-2/2',
      start: '2017-08-23',
      end: '2017-08-23'
    },
    {
      title: 'Lunfel 3/27-3/28',
      start: '2017-09-27',
      end: '2017-09-28'
    }
  ]

  export default {
    data() {
      return {
        name: 'Sunny!',
        fcEvents: demoEvents
      }
    },
    methods: {
      'changeMonth'(start, end, current) {
        console.log('changeMonth', start, end, current)
      },
      'eventClick'(event, jsEvent, pos) {
        console.log('eventClick', event, jsEvent, pos)
      },
      'dayClick'(day, jsEvent) {
        console.log('dayClick', day, jsEvent)
      },
      'moreClick'(day, events, jsEvent) {
        console.log('moreCLick', day, events, jsEvent)
      }
    },
    components: {
//      'full-calendar': require('src/components/Calendar/fullCalendar')
    }
  }
</script>
<style lang='scss'>
  .app{
    color:green;
  }
</style>
