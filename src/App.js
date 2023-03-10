import './App.css';
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './Components/Assets/Style/user.scss';
import './Components/Assets/Style/App.scss';
import './Components/Assets/Style/Flight.scss';
import './Components/Assets/Style/Account.scss';
import './Components/Assets/Style/Custom.scss';


const User = lazy(() => import("./Components/layout/User"));
const Layout = lazy(() => import("./Components/layout/Layout"));
const Landing =lazy(() => import("./Components/Pages/Landing"));
const Login =lazy(() => import("./Components/Pages/User/Login"));
const Register =lazy(() => import("./Components/Pages/User/Register"));
const ForgetPassword =lazy(() => import("./Components/Pages/User/ForgetPassword"));
const Verify =lazy(() => import("./Components/Pages/User/Verify"));
const PaymentMethod =lazy(() => import("./Components/Pages/User/PaymentMethod"));
const CreatePassword =lazy(() => import("./Components/Pages/User/CreatePassword"));

const Flight =lazy(() => import("./Components/Pages/Flight/Flight"));
const FlightsList =lazy(() => import("./Components/Pages/Flight/FlightsList"));
const FlightDetail =lazy(() => import("./Components/Pages/Flight/FlightDetail"));
const FlightOverview =lazy(() => import("./Components/Pages/Flight/FlightOverview"));
const FlightBooking =lazy(() => import("./Components/Pages/Flight/FlightBooking"));

const Hotel =lazy(() => import("./Components/Pages/Hotel/Hotel"));

const Account =lazy(() => import("./Components/Pages/Account/Account"));
const AccountHistory =lazy(() => import("./Components/Pages/Account/AccountHistory"));
const AccountPayment =lazy(() => import("./Components/Pages/Account/AccountPayment"));

function App() {
  return (
    <>
      <Suspense fallback={<div className='loader'><h2 className='loader_text'>Golobe...!!!</h2></div>}>
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
              <Route path="flight/list/:id/booking" element={<FlightBooking />} />
              <Route path="flight/list/:id/overview" element={<FlightOverview />} />



              
              <Route path='/hotel' element={<Hotel />}></Route>
              <Route path='/account' element={<Account />}/>
              <Route path='account/history' element={<AccountHistory />}/>
              <Route path='account/payment' element={<AccountPayment />}/>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
