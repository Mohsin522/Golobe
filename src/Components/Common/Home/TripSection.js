import React from 'react';
import { Row } from 'react-bootstrap';
import Flight from '../../Assets/Images/Landing/Flight.png';
import Hotel from '../../Assets/Images/Landing/Hotel.png';
import NearMeIcon from '@mui/icons-material/NearMe';
import { Link } from 'react-router-dom';
import TripCard from './TripCard';


const TripSection = () => {
  return (
    <div className='Trip_section_inner'>
        <Row>
           <TripCard />
           <TripCard />
           <TripCard />
           <TripCard />
           <TripCard />
           <TripCard />
           <TripCard />
           <TripCard />
           <TripCard />

            

        </Row>
        <Row>
            <div className='col-12 col-md-6'>
                <div className='flights_navigator_card'>
                    <div className='image_div'>
                        <img src={Flight} alt="flight"></img>
                    </div>
                    <div className='info_div'>
                        <h3>Flights</h3>
                        <p>Search Flights & Places Hire to our most popular destinations</p>
                        <Link to='/flight'> <NearMeIcon />Show Flights</Link>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6'>
                <div className='flights_navigator_card'>
                    <div className='image_div'>
                        <img src={Hotel} alt="hotel"></img>
                    </div>
                    <div className='info_div'>
                        <h3>Hotels</h3>
                        <p>Search Flights & Places Hire to our most popular destinations</p>
                        <Link to='/hotel'> <NearMeIcon />Show Hotels</Link>
                    </div>
                </div>
            </div>
        </Row>
    </div>
  )
}

export default TripSection