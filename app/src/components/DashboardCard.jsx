function DashboardCard({ title, value, subtitle }) {

    return (

        <div className="dashboard-card">

            <h3>{title}</h3>

            <h1>{value}</h1>

            <p>{subtitle}</p>

        </div>

    );

}

export default DashboardCard;