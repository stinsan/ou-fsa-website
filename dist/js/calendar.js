document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    height: 'auto',
    plugins: [ 'dayGrid' ],

    events: [
      {
        title: '1st Spring GBM',
        start: '2020-02-06T18:30:00',
      },
      {
        title: 'Spirit and Cultural Dance Meeting',
        start: '2020-02-13T18:00:00'
      },
      {
        title: '30th Annual GoodPhil @ TAMUPV & TAMU',
        start: '2020-03-13',
        end: '2020-03-16'
      }
    ]
  });

  calendar.render();
});
