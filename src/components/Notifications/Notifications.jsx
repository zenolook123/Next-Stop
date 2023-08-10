import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

export default function Notifications() {
  const invites = useSelector((store) => store.inviteReducer);
  const dispatch = useDispatch();

  const handleAccept = (inviteId) => {
    // Dispatch an action to accept the invite with the given ID
    dispatch({
      type: 'ACCEPT_INVITE',
      payload: inviteId,
    });
  };

  const handleDecline = (inviteId) => {
    // Dispatch an action to decline the invite with the given ID
    dispatch({
      type: 'DECLINE_INVITE',
      payload: inviteId,
    });
  };

  return (
    <div>
      {invites.map((invite) => (
        <div key={invite.meetup_id} style={{ marginBottom: '10px' }}>
          <p>You have received an invite for Meetup ID: {invite.meetup_id}</p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleAccept(invite.meetup_id)}
            style={{ marginRight: '10px' }}
          >
            Accept
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleDecline(invite.meetup_id)}
          >
            Decline
          </Button>
        </div>
      ))}
    </div>
  );
}
