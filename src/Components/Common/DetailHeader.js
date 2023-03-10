import React from 'react';
import { Row } from 'react-bootstrap';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from 'react-router-dom';

const DetailHeader = () => {
    let navigate=useNavigate();
  return (
    <div className='detail_header'>
        <Row>
            <div className='col-12'>
                <div className='breadcrumbs'>
                    <ul className='breadcrumbs_list'>
                        <li className='breadcrumbs_list_item'>Turkey</li>
                        <li className='breadcrumbs_list_item'>Istanbul</li>

                        <li className='breadcrumbs_list_item'>CVK Park Bosphorus Hotel Istanbul</li>

                    </ul>
                </div>

            </div>
            <div className='col-12 col-md-6'>
                <div className='item_detail'>
                    <h3>Emirates A380 Airbus</h3>
                    <p className='address'> <LocationOnIcon /> Mah. Inönü Cad. No:8, Istanbul 34437</p>
                    <div className='flight_review'>
                        <span className='review_btn'>4.2</span>
                        <p className='review_status'><span>Very Good</span> 54 Reviews</p>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6'>
                <div className='price_Section'>
                    <h3 className='item_price'> $ 320</h3>
                    <div className='booking_btns'>
                        <button className='fav_btn'><FavoriteBorderIcon /></button>
                        <button className='share_btn'><ShareIcon /></button>
                        <button className='booking_btn' onClick={()=>navigate("/flight/list/1/booking", {replace: true})}>Book Now</button>
                     </div>
                </div>
                
            </div>
            
        </Row>
    </div>
  )
}

export default DetailHeader