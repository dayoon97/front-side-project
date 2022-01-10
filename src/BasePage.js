import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Main} from "./pages/Main";
import Header from "./layout/Header";
import Intro from "./pages/Intro";

export default function BasePage() {
    return (
        <BrowserRouter>
            <Switch>
                {
                    <Redirect exact from="/" to="/intro"/>
                }
                <Route path="/intro" component={Intro}/>
                <>
                    <Header/>
                    <Route path="/main" component={Main}/>
                </>
            </Switch>
        </BrowserRouter>
    );
}