import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AllMeetCard from '../AllMeetsCard/AllMeetsCard';
import { useEffect } from 'react';
export default function MeetDashboard() {

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