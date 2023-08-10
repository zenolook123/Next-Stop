import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useEffect } from 'react';

export default function Nav() {
  const user = useSelector((store) => store.user);
  const invites = useSelector((store) => store.invites)
  const dispatch = useDispatch()

  const handleDashClick = () => {
    dispatch({
      type: 'FETCH_ALL_MEETS'
    })
  }

  useEffect(() => {
    dispatch({
      type: "FETCH_INVITES",
    });
  }, []);



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
              {user.id ? `Welcome back ${user.username}!` : 'Find the Next Stop!'}
            </Link>
          </Typography>
          {!user.id ? (
            <>
              <Link to="/registration" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">Register</Button>
              </Link>
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">Already have an account?</Button>
              </Link>
            </>
          ) : (
            <>

              <Link to="/notifications" style={{ textDecoration: 'none', color: 'inherit', marginRight:'20px' }}>
              {invites ? (
                <NotificationsIcon />) : (
                <NotificationsActiveIcon />
              )}
              </Link>


              <Link to="/user" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">Your Profile</Button>
              </Link>
              <Link to="mymeets" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">My Meets</Button>
              </Link>
              <Link to="/createameet" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">Create a Meet</Button>
              </Link>
              <Link to="/meetdashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit" onClick={handleDashClick}>Dashboard</Button>
              </Link>
              <Button
                variant="contained"
                onClick={() => dispatch({ type: 'LOGOUT' })}
                style={{marginRight:'30px'}}
              >
                Log Out
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}