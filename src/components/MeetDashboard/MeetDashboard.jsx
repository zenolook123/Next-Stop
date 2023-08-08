import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MyMeetCard from '../MyMeetCard/MyMeetCard';
import AllMeetCard from '../AllMeetsCard/AllMeetsCard';
export default function MeetDashboard() {


  return (
    <>
      <CssBaseline />
      <main>
      <h1>Choose a meet to learn more</h1>
        <AllMeetCard />
      </main>
      </>
  );
}