import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCard from "../components/DashboardCard";
import AIWidget from "../components/AIWidget";
import RecentActivity from "../components/RecentActivity";
import TaskManager from "../components/TaskManager";
import Notes from "../components/Notes";
import Goals from "../components/Goals";
import Calendar from "../components/Calendar";



function Dashboard({

    darkMode,
    setDarkMode,
    searchText,
    setSearchText

}) {

    return (

        <div className="app">

            <Sidebar />

            <main className="main-content">

                <Topbar
                      darkMode={darkMode}
                     setDarkMode={setDarkMode}
                     searchText={searchText}
                      setSearchText={setSearchText}
                />
                

                <div className="hero-section">

    <h1>👋 Welcome back, Sujal</h1>

    <p>Your AI-powered life operating system.</p>

    <span>🚀 Build • Learn • Organize • Grow</span>

</div>

                <div className="cards">

                  <DashboardCard
                    title="📋 Tasks"
                    value="12"
                    subtitle="+2 completed today"
                />

                <DashboardCard
                    title="🎯 Goals"
                    value="4"
                    subtitle="2 completed"
                />

            <DashboardCard
                title="📝 Notes"
                value="18"
                subtitle="Last updated today"
            />

                </div>

                <AIWidget />

                <RecentActivity />

                <Goals />

                <Calendar />

               

<Notes />

<TaskManager
    searchText={searchText}
/>
            </main>

        </div>

    );

}

export default Dashboard;