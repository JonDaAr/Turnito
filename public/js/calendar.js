window.addEventListener('resize', function() {
    calendar.updateSize();
});


document.addEventListener('DOMContentLoaded', function() {

    let request_calendar = "/events.json";

    var calendarEl = document.getElementById('calendar');
    var calendar = new calendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',

        events:function(info, successCallback, failureCallback){
            fetch(request_calendar)
                .then(function(response){
                    return response.json()
                })
                .then(function(data){
                    let events = data.events.map(function(event){
                        return {
                            title: event.eventTitle,
                            start: new Date(event.eventStartDate),
                            end: new Date(event.eventEndDate),
                            url: event.eventUrl,
                            location: event.eventLocation,
                            timeStart: event.eventStartTime,
                            timeEnd: event.eventEndTime,
                        }
                    })
                    successCallback(events)
                })
                .catch(function(error){
                    failureCallback(error)
                })
        },

        eventContent: function(info){
            return {
                html: `
                <div style="font-size: 12px; cursor: pointer; font-family: 'Inter', sans-serif;">
                    <div><strong>${info.event.title}</strong></div>
                    <div>Location: ${info.event.extendedProps.location}</div>
                    <div>Date: ${info.event.start.toLocaleDateString(
                        "es-US",
                        {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        }
                    )}</div>
                    <div>Time: ${info.event.extendedProps.timeStart} - ${info.event.extendedProps.timeEnd}</div>
                </div>
                `
            }
        },

        eventMouseEnter: function(mouseEnterInfo){
            console.log(mouseEnterInfo)
            let el = mouseEnterInfo.el
            el.classList.add("relative")

            let newEl = document.createElement("div")
            let newElTitle = mouseEnterInfo.event.title
            let newElLocation = mouseEnterInfo.event.extendedProps.location
            newEl.innerHTML = `
                <div
                    class="fc-hoverable-event"
                    style="position: absolute; bottom: 100%; left: 0; width: 300px; height: auto; background-color: white; z-index: 50; border: 1px solid #e2e8f0; border-radius: 0.375rem; padding: 0.75rem; font-size: 14px; font-family: 'Inter', sans-serif; cursor: pointer;"
                >
                    <strong>${newElTitle}</strong>
                    <div>Location: ${newElLocation}</div>

                </div>
            `
            el.after(newEl)
        },

        eventMouseLeave: function(){
            document.querySelector(".fc-hoverable-event").remove()
        }
    });
    calendar.render();
});