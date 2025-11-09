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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Registration/>}></Route>
     <Route path="/otp/:email/:otpcode" element={<Otp/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/error/:error' element={<Error/>}></Route>
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