import React from "react";
import SearchField from "./components/SearchField";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import "./style.css";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={SearchField}/>
            </Switch>
        </Router>
    );
};
export default App;
