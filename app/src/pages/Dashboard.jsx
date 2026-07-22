

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCard from "../components/DashboardCard";
import DashboardStats from "../components/DashboardStats";
import AIWidget from "../components/AIWidget";
import RecentActivity from "../components/RecentActivity";
import TaskManager from "../components/TaskManager";
import Notes from "../components/Notes";
import Goals from "../components/Goals";
import Calendar from "../components/Calendar";
import ProductivityChart from "../components/ProductivityChart";

function Dashboard({

    darkMode,
    setDarkMode,
    searchText,
    setSearchText

}){

const notes =
    JSON.parse(localStorage.getItem("nexoraNotes")) || [];

const goals =
    JSON.parse(localStorage.getItem("nexoraGoals")) || [];

const events =
    JSON.parse(localStorage.getItem("nexoraCalendarEvents")) || [];

const tasks =
    JSON.parse(localStorage.getItem("nexoraTasks")) || [];

const completedTasks =
    tasks.filter(task => task.completed).length;

const pendingTasks =
    tasks.filter(task => !task.completed).length;

const highPriorityTasks =
    tasks.filter(task => task.priority === "High").length;

const overdueTasks =
    tasks.filter(task => {

        if (!task.dueDate || task.completed) return false;

        const today =
            new Date().toISOString().split("T")[0];

        return task.dueDate < today;

    }).length;

const completionRate =
    tasks.length === 0
        ? 0
        : Math.round((completedTasks / tasks.length) * 100);



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

                    <span>
                        🚀 Build • Learn • Organize • Grow
                    </span>

                </div>

                {/* Dashboard Stats */}

              <DashboardStats
                notes={notes.length}
                tasks={tasks.length}
                goals={goals.length}
                events={events.length}

                completedTasks={completedTasks}
                pendingTasks={pendingTasks}
                highPriorityTasks={highPriorityTasks}
                overdueTasks={overdueTasks}
                completionRate={completionRate}
            />

            <ProductivityChart
                notes={notes.length}
                tasks={tasks.length}
                goals={goals.length}
                events={events.length}
            />
                {/* Quick Cards */}

                <div className="cards">

                    <DashboardCard
                        title="📋 Tasks"
                        value={tasks.length}
                        subtitle={`${pendingTasks} Pending`}
                    />

                    <DashboardCard
                        title="🎯 Goals"
                        value={goals.length}
                        subtitle="Keep pushing!"
                    />

                    <DashboardCard
                        title="📝 Notes"
                        value={notes.length}
                        subtitle="Saved Notes"
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