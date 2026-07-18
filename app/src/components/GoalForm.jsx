import { useState } from "react";

function GoalForm({ addGoal }) {

    const [title, setTitle] = useState("");

    const handleSubmit = () => {

        if (title.trim() === "") return;

        addGoal(title);

        setTitle("");

    };

    return (

        <div className="goal-form">

            <input
                type="text"
                placeholder="Enter your goal..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={handleSubmit}>
                ➕ Create Goal
            </button>

        </div>

    );

}

export default GoalForm;