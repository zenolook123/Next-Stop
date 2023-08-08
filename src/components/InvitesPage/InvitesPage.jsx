import { Button, Container } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//NEED TO IMPLEMENT A MEETS PAGE WHERE YOU CAN VIEW THE MEET EXPANDED

function InvitesPage() {
    const invites = useSelector(store => store.inviteReducer);
    const dispatch = useDispatch()

    return (
        <Container sx={{ justifyContent: 'center', display: 'flex' }}>
            {invites.map((invites) => {
                const acceptInvite = () => {
                    dispatch({
                        type: 'ACCEPT_INVITE',
                        payload: 1
                    })
                }
                const declineInvite = () => {
                    dispatch({
                        type: 'DECLINE_INVITE',
                        payload: 2
                    })
                }
                return (
                    <>
                        <Container>
                            <h5>{invites.name}</h5>
                        <Button variant='contained' sx={{ height: '20px', margin: '20px' }} onClick={acceptInvite}>Accept Invite</Button>
                        <Button variant='contained' sx={{ height: '20px', margin: '20px' }} onClick={declineInvite}>Decline Invite</Button>
                        </Container>
                      
                    </>
                )
            })}

        </Container>)

}


export default InvitesPage