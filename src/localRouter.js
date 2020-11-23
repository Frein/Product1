import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import CounterPage from "./pages/counter";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import React from "react";

export default function LocalRouter() {
    return <Router><Switch>
        <Route path="/page1">
            <Page1/>
        </Route>
        <Route path="/page2">
            <Page2/>
        </Route>
        <Route path="/">
            <CounterPage/>
        </Route>
    </Switch></Router>
}