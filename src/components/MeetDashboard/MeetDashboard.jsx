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
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Meets Dashboard
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Here you can find all your meets, both that you've created and others have created. 
              <br></br>
              Browse Previous meets as well!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Create A New Meet</Button>
              <Button variant="outlined">Manage Your Meets</Button>
            </Stack>
          </Container>
        </Box>
        <h2>Here's a list of all meets in your area</h2>
        <AllMeetCard />
        <h2>Here are meets you've created or are attending</h2>
        <MyMeetCard />
      </main>
      </>
  );
}