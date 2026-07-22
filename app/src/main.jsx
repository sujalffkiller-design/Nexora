import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/globals.css";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster
        position="top-right"
        toastOptions={{
            duration: 2500,
            style: {
                background: "#111827",
                color: "#fff",
                border: "1px solid #374151",
                borderRadius: "12px"
            }
        }}
    />
</React.StrictMode>
);