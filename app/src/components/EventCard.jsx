function EventCard({ event, onDelete, onEdit }) {

    console.log("EventCard received:", event);

   const categoryIcons = {
    Study: "📚",
    Work: "💻",
    Meeting: "💼",
    Personal: "🏠",
    Fitness: "🏋️"
};

const categoryColors = {
    Study: "#3b82f6",
    Work: "#f59e0b",
    Meeting: "#8b5cf6",
    Personal: "#10b981",
    Fitness: "#ef4444"
};


    return (

        <div className="event-item">

            <div className="event-details">

                <h4 className="event-title">
                    {categoryIcons[event.category || "Study"]} {event.title}
                </h4>

                <small
                    className="event-category"
                    style={{
                        background: categoryColors[event.category || "Study"]
                    }}
                >
                    {event.category || "Study"}
                </small>

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