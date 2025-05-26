import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuthGuard } from "../../utils/useAuthGuard";
import Navbar from "../Navbar/navbar"; // Adjust the path based on your structure

import './home.css';

const HomePage = () => {
    useAuthGuard();

    const navigate = useNavigate();



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

                                <button className="item">Theoretical</button>
                                <button className="item" onClick={() => navigate('../CodeAnalysis')}>Code Analysis</button>
                                <button className="item">Theoretical with Code Snippet</button>


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
