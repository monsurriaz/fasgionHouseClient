import { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/Home/Home';
import Dashboard from './components/dashboard/Dashboard/Dashboard';
import AddProducts from './components/dashboard/AddProducts/AddProducts';
import NoMatch from './components/NoMatch/NoMatch';
import AddAdmin from './components/dashboard/AddAdmin/AddAdmin';
import ClothesDetails from './components/pages/ClothesDetail/ClothesDetail';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/addProducts'>
            <AddProducts />
          </Route>
          <Route path='/makeAdmin'>
            <AddAdmin />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products/:productKey'>
            <ClothesDetails />
          </Route>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
