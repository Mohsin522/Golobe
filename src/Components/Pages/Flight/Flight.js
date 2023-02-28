import React from 'react';
import { Container,Row } from 'react-bootstrap';
import Heading from '../../Common/Heading';
import Map from '../../Assets/Images/map.png'
import Place1 from '../../Assets/Images/places/place1.png';
import Place2 from '../../Assets/Images/places/place2.png';
import Place3 from '../../Assets/Images/places/place3.png';
import Place4 from '../../Assets/Images/places/place4.png';
import Feature1 from '../../Assets/Images/places/F1.png';
import Feature2 from '../../Assets/Images/places/F2.png';
import Feature3 from '../../Assets/Images/places/F3.png';
import Feature4 from '../../Assets/Images/places/F4.png';



const Flight = () => {
  return (
    <div className='flight_wrapper'>
       <div className='landing_map_Section'>
        <Container>
          <div className='landing_Sections_header'>
            <Heading title="Let's go places together" desc="Discover the latest offers and news and start planning your next trip with us." />
            <button className='see_All_btn'>See all</button>
          </div>
        </Container>
        
        <div className='map_image_div'>
          <img src={Map}></img>
        </div>
      </div>
      <div className='travel_pakages_Section'>
          <Container>
            <div className='landing_Sections_header'>
              <Heading title="Fall into Travel" desc="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination." />
              <button className='see_All_btn'>See all</button>
            </div>
            <div className='travel_pakages_card_outer'>
              <Row>
                 <div className='col-12 col-md-4 col-lg-3'>
                  <div className='travel_pakages_card'>
                    <img src={Place1} alt="places_img"></img>
                    <div className='pkg_detail'>
                      <div className='pkg_info'>
                        <div className='pkg_name'>
                          <h5>Melbourne</h5>
                          <p>An amazing journey</p>
                        </div>
                        <div className='pkg_price'>
                          <p>$ 700</p>
                        </div>
                      </div>
                      <button className='flight_booking_button'>Book Flight</button>
                    </div>
                  </div>
                 </div>
                 <div className='col-12 col-md-4 col-lg-3'>
                  <div className='travel_pakages_card'>
                    <img src={Place2} alt="places_img"></img>
                    <div className='pkg_detail'>
                      <div className='pkg_info'>
                        <div className='pkg_name'>
                          <h5>Melbourne</h5>
                          <p>An amazing journey</p>
                        </div>
                        <div className='pkg_price'>
                          <p>$ 700</p>
                        </div>
                      </div>
                      <button className='flight_booking_button'>Book Flight</button>
                    </div>
                  </div>
                 </div>
                 <div className='col-12 col-md-4 col-lg-3'>
                  <div className='travel_pakages_card'>
                    <img src={Place3} alt="places_img"></img>
                    <div className='pkg_detail'>
                      <div className='pkg_info'>
                        <div className='pkg_name'>
                          <h5>Melbourne</h5>
                          <p>An amazing journey</p>
                        </div>
                        <div className='pkg_price'>
                          <p>$ 700</p>
                        </div>
                      </div>
                      <button className='flight_booking_button'>Book Flight</button>
                    </div>
                  </div>
                 </div>
                 <div className='col-12 col-md-4 col-lg-3'>
                  <div className='travel_pakages_card'>
                    <img src={Place4} alt="places_img"></img>
                    <div className='pkg_detail'>
                      <div className='pkg_info'>
                        <div className='pkg_name'>
                          <h5>Melbourne</h5>
                          <p>An amazing journey</p>
                        </div>
                        <div className='pkg_price'>
                          <p>$ 700</p>
                        </div>
                      </div>
                      <button className='flight_booking_button'>Book Flight</button>
                    </div>
                  </div>
                 </div>
              </Row>
            </div>
            
          </Container>
      </div>
      <div className='travel_feature_place_Section'>
          <Container>
            <div className='landing_Sections_header'>
              <Heading title="Fall into Travel" desc="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination." />
              <button className='see_All_btn'>See all</button>
            </div>
            <div className='travel_feature_place_outer'>
              <div className='travel_feature_place_pakage'>
                <div className='feature_header'>
                  <h3>BackPacking <br></br> Sri Lanka</h3>
                  <div className='price'>
                    <p>From</p>
                    <h5> $700</h5>
                  </div>
                  
                </div>
                
                <p className='place_description'>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>
                 <button className='booking_button'>Book Flight</button>
              </div>
              <div className='travel_feature_place_images'>
                <div className='place_immg'>
                  <img src={Feature1} alt="featured_images"></img>
                </div>
                <div className='place_immg'>
                  <img src={Feature2} alt="featured_images"></img>
                </div>
                <div className='place_immg'>
                  <img src={Feature3} alt="featured_images"></img>
                </div>
                <div className='place_immg'>
                  <img src={Feature4} alt="featured_images"></img>
                </div>
              </div>
              
            </div>
            
          </Container>
      </div>

    </div>
  )
}

export default Flight