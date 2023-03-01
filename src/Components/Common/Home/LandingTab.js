import React,{useState} from 'react';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import BedIcon from '@mui/icons-material/Bed';
import NearMeIcon from '@mui/icons-material/NearMe';
import { Container, Row } from 'react-bootstrap';
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';


const LandingTab = () => {
    let navigate= useNavigate();
    const [tabvalue, setTabvalue] = useState(true);
    const [trip, setTrip] = useState('');

    const handleTripChange = (event) => {
      setTrip(event.target.value);
    };

   
  return (
    <div className='landing_tabs_section'>
         <div className='tab_header'>
            
            <span className={tabvalue ? "item active" : "item"} onClick={()=>setTabvalue(true)}><AirplanemodeActiveIcon className='aeroplane' /> Find Flight</span>
            <span className="item"></span>

            <span className={tabvalue ? "item" : "item active"} onClick={()=>setTabvalue(false)}><BedIcon /> Find Stays</span>
         </div>
         {
            
            tabvalue ? 
            <div className='tab_panel'>
                <Container>
                    <Row>
                        <div className='col-12 col-md-3'>
                            <div className='form_input_outer'>
                                    <TextField
                                        sx={{ width: "100%" }}
                                        id="outlined-basic"
                                        label="From-T0"
                                        variant="outlined"
                                        className="field-text-border"
                                        name="flight"                                       
                                        type="text" 
                                       
                                    />
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                        <div className='form_input_outer'>
                                    <FormControl fullWidth 
                                        className="field-text-border"
                                        >
                                        <InputLabel id="demo-simple-select-label">Trip</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={trip}
                                        label="Trip"
                                        onChange={handleTripChange}

                                        >
                                        <MenuItem value={10}>Pakistan</MenuItem>
                                        <MenuItem value={20}>India</MenuItem>
                                        <MenuItem value={30}>Canada</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                        </div>

                        <div className='col-12 col-md-3'>
                        <div className='form_input_outer'>
                                    <TextField
                                        sx={{ width: "100%" }}
                                        id="outlined-basic"
                                        label="Depart-Return"
                                        variant="outlined"
                                        className="field-text-border"
                                        name="flight"                                       
                                        type="text" 
                                       
                                    />
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                        <div className='form_input_outer'>
                                    <TextField
                                        sx={{ width: "100%" }}
                                        id="outlined-basic"
                                        label="Passenger-Class"
                                        variant="outlined"
                                        className="field-text-border"
                                        name="flight"                                       
                                        type="text" 
                                       
                                    />
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='tabs_button_section'>
                                <button>+ Add Promo Code</button>
                                <button onClick={()=>navigate('flight')}><NearMeIcon /> Show Flight</button>


                            </div>
                        </div>

                    </Row>
                </Container>
            </div>
             
             :
             <div className='tab_panel'>
                <Container>
                    <Row>
                        <div className='col-12 col-md-3'>
                            <div className='form_input_outer'>
                                    <TextField
                                        sx={{ width: "100%" }}
                                        id="outlined-basic"
                                        label="From-T0"
                                        variant="outlined"
                                        className="field-text-border"
                                        name="flight"                                       
                                        type="text" 
                                       
                                    />
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                        <div className='form_input_outer'>
                                    <FormControl fullWidth 
                                        className="field-text-border"
                                        >
                                        <InputLabel id="demo-simple-select-label">Trip</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={trip}
                                        label="Trip"
                                        onChange={handleTripChange}

                                        >
                                        <MenuItem value={10}>Pakistan</MenuItem>
                                        <MenuItem value={20}>India</MenuItem>
                                        <MenuItem value={30}>Canada</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                        </div>

                        <div className='col-12 col-md-3'>
                        <div className='form_input_outer'>
                                    <TextField
                                        sx={{ width: "100%" }}
                                        id="outlined-basic"
                                        label="Depart-Return"
                                        variant="outlined"
                                        className="field-text-border"
                                        name="flight"                                       
                                        type="text" 
                                       
                                    />
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                        <div className='form_input_outer'>
                                    <TextField
                                        sx={{ width: "100%" }}
                                        id="outlined-basic"
                                        label="Passenger-Class"
                                        variant="outlined"
                                        className="field-text-border"
                                        name="flight"                                       
                                        type="text" 
                                       
                                    />
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='tabs_button_section'>
                                <button>+ Add Promo Code</button>
                                <button onClick={()=>navigate('flight')}><NearMeIcon /> Show Flight</button>

                            </div>
                        </div>

                    </Row>
                </Container>
            </div> 

            
         }
    </div>
  )
}

export default LandingTab