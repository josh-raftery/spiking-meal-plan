"use client"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useState } from "react";

export default function Calendar() {

  const [event,setEvent] = useState([{
    title: 'meal',
    start: '2024-08-15',
    end: '2024-08-15',
  }])

  const newEvent = {title: 'meal2',start: '2024-08-16',end: '2024-08-16'}

  function addEvent(event){
    setEvent((currEvent) => {
      return [...currEvent,newEvent]
    })
  }

  return (
    <FullCalendar
    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
    headerToolbar={{
      left: 'prev,today,next',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    }}
    events={event}
    dateClick={addEvent}
    initialView="dayGridWeek"
    />
  );
}

//adding events to the calendar 