import React from 'react';
import MyMeetCard from '../MyMeetCard/MyMeetCard';
import { Container } from '@mui/material';

function MyMeets() {

  return (
    <Container>
    <div style={{margin:'0px', paddingTop:'40px'}}>
      <h2 style={{marginLeft:'30px',marginBottom:'0px'}}>Click on "Invite" or "Edit" to see more about your meets</h2>
      <MyMeetCard />
    </div>
    </Container>
  );
}

export default MyMeets;
