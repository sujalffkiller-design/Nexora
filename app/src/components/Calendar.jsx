import { useState, useEffect } from "react";

import EventCard from "./EventCard";

function Calendar() {

    const [selectedDay, setSelectedDay] = useState(null);
    const [eventTitle, setEventTitle] = useState("");

     const [eventTime, setEventTime] = useState("");

    const [events, setEvents] = useState(() => {
        const savedEvents = localStorage.getItem("nexoraCalendarEvents");
        return savedEvents ? JSON.parse(savedEvents) : [];
    });

    const [currentDate, setCurrentDate] = useState(new Date());

    const month = currentDate.toLocaleString("default", {
        month: "long",
    });

    const year = currentDate.getFullYear();

    const daysInMonth = new Date(
        year,
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const days = Array.from(
        { length: daysInMonth },
        (_, index) => index + 1
    );

    const firstDayOfWeek = new Date(
        year,
        currentDate.getMonth(),
        1
    ).getDay();

    const blanks = Array.from(
        { length: firstDayOfWeek },
        (_, index) => index
    );

    const today = new Date();

    const isCurrentMonth =
        today.getMonth() === currentDate.getMonth() &&
        today.getFullYear() === year;

    const todayDate = today.getDate();

    useEffect(() => {
        localStorage.setItem(
            "nexoraCalendarEvents",
            JSON.stringify(events)
        );
    }, [events]);

    const saveEvent = () => {

        if (!selectedDay) return;

        if (eventTitle.trim() === "") return;

        const selectedDate =
            `${year}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;

        setEvents([
            ...events,
            {
    date: selectedDate,
    title: eventTitle,
    time: eventTime
}
        ]);

        setEventTitle("");

        setEventTime("");

    };

    const deleteEvent = (date, title) => {

    setEvents(
        events.filter(
            event =>
                !(event.date === date && event.title === title)
        )
    );

};

    return (

        <div className="calendar-widget">

            <div className="calendar-header">

                <button
                    onClick={() =>
                        setCurrentDate(
                            new Date(
                                year,
                                currentDate.getMonth() - 1,
                                1
                            )
                        )
                    }
                >
                    ◀
                </button>

                <h2>
                    📅 {month} {year}
                </h2>

                <button
                    onClick={() =>
                        setCurrentDate(
                            new Date(
                                year,
                                currentDate.getMonth() + 1,
                                1
                            )
                        )
                    }
                >
                    ▶
                </button>

            </div>

            <div className="calendar-days">

                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>

            </div>

            <div className="calendar-grid">

                {blanks.map(blank => (

                    <div
                        key={`blank-${blank}`}
                        className="calendar-empty"
                    ></div>

                ))}

                {days.map(day => (

                    <div
                        key={day}
                        className={`calendar-date
                            ${selectedDay === day ? "active" : ""}
                            ${isCurrentMonth && todayDate === day ? "today" : ""}
                        `}
                        onClick={() => setSelectedDay(day)}
                    >

                        <div className="day-number">
                            {day}
                        </div>

                    </div>

                ))}

            </div>

            <div className="selected-events">

                <h3>

                    📍 {selectedDay
                        ? `${selectedDay} ${month} ${year}`
                        : "Select a Date"}

                </h3>

                {selectedDay &&
                    events
                        .filter(event => {

                            const date =
                                `${year}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;

                            return event.date === date;

                        })
                        .map((event, index) => (

    <EventCard
        key={index}
        event={event}
        onDelete={deleteEvent}
    />

))

                        
                }

            </div>

            {selectedDay && (

                <div className="calendar-event">

                    <h3>
                        Add Event for {selectedDay} {month} {year}
                    </h3>

                    <input
                        type="text"
                        placeholder="Event title..."
                        value={eventTitle}
                        onChange={(e) =>
                            setEventTitle(e.target.value)
                        }
                    />

                    <input
                        type="time"
                        value={eventTime}
                        onChange={(e) =>
                            setEventTime(e.target.value)
                        }
                    />

                    <button onClick={saveEvent}>
                        Save Event
                    </button>

                </div>

            )}

        </div>

    );

}

export default Calendar;