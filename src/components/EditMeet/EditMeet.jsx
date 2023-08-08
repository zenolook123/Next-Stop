import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function EditMeet() {

  const editMeet = useSelector((store) => store.editMeetReducer);

  const initialMeetData = editMeet[0];
  const [meetData, setMeetData] = useState(initialMeetData);

  const handleEditMeet = (meetupId) => {
    axios
      .put(`/api/meets/${meetupId}`, meetData)
      .then((response) => {
        alert('Success updating meetup');
        console.log('Meetup updated successfully');
      })
      .catch((error) => {
        alert('Error updating meetup');
        console.error('Error updating meetup:', error);
      });
  };

  const handleDeleteMeet = (meetupId) => {
    axios
      .delete(`/api/meets/${meetupId}`)
      .then((response) => {
        alert('Meetup deleted successfully');
        console.log('Meetup deleted successfully');
      })
      .catch((error) => {
        alert('Error deleting meetup');
        console.error('Error deleting meetup:', error);
      });
  };

  return (
    <Container sx={{ justifyContent: 'left', display: 'flex' }}>
      {editMeet.map((meet) => (
        <div key={meet.id}>
          <h2 style={{ margin: '20px' }}>Choose a name for the meet</h2>
          <TextField
            id={`meetName-${meet.id}`}
            label="Meetup Name"
            style={{ width: '500px' }}
            value={meetData.meetName}
            onChange={(event) => setMeetData({ ...meetData, meetName: event.target.value })}
          />

          <h2 style={{ margin: '20px' }}>Enter Description</h2>
          <TextField
            id={`description-${meet.id}`}
            label="Description"
            multiline
            rows={4}
            style={{ width: '500px' }}
            value={meetData.description}
            onChange={(event) => setMeetData({ ...meetData, description: event.target.value })}
          />


          <h2 style={{ margin: '20px' }}>Enter Address</h2>
          <TextField
            id={`address-${meet.id}`}
            label="Address"
            style={{ width: '500px' }}
            value={meetData.address}
            onChange={(event) => setMeetData({ ...meetData, address: event.target.value })}
          />

          <h2 style={{ margin: '20px' }}>Select Date</h2>
          <TextField
            id={`date-${meet.id}`}
            type="date"
            style={{ width: '500px' }}
            value={meetData.date}
            onChange={(event) => setMeetData({ ...meetData, date: event.target.value })}
          />
          <div style={{margin:'30px'}}>
          <Button onClick={() => handleEditMeet(meet.id)} variant='contained' style={{margin:'20px'}}>Edit Meet</Button>
          <Button onClick={() => handleDeleteMeet(meet.id)} variant='contained' style={{margin:'20px'}}>Delete Meet</Button>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default EditMeet;
