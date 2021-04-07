import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Logon from "../pages/Logon";
import Home from "../pages/Home";
import Bet from "../pages/Bet";
import Account from "../pages/Account";
import Reset from "../components/Reset";

const Routes = () => {
    const authenticated = useSelector((state) => state.auth.authenticated);
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {!authenticated ? <Logon /> : <Redirect to="/home" />}
                </Route>
                <Route exact path="/home">
                    {authenticated ? <Home /> : <Redirect to="/" />}
                </Route>
                <Route exact path="/bet">
                    {authenticated ? <Bet /> : <Redirect to="/" />}
                </Route>
                <Route exact path="/account">
                    {authenticated ? <Account /> : <Redirect to="/" />}
                </Route>
                <Route exact path="/reset">
                    <Reset />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
