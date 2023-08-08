import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
function AllMeetCard() {
  const allMeets = useSelector((store) => store.allMeetReducer);
 const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch({
        type: "FETCH_ALL_MEETS",
      });
  }, []);
 
  const sendInvite = (meetID,memberID) => {
    dispatch({
      type:'SEND_INVITE',
      payload: {
        meetID,
        memberID
      }
    })
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '40px', margin: '30px' }}>
      {allMeets.map((meet) => (
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
            <Button size="small">Attend</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
 }  

export default AllMeetCard;
