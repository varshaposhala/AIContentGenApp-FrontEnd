import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { authFetch } from "../../utils/authFetch";
import { useAuthGuard } from "../../utils/useAuthGuard";
import Navbar from "../Navbar/navbar";
import './codeAnalysis.css';

const CodeAnalysis = () => {
    useAuthGuard();
    const navigate = useNavigate();

    const [technology, setTechnology] = useState("");
    const [processName, setProcessName] = useState("");
    const [topic, setTopic] = useState("");
    const [numberOfQuestions, setNumberOfQuestions] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [topicTag, setTopicTag] = useState("");
    const [subTopicTag, setSubTopicTag] = useState("");
    const [syllabus, setSyllabus] = useState("");
    const [message, setMessage] = useState("");
    const [rawPrompt, setRawPrompt] = useState("");
    const [loading, setLoading] = useState(false); // <-- added loading state

    const techToProcessName = {
        CPP: "ca_mcq_cpp",
        Python: "ca_mcq_python",
        Java: "ca_mcq_java",
        C: "ca_mcq_c",
        Javascript: "ca_mcq_javascript",
        Sql: "ca_mcq_sql",
    };

    const allFieldsFilled = () => {
        return (
            technology && technology !== "default" &&
            difficulty && difficulty !== "default" &&
            topic && numberOfQuestions &&
            topicTag && subTopicTag &&
            syllabus
        );
    };

    const requestQuestions = async () => {
        if (!allFieldsFilled()) return;

        setLoading(true);  // disable button here

        const currentPrompt = updateMessage(rawPrompt);
        console.log("Questions generation logic...");
        console.log(currentPrompt);

        try {
            const response = await authFetch(
                "https://ravik00111110.pythonanywhere.com/api/content-gen/generate/",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        prompt: currentPrompt,
                        difficulty: difficulty,
                        question_type: "MCQ",
                        topic: topic,
                        subtopic: subTopicTag,
                        number_of_question: numberOfQuestions
                    }),
                },
                navigate
            );
            const data = await response.json();
            console.log("Received data:", data.message);
            // handle your data here
        } catch (error) {
            console.error("Error fetching questions:", error);
        } finally {
            setLoading(false); // enable button again after completion
        }
    };

    const handleTechnologyChange = async (e) => {
        const value = e.target.value;
        setTechnology(value);

        const mappedProcessName = techToProcessName[value];
        setProcessName(mappedProcessName);

        if (!mappedProcessName) return;

        const response = await authFetch(
            "https://ravik00111110.pythonanywhere.com/api/content-gen/prompt/",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ process_name: mappedProcessName }),
            },
            navigate
        );

        if (!response) return;

        if (response.status === 200) {
            const data = await response.json();
            setRawPrompt(data.prompt);
            updateMessage(data.prompt);
        } else {
            alert("Failed to fetch prompt.");
        }
    };

    const updateMessage = (template, overrides = {}) => {
        const replacements = {
            "{{technology}}": overrides.technology ?? technology,
            "{{topic}}": overrides.topic ?? topic,
            "{{no_of_questions}}": overrides.number_of_questions ?? numberOfQuestions,
            "{{difficulty_level}}": overrides.difficulty ?? difficulty,
            "{{topic_tag}}": overrides.topic_tag ?? topicTag,
            "{{sub_topic_tag}}": overrides.sub_topic_tag ?? subTopicTag,
            "{{syllabus_details}}": overrides.syllabus ?? syllabus,
        };

        let updated = template;
        Object.entries(replacements).forEach(([key, val]) => {
            const regex = new RegExp(key, "g");
            updated = updated.replace(regex, val || key);
        });

        setMessage(updated);
        return updated;
    };

    const handleLogout = () => {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        navigate("/login");
    };

    return (
        <div>
            <Navbar handleLogout={handleLogout} />
            <div className="containerCA">
                <fieldset className="codeAnalysis">
                    <legend className="codeAnalysisLegand">Code Analysis Question</legend>

                    <div className="itemsCA">
                        <select className="itemCA1" value={technology} onChange={handleTechnologyChange}>
                            <option value="default">Technology</option>
                            <option value="CPP">CPP</option>
                            <option value="Python">Python</option>
                            <option value="Java">Java</option>
                            <option value="C">C</option>
                            <option value="Javascript">Javascript</option>
                            <option value="Sql">Sql</option>
                        </select>

                        <input type="text" className="caBoxes" placeholder="Enter Topic" value={topic} onChange={(e) => {
                            const newValue = e.target.value;
                            setTopic(newValue);
                            updateMessage(rawPrompt, { topic: newValue });
                        }} />

                        <input
                            type="text"
                            className="caBoxes"
                            placeholder="Enter Number of Questions"
                            value={numberOfQuestions}
                            onChange={(e) => {
                                const newValue = e.target.value.replace(/[^0-9]/g, '');
                                setNumberOfQuestions(newValue);
                                updateMessage(rawPrompt, { number_of_questions: newValue });
                            }}
                            onKeyDown={(e) => {
                                if (!/[0-9]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }}
                        />


                        <select className="itemCA1" value={difficulty} onChange={(e) => {
                            const newValue = e.target.value;
                            setDifficulty(newValue);
                            updateMessage(rawPrompt, { difficulty: newValue });
                        }}>
                            <option value="default">Choose Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>

                        <input type="text" className="caBoxes tag" placeholder="Enter Topic Tag" value={topicTag} onChange={(e) => {
                            const newValue = e.target.value;
                            setTopicTag(newValue);
                            updateMessage(rawPrompt);
                        }} />
                        <input type="text" className="caBoxes tag" placeholder="Enter Subtopic Tag" value={subTopicTag} onChange={(e) => {
                            const newValue = e.target.value;
                            setSubTopicTag(newValue);
                            updateMessage(rawPrompt);
                        }} />
                    </div>

                    <textarea className="caTextArea" placeholder="Enter Syllabus details" value={syllabus} onChange={(e) => {
                        const newValue = e.target.value;
                        setSyllabus(newValue);
                        updateMessage(rawPrompt, { syllabus: newValue });
                    }}></textarea>

                    <textarea
                        className="caTextArea"
                        placeholder="Fetched prompt"
                        value={message}
                        onChange={(e) => {
                            const newTemplate = e.target.value;
                            setRawPrompt(newTemplate);  // update the template
                            updateMessage(newTemplate);
                        }}
                    ></textarea>

                    <div className="btnWrapperCentered">
                        <button
                            className={`itemCA fetchBtn ${!allFieldsFilled() || loading ? "disabledBtn" : ""}`}
                            onClick={requestQuestions}
                            disabled={!allFieldsFilled() || loading} // disable button if loading
                        >
                            {loading ? "Loading..." : "Generate Questions"}
                        </button>
                    </div>

                </fieldset>
            </div>
        </div>
    );
};

export default CodeAnalysis;
