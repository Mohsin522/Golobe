import React,{useState} from 'react';
import { Container,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { payment, paymentCards } from '../../Assets/Data/Data';
import { useNavigate } from 'react-router-dom';


// images 
import Visa from '../../Assets/Images/icons/Visa.png';
import Dubai from '../../Assets/Images/Flight/dubai.png';
import Rightarrow from '../../Assets/Images/icons/right.png';
import Leftarrow from '../../Assets/Images/icons/left.png';
import Small from '../../Assets/Images/Flight/small.png';
import Facebook from '../../Assets/Images/icons/facebook.png';
import Google from '../../Assets/Images/icons/google.png';
import Apple from '../../Assets/Images/icons/apple.png';

// icons 
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import EmailIcon from '@mui/icons-material/Email';
import WifiIcon from '@mui/icons-material/Wifi';
import TimerIcon from '@mui/icons-material/Timer';
import CloseIcon from '@mui/icons-material/Close';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import AccessibleIcon from '@mui/icons-material/Accessible';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Radio from '@mui/material/Radio';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FlightBooking = () => {
    let navigate=useNavigate();

    const [country, setCountry] = useState('');
    const [paymentmethod, setPaymentmethod] = useState(payment); 
    const [paymentcard, setPaymentcards] = useState(paymentCards); 
    const [activepayment, setActivePayment] = useState(payment[0]); 
    const [activepaymencard, setActivePaymentCard] = useState(paymentCards[0]); 
    const [paymentcardvalue,setPaymentcardvalue]=useState(paymentCards[0].value);
    const [selectedValue, setSelectedValue] = useState(payment[0].value); 

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
      };
    const handlePaymentChange = (event) => {
          setSelectedValue(event.target.value);
        };
     const handlePaymentCardChange = (event) => {
        setPaymentcardvalue(event.target.value);
     };

     const [opencardmodal, setOpenCardModal] = useState(false);
     const handleCardModalOpen = () => setOpenCardModal(true);
     const handleCardModalClose = () => setOpenCardModal(false);

   
  return (
    <div className='flightBooking_wrapper'>
        
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
                <div className='col-12 col-lg-8'>
                    <div className='flight_detail_card'>
                        <div className='flight_booking_card_name'>
                            <h4>Emirates A380 Airbus</h4>
                            <p>$ 320</p>
                        </div>
                            <div className='flight_card_header'>
                                <h4>Return Wed, Dec 8</h4>
                                <p>2h 48m</p>
                            </div>    
                            <div className='flight_name_icons'>
                                <div className='name_img'>
                                    <img src={Dubai} alt="dubai"></img>
                                    <div className='name'>
                                        <h5>Emirates</h5>
                                        <p>Airbus 432</p>
                                    </div>
                                </div>
                                <div className='facilities_icon'>
                                    <span><AirplanemodeActiveIcon /></span>
                                    <span><WifiIcon /></span>
                                    <span> <TimerIcon /></span>
                                    <span><LunchDiningIcon /> </span>
                                    <span><AccessibleIcon /></span>

                                </div>

                            </div>
                            <div className='in_out_time_container'>
                                <div className='time_Div'><span>12:00 Pm</span> <p>Newyark(EWR)</p> </div>
                                <div className='plane_icons'>
                                    <img src={Leftarrow}></img>
                                        <AirplanemodeActiveIcon className='plane' />
                                    <img src={Rightarrow}></img>

                                </div>
                                <div className='time_Div'><p>Newyark(EWR)</p> <span>12:00 Pm</span> </div>

                            </div>
                    </div>
                    <div className='payment_method_container'>
                            {
                                paymentmethod.map((item)=>(
                                    <div className={`payment_method ${activepayment===item ? "active" : ""} `} key={item.id}>
                                        <div className='heading' >
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                        <div className='payment_radio'>
                                            <Radio  
                                                checked={selectedValue === `${item.value}`}
                                                onClick={()=>setActivePayment(item)}
                                                onChange={handlePaymentChange}
                                                value={item.value}
                                                name="radio-buttons"
                                                inputProps={{ 'aria-label': `${item.value}` }}
                                            />
                                        </div>
                                    </div>
                                ))
                            }   
                            <Link to="">Read More</Link> 
                    </div>
                    <div className='payment_Cards_container'>
                        {
                            paymentcard.map((item)=>(
                            <div className={`payment_Card ${activepaymencard===item ? "active" : ""} `} key={item.id}>
                                <div className='card_info'>
                                    <img src={Visa} alt="Visa"></img>
                                    <p className='card_Code'>*****4321</p>
                                    <p className='date'>02/27</p>
                                </div>
                                <div className='payment_radio'>
                                                <Radio  
                                                    checked={paymentcardvalue === `${item.value}`}
                                                    value={item.value}
                                                    onClick={()=>setActivePaymentCard(item)}
                                                    onChange={handlePaymentCardChange}
                                                    name="radio-buttons"
                                                    inputProps={{ 'aria-label': `${item.value}` }}
                                                />
                                </div>
                         </div>
                            ))
                        }
                        <button  onClick={handleCardModalOpen} className="new_Card_button">
                            <AddCircleOutlineIcon />
                            <p>Add a new card</p>
                        </button>
                        <Modal
                            open={opencardmodal}
                            onClose={handleCardModalClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                         >
                            <Box  className="payment_card_modal">
                                <Row>
                                    <div className='col-12'>
                                         <CloseIcon onClick={handleCardModalClose} className='close_icon' />
                                    </div>
                                    <div className='col-12'>
                                         <h3 className='modal_heading'>Add a new Card</h3>
                                    </div>
                                </Row>
                                <form>
                                    <Row>
                                        <div className='col-12'>
                                                <div className='form_input_outer'>
                                                    <TextField
                                                        sx={{ width: "100%" }}
                                                        id="outlined-basic"
                                                        label="Card Number"
                                                        variant="outlined"
                                                        className="field-text-border"
                                                        name="firstname"                                       
                                                        type="text"  
                                                    />
                                                    <img src={Visa} alt="bank_card" className='visa_card'></img>
                                                </div>
                                        </div>
                                        <div className='col-12 col-md-6'>
                                            <div className='form_input_outer'>
                                                <TextField
                                                    sx={{ width: "100%" }}
                                                    id="outlined-basic"
                                                    label="Exp-Date"
                                                    variant="outlined"
                                                    className="field-text-border"
                                                    name="expdate"                                       
                                                    type="text"  
                                                />
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-6'>
                                            <div className='form_input_outer'>
                                                <TextField
                                                    sx={{ width: "100%" }}
                                                    id="outlined-basic"
                                                    label="CVC"
                                                    variant="outlined"
                                                    className="field-text-border"
                                                    name="CVC"                                       
                                                    type="text"  
                                                />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='form_input_outer'>
                                                <TextField
                                                    sx={{ width: "100%" }}
                                                    id="outlined-basic"
                                                    label="Name on Card"
                                                    variant="outlined"
                                                    className="field-text-border"
                                                    name="name"                                       
                                                    type="text"  
                                                />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='form_input_outer'>
                                                <FormControl fullWidth 
                                                    className="field-text-border"
                                                    >
                                                    <InputLabel id="demo-simple-select-label">Country or Region</InputLabel>
                                                    <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={country}
                                                    label="Country or Region"
                                                    onChange={handleCountryChange}

                                                    >
                                                    <MenuItem value={10}>Pakistan</MenuItem>
                                                    <MenuItem value={20}>India</MenuItem>
                                                    <MenuItem value={30}>Canada</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                        
                                    
                                        <div className='col-12'>
                                            <div className='remember_me_Container'>
                                            <div className='checkmark_outer'>
                                                    <Checkbox defaultChecked />
                                                    <p>Securely save my information for 1-click checkout</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <button type='submit' className='auth_form_button'>Add Payement Method</button>
                                        </div>
                                        <div className='col-12'>
                                            <p className='subscription_text'>By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.</p>
                                        </div>
                                    </Row>
                                </form>
                           
                            </Box>
                        </Modal>         
                    </div>
                    <div className='user_login_Section'>
                       
                       <Row>
                          <div className='col-12'>
                            <h4 className='heading'>Login or Sign up to book</h4>
                          </div>
                          <div className='col-12'>
                                    <div className='form_input_outer'>
                                                <TextField
                                                    sx={{ width: "100%" }}
                                                    id="outlined-basic"
                                                    label="Phone Number"
                                                    variant="outlined"
                                                    className="field-text-border"
                                                    name="phone"                                       
                                                    type="text"  
                                                />
                                    </div>
                          </div>
                          <div className='col-12'>
                            <p className='desc-text'>We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy
</p>
                          </div>
                          <div className='col-12'></div>
                          <div className='or_container'>
                                <p>OR</p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='third_party_button_auth'>
                                    <button><img src={Google} alt="icon"></img></button>
                                </div>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='third_party_button_auth'>
                                    <button><img src={Facebook} alt="icon"></img></button>
                                </div>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='third_party_button_auth'>
                                    <button><img src={Apple} alt="icon"></img></button>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='third_party_button_auth flight_icon_button'>
                                    <button>< EmailIcon />Continue With Email</button>
                                </div>
                            </div>

                       </Row>
                    </div>
                </div>
                <div className='col-12 col-lg-4'>
                    <div className='flight_overview_Card' >
                        <div className='header'>
                            <img src={Small} alt="flight"></img>
                            <div className='header_info'>
                                <p>Economy</p>
                                <h4>Emirates A30 Bus</h4>
                                <div className='review'>
                                    <span className='review_number'>4.5</span>
                                    <p>Very Good<span> 54 reviews</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='safe'>
                            <p>Your booking is protected by <span>golobe</span></p>
                        </div>
                        <div className='price_info'>
                            <h4  className='price_heading'>Price</h4>
                            <div className='prices'>
                                <p>Base Free</p>
                                <span>$400</span>
                            </div>
                            <div className='prices'>
                                <p>Base Free</p>
                                <span>$400</span>
                            </div>
                            <div className='prices'>
                                <p>Base Free</p>
                                <span>$400</span>
                            </div>
                            <div className='prices'>
                                <p>Base Free</p>
                                <span>$400</span>
                            </div>
                        </div>
                        <div className='total_price'>
                            <p>Total</p>
                            <span>$2000</span>
                        </div>
                    </div>
                </div>
                <button onClick={()=>navigate("/flight/list/1/overview", {replace: true})} className="overview_btn">Overview your booking</button>
            </Row>
        </Container>
    </div>
  )
}

export default FlightBooking