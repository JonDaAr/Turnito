import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth', // Puedes cambiar a 'dayGridWeek', 'dayGridDay', etc.
      selectable: true, // Permite seleccionar días o rangos
      editable: true, // Permite arrastrar y soltar eventos
      dateClick: function(info) {
        alert('Date: ' + info.dateStr); // Acción cuando se hace clic en una fecha
      }
    });
  
    calendar.render();
  });
  