import { Route, Routes, BrowserRouter } from "react-router-dom";

import LoginForm from "./components/LoginForm/login";
import Home from "./components/HomePage/home";
import CodeAnalysis from "./components/CodeAnalysis/codeAnalysis";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/" element={<Home />} />
                <Route path="/CodeAnalysis" element={<CodeAnalysis />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

