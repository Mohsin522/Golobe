import './App.css';
import { Routes, Route } from 'react-router-dom';
import User from './Components/layout/User';
import Layout from './Components/layout/Layout';
import Landing from './Components/Pages/Landing';
import Login from './Components/Pages/User/Login';
import Register from './Components/Pages/User/Register';
import ForgetPassword from './Components/Pages/User/ForgetPassword';
import Verify from './Components/Pages/User/Verify';
import PaymentMethod from './Components/Pages/User/PaymentMethod';
import CreatePassword from './Components/Pages/User/CreatePassword';

// Flight Pages 
import Flight from './Components/Pages/Flight/Flight';

// Hotel Pages 
import Hotel from './Components/Pages/Hotel/Hotel';

// style files 
import './App.css';
import './Components/Assets/Style/user.scss';
import './Components/Assets/Style/App.scss';


function App() {
  return (
    <>
      <Routes>

         <Route element={<User />}>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/forget' element={<ForgetPassword />}/>
            <Route path='/verify' element={<Verify />}/>
            <Route path='/payment' element={<PaymentMethod />}/>
            <Route path='/createpassword' element={<CreatePassword />}/>
         </Route>

         <Route element={<Layout />}>
            <Route path='/flight' element={<Flight />}></Route>
            <Route path='/hotel' element={<Hotel />}></Route>

            <Route path='/' element={<Landing />}></Route>


         </Route>
         
      </Routes>
    </>
  );
}

export default App;
