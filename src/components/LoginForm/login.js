import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./login.css";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // 🔁 Redirect if already authenticated
    useEffect(() => {
        const accessToken = Cookies.get("accessToken");
        if (accessToken) {
            navigate("/"); // Redirect to home page
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://ravik00111110.pythonanywhere.com/api/auth/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error("Invalid credentials or CORS error");
            }

            const data = await response.json();
            Cookies.set("accessToken", data.access, { expires: 1 });
            Cookies.set("refreshToken", data.refresh, { expires: 7 });

            navigate("/");
        } catch (error) {
            alert("Login failed: " + error.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="container">
                <div className="login">
                    <fieldset>
                        <legend>Login</legend>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        /><br />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        /><br />
                        <button className="login-button" type="submit">Login</button>
                    </fieldset>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
