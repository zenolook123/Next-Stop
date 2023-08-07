import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <div style={{margin:'50px'}}>
    <form className="formPanel" onSubmit={registerUser} style={{width:'550px', height:'300px'}}>
      <h1>Register User</h1>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
        <span style={{fontSize:'1.25rem'}}>Username:</span>
          <input
            type="text"
            name="username"
            value={username}
            required
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
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
            style={{height:'25px', width:'200px'}}
          />
        </label>
      </div>
      <div>
        <Button type='submit' name="submit" value="register" variant='contained' style={{marginTop:'30px'}}>Register</Button>
      </div>
    </form>
    </div>
  );
}

export default RegisterForm;
