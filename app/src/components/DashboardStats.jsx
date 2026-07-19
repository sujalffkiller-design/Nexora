function DashboardStats({

    notes = 0,
    tasks = 0,
    goals = 0,
    events = 0

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

        </div>

    );

}

export default DashboardStats;