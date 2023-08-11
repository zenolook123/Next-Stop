import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Button, Container } from "@mui/material"
import axios from "axios";
import { useState } from "react";
import { DateTimePicker } from '@mui/x-date-pickers';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



export default function CreateAMeet() {

    const history = useHistory()
    const dispatch = useDispatch()
    const loadingIconGif = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'
    const [image, setImageURL] = useState("https://icons.veryicon.com/png/o/miscellaneous/1em/add-image.png")
    const [address, setAddress] = useState('')
    const [date, setDate] = useState(undefined)
    const [value, setValue] = useState(0);
    const [description, setDescription] = useState('')
    const [meetName, setMeetName] = useState('')
    const member = useSelector(store => store.member);
    const userID = useSelector(store => store.user.id)
    const user = useSelector(store => store.user)
    //Value is for the tabs
    //When grabbing date its date.$d


    const handleSubmit = (event) => {
        setImageURL(loadingIconGif)
        event.preventDefault();
        const formData = new FormData();
        formData.append('photo', event.target.photo.files[0]);
        axios.post('/api/upload', formData)
            .then((response) => {
                const imageUrl = response.data.imageUrl;
                setImageURL(imageUrl)
                console.log('Image URL', imageUrl);
            })
            .catch((error) => {
                console.error('Error uploading file:', error);
            });
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleNext = () => {
        dispatch({
            type: 'SET_CREATE_MEET',
            payload: {
                imageURL: image,
                address: address,
                date: date.$d,
                description: description,
                meetName: `${meetName}, ran by ${user.username}!`,
                creatorID: userID,
            }
        })
        dispatch({
            type: "FETCH_MY_MEETS",
        });
        history.push('/meetdashboard')
    }

    useEffect(() => {
        dispatch({
            type: "FETCH_INVITES",
        });
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop:'100px'}}>
          <Box sx={{ flex: 1 }}>
            <div>
              <form encType='multipart/form-data' onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
                <input type="file" name='photo' style={{ fontSize: '1rem' }} />
                <button type="submit" style={{ fontSize: '1rem' }}>Upload Photo</button>
              </form>
              <Container>
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                  <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={image} style={{ maxHeight: '400px', maxWidth: '800px', display: 'inline-flex' }} alt="Uploaded" />
                  </Container>
                </div>
              </Container>
            </div>
          </Box>
          
          <Box sx={{ flex: 1 }}>
            <div style={{ margin: '20px', width: '500px' }}>
              <h2>Choose a name for the meet</h2>
              <TextField
                id="outlined-multiline-flexible"
                label="Name"
                multiline
                maxRows={4}
                fullWidth
                value={meetName}
                onChange={(event) => {
                  setMeetName(event.target.value);
                }}
              />
            </div>
    
            <div style={{ margin: '20px', width: '400px' }}>
              <h2>Where do you want to meet up?</h2>
              <TextField
                id="outlined-controlled"
                label="Enter an address"
                fullWidth
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
            </div>
    
            <div style={{ margin: '20px' }}>
              <h2>When is it?</h2>
              <DateTimePicker value={date} onChange={(date) => setDate(date)} />
            </div>
    
            <div style={{ margin: '20px', width: '500px' }}>
              <h2>Give a brief description of the meet</h2>
              <TextField
                id="outlined-multiline-flexible"
                label="Description"
                multiline
                rows={4}
                fullWidth
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
    
            <div style={{ margin: '30px' }}>
              <Button variant="contained" onClick={handleNext}>
                To Meet Dashboard
              </Button>
            </div>
          </Box>
        </Box>
      );
    }