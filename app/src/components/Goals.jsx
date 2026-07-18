import { useState } from "react";

function Goals() {

    const [goals, setGoals] = useState([
        {
            id: 1,
            title: "Welcome to Nexora",
            description: "Create your first goal and start tracking your progress.",
            progress: 100,
            steps: []
        }
    ]);

    const [title, setTitle] = useState("");

    const addGoal = () => {

        if (title.trim() === "") return;

        setGoals([
            {
                id: Date.now(),
                title,
                description: "",
                progress: 0,
                steps: []
            },
            ...goals
        ]);

        setTitle("");

    };

    const increaseProgress = (id) => {

        setGoals(

            goals.map(goal =>

                goal.id === id
                    ? {
                        ...goal,
                        progress: Math.min(goal.progress + 10, 100)
                    }
                    : goal

            )

        );

    };

    const decreaseProgress = (id) => {

        setGoals(

            goals.map(goal =>

                goal.id === id
                    ? {
                        ...goal,
                        progress: Math.max(goal.progress - 10, 0)
                    }
                    : goal

            )

        );

    };

    return (

        <div className="goals-widget">

            <h2>🎯 Goals</h2>

            <div className="goal-input">

                <input
                    type="text"
                    placeholder="Enter goal..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button onClick={addGoal}>
                    ➕ Add Goal
                </button>

            </div>

            {goals.map(goal => (

                <div
                    key={goal.id}
                    className="goal-card"
                >

                    <h3>{goal.title}</h3>

                    <p>{goal.description}</p>

                    {goal.id !== 1 && (
                        <>
                            <p>{goal.progress}% Complete</p>

                            <div className="progress-bar">

                                <div
                                    className="progress-fill"
                                    style={{ width: `${goal.progress}%` }}
                                ></div>

                            </div>

                            <div className="goal-actions">

                                <button onClick={() => decreaseProgress(goal.id)}>
                                    ➖
                                </button>

                                <button onClick={() => increaseProgress(goal.id)}>
                                    ➕
                                </button>

                            </div>

                        </>
                    )}

                </div>

            ))}

        </div>

    );

}

export default Goals;