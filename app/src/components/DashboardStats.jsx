function DashboardStats({

    notes = 0,
    tasks = 0,
    goals = 0,
    events = 0,

    completedTasks = 0,
    pendingTasks = 0,
    highPriorityTasks = 0,
    overdueTasks = 0,
    completionRate = 0

}) {

    return (

        <div className="dashboard-stats">

            <div className="stat-card">

                <h3>📝 Notes</h3>

                <span>{notes}</span>

            </div>

            <div className="stat-card">

                <h3>📌 Tasks</h3>

                <span>{tasks}</span>

            </div>

            <div className="stat-card">

                <h3>🎯 Goals</h3>

                <span>{goals}</span>

            </div>

            <div className="stat-card">

                <h3>📅 Events Today</h3>

                <span>{events}</span>

            </div>
                        <div className="stat-card">

                <h3>✅ Completed</h3>

                <span>{completedTasks}</span>

            </div>

            <div className="stat-card">

                <h3>⏳ Pending</h3>

                <span>{pendingTasks}</span>

            </div>

            <div className="stat-card">

                <h3>🔴 High Priority</h3>

                <span>{highPriorityTasks}</span>

            </div>

            <div className="stat-card">

                <h3>🚨 Overdue</h3>

                <span>{overdueTasks}</span>

            </div>

            <div className="stat-card">

                <h3>📈 Completion</h3>

                <span>{completionRate}%</span>

            </div>

        </div>

    );

}

export default DashboardStats;