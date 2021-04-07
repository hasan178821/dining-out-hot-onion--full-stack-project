import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Admin from "./Components/Admin/Admin";
import FoodDetails from "./Components/FoodDetails/FoodDetails";
import DelivaryDetails from "./Components/DelivaryDetails/DelivaryDetails";
import Location from "./Components/Location/Location";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <Header></Header>
          
          <Switch>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/foodDetails/:_id">
              <FoodDetails />
            </Route>
            <PrivateRoute path="/delivaryDetails/:foodName">
              <DelivaryDetails/>
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
