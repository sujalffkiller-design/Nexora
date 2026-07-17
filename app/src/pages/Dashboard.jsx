import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCard from "../components/DashboardCard";
import AIWidget from "../components/AIWidget";
import RecentActivity from "../components/RecentActivity";
import TaskManager from "../components/TaskManager";
import Notes from "../components/Notes";



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
                

                <h2>Welcome back, Sujal 👋</h2>

                <p>Let's build the future with Nexora.</p>

                <div className="cards">

                    <DashboardCard
                        title="Tasks"
                        value="12"
                    />

                    <DashboardCard
                        title="Goals"
                        value="4"
                    />

                    <DashboardCard
                        title="Notes"
                        value="18"
                    />

                </div>

                <AIWidget />

                <RecentActivity />

               

<Notes />

<TaskManager
    searchText={searchText}
/>
            </main>

        </div>

    );

}

export default Dashboard;