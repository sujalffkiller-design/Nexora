import { useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {

    const [darkMode, setDarkMode] = useState(true);
    const [searchText, setSearchText] = useState("");

    return (

        <div className={darkMode ? "dark-mode" : "light-mode"}>

            <Dashboard
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                searchText={searchText}
                setSearchText={setSearchText}
            />

        </div>

    );

}

export default App;