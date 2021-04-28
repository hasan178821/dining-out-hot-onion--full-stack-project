import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/HomePage/Home/Home";
import FoodDetails from "./Components/FoodDetails/FoodDetails";
import DeliveryDetails from "./Components/DeliveryDetails/DeliveryDetails";
import Location from "./Components/Location/Location";
import Header from "./Components/HomePage/Header/Header";
import Admin from "./Components/AdminPage/Admin/Admin";
import OrderedCartData from "./Components/AdminPage/OrderedCartData/OrderedCartData";
import Login from "./Components/Shared/Login/Login";
import PrivateRoute from "./Components/Shared/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <Header></Header>

          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/orderedCartData">
              <OrderedCartData />
            </Route>
            <Route path="/foodDetails/:_id">
              <FoodDetails />
            </Route>
            <PrivateRoute path="/deliveryDetails/:foodName">
              <DeliveryDetails/>
            </PrivateRoute>
            <Route path="/location">
              <Location/>
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
