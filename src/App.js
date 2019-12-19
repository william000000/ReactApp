import React from "react";
import SearchField from "./components/SearchField";
import OutputField from "./components/OutputField";
import "./style.css";

const App = () => {
    return (
        <div className="app">
            <SearchField />
            <OutputField />
        </div>
    );
};
export default App;
