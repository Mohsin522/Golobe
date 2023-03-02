import React,{useState} from 'react';
import Logo from '../../Assets/Images/Logo.png';
import { Link} from 'react-router-dom';
import { Container,Row  } from 'react-bootstrap';

import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";



import AuthSlider from '../../Common/auth/AuthSlider';
import FormHeader from '../../Common/auth/FormHeader';

const Verify = () => {
    let navigate = useNavigate(); 

    const [showCode, setShowCode] = useState(false);

    const handleClickShowCode = () => setShowCode((show) => !show);

    const handleMouseDownCode = (event) => {
        event.preventDefault();
    };
  return (
    <div className='auth_wrapper'>
        <div className='auth_form_container'>
            <div className='auth_form_container_inner'>
                <div className='auth_logo_container'>
                    <Link to='/'><img src={Logo} alt="logo"></img></Link>
                </div>
                <div className='auth_form'>
                    <Container>
                        <Row>
                            <div className='col-12'>
                                <Link to='/login' className='back_link'> Back TO Login</Link>
                            </div>
                            <div className='col-12'>
                                <FormHeader title="Verify Code" desc="An authentication code has been sent to your email." />
                            </div>
                            <div className='col-12'>
                                <div className='form_input_outer'>
                                 <FormControl sx={{ width: "100%" }} variant="outlined" className='field-text-border'>
                                    <InputLabel htmlFor="outlined-adornment-password">Enter Code</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showCode ? 'text' : 'Password'}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowCode}
                                            onMouseDown={handleMouseDownCode}
                                            edge="end"
                                            >
                                            {showCode ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        label="Enter Code"
                                        />
                                    </FormControl>
                                </div>
                            </div>
                            <div className='col-12'>
                                <p className='forms_link'>Didnt recieve a code..? <Link to='/forget'>Resend</Link></p>
                            </div>
                            
                            <div className='col-12'>
                                <button type='submit' className='auth_form_button' onClick={()=>navigate('/createpassword')}>Verify</button>
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

export default Verify