import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AllMeetCard from '../AllMeetsCard/AllMeetsCard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
export default function MeetDashboard() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch({
      type: "FETCH_INVITES",
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <main>
      <h1 style={{marginLeft:'35px'}}>Choose a meet to learn more</h1>
        <AllMeetCard />
      </main>
      </>
  );
}