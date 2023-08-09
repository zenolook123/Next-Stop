import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';

function AllMeetCard() {
  const allMeets = useSelector((store) => store.allMeetReducer);
  const dispatch = useDispatch();
  
  // State for managing modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMeet, setSelectedMeet] = useState();

  useEffect(() => {
    dispatch({
      type: "FETCH_ALL_MEETS",
    });
  }, []);

  const sendInvite = (meetID, memberID) => {
    dispatch({
      type: 'SEND_INVITE',
      payload: {
        meetID,
        memberID,
      },
    });
  };

  const openModal = (meet) => {
    setSelectedMeet(meet);
    setModalOpen(true);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '40px', margin: '30px' }}>
      {allMeets.map((meet) => (
        <Card
          key={meet.id}
          sx={{
            padding: '10px',
            boxSizing: 'border-box',
          }}
          onClick={() => openModal(meet)}
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
            <Button size="small" onClick={() => openModal(meet)}>Details</Button>
            <Button size="small">Attend</Button>
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
            {selectedMeet.meetup_name}
          </Typography>
        </div>
        <div style={{ marginTop: '20px', marginBottom: '30px' }}>
          <Typography variant="h4">
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>
              Address:
            </Typography>
            {selectedMeet.meet_address}
          </Typography>
        </div>
        <div style={{ marginTop: '20px', marginBottom: '0px' }}>
          <Typography variant="h4">
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>
              Description:
            </Typography>
            {selectedMeet.meetup_description}
          </Typography>
        </div>
      </>
    )}
  </div>
</Modal>
    </div>
  );
}

export default AllMeetCard;
