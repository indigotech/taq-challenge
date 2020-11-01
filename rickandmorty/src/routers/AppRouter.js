import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MainScreen } from "../components/MainScreen";
import { CharacterScreen } from "../components/CharacterScreen";

import GlobalStyles from "../styles/global";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={MainScreen} />
            <Route exact path="/:characterId" component={CharacterScreen} />
          </Switch>
        </div>
      </Router>
      <GlobalStyles />
    </>
  );
};
