function EventCard({ event, onDelete }) {

    return (

        <div className="event-item">

            <div className="event-details">

                <h4>
                    📌 {event.title}
                </h4>

                <p>
                    🕒 {event.time || "No Time"}
                </p>

            </div>

            <button
                className="delete-event-btn"
                onClick={() => onDelete(event.date, event.title)}
            >
                🗑
            </button>

        </div>

    );

}

export default EventCard;