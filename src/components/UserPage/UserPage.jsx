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

  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const [modificationText, setModification] = useState('N/A');
  const [modifyingCarID, setCarToMod] = useState(0)

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
  const handleModificationText = (event, value) => {
    setModification(event.target.value)
  }

  const selectedModels = Models[`${selectedMake}`];

  const handleAddCar = () => {
    dispatch({
      type: 'ADD_CAR',
      payload: ymmObject,
      id: user.id
    })

    dispatch({
      type: "FETCH_CARS",
      payload: user.id
    })

  };

  const handleAddMod = () => {
    dispatch({
      type: 'ADD_MOD',
      payload: modificationText,
      id: modifyingCarID
    })
    setModification('')
  };

  const handleDeleteCar = (id) => {
    dispatch({
      type: 'DELETE_CAR',
      payload:id
    })
  }
  useEffect(() => {
    dispatch({
      type: "FETCH_CARS",
      payload: user.id
    });
    dispatch({
      type: "FETCH_INVITES",
    });
  }, []);

  return (
    <>
      <Container maxWidth="md" style={{ marginTop: '30px', paddingBottom: '400px' }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user.username}!
        </Typography>
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
                    {selectedMake ? 
                    <Autocomplete
                      disablePortal
                      id="model-combo-box"
                      options={selectedModels}
                      sx={{ width: 300, margin: '15px' }}
                      renderInput={(params) => <TextField {...params} label="Model" />}
                      onChange={handleModelSelect}
                    /> :      
                    <Autocomplete
                    readOnly
                    disablePortal
                    id="model-combo-box"
                    sx={{ width: 300, margin: '15px' }}
                    renderInput={(params) => <TextField {...params} label="Model" />}
                  />}
                     

               
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                {myCars.map((car) => (
                  <>
                  <div>
            
                  </div>
                  <Card style={{ margin: "10px" }}>
                    <CardContent style={{ backgroundColor: '#fafafa' }}>
                      <div key={car.id}>
                        <h3 style={{ margin: '2px' }}>{car.year} {car.make} {car.model}</h3> 
                        <h6 style={{ margin: '2px' }}>Mods:{car.mods}</h6>
                        <Button style={{fontSize:'.7rem'}} variant='contained' onClick={() => handleDeleteCar(car.id)}>Delete Car</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  </>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" onClick={handleAddCar} style={{ margin: '10px' }}>
                Add a Car
              </Button>
            </Grid>
          </CardContent>
        </Card>
        <Card style={{ marginTop: '40px' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Car Modifications
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={myCars}
                      getOptionLabel={(car) => `${car.year} ${car.make} ${car.model}`}
                      sx={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="Choose from your vehicles" />}
                      onChange={(event, value) => setCarToMod(value.id)}
                    />
                  </CardContent>
                  <CardContent>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Enter Modifications"
                      multiline
                      rows={4}
                      style={{ width: '300px' }}
                      onChange={handleModificationText}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" onClick={handleAddMod}>
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
