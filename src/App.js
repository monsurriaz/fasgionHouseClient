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
import MensClothesDetail from './components/pages/MensClothesDetail/MensClothesDetail'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Mens from './components/pages/Mens/Mens';
import Womens from './components/pages/Womens/Womens';
import WomenClothesDetail from './components/pages/WomensClothesDetail/WomenClothesDetail';
import MaterialAllDetail from './components/pages/MaterialAllDetail/MaterialAllDetail';
import Material from './components/pages/Material/Material'


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router >
        <ScrollToTop/>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path="/mens">
            <Mens></Mens>
          </Route>
          <Route path="/goods">
            <Material></Material>
          </Route>
          <Route path="/womens">
            <Womens/>
          </Route>
          <Route path='/addProducts'>
            <AddProducts />
          </Route>
          <Route path='/makeAdmin'>
            <AddAdmin />
          </Route>
          <Route path='/products/:productKey'>
            <ClothesDetails />
          </Route>
          <Route path='/attire/:attireKey'>
            <MensClothesDetail/>
          </Route>
          <Route path='/cloth/:clothKey'>
            <WomenClothesDetail/>
          </Route>
          <Route path='/things/:thingsKey'>
            <MaterialAllDetail/>
          </Route>
          <Route exact path='/'>
            <Home />
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
