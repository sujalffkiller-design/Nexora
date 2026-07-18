import { useState } from "react";

function GoalCard({ goal, addStep, toggleStep }) {

    const [stepText, setStepText] = useState("");

    const handleAddStep = () => {

        if (stepText.trim() === "") return;

        addStep(goal.id, stepText);

        setStepText("");

    };

    return (

        <div className="goal-card">

            <div className="goal-header">

                <div>

                    <h3>🎯 {goal.title}</h3>

                    <span className="goal-status">
                        {goal.status === "Completed"
                            ? "🟢 Completed"
                            : "🟡 In Progress"}
                    </span>

                </div>

            </div>

            <div className="step-input">

                <input
                    type="text"
                    placeholder="Add a new step..."
                    value={stepText}
                    onChange={(e) => setStepText(e.target.value)}
                />

                <button onClick={handleAddStep}>
                    ➕ Add Step
                </button>

            </div>

            <div className="goal-steps">

                {goal.steps.map(step => (

                    <div
                        key={step.id}
                        className="goal-step"
                        onClick={() => toggleStep(goal.id, step.id)}
                    >

                        <span>
                            {step.completed ? "☑" : "☐"}
                        </span>

                        <span
                            style={{
                                marginLeft: "10px",
                                textDecoration: step.completed
                                    ? "line-through"
                                    : "none",
                                opacity: step.completed ? 0.6 : 1,
                                cursor: "pointer"
                            }}
                        >
                            {step.text}
                        </span>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default GoalCard;