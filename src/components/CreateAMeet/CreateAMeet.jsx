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

    const gifurl = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'
    const [image, setImageURL] = useState("https://icons.veryicon.com/png/o/miscellaneous/1em/add-image.png")
    const [address, setAddress] = useState('')
    const [date, setDate] = useState()
    //When grabbing date its date.$d
    const handleSubmit = (event) => {
        setImageURL(gifurl)
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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant='fullWidth'>
                    <Tab label="Choose a photo for the meet" {...a11yProps(0)} />
                    <Tab label="Invite Members" {...a11yProps(1)} />
                    <Tab label="When/Where?" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div>
                    <Container>
                        <div style={{ justifyContent: 'center', display: 'flex' }}>
                            <Container sx={{ justifyContent: 'center', display: 'flex' }}>
                                <form encType='multipart/form-data' onSubmit={handleSubmit}>
                                    <input type="file" name='photo' />
                                    <button type="submit">Upload Photo</button>
                                </form>
                            </Container>
                            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={image} style={{ maxHeight: '500px', maxWidth: '500px', display: 'inline-flex' }}></img>
                            </Container>
                        </div>
                    </Container>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div>
                    <Container>
                        <div style={{ justifyContent: 'center', display: 'flex' }}>
                            <Container sx={{ justifyContent: 'center', display: 'flex', backgroundColor: 'red' }}>
                                List of members here
                            </Container>
                        </div>
                    </Container>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <div>
                    <Container>
                        <h2>Where do you want to meet up?</h2>
                        <div style={{ justifyContent: 'center', display: 'flex' }}>
                            <Container sx={{ justifyContent: 'left', display: 'flex' }}>
                                <TextField
                                    id="outlined-controlled"
                                    label="Enter an address"
                                    value={address}
                                    onChange={(event) => {
                                        setAddress(event.target.value);
                                    }}
                                    style={{width:'400px'}}
                                />
                            </Container>
                        </div>
                    </Container>
                    <Container>
                        <h2>When is it?</h2>
                        <div style={{ justifyContent: 'center', display: 'flex' }}>
                            <Container sx={{ justifyContent: 'left', display: 'flex' }}>
                            <DateTimePicker value={date} onChange={(date) => setDate(date)} />
                            </Container>
                        </div>
                    </Container>
                </div>
                <Container>
                        <div style={{ justifyContent: 'center', display: 'flex' }}>
                            <Button variant='contained'>Next</Button>
                        </div>
                    </Container>
                
            </CustomTabPanel>
        </Box>
    );
}
