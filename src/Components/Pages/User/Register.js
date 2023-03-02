import React,{useState} from 'react';
import AuthSlider from '../../Common/auth/AuthSlider';
import Facebook from '../../Assets/Images/icons/facebook.png';
import Google from '../../Assets/Images/icons/google.png';
import Apple from '../../Assets/Images/icons/apple.png';
import Logo from '../../Assets/Images/Logo.png';
import { Link, useNavigate} from 'react-router-dom';
import { Container,Row  } from 'react-bootstrap';
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';

import FormHeader from '../../Common/auth/FormHeader';

const Register = () => {
    let navigate=useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
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
                              <FormHeader title="Sign Up" desc="Let’s get you all st up so you can access your personal account." />

                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='form_input_outer'>
                                    <TextField
                                        sx={{ width: "100%" }}
                                        id="outlined-basic"
                                        label="First Name"
                                        variant="outlined"
                                        className="field-text-border"
                                        name="firstname"                                       
                                        type="text"  
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='form_input_outer'>
                                    <TextField
                                        sx={{ width: "100%" }}
                                        id="outlined-basic"
                                        label="Last Name"
                                        variant="outlined"
                                        className="field-text-border"
                                        name="lasttname"                                       
                                        type="text"  
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='form_input_outer'>
                                    <TextField
                                        sx={{ width: "100%" }}
                                        id="outlined-basic"
                                        label="Email"
                                        variant="outlined"
                                        className="field-text-border"
                                        name="email"                                       
                                        type="text"  
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='form_input_outer'>
                                    <TextField
                                        sx={{ width: "100%" }}
                                        id="outlined-basic"
                                        label="Phone Number"
                                        variant="outlined"
                                        className="field-text-border"
                                        name="number"                                       
                                        type="text"  
                                    />
                                </div>
                            </div>
                            
                            <div className='col-12'>
                                <div className='form_input_outer'>
                                 <FormControl sx={{ width: "100%" }} variant="outlined" className='field-text-border'>
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        label="Password"
                                        />
                                    </FormControl>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form_input_outer'>
                                 <FormControl sx={{ width: "100%" }} variant="outlined" className='field-text-border'>
                                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        label="Confirm Password"
                                        />
                                    </FormControl>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='remember_me_Container'>
                                <div className='checkmark_outer'>
                                        <Checkbox defaultChecked />
                                        <p>I agree to all the <Link to=''>Terms</Link> and <Link to=''>Privacy Policies</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <button type='submit' className='auth_form_button' onClick={()=>navigate('/payment')}>Create Account</button>
                            </div>
                            <div className='col-12'>
                                <p className='forms_link'>Already have an Account..? <Link to='/login'>Login here</Link></p>
                            </div>
                            <div className='or_container'>
                                <p>Or signup with</p>
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

export default Register