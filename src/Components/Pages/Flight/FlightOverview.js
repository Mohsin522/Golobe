import React from 'react';
import { Container,Row } from 'react-bootstrap';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Path from '../../Assets/Images/Flight/overview.png';
import Plane from '../../Assets/Images/Flight/plane.png';
import User from '../../Assets/Images/user.png';
import Code from '../../Assets/Images/code.png';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const FlightOverview = () => {
  return (
    <div className='booking_overview_wrapper'>
        <Container>
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
                <div className='col-12'>
                    <div className='overview_flight_header'>
                         <div className='name'>
                            <h3>Emirates Air4324 Bus</h3>
                            <p> <LocationOnIcon /> Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
                         </div>
                         <div className='overview_download_btn_container'>
                            <h3>$200</h3>
                            <div className='download_btn_div'>
                                <button className='share_btn'>Share</button>
                                <button className='download_btn'>Download</button>
                            </div>
                         </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='flight_banner'>
                         <div className='flight_banner_detail'>
                           <div className='in_out_time_container'>
                              <div className='time'>
                                 <h4>12:00 Pm</h4>
                                 <p>Newark(YK)</p>
                              </div>
                              <img src={Plane}></img>
                              <div className='time'>
                                 <h4>12:00 Pm</h4>
                                 <p>Newark(YK)</p>
                              </div>
                           </div>
                           <div className='user_Detail'>
                              <div className='user_upper_header'>
                                 <div className='user_img_name'>
                                        <img src={User} alt="user"></img>
                                        <p>Mohsin Ali 
                                          <span>Boarding Pass 123m</span>
                                        </p>
                                 </div>
                                 <span className='flight_class'>Business Class</span>

                              </div>
                              <div className='user_bottom'>
                                 <div className='flights_detail_icons'>
                                     <ul className='flights_detail_icons_list'>
                                        <li>
                                          <div className='Svg'>
                                            <CalendarMonthIcon />

                                          </div>
                                          <div className='detail_portion'>
                                            <p>Date</p>
                                            <span>NewYark (EWP)</span>
                                          </div>
                                        </li>
                                        <li>
                                          <div className='Svg'>
                                            <CalendarMonthIcon />

                                          </div>
                                          <div className='detail_portion'>
                                            <p>Flight Time</p>
                                            <span>12:00</span>
                                          </div>
                                        </li>
                                        <li>
                                          <div className='Svg'>
                                            <CalendarMonthIcon />

                                          </div>
                                          <div className='detail_portion'>
                                            <p>Gate</p>
                                            <span>A12</span>
                                          </div>
                                        </li>
                                        <li>
                                          <div className='Svg'>
                                            <CalendarMonthIcon />

                                          </div>
                                          <div className='detail_portion'>
                                            <p>Date</p>
                                            <span>NewYark (EWP)</span>
                                          </div>
                                        </li>
                                     </ul>
                                 </div>
                                 <div className='barcode'>
                                    <div className='flight_Code'>
                                      <p>EK</p>
                                      <span>123aksjdh</span>
                                    </div>
                                    <img src={Code} alt="code"></img>
                                 </div>
                              </div>
                           </div>
                         </div>
                         <div className='flight_path_image'>
                            <img src={Path}></img>
                         </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='terms_condition_section'>
                        <h3 className='heading'>Terms and Conditions</h3>
                        <div className='payments_condition'>
                          <p className='subheading'>Payments</p>
                          <ul className='conditions_list'>
                             <li><p>If you are purchasing your ticket using a debit or credit card via the Website, we will process these payments via the automated secure common payment gateway which will be subject to fraud screening purposes. </p></li>
                             <li><p>If you do not supply the correct card billing address and/or cardholder information, your booking will not be confirmed and the overall cost may increase. We reserve the right to cancel your booking if payment is declined for any reason or if you have supplied incorrect card information. If we become aware of, or is notified of, any fraud or illegal activity associated with the payment for the booking, the booking will be cancelled and you will be liable for all costs and expenses arising from such cancellation, without prejudice to any action that may be taken against us.</p></li>
                             <li><p>Golobe may require the card holder to provide additional payment verification upon request by either submitting an online form or visiting the nearest Golobe office, or at the airport at the time of check-in. Golobe reserves the right to deny boarding or to collect a guarantee payment (in cash or from another credit card) if the card originally used for the purchase cannot be presented by the cardholder at check-in or when collecting the tickets, or in the case the original payment has been withheld or disputed by the card issuing bank. Credit card details are held in a secured environment and transferred through an internationally accepted system.</p></li>

                          </ul>
                        </div>
                        <div className='payments_condition'>
                          <p className='subheading'>Contact</p>
                          <ul className='contacts_list'>
                             <li><p>If you have any questions about our Website or our Terms of Use, please contact: </p></li>
                             <li><p>Golobe Group Q.C.S.C</p></li>
                             <li><p>Golobe Group Q.C.S.C</p></li>
                             <li><p>Golobe Group Q.C.S.C</p></li>
                             <li><p>Golobe Group Q.C.S.C</p></li>
                          </ul>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default FlightOverview