import { useState, useEffect, useRef } from "react";

import TaskFilters from "./TaskFilters";

import TaskInput from "./TaskInput";



function TaskManager({ searchText }) {

    const [tasks, setTasks] = useState(() => {

    

    const savedTasks = localStorage.getItem("nexoraTasks");

    return savedTasks
        ? JSON.parse(savedTasks)
        : [
            {
                id: 1,
                text: "Learn React",
                completed: false
            },
            {
                id: 2,
                text: "Build Nexora",
                completed: false
            },
            {
                id: 3,
                text: "Go to Gym",
                completed: false
            }
        ];

});

    const [newTask, setNewTask] = useState("");

    const [priority, setPriority] = useState("Medium");

    const [dueDate, setDueDate] = useState("");

    const [editingId, setEditingId] = useState(null);

    const [filter, setFilter] = useState("All");

    const taskManagerRef = useRef(null);

    const addTask = () => {

        if (newTask.trim() === "") return;

       if (editingId !== null) {

    setTasks(

        tasks.map(task =>

            task.id === editingId

                ? { ...task, text: newTask }

                : task

        )

    );

    setEditingId(null);

} else {

    setTasks([
        ...tasks,
     {
    id: Date.now(),
    text: newTask,
    completed: false,
    priority: priority,
    dueDate: dueDate
}
    ]);

};


setNewTask("");

setPriority("Medium");

setDueDate("");
    
};

  const toggleTask = (id) => {

    setTasks(

        tasks.map(task => {

            if (task.id !== id) return task;

            const completed = !task.completed;

            return {

                ...task,

                completed,

                completedDate: completed
                    ? new Date().toISOString().split("T")[0]
                    : null

            };

        })

    );

};
    

    const deleteTask = (id) => {

    setTasks(

        tasks.filter(task => task.id !== id)

    );

   };

  const editTask = (task) => {

    setNewTask(task.text);

    setPriority(task.priority || "Medium");

    setDueDate(task.dueDate || "");

    setEditingId(task.id);

};

const filteredTasks = tasks.filter((task) => {

    

    const matchesSearch =
        task.text
            .toLowerCase()
            .includes(searchText.toLowerCase());

    if (!matchesSearch) return false;

   switch (filter) {

    case "Completed":
        return task.completed;

    case "Pending":
        return !task.completed;

    case "High":
        return task.priority === "High";

    case "Medium":
        return task.priority === "Medium";

    case "Low":
        return task.priority === "Low";

    case "Today": {

        const today = new Date().toISOString().split("T")[0];

        return task.dueDate === today;

    }

    case "Overdue": {

        const today = new Date().toISOString().split("T")[0];

        return task.dueDate &&
               task.dueDate < today &&
               !task.completed;

    }

    default:
        return true;

}


    

});


useEffect(() => {

    if (searchText.trim() !== "") {

        taskManagerRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}, [searchText]);

useEffect(() => {

    localStorage.setItem(
        "nexoraTasks",
        JSON.stringify(tasks)
    );

}, [tasks]);



const getDueStatus = (dueDate) => {

    if (!dueDate) return null;

    const today = new Date();

    today.setHours(0,0,0,0);

    const due = new Date(dueDate);

    due.setHours(0,0,0,0);

    const diff =
        Math.floor(
            (due - today) /
            (1000 * 60 * 60 * 24)
        );

    if (diff < 0)
        return {
            text: "🔴 Overdue",
            className: "overdue"
        };

    if (diff === 0)
        return {
            text: "🟢 Due Today",
            className: "today"
        };

    if (diff === 1)
        return {
            text: "🟡 Due Tomorrow",
            className: "tomorrow"
        };

    return {
        text: `🔵 ${diff} Days Left`,
        className: "future"
    };

};

    return (

        <div
    className="task-manager"
    ref={taskManagerRef}
>

            <h2>Tasks</h2>

            <TaskInput
                newTask={newTask}
                setNewTask={setNewTask}

                priority={priority}
                setPriority={setPriority}

                dueDate={dueDate}
                setDueDate={setDueDate}

                editingId={editingId}

                addTask={addTask}
            />

            <TaskFilters
                filter={filter}
                setFilter={setFilter}
            />

         <ul>

    {filteredTasks.length === 0 ? (

        <p className="empty-message">
            No tasks yet. Add your first task 🚀
        </p>

    ) : (

       filteredTasks.map((task) => {

        const dueStatus = getDueStatus(task.dueDate);

            return (
            <li key={task.id} className="task-item">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
               <div className="task-info">

                    <span className={task.completed ? "completed" : ""}>
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
                    <button onClick={() => editTask(task)}>Edit</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            </li>
        )})

    )}

</ul>

        </div>

    );

}

export default TaskManager;