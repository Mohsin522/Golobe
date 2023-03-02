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
import FlightsList from './Components/Pages/Flight/FlightsList';
import FlightDetail from './Components/Pages/Flight/FlightDetail';
// Hotel Pages 
import Hotel from './Components/Pages/Hotel/Hotel';

//Account Pages
import Account from './Components/Pages/Account/Account';
import AccountHistory from './Components/Pages/Account/AccountHistory';
import AccountPayment from './Components/Pages/Account/AccountPayment';

// style files 
import './App.css';
import './Components/Assets/Style/user.scss';
import './Components/Assets/Style/App.scss';
import './Components/Assets/Style/Flight.scss';
import './Components/Assets/Style/Account.scss';




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
            <Route path='/' element={<Landing />} />
            <Route path='flight' element={<Flight />} />
            <Route path="flight/list" element={<FlightsList />} />
            <Route path="flight/list/:id" element={<FlightDetail />} />

            
            <Route path='/hotel' element={<Hotel />}></Route>
            <Route path='/account' element={<Account />}/>
            <Route path='account/history' element={<AccountHistory />}/>
            <Route path='account/payment' element={<AccountPayment />}/>
         </Route>
      </Routes>
    </>
  );
}

export default App;
