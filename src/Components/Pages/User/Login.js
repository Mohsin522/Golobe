import React,{useState} from 'react';
import Logo from '../../Assets/Images/Logo.png';
import { Link} from 'react-router-dom';
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
import Facebook from '../../Assets/Images/icons/facebook.png';
import Google from '../../Assets/Images/icons/google.png';
import Apple from '../../Assets/Images/icons/apple.png';


import AuthSlider from '../../Common/auth/AuthSlider';
import FormHeader from '../../Common/auth/FormHeader';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
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
                                <FormHeader title="Login" desc="Login to access your Golobe account" />
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
                                <div className='remember_me_Container'>
                                    <div className='checkmark_outer'>
                                        <Checkbox defaultChecked />
                                        <p>Remember me</p>
                                    </div>
                                    <Link to='/forget'>Forgot Password</Link>
                                </div>
                            </div>
                            <div className='col-12'>
                                <button type='submit' className='auth_form_button'>Login</button>
                            </div>
                            <div className='col-12'>
                                <p className='forms_link'>Dont have an Account..? <Link to='/register'>Signup here</Link></p>
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

export default Login