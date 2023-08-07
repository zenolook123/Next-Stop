import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Button, TextField, Grid, Card, CardContent } from '@mui/material';

function UserPage() {
  const user = useSelector((store) => store.user);
  const myCars = useSelector((store) => store.myCars);

  const handleAddCar = () => {
    // Add logic to open the "Add Car" editing area
  };

  const handleAddModification = () => {
    // Add logic to open the "Car Modifications" entry area
  };

  return (
    <>
    <Container maxWidth="md" style={{ marginTop: '30px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {user.username}!
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Update Profile
          </Typography>
          <form>
            <TextField label="Full Name" fullWidth margin="normal" />
            <TextField label="What kind of cars" fullWidth margin="normal" />
            <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
              Update Profile
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card style={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Cars
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                <TextField id="outlined-basic" label="Year" variant="outlined" style={{margin:'10px'}} />
                <TextField id="outlined-basic" label="Make" variant="outlined" style={{margin:'10px'}}/>
                <TextField id="outlined-basic" label="Model" variant="outlined" style={{margin:'10px'}}/>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                Mapped my car here
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" onClick={handleAddCar} style={{margin:'10px'}}>
                Add a Car
              </Button>
            </Grid>
        </CardContent>
      </Card>
      <Card style={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Car Modifications
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  Somehow Link cars to mods
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" onClick={handleAddModification}>
                Add Modification
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>

    </>
  );
}

export default UserPage;
