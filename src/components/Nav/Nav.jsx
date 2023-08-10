import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Notifications from '../Notifications/Notifications';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';



export default function Nav() {
  const user = useSelector((store) => store.user);
  const invites = useSelector((store) => store.inviteReducer);
  const dispatch = useDispatch();

  const handleDashClick = () => {
    dispatch({
      type: 'FETCH_ALL_MEETS',
    });
  };

  useEffect(() => {
    dispatch({
      type: 'FETCH_INVITES',
    });
  }, []);

  const [anchorEl, setAnchorEl] = useState();

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);


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
              <IconButton
                aria-label="notifications"
                color="inherit"
                aria-describedby="notifications-popover"
                onClick={handlePopoverOpen}
              >
                {invites.length > 0 ? <NotificationsActiveIcon /> : <NotificationsIcon />}
              </IconButton>
              <Popover
                id="notifications-popover"
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Notifications />
              </Popover>

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
                style={{ marginRight: '30px' }}
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
