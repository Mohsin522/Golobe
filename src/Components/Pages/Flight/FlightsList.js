import React,{useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import Dropdown from 'react-bootstrap/Dropdown';
import FlightCard from '../../Common/Flight/FlightCard';

const FlightsList = () => {
   
    const[tab,setTab]=useState(1);
    const [trip, setTrip] = useState('');

    const handleTripChange = (event) => {
      setTrip(event.target.value);
    };
    const TabAction=(index)=>{
        setTab(index);
    }
  return (
    <>
        <div className='flights_list_outer'>
            <Container>
                <div className='search_section'>
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
                        <div className='col-12 col-md-2'>
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
                        <div className='col-1'>
                            <button className='search_button'><SearchIcon /></button>
                        </div>
                       

                    </Row>
                </div>
                <Row>
                    <div className='col-12 col-md-4'>
                        <div className='Filter_outer'>
                            <div className='Filter_inner_container'></div>
                        </div>
                    </div>
                    <div className='col-12 col-md-8'>
                        <div className='list_col_outer'>
                            <div className='flight_list_tabs'>
                                <ul className='tabs'>
                                    <li className={`${tab===1 ? 'tab active' : 'tab'}`} onClick={()=>TabAction(1)}>
                                        <h4>Cheapest</h4>
                                        <p>$99- 2h 18m</p>
                                    </li>
                                    <li className={`${tab===2 ? 'tab active' : 'tab'}`} onClick={()=>TabAction(2)}>
                                        <h4>Quickest</h4>
                                        <p>$99- 2h 18m</p>
                                    </li>
                                    <li className={`${tab===3 ? 'tab active' : 'tab'}`}onClick={()=>TabAction(3)}>
                                        <h4>Best</h4>
                                        <p>$99- 2h 18m</p>
                                    </li>
                                    <li className={`${tab===4 ? 'tab active' : 'tab'}`} onClick={()=>TabAction(4)}>
                                        <h4>Cheapest</h4>
                                        <p>$99-$200</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='showing_results_header'>
                                <p>Showing 4 of <span>231213</span></p>
                                    <Dropdown className='dropdown_filter'>
                                            <Dropdown.Toggle  className='dropdown_btn' id="dropdown-basic">
                                                Sort By <span>Recommended</span>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                    </Dropdown>
                            </div>
                            <div className='filtered_products_outer'>
                                  <FlightCard />
                                  <FlightCard />
                                  <FlightCard />
                                  <FlightCard />
                            </div>
                            <div className='show_more_results_btn'>
                                <button>Show More Results</button>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    
    </>
   
  )
}

export default FlightsList