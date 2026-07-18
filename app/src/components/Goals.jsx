import { useState, useEffect } from "react";
import GoalForm from "./GoalForm";
import GoalCard from "./GoalCard";

function Goals() {

    const [goals, setGoals] = useState(() => {

        const savedGoals = localStorage.getItem("nexoraGoals");

        return savedGoals ? JSON.parse(savedGoals) : [];

    });

    useEffect(() => {

        localStorage.setItem(
            "nexoraGoals",
            JSON.stringify(goals)
        );

    }, [goals]);

    const addGoal = (title) => {

        if (title.trim() === "") return;

        const newGoal = {
            id: Date.now(),
            title,
            status: "In Progress",
            steps: []
        };

        setGoals([newGoal, ...goals]);

    };

    const addStep = (goalId, stepText) => {

    if (stepText.trim() === "") return;

    setGoals(

        goals.map(goal =>

            goal.id === goalId
                ? {
                    ...goal,
                    steps: [
                        ...goal.steps,
                        {
                            id: Date.now(),
                            text: stepText,
                            completed: false
                        }
                    ]
                }
                : goal

        )

    );

};

const toggleStep = (goalId, stepId) => {

    setGoals(

        goals.map(goal =>

            goal.id === goalId
                ? {
                    ...goal,
                    steps: goal.steps.map(step =>

                        step.id === stepId
                            ? {
                                ...step,
                                completed: !step.completed
                            }
                            : step

                    )
                }
                : goal

        )

    );

};

   return (

    <div className="goals-widget">

        <h2>🎯 Goals</h2>

        <GoalForm addGoal={addGoal} />

        {goals.map(goal => (

            <GoalCard
    key={goal.id}
    goal={goal}
    addStep={addStep}
    toggleStep={toggleStep}
/>

        ))}

    </div>

);

}

export default Goals;