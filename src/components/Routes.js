import React from "react";
import { Route, Switch } from 'react-router-dom';
import { SearchField } from "./SearchField";

export const Routes = () => (
    <Switch>
        <Route exact path="/" render={props => <SearchField {...props}/>}/>
    </Switch>
);
