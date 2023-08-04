import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';

function MyMeetCard() {
  const myMeets = useSelector((store) => store.myMeetReducer);
  const dispatch = useDispatch()
  const handleClick = (id) =>{
    dispatch({
        type:'EDIT_MEET',
        payload:id
    })
  }

  useEffect(() => {
    dispatch({
        type: "FETCH_MY_MEETS",
      });
  }, []);

  return (
    
    <div style={{ display: 'flex', justifyContent: 'center', margin:'30px' }}>
      {myMeets.map((meet) => (
        <Card
          key={meet.id}
          sx={{
            maxWidth: 300,
            margin: '20px',
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
            <Link to={`editmeet/${meet.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button size="small" onClick={handleClick(meet.id)}>Edit Meet</Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default MyMeetCard;
