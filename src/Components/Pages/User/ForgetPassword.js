import React from 'react';
import { useNavigate } from "react-router-dom";
import Logo from '../../Assets/Images/Logo.png';
import { Link} from 'react-router-dom';
import { Container,Row  } from 'react-bootstrap';
import TextField from "@mui/material/TextField";
import Facebook from '../../Assets/Images/icons/facebook.png';
import Google from '../../Assets/Images/icons/google.png';
import Apple from '../../Assets/Images/icons/apple.png';


import AuthSlider from '../../Common/auth/AuthSlider';
import FormHeader from '../../Common/auth/FormHeader';


const ForgetPassword = () => {
    let navigate = useNavigate(); 
  return (
    <div className='auth_wrapper'>
        <div className='auth_form_container'>
            <div className='auth_form_container_inner'>
                <div className='auth_logo_container'>
                    <Link to='/'><img src={Logo}></img></Link>
                </div>
                <div className='auth_form'>
                    <Container>
                        <Row>
                            <div className='col-12'>
                                <Link to='/login' className='back_link'> Back TO Login</Link>
                            </div>
                            <div className='col-12'>
                                <FormHeader title="Forgot your password?" desc="Don’t worry, happens to all of us. Enter your email below to recover your password" />
                            </div>
                            <div className='col-12'>
                                <div className='form_input_outer'>
                                    <TextField
                                        sx={{ width: "100%" }}
                                        id="outlined-basic"
                                        label="Email"
                                        variant="outlined"
                                        className="field-text-border"
                                        name="email"                                       
                                        type="email" 
                                       
                                    />
                                </div>
                            </div>
                            
                            <div className='col-12'>
                                <button type='submit' className='auth_form_button' onClick={()=>navigate('/verify')}>Submit</button>
                            </div>
                           
                            <div className='or_container'>
                                <p>Or login with</p>
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

export default ForgetPassword