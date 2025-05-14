import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import './home.css';
const HomePage = () => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    // Function to request the prompt and refresh token if expired
    const requestPrompt = async () => {
        const accessToken = Cookies.get("accessToken");
        const refreshToken = Cookies.get("refreshToken");

        if (!accessToken) {
            alert("No access token found. Please log in.");
            navigate("/login");
            return;
        }

        try {
            const response = await fetch("https://ravik00111110.pythonanywhere.com/api/content-gen/prompt/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({ "process_name": "ca_mcq_cpp" }),
            });

            console.log("Response Status:", response);
            if (response.status === 200) {
                const data = await response.json();
                console.log("Prompt Data:", data);
                setMessage("Prompt fetched successfully!");
            } else if (response.status === 401) {

                if (!refreshToken) {
                    console.log("no refresh token");
                    navigate("/login");
                    return;
                }

                const refreshResponse = await fetch("https://ravik00111110.pythonanywhere.com/api/auth/token/refresh/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ "refresh": refreshToken }),
                });

                if (!refreshResponse.ok) {
                    const refreshData = await refreshResponse.json();
                    if (refreshData.status === "401") {
                        navigate("/login");
                    }
                    return;
                }

                const refreshData = await refreshResponse.json();
                Cookies.set("accessToken", refreshData.accessToken, { expires: 1 });

                requestPrompt();

            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while fetching the prompt.");
        }
    };

    return (
        <div className="container">
            <div className="home">
                <h1>Home Page</h1>
                <p>{message}</p>
                <div className="buttons">
                    <div>
                        {/* Button to trigger prompt request */}
                        <button onClick={requestPrompt}>Get Prompt</button>
                    </div>
                    <div>
                        {/* Logout Button */}
                        <button onClick={() => {
                            Cookies.remove("accessToken");
                            Cookies.remove("refreshToken");
                            navigate("/login");
                        }}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
