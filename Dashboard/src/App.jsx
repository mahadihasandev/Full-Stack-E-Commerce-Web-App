import React from 'react'

import Registration from '../Layouts/Registration'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Otp from '../Layouts/Otp';
import Login from '../Layouts/Login';
import Error from '../Layouts/Error';
import ChangePassword from '../Layouts/Changepassword';
import ForgetPassword from '../Layouts/ForgetPassword';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Registration/>}></Route>
     <Route path="/otp/:email/:otpcode" element={<Otp/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/error/:error' element={<Error/>}></Route>
     <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
     <Route path='/changepassword' element={<ChangePassword/>}></Route>
    </>
  )
);





function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App