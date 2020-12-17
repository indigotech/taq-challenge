import { BrowserRouter, Route } from 'react-router-dom';
//component
import Header from '../components/Header/Header/Header';
//route
import Router from '../routes/Router';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path={["/home", "/characterDetails"]}>
      </Route>
      <Router />
    </BrowserRouter>
  );
}
