import { useState } from "react";
import NotificationPanel from "./NotificationPanel";
import ProfileMenu from "./ProfileMenu";

function Topbar({

    darkMode,
    setDarkMode,
    searchText,
    setSearchText

}) {

    const [showNotifications, setShowNotifications] = useState(false);

    const [showProfileMenu, setShowProfileMenu] = useState(false);

    return (

        <header className="topbar">

            <h2>Dashboard</h2>

            <div className="topbar-right">

              <input
               type="text"
               placeholder="Search tasks..."
               value={searchText}
               onChange={(e) => setSearchText(e.target.value)}
                />

               <button
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                      🔔
                </button>

                {showNotifications && <NotificationPanel />}

                <button onClick={() => setDarkMode(!darkMode)}>
                      {darkMode ? "🌙" : "☀️"}
                </button>

                <div className="profile-container">

         <div
            className="profile"
        onClick={() => setShowProfileMenu(!showProfileMenu)}
         >
                      SS
        </div>

            {showProfileMenu && <ProfileMenu />}

      </div>

            </div>

        </header>

    );

}

export default Topbar;