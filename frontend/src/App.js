import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [msg, setMsg] = useState("Loading...");

    useEffect(() => {
        // Note: In production, this should be an environment variable
        axios.get("http://localhost:5000/")
            .then(res => setMsg(res.data.message))
            .catch(() => setMsg("Backend not connected"));
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
            <h1>Two Tier App</h1>
            <h2 style={{ color: "#4A90E2" }}>{msg}</h2>
        </div>
    );
}

export default App;
