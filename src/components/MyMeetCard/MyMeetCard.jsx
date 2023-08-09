import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react'; // Import useState
import Modal from '@mui/material/Modal'; // Import Modal component
import { TextField } from '@mui/material';

function MyMeetCard() {
  const myMeets = useSelector((store) => store.myMeetReducer);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMeet, setSelectedMeet] = useState(null);

  const handleClick = (id) => {
    dispatch({
      type: 'EDIT_MEET',
      payload: id,
    });

    // Open the modal on Edit Meet button click
    openModal(id);
  };

  useEffect(() => {
    dispatch({
      type: 'FETCH_MY_MEETS',
    });
  }, []);

  
  const openModal = (id) => {
    const selected = myMeets.find((meet) => meet.id === id);
    setSelectedMeet(selected);
    setModalOpen(true);
  };

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
            <Button size="small">Invite To Meet</Button>
            <Button size="small" onClick={() => handleClick(meet.id)}>Edit Meet</Button>
          </CardActions>
        </Card>
      ))}

      {/* Editable Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', maxWidth: '800px', backgroundColor: 'white', padding: '20px', maxHeight: '80vh', overflowY: 'auto' }}>
          {selectedMeet && (
            <div>
              
              <label>Meetup Name</label>
              

              <label>Meetup Description</label>
              

             
            </div>
          )}
        </div>
      </Modal>
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
          <TextField style={{width:'400px'}}type="text" value={selectedMeet.meetup_name} onChange={(event) => setSelectedMeet({ ...selectedMeet, meetup_name: event.target.value })} />
          </Typography>
        </div>
        <div style={{ marginTop: '20px', marginBottom: '30px' }}>
          <Typography variant="h4">
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>
              Address:
            </Typography>
            <TextField style={{width:'400px'}} value={selectedMeet.meet_address} onChange={(event) => setSelectedMeet({ ...selectedMeet, meet_address: event.target.value })} />
          </Typography>
        </div>
        <div style={{ marginTop: '20px', marginBottom: '0px' }}>
          <Typography variant="h4">
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>
              Description:
            </Typography>
            <TextField style={{width:'400px', height:'400px'}} rows={4} value={selectedMeet.meetup_description} onChange={(event) => setSelectedMeet({ ...selectedMeet, meetup_description: event.target.value })} />
          </Typography>
        </div>
      </>
    )}
  </div>
</Modal>
    </div>
  );
}

export default MyMeetCard;
