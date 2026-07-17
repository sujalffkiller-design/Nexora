function NotificationPanel() {

    const notifications = [
        "📌 Complete React project",
        "🤖 AI generated a new suggestion",
        "🎯 Goal deadline is tomorrow"
    ];

    return (

        <div className="notification-panel">

            <h3>Notifications</h3>

            <ul>

                {notifications.map((item, index) => (

                    <li key={index}>{item}</li>

                ))}

            </ul>

        </div>

    );

}

export default NotificationPanel;