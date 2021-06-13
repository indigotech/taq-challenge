import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// importar as paginas

const Router = () => {
<BrowserRouter>
<Switch>
    <Route exact path="/:page">
        <div>pagina inicial e próximas</div>
    </Route>
    <Route exact path="/character/:id">
        <div>pagina do personagem</div>
    </Route>
    <Route>
        <div>pagina de erro</div>
    </Route>
</Switch>
</BrowserRouter>
}
export default Router;