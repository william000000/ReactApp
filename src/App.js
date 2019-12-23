import React from "react";
import SearchField from "./components/SearchField";
import OutputField from "./components/OutputField";
import Speech from "./components/SpeechVoice";
import "./style.css";

const App = () => {
    return (
        <div className="app">
            <SearchField />
            <Speech />
            <OutputField />
        </div>
    );
};
export default App;
