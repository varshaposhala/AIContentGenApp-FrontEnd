import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { authFetch } from "../../utils/authFetch";
import { useAuthGuard } from "../../utils/useAuthGuard";
import Navbar from "../Navbar/navbar"; // Adjust the path based on your structure
import './home.css';

const HomePage = () => {
    useAuthGuard();
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const requestPrompt = async () => {
        const response = await authFetch(
            "https://ravik00111110.pythonanywhere.com/api/content-gen/prompt/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
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
        <>
            <Navbar handleLogout={handleLogout} />
            <div className="container1">


                <div className="MCQ">
                    <div className="Section">
                        <fieldset>
                            <legend>Multiple Choice Questions</legend>


                            <div className="Items">
                                <button className="item">Theory MCQ</button>
                                <button className="item">Code Analysis MCQ</button>
                                <button className="item">Theory With Psuedocode</button>

                            </div>
                        </fieldset>
                    </div>
                    <div className="Section">
                        <fieldset>
                            <legend>Coding</legend>
                            <div className="Items">
                                <button className="item">Python Coding</button>
                                <button className="item">Web Coding</button>
                                <button className="item">SQL Coding</button>
                            </div>
                        </fieldset>
                    </div>
                </div>

            </div>

        </>
    );
};

export default HomePage;
