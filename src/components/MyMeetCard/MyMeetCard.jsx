import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'; // Import axios for HTTP requests
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

function MyMeetCard() {
  const myMeets = useSelector((store) => store.myMeetReducer);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMeet, setSelectedMeet] = useState();

  const handleClick = (id) => {
    const selected = myMeets.find((meet) => meet.id === id);
    setSelectedMeet(selected);
    setModalOpen(true);
  };

  const handleEditMeet = () => {
    axios
      .put(`/api/meets/${selectedMeet.id}`, selectedMeet)
      .then((response) => {
        alert('Success updating meetup');
        console.log('Meetup updated successfully');
      })
      .catch((error) => {
        alert('Error updating meetup');
        console.error('Error updating meetup:', error);
      });
  };
  

  const handleDeleteMeet = (id) => {
    axios
      .delete(`/api/meets/${id}`)
      .then((response) => {
        alert('Meetup deleted successfully');
        dispatch({ type: 'FETCH_MY_MEETS' });
      })
      .catch((error) => {
        alert('Error deleting meetup');
        console.error('Error deleting meetup:', error);
      });
  };

  useEffect(() => {
    dispatch({
      type: 'FETCH_MY_MEETS',
    });
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '40px', justifyContent: 'center', margin: '15px', marginLeft: '25px' }}>
      {myMeets.map((meet) => (
        <Card
          key={meet.id}
          sx={{
            padding: '10px',
            boxSizing: 'border-box',
          }}
        >
          <CardMedia component="img" alt="No Picture Set" height="200" image={meet.meetup_picture} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {meet.meetup_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {meet.meetup_description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleClick(meet.id)}>Edit Meet</Button>
            <Button onClick={() => handleDeleteMeet(meet.id)}>Delete Meet</Button>
          </CardActions>
        </Card>
      ))}

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', maxWidth: '800px', backgroundColor: 'white', padding: '20px', maxHeight: '80vh', overflowY: 'auto' }}>
          {selectedMeet && (
            <>
              <CardMedia component="img" image={selectedMeet.meetup_picture} />
              <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Typography variant="h2" style={{ textAlign: 'center' }}>
                  <TextField style={{ width: '400px' }} type="text" value={selectedMeet.meetup_name} onChange={(event) => setSelectedMeet({ ...selectedMeet, meetup_name: event.target.value })} />
                </Typography>
              </div>
              <div style={{ marginTop: '20px', marginBottom: '30px' }}>
                <Typography variant="h4">
                  <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    Address:
                  </Typography>
                  <TextField style={{ width: '400px' }} value={selectedMeet.meet_address} onChange={(event) => setSelectedMeet({ ...selectedMeet, meet_address: event.target.value })} />
                </Typography>
              </div>
              <div style={{ marginTop: '20px', marginBottom: '0px' }}>
                <Typography variant="h4">
                  <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    Description:
                  </Typography>
                  <TextField style={{ width: '600px', height: '600px' }} multiline rows={6} value={selectedMeet.meetup_description} onChange={(event) => setSelectedMeet({ ...selectedMeet, meetup_description: event.target.value })} />
                </Typography>
                <Button variant="contained" onClick={handleEditMeet}>Save Details</Button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default MyMeetCard;
