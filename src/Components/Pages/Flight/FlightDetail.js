import React from 'react';
import DetailHeader from '../../Common/DetailHeader';
import { Container, Row } from 'react-bootstrap';
import Banner from '../../Assets/Images/Flight/banner.png';
import Small from '../../Assets/Images/Flight/small.png';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import TimerIcon from '@mui/icons-material/Timer';
import DetailCard from '../../Common/Flight/DetailCard';



const FlightDetail = () => {
  return (
    <div className='flight_detail_wrapper'>
       <Container>
         <DetailHeader />
         <div className='detail_images_section'>
            <div className='detail_img_bannner'>
                <img src={Banner} alt="banner"></img>
            </div>
            <div className='detail_checkboxes_container'>
              <h3>Basic Economy Features</h3>
              <div className='checkboxes_container'>
                <div className='checkmark_outer'>
                      <Checkbox defaultChecked />
                      <p>Economy</p>
                </div>
                <div className='checkmark_outer'>
                      <Checkbox defaultChecked />
                      <p>First Class</p>
                </div>
                <div className='checkmark_outer'>
                      <Checkbox defaultChecked />
                      <p>Business Class</p>
                </div>
              </div>
            </div>
            <div className='small_images_container'>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
              

            </div>
         </div>
         <div className='detail_policy_cabin'>
           <h3>Emirates Airlines Policies</h3>
           <Row>
              <div className='tooltip_list'>
                  <div className='tooltip_item col-12 col-md-6'>
                    <Tooltip title="Delete">
                      <IconButton>
                        <TimerIcon />
                      </IconButton>
                    </Tooltip>
                   <p>Pre-flight cleaning, installation of cabin HEPA filters.</p>
                  </div>
                  <div className='tooltip_item col-12 col-md-6'>
                    <Tooltip title="Delete">
                      <IconButton>
                        <TimerIcon />
                      </IconButton>
                    </Tooltip>
                    <p>Pre-flight cleaning, installation of cabin HEPA filters.</p>
                  </div>
              </div>
           </Row>
           
         </div>
         <Row>
            <DetailCard />
            <DetailCard />
            <DetailCard />
         </Row>
          
       </Container>
    </div>
  )
}

export default FlightDetail