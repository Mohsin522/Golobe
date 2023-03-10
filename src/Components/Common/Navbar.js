import React,{useState,useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import BedIcon from '@mui/icons-material/Bed';
import Logo from '../Assets/Images/Logo.png';
import NavLogo from '../Assets/Images/Navlogo.png';
import MenuIcon from '@mui/icons-material/Menu';



const Navbar = () => {
  const [navbartogle, setToggler] = useState(false);

  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 70);
   });
 }, []);
  let location=useLocation();
  const flightClass = location.pathname.includes("/flight") ? "flight_active_link" : "";
  const hotelClass = location.pathname.includes("/hotel") ? "hotel_active_link" : "";

const handleToggler=()=>{
  setToggler(!navbartogle);
}


  return (
    
    <div className={`app_navbar ${location.pathname === "/" ? "home_Navbar" : ""} ${scroll ? "scroll_navbar" : ""}`}>
      <div className='mobile_nav'>
          <Link to="/"><img src={Logo} alt="navbar_logo"></img></Link>
          <button onClick={()=>handleToggler()}><MenuIcon /></button>
      </div>
      <div className={`navbar_inner ${navbartogle ? "toggle_navbar" : ""} `}>
        <button className='navbar_close_btn' onClick={()=>setToggler(false)}><MenuIcon /></button>
        <div className='navbar_links'>
           <Link to="flight" className={flightClass}> <AirplanemodeActiveIcon className='aeroplane' /> Find Flight</Link>
           <Link to="hotel" className={hotelClass}> <BedIcon /> Find Stays</Link>

         </div>
         <div className='logo'>
          
           <Link to="/"><img src={Logo} alt="navbar_logo"></img></Link>
           
         </div>
         <div className='landing_logo'>
           <Link to="/"><img src={scroll ? Logo : NavLogo} alt="navbar_logo"></img></Link>
         </div>
         
         <div className='navbar_auth_buttons'>
          <Link to="/login" className='login_link'>Login</Link>
          <Link to="/register" className='register_link'>Register</Link>

         </div>
      </div>
         
    </div>
  )
}

export default Navbar