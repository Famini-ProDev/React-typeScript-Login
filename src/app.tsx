import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { LoginContainer } from "./pages/login.container";
import { secondPage } from "./pages/secondPage";

export const App = () => {
    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact={true} path="/" component={LoginContainer} />
                    <Route path="/secondPage" component={secondPage} />
                </Switch>
            </HashRouter>
        </>
    );
};