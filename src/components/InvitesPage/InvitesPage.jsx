
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
function InvitesPage({ selectedMeet }) {
  const members = useSelector((store) => store.members);
  const dispatch = useDispatch();
  
  const [invitedMembers, setInvitedMembers] = useState([]);

  const handleCheckboxChange = (memberID) => {
    if (invitedMembers.includes(memberID)) {
      setInvitedMembers(invitedMembers.filter((id) => id !== memberID));
    } else {
      setInvitedMembers([...invitedMembers, memberID]);
    }
  };

  useEffect(() => {
    dispatch({
      type: "FETCH_MEMBERS"
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


  return (
    <div>
      {members.map((member) => (
        <>
        <FormControlLabel
          key={member.id}
          control={
            <Checkbox
              checked={invitedMembers.includes(member.id)}
              onChange={() => handleCheckboxChange(member.id)}
            />
          }
          label={member.username}
        />
        <Button variant="contained" color="primary" onClick={() => {sendInvite(selectedMeet.id, member.id)}}>
       Invite
      </Button>
      <br></br>
      </>
      ))}
    </div>
  );
}

export default InvitesPage;
