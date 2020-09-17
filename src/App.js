import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import DestinationDetails from './Components/Destination/DestinationDetails';
import DestinationData from '../src/DestinationData/DestinationData'
import Book from './Components/Book/Book';
import Menu from './Components/Home/Menu';
import { CssBaseline } from '@material-ui/core';
import SignUp from './Components/Forms/SignUp';
import PrivateRoute from './Components/Forms/PrivateRoute';
import SocialLogin from './Components/Forms/SocialLogin';


export const UserContext = createContext();

function App() {
  const [destination, setDestination] = useState(DestinationData);
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className='appBody'>
      <UserContext.Provider value={{value1:[destination, setDestination], value2:[loggedInUser, setLoggedInUser]}}>
        <h4>Name: {loggedInUser.name}</h4>
        <Router>
          <Menu />
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/destination/:placeId'>
              <DestinationDetails />
            </Route>
            <Route path='/book/:id'>
                <SignUp />
            </Route>
            <PrivateRoute path='/book/:id'>
              <Book />
            </PrivateRoute>
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </Router>
        <CssBaseline />
      </UserContext.Provider>
    </div>
  );
}

export default App;
