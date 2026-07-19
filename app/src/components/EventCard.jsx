function EventCard({ event, onDelete, onEdit }) {

    return (

        <div className="event-item">

            <div className="event-details">

                <h4>📌 {event.title}</h4>

                <p>🕒 {event.time || "No Time"}</p>

            </div>

            <div className="event-actions">

                <button
                    className="edit-event-btn"
                    onClick={() => onEdit(event)}
                >
                    ✏ Edit
                </button>

                <button
                    className="delete-event-btn"
                    onClick={() => onDelete(event.date, event.title)}
                >
                    🗑 Delete
                </button>

            </div>

        </div>

    );

}

export default EventCard;