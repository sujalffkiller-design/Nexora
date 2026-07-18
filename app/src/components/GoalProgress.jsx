

function GoalProgress({ steps }) {

    const totalSteps = steps.length;

    const completedSteps = steps.filter(
        step => step.completed
    ).length;

    const progress = totalSteps === 0
        ? 0
        : Math.round(
            (completedSteps / totalSteps) * 100
        );

    const completed = progress === 100 && totalSteps > 0;

    return (

        <div className="goal-progress">

    <p>
        {completed
            ? "🟢 Completed"
            : "🟡 In Progress"}
    </p>

    <p>{progress}% Complete</p>


            <div className="progress-bar">

                <div
                    className="progress-fill"
                    style={{
                        width: `${progress}%`
                    }}
                ></div>

            </div>

        </div>

    );

}

export default GoalProgress;