function TaskList({

    filteredTasks,

    toggleTask,

    editTask,

    deleteTask,

    getDueStatus

}) {

    return (

        <ul>

            {filteredTasks.length === 0 ? (

                <p className="empty-message">

                    No tasks yet. Add your first task 🚀

                </p>

            ) : (

                filteredTasks.map((task) => {

                    const dueStatus =
                        getDueStatus(task.dueDate);

                    return (

                        <li
                            key={task.id}
                            className="task-item"
                        >

                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() =>
                                    toggleTask(task.id)
                                }
                            />

                            <div className="task-info">

                                <span
                                    className={
                                        task.completed
                                            ? "completed"
                                            : ""
                                    }
                                >

                                    {task.text}

                                </span>

                                <span
                                    className={`priority-badge ${(task.priority || "Medium").toLowerCase()}`}
                                >

                                    {task.priority || "Medium"}

                                </span>

                                {task.dueDate && (

                                    <div className="task-date-section">

                                        <span className="due-date">

                                            📅 {task.dueDate}

                                        </span>

                                        <span className={`due-status ${dueStatus.className}`}>

                                            {dueStatus.text}

                                        </span>

                                    </div>

                                )}

                            </div>

                            <div className="task-actions">

                                <button
                                    onClick={() => editTask(task)}
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() =>
                                        deleteTask(task.id)
                                    }
                                >
                                    Delete
                                </button>

                            </div>

                        </li>

                    );

                })

            )}

        </ul>

    );

}

export default TaskList;