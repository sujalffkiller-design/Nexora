function RecentActivity() {

    const activities = [

        "✅ Completed React Basics",

        "📝 Added note 'Meeting Notes'",

        "🎯 Updated Goal 'Gym 30 Days'"

    ];

    return (

        <div className="recent-activity">

            <h2>Recent Activity</h2>

            <ul>

                {activities.map((activity, index) => (

                    <li key={index}>{activity}</li>

                ))}

            </ul>

        </div>

    );

}

export default RecentActivity;