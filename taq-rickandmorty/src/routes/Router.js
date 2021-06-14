import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharacterList from "../pages/CharacterList";
import CharacterDetail from "../pages/CharacterDetail";
import ErrorPage from "../pages/ErrorPage"

const Router = () => {
    return(
<BrowserRouter>
<Switch>
    <Route exact path="/">
        <CharacterList/>
    </Route>

    <Route exact path="/:page">
        <CharacterList/>
    </Route>

    <Route exact path="/character/:id">
        <CharacterDetail/>
    </Route>

    <Route>
        <ErrorPage/>
    </Route>

</Switch>
</BrowserRouter>
);
};
export default Router;