import React from 'react';

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';

const RoutesIndex: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Dashboard />} />
        <Route path="/details/*" element={<Details />} />
      </Switch>
    </Router>
  );
};

export default RoutesIndex;
