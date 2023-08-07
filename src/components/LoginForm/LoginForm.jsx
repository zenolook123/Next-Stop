import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
   <div style={{margin:'50px'}}>
    <form className="formPanel" onSubmit={login} style={{width:'550px', height:'300px'}}>
      <h1>Welcome Back!</h1>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
        <span style={{fontSize:'1.25rem'}}>Username:</span>
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            style={{height:'25px', width:'200px'}}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
        <span style={{fontSize:'1.25rem'}}>Password:</span>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={{height:'25px', width:'200px'}}
          />
        </label>
      </div>
      <div>
        <Button type='submit' name='submit' variant='contained' style={{marginTop:'30px'}}>Log In</Button>
      </div>
    </form>
    </div>
  );
}

export default LoginForm;
