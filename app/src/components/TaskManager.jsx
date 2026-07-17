import { useState, useEffect, useRef } from "react";


function TaskManager({ searchText }) {

    const [tasks, setTasks] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build Nexora", completed: false },
        { id: 3, text: "Go to Gym", completed: false }
    ]);

    const [newTask, setNewTask] = useState("");

    const [editingId, setEditingId] = useState(null);

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
            completed: false
        }
    ]);

};


setNewTask("");
    
};

    const toggleTask = (id) => {

     setTasks(

    tasks.map(task =>

        task.id === id
            ? { ...task, completed: !task.completed }
            : task

    )

);
    };
    const deleteTask = (id) => {

    setTasks(

        tasks.filter(task => task.id !== id)

    );

   };

   const editTask = (task) => {

    setNewTask(task.text);

    setEditingId(task.id);

};

const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchText.toLowerCase())
);

useEffect(() => {

    if (searchText.trim() !== "") {

        taskManagerRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}, [searchText]);

    return (

        <div
    className="task-manager"
    ref={taskManagerRef}
>

            <h2>Tasks</h2>

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

                <button onClick={addTask}>
    {editingId !== null ? "Save" : "Add"}
</button>

            </div>

         <ul>

    {filteredTasks.length === 0 ? (

        <p className="empty-message">
            No tasks yet. Add your first task 🚀
        </p>

    ) : (

       filteredTasks.map((task) => (
            <li key={task.id} className="task-item">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
                <span className={task.completed ? "completed" : ""}>{task.text}</span>
                <div className="task-actions">
                    <button onClick={() => editTask(task)}>Edit</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            </li>
        ))

    )}

</ul>

        </div>

    );

}

export default TaskManager;