document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var modal = document.getElementById('modal');
    var alertModal = document.getElementById('alertModal');
    var closeModal = document.querySelector('.close');
    var closeAlert = document.querySelector('.close-alert');
    var saveEventButton = document.getElementById('saveEvent');
    var okAlertButton = document.getElementById('okAlert');
    var eventNameInput = document.getElementById('eventName');
    var eventEmailInput = document.getElementById('eventEmail');
    var eventProfileInput = document.getElementById('eventProfile');
    var eventPhoneInput = document.getElementById('eventPhone');
    var eventStartInput = document.getElementById('eventStart');
    var eventEndInput = document.getElementById('eventEnd');
    var alertTitle = document.getElementById('alertTitle');
    var alertMessage = document.getElementById('alertMessage');
    var turnoList = document.getElementById('turnoItems');
    var currentEvent;

    // Inicializar modales ocultos
    modal.style.display = "none";
    alertModal.style.display = "none";

    function getRandomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var a = 0.7;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    function showAlert(title, message, onConfirm) {
        alertTitle.textContent = title;
        alertMessage.textContent = message;
        alertModal.style.display = "block";
        okAlertButton.onclick = function() {
            alertModal.style.display = "none";
            if (onConfirm) onConfirm();
        };
    }

    function agregarTurnoALista(event) {
        var li = document.createElement('li');
        li.innerHTML = `<strong>${event.title}</strong> (${event.extendedProps.email || 'Sin email'}) 
            <br>Tel: ${event.extendedProps.phone || 'Sin teléfono'} 
            <br>Inicio: ${new Date(event.start).toLocaleString()} 
            <br>Fin: ${new Date(event.end).toLocaleString()}`;
        turnoList.appendChild(li);
    }

    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'UTC',
        initialView: 'timeGridWeek',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay'
        },
        selectable: true,
        editable: true,

        events: function(fetchInfo, successCallback, failureCallback) {
            let events = [];
            successCallback(events);
        },

        eventContent: function(info) {
            let eventEl = document.createElement('div');
            eventEl.innerHTML = `
                <div class="event-content">
                    <div class="event-info">
                        <div class="event-title">${info.event.title}</div>
                        <div class="event-status">${info.event.extendedProps.status}</div>
                    </div>
                </div>
            `;
            return { domNodes: [eventEl] };
        },

        select: function(info) {
            eventStartInput.value = info.startStr;
            eventEndInput.value = info.endStr;
            modal.style.display = "block";

            saveEventButton.onclick = function() {
                var title = eventNameInput.value;
                var email = eventEmailInput.value;
                var profile = eventProfileInput.value;
                var phone = eventPhoneInput.value;
                var start = eventStartInput.value;
                var end = eventEndInput.value;

                if (title && start && end) {
                    var eventData = {
                        title: title,
                        start: start,
                        end: end,
                        allDay: info.allDay,
                        backgroundColor: getRandomColor(),
                        borderColor: getRandomColor(),
                        extendedProps: {
                            email: email,
                            profile: profile,
                            phone: phone
                        }
                    };
                    calendar.addEvent(eventData);

                    // Agregar el evento a la lista de turnos
                    agregarTurnoALista(eventData);
                }

                // Ocultar modal después de guardar el evento
                modal.style.display = "none";
                eventNameInput.value = '';
                eventEmailInput.value = '';
                eventProfileInput.value = '';
                eventPhoneInput.value = '';
                eventStartInput.value = '';
                eventEndInput.value = '';
            };
        },

        eventClick: function(info) {
            currentEvent = info.event;
            showAlert('Eliminar Turno', '¿Desea eliminar este turno?', function() {
                currentEvent.remove();
            });
        },

        eventDrop: function(info) {
            showAlert('Turno Movido', 'Turno movido a ' + info.event.start.toISOString());
        },

        eventResize: function(info) {
            showAlert('Turno Modificado', 'Turno modificado: ' + info.event.start.toISOString() + ' hasta ' + info.event.end.toISOString());
        }
    });

    calendar.render();

    // Cerrar modal cuando se presiona la X
    closeModal.onclick = function() {
        modal.style.display = "none";
    };

    // Cerrar alerta cuando se presiona la X
    closeAlert.onclick = function() {
        alertModal.style.display = "none";
    };

    // Cerrar modal si el usuario hace clic fuera del contenido del modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
        if (event.target === alertModal) {
            alertModal.style.display = "none";
        }
    };
});
