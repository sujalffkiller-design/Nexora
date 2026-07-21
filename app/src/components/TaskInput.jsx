function TaskInput({

    newTask,
    setNewTask,

    priority,
    setPriority,

    dueDate,
    setDueDate,

    editingId,

    addTask

}) {

    return (

        <div className="task-input">

            <input
                type="text"
                placeholder="Enter a new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        addTask();
                    }
                }}
            />

            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >

                <option>High</option>
                <option>Medium</option>
                <option>Low</option>

            </select>

            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />

            <button onClick={addTask}>

                {editingId !== null ? "Save" : "Add"}

            </button>

        </div>

    );

}

export default TaskInput;