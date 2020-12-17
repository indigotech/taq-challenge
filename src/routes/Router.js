import React from 'react';
//routes
import { Switch, Route } from 'react-router-dom';

//Pages
import SplashScreen from '../screens/SplashScreen';
import DetailsPage from '../screens/DetailsPage/DetailsPage';
import HomePage from '../screens/HomePage/HomePage';
import ErrorPage from '../screens/ErrorPage/ErrorPage';

export default function Router() {
    return (
            <Switch>
                <Route exact path={'/'}>
                    <SplashScreen />
                </Route>
                <Route exact path={'/home'}>
                    <HomePage />
                </Route>
                <Route exact path={'/characterDetails/:id'}>
                    <DetailsPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
    )
}