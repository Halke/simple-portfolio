import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import BrowserPage from "../components/FullPage/BrowserPage";
import "../css/App.css";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={BrowserPage}/>
            </Switch>
        </Router>
    )
}

export default AppRouter;
