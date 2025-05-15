import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { authFetch } from "../../utils/authFetch";
import { useAuthGuard } from "../../utils/useAuthGuard";
import './home.css';

const HomePage = () => {
    useAuthGuard();
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    // Redirect if no access token
    useEffect(() => {
        const accessToken = Cookies.get("accessToken");
        if (!accessToken) {
            navigate("/login");
        }
    }, [navigate]);

    const requestPrompt = async () => {
        const response = await authFetch(
            "https://ravik00111110.pythonanywhere.com/api/content-gen/prompt/",
            {
                method: "POST",
                body: JSON.stringify({ process_name: "ca_mcq_cpp" }),
            },
            navigate
        );

        if (!response) return;

        if (response.status === 200) {
            const data = await response.json();
            console.log("Prompt Data:", data);
            setMessage("Prompt fetched successfully!");
        } else {
            alert("Failed to fetch prompt.");
        }
    };

    const handleLogout = () => {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        navigate("/login");
    };

    return (
        <div className="container">
            <div className="home">
                <h1>Home Page</h1>
                <p>{message}</p>
                <div className="buttons">
                    <div>
                        <button onClick={requestPrompt}>Get Prompt</button>
                    </div>
                    <div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
