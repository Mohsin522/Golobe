import React,{useState} from 'react';
import AuthSlider from '../../Common/auth/AuthSlider';
import FormHeader from '../../Common/auth/FormHeader';

import Logo from '../../Assets/Images/Logo.png';
import { Link} from 'react-router-dom';
import { Container,Row  } from 'react-bootstrap';
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';
import Card from '../../Assets/Images/icons/Visa.png';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const PaymentMethod = () => {
    const [country, setCountry] = useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <div className='auth_wrapper register_wrapper'>
        <div className='auth_form_container'>
            <div className='auth_form_container_inner'>
                <div className='auth_logo_container'>
                    <Link to='/'><img src={Logo} alt="logo"></img></Link>
                </div>
                <div className='auth_form'>
                    <Container>
                        <Row>
                        <div className='col-12'>
                                <Link to='/register' className='back_link'> Back </Link>
                            </div>
                            <div className='col-12'>
                              <FormHeader title="Add a payment method" desc="Let’s get you all st up so you can access your personal account." />

                            </div>
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
                                    <img src={Card} alt="bank_card" className='visa_card'></img>
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
                    </Container>                    
                </div>
                <div></div>
            </div>
            
        </div>
        <div className='auth_slider_container'>
             <AuthSlider />
        </div>
    </div>
  )
}

export default PaymentMethod