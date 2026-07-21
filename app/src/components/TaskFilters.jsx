function TaskFilters({ filter, setFilter }) {

    return (

        <div className="task-filters">

            <button
                className={filter === "All" ? "active-filter" : ""}
                onClick={() => setFilter("All")}
            >
                All
            </button>

            <button
                className={filter === "Pending" ? "active-filter" : ""}
                onClick={() => setFilter("Pending")}
            >
                Pending
            </button>

            <button
                className={filter === "Completed" ? "active-filter" : ""}
                onClick={() => setFilter("Completed")}
            >
                Completed
            </button>

            <button
                className={filter === "High" ? "active-filter" : ""}
                onClick={() => setFilter("High")}
            >
                🔴 High
            </button>

            <button
                className={filter === "Medium" ? "active-filter" : ""}
                onClick={() => setFilter("Medium")}
            >
                🟡 Medium
            </button>

            <button
                className={filter === "Low" ? "active-filter" : ""}
                onClick={() => setFilter("Low")}
            >
                🟢 Low
            </button>

            <button
                className={filter === "Today" ? "active-filter" : ""}
                onClick={() => setFilter("Today")}
            >
                🟢 Today
            </button>

            <button
                className={filter === "Overdue" ? "active-filter" : ""}
                onClick={() => setFilter("Overdue")}
            >
                🔴 Overdue
            </button>

        </div>

    );

}

export default TaskFilters;