import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
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
import AuthSlider from '../../Common/auth/AuthSlider';
import FormHeader from '../../Common/auth/FormHeader';


const CreatePassword = () => {
    let navigate=useNavigate();
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
                    <Link to='/'><img src={Logo} alt="logo"></img></Link>
                </div>
                <div className='auth_form'>
                    <Container>
                        <Row>
                            <div className='col-12'>
                                <FormHeader title="Set a Password" desc="Your previous password has been reseted. Please set a new password for your account." />
                            </div>
                            
                            
                            <div className='col-12'>
                                <div className='form_input_outer'>
                                 <FormControl sx={{ width: "100%" }} variant="outlined" className='field-text-border'>
                                    <InputLabel htmlFor="outlined-adornment-password">Create Password</InputLabel>
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
                                        label="Create Password"
                                        />
                                    </FormControl>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form_input_outer'>
                                 <FormControl sx={{ width: "100%" }} variant="outlined" className='field-text-border'>
                                    <InputLabel htmlFor="outlined-adornment-password">Re-enter Password</InputLabel>
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
                                        label="Re-enter Password"
                                        />
                                    </FormControl>
                                </div>
                            </div>
                            <div className='col-12'>
                                <button type='submit' className='auth_form_button' onClick={()=>navigate('/login')}>Set Password</button>
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

export default CreatePassword