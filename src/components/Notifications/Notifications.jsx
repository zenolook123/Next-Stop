import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

export default function Notifications() {
  const invites = useSelector((store) => store.inviteReducer);
  const meets = useSelector((store) => store.allMeetReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_ALL_MEETS',
    });
  }, []);

  const handleAccept = (invite) => {
    dispatch({
      type: 'ACCEPT_INVITE',
      payload: {
        meetID: invite.meetup_id,
        userID: invite.user_id,
        attending: 1,
      },
    });
  };

  const handleDecline = (invite) => {
    dispatch({
      type: 'DECLINE_INVITE',
      payload: {
        meetID: invite.meetup_id,
        userID: invite.user_id,
        attending: 2,
      },
    });
  };


  const pendingInvites = invites.filter((invite) => invite.attending !== 1 && invite.attending !== 2);

  return (
    <div>
      {pendingInvites.map((invite) => {
        const meetup = meets.find((meet) => meet.id === invite.meetup_id);

        return (
          <div key={invite.meetup_id} style={{ margin: '20px' }}>
            <p>
              You have received an invite for: {meetup ? meetup.meetup_name : 'Default Name'}
            </p>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAccept(invite)}
              style={{ marginRight: '10px' }}
            >
              Accept
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDecline(invite)}
            >
              Decline
            </Button>
          </div>
        );
      })}
    </div>
  );
}
