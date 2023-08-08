import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../../Theme/Theme';
import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import MyMeets from '../MyMeets/MyMeets'
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import EditMeet from '../EditMeet/EditMeet'

import './App.css';
import CreateAMeet from '../CreateAMeet/CreateAMeet';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import MeetDashboard from '../MeetDashboard/MeetDashboard';
import InvitesPage from '../InvitesPage/InvitesPage';

function App() {
  
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
<>
<ThemeProvider theme={theme}>
  <CssBaseline>
<LocalizationProvider dateAdapter={AdapterDayjs}>
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/mymeets"
          >
           <MyMeets />
          </ProtectedRoute>
          
          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
              <LandingPage />
          </Route>

          <Route
            exact
            path="/createameet"
          >
            <CreateAMeet />
          </Route>

          <Route
            exact
            path="/meetdashboard"
          >
            <MeetDashboard />
            
          </Route>
          <Route
            exact
            path="/notifications"
          >
            <InvitesPage />
            
          </Route>

          <Route
            exact
            path="/editmeet/:id"
          >
            <EditMeet />
            
          </Route>
          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>No Matches</h1>
          </Route>
        </Switch>
      </div>
    </Router>
    </LocalizationProvider>
    </CssBaseline>
    </ThemeProvider>
    </>
  );
}

export default App;
