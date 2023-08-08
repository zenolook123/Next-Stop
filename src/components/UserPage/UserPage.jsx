import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Button, TextField, Grid, Card, CardContent, Autocomplete } from '@mui/material';
import { useState } from 'react';
import Year from './Year';
import Makes from './Make'
import Models from './Model';
import { useDispatch } from 'react-redux';

function UserPage() {
  const user = useSelector((store) => store.user);
  const myCars = useSelector((store) => store.addCarReducer);
  const dispatch = useDispatch()

  const [selectedMake, setSelectedMake] = useState('Subaru');
  const [selectedYear, setSelectedYear] = useState('2015');
  const [selectedModel, setSelectedModel] = useState('WRX');

  const ymmObject = {
    year: selectedYear,
    make: selectedMake,
    model: selectedModel
  }

  const handleMakeSelect = (event, value) => {
    setSelectedMake(value);
  };
  const handleYearSelect = (event, value) => {
    setSelectedYear(value)
  };
  const handleModelSelect = (event, value) => {
    setSelectedModel(value)
  };

  const selectedModels = Models[`${selectedMake}`];

  const handleAddCar = () => {
    dispatch({
      type: 'ADD_CAR',
      payload: ymmObject,
      id:user.id
    })  
  };

  const handleAddModification = () => {


  };

  useEffect(() => {
    dispatch({
        type: "FETCH_CARS",
        payload:user.id
      });
  }, []);

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
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={Year}
                      sx={{ width: 300, margin: '15px' }}
                      renderInput={(params) => <TextField {...params} label="Year" />}
                      onChange={handleYearSelect}
                    />
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={Makes}
                      sx={{ width: 300, margin: '15px' }}
                      renderInput={(params) => <TextField {...params} label="Make" />}
                      onChange={handleMakeSelect}
                    />
                    <Autocomplete
                      disablePortal
                      id="model-combo-box"
                      options={selectedModels}
                      sx={{ width: 300, margin: '15px' }}
                      renderInput={(params) => <TextField {...params} label="Model" />}
                      onChange={handleModelSelect}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    {myCars.map((car) => (
                      <div key={car.id}>
                        <p>{car.year} {car.make} {car.model}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" onClick={handleAddCar} style={{ margin: '10px' }}>
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
