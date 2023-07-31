import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
            {user.id ? 'Home' : 'Find the Next Stop!'}
            </Link>
          </Typography>
          {!user.id ? (
            <Link to="/registration" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color="inherit">Register</Button>
            </Link>
          ) : (
            <>
              <Link to="/user" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">Home</Button>
              </Link>
              <Link to="/info" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">Info Page</Button>
              </Link>
              <LogOutButton />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}